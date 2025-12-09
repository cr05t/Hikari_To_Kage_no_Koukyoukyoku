import { Lightbulb } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <span>光と影の交響曲</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#theme" className="hover:text-pink-400 transition-colors">テーマ</a>
            <a href="#artists" className="hover:text-pink-400 transition-colors">アーティスト</a>
            <a href="#access" className="hover:text-pink-400 transition-colors">アクセス</a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              チケット購入
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
