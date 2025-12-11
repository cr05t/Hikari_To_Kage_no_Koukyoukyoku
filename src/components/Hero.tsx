export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581211613098-d3efeca0256b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhc2VyJTIwbGlnaHRzfGVufDF8fHx8MTc2NTQyNTcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white mb-6 text-6xl md:text-7xl font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>光と影の交響曲</h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
          現代アートが織りなす、色彩の饗宴。<br />
          光と影が交差するお部屋を体感しに行きませんか。
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