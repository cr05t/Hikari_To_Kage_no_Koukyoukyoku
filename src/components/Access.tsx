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
                <h3 className="mb-2">車でお越しの方へ：13:30からエントリーしていただく場合がございます</h3>
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
            
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto">
              Googleマップで見る
            </button>
          </div>
          
          <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 flex items-center justify-center min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12963.547445714276!2d139.6564!3d35.7056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2f1e6d4e8e9%3A0x5f4e9a3e8f3e4f3e!2z5Lit6YeO5Yy677yM5p2x5Lqs6YO9!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}