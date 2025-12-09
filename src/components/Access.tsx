import { Train, Car, Instagram } from 'lucide-react';

export function Access() {
  return (
    <section id="access" className="py-20 px-6 bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12">アクセス</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Train className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="mb-2">〒123-4567 東京都中野区アート通り2-1-5</h3>
                <p className="text-gray-400">JR中野駅より徒歩7分／東京メトロ「美術館前」駅直結(出口2) より徒歩5分</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="mb-2">車でお越しの方へ駐車場ありついて：1:30からエントリーしていただく場合いてご予約ください</h3>
                <p className="text-gray-400">※専用駐車場は併設しておりません</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="mb-2">最新情報や展示後記を随時公開についていいます。公式アカウントをフォローして最新情報を入手してください。</h3>
              </div>
            </div>
            
            <a
              href="https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E9%87%8E%E5%8C%BA"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto inline-flex justify-center"
            >
              Googleマップで見る
            </a>
          </div>
          
          <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 w-full min-h-[840px] relative">
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              style={{ minHeight: '840px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.226385595912!2d139.6571203!3d35.7073208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2f90e2fb787%3A0x87c7e6e9dc32d8d9!2z5p2x5Lqs5biC5Lit5Y2D5Yy65Lit5aSu!5e0!3m2!1sja!2sjp!4v1733700000!5m2!1sja!2sjp"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - 東京都中野区"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
