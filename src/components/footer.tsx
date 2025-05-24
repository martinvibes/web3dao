import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 MGS DAO. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <MessageCircle className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            <Github className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
