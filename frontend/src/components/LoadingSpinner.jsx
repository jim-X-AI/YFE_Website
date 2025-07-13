import { Sparkles } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="relative">
        {/* Dual spinning rings */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-200 border-b-purple-500 rounded-full animate-spin animate-reverse"></div>

        {/* Sparkle center */}
        <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-blue-500 animate-pulse" />

        {/* Futuristic loading text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-purple-600 mb-2">Loading YFE Interface</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}