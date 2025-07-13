from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
import os
from werkzeug.utils import secure_filename
import json

app = Flask(__name__)
CORS(app)

# Configuration
DATABASE = 'community.db'
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH

# Ensure upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def init_db():
    """Initialize the database with enhanced schema"""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS site_content (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            vision_title TEXT NOT NULL,
            vision_text TEXT NOT NULL,
            tuesday_title TEXT NOT NULL,
            tuesday_desc TEXT NOT NULL,
            tuesday_whatsapp_link TEXT NOT NULL,
            friday_title TEXT NOT NULL,
            friday_desc TEXT NOT NULL,
            friday_whatsapp_link TEXT NOT NULL,
            resource_drive_link TEXT NOT NULL,
            hero_image TEXT,
            featured_members TEXT, 
            stats TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Insert default content if table is empty
    cursor.execute('SELECT COUNT(*) FROM site_content')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO site_content (
                vision_title, vision_text,
                tuesday_title, tuesday_desc, tuesday_whatsapp_link,
                friday_title, friday_desc, friday_whatsapp_link,
                resource_drive_link, hero_image, featured_members, stats
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            "Shaping Tomorrow's Digital Frontier",
            "We are a visionary community of innovators, creators, and forward-thinking minds building the future of technology.",
            "Tuesday Chats",
            "Deep dive technical discussions every Tuesday.",
            "https://chat.whatsapp.com/tuesday-chats",
            "Friday Banters",
            "Casual conversations and networking every Friday.",
            "https://chat.whatsapp.com/friday-banters",
            "https://drive.google.com/drive/folders/community-resources",
            "default-hero.jpg",
            '[{"name":"Alex Turing","role":"AI Researcher","avatar":"avatar1.png"},{"name":"Sam Quantum","role":"Blockchain Expert","avatar":"avatar2.png"}]',
            '{"members": 1250, "companies": 42, "projects": 87}'
        ))

    conn.commit()
    conn.close()


def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def clean_field(data, key, fallback):
    value = data.get(key)
    return value.strip() if value and value.strip() else fallback


@app.route('/api/content', methods=['GET'])
def get_content():
    try:
        conn = get_db_connection()
        content = conn.execute('SELECT * FROM site_content ORDER BY updated_at DESC LIMIT 1').fetchone()
        conn.close()

        if content:
            return jsonify({
                'success': True,
                'data': {
                    'vision': {
                        'title': content['vision_title'],
                        'text': content['vision_text']
                    },
                    'tuesday': {
                        'title': content['tuesday_title'],
                        'description': content['tuesday_desc'],
                        'whatsapp_link': content['tuesday_whatsapp_link']
                    },
                    'friday': {
                        'title': content['friday_title'],
                        'description': content['friday_desc'],
                        'whatsapp_link': content['friday_whatsapp_link']
                    },
                    'resources': {
                        'drive_link': content['resource_drive_link']
                    },
                    'media': {
                        'hero_image': f"/uploads/{content['hero_image']}" if content['hero_image'] else None
                    },
                    'community': {
                        'featured_members': content['featured_members'] and json.loads(content['featured_members']),
                        'stats': content['stats'] and json.loads(content['stats'])
                    },
                    'meta': {
                        'updated_at': content['updated_at']
                    }
                }
            })
        return jsonify({'success': False, 'message': 'No content found'}), 404

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/content', methods=['POST'])
def update_content():
    """Update site content with file upload support"""
    try:
        data = request.form.to_dict()
        files = request.files

        # Get previous content to fall back on if necessary
        conn = get_db_connection()
        previous = conn.execute('SELECT * FROM site_content ORDER BY updated_at DESC LIMIT 1').fetchone()

        # Handle hero image upload
        hero_image = None
        if 'hero_image' in files:
            file = files['hero_image']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                hero_image = filename

        # Prepare content data with fallback
        content_data = {
            'vision_title': data.get('vision_title') or previous['vision_title'],
            'vision_text': data.get('vision_text') or previous['vision_text'],
            'tuesday_title': data.get('tuesday_title') or previous['tuesday_title'],
            'tuesday_desc': data.get('tuesday_desc') or previous['tuesday_desc'],
            'tuesday_whatsapp_link': data.get('tuesday_whatsapp_link') or previous['tuesday_whatsapp_link'],
            'friday_title': data.get('friday_title') or previous['friday_title'],
            'friday_desc': data.get('friday_desc') or previous['friday_desc'],
            'friday_whatsapp_link': data.get('friday_whatsapp_link') or previous['friday_whatsapp_link'],
            'resource_drive_link': data.get('resource_drive_link') or previous['resource_drive_link'],
            'hero_image': hero_image or data.get('current_hero_image') or previous['hero_image'],
            'featured_members': data.get('featured_members') or previous['featured_members'],
            'stats': data.get('stats') or previous['stats']
        }

        # Insert new content row
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO site_content (
                vision_title, vision_text,
                tuesday_title, tuesday_desc, tuesday_whatsapp_link,
                friday_title, friday_desc, friday_whatsapp_link,
                resource_drive_link, hero_image, featured_members, stats
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', tuple(content_data.values()))

        conn.commit()
        conn.close()

        return jsonify({'success': True, 'message': 'Content updated successfully'})

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/admin', methods=['GET'])
def admin_interface():
    return render_template('admin.html')


if __name__ == '__main__':
    init_db()
    print("🚀 Futuristic Community Backend")
    print("📊 Database initialized")
    print("🌐 API Endpoints:")
    print("   GET  /api/content - Fetch content")
    print("   POST /api/content - Update content")
    print("   GET  /admin       - Admin interface")
    app.run(debug=True)
