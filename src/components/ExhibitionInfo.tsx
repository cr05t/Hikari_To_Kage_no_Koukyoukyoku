import { Calendar, Clock, Ticket } from 'lucide-react';

export function ExhibitionInfo() {
  return (
    <section id="theme" className="py-20 px-6 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">展示会について</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          本展覧は「光と影」をテーマに、現代的な視点とアートを紹介する展示を通じて新たな価値創造を目指します。
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="mb-2">開催期間</h3>
            <p className="text-gray-400 mb-1">2025年10月25日～2026年1月25日</p>
            <p className="text-gray-400">月曜日・火曜休館日・年末年始</p>
          </div>
          
          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="mb-2">開館時間</h3>
            <p className="text-gray-400 mb-1">10:00 - 18:00 (最終入場17:30)</p>
            <p className="text-gray-400">金・土曜日は20:00まで開館</p>
          </div>
          
          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="mb-2">観覧料</h3>
            <p className="text-gray-400 mb-1">一般 1,600円 / 大学生 1,200円</p>
            <p className="text-gray-400">高校生以下・障がい者手帳提示</p>
          </div>
        </div>
      </div>
    </section>
  );
}
