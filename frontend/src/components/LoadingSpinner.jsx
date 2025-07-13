import { Sparkles } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      <div className="relative flex flex-col items-center">
        {/* Dual spinning rings */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-200 dark:border-gray-600 border-t-blue-500 dark:border-t-purple-400 rounded-full animate-spin"></div>

        {/* Loading text */}
        <div className="mt-8 text-center px-4 sm:px-0">
          <p className="text-base sm:text-lg font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Loading YFE Interface
          </p>
        </div>
      </div>
    </div>
  );
}
