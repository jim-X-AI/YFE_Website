#!/usr/bin/env python3
"""
Drive Metadata Exporter — recursively fetches metadata for all files in a Google Drive folder.

Usage:
    python drive_metadata_exporter.py <FOLDER_ID>

Output:
    Creates drive_metadata_<FOLDER_ID>.json
"""

import os
import sys
import json
from tqdm import tqdm
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# Scopes: metadata read-only
SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']


def authenticate():
    """Authenticate via OAuth2 and return valid credentials."""
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    if not creds or not creds.valid:
        flow = InstalledAppFlow.from_client_secrets_file('client_secret.json', SCOPES)
        creds = flow.run_local_server(port=0)  # works perfectly for desktop app
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    return creds


def get_files(service, folder_id):
    """Recursively list all files and subfolders."""
    results = []
    queue = [folder_id]
    pbar = tqdm(desc="Fetching metadata", unit="files")

    while queue:
        current = queue.pop(0)
        q = f"'{current}' in parents and trashed = false"
        page_token = None

        while True:
            response = service.files().list(
                q=q,
                spaces='drive',
                fields="nextPageToken, files(id, name, mimeType, size, owners, createdTime, modifiedTime, parents, webViewLink, webContentLink, md5Checksum, iconLink)",
                pageSize=1000,
                pageToken=page_token
            ).execute()

            files = response.get('files', [])
            for f in files:
                results.append(f)
                pbar.update(1)
                # If the file is a folder, queue it for further exploration
                if f['mimeType'] == 'application/vnd.google-apps.folder':
                    queue.append(f['id'])

            page_token = response.get('nextPageToken', None)
            if not page_token:
                break

    pbar.close()
    return results


def main():
    if len(sys.argv) < 2:
        print("Usage: python drive_metadata_exporter.py <FOLDER_ID>")
        sys.exit(1)

    folder_id = sys.argv[1]
    creds = authenticate()
    service = build('drive', 'v3', credentials=creds, cache_discovery=False)

    print(f"🔍 Starting metadata extraction for folder: {folder_id}")
    files = get_files(service, folder_id)
    print(f"\n✅ Total files and folders found: {len(files)}")

    output_data = {
        "folder_id": folder_id,
        "total_items": len(files),
        "files": files
    }

    out_file = f"drive_metadata_{folder_id}.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"\n📁 Metadata saved to: {out_file}")


if __name__ == "__main__":
    main()


""""
6173883471 Fidelity
"""