export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 opacity-90" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-black mb-6 text-6xl md:text-7xl font-bold">光と影の交響曲</h1>
        <p className="text-black/80 mb-8 max-w-2xl mx-auto text-lg md:text-xl">
          現代アートが織りなす、色彩の饗宴。光と影が交差するお部屋を体感しに行きませんか。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            オンラインチケット
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            詳細を見る
          </button>
        </div>
      </div>
    </section>
  );
}