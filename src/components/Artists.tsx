import { ImageWithFallback } from './figma/ImageWithFallback';
import maru1 from './丸1.png';
import maru2 from './丸2.png';

const artists = [
  {
    name: '佐藤 愛',
    role: '現代アーティスト',
    description: '「光が持つ力強い、新たな未来に希望と勇気を描き出す。多言語で表されたこと批判をさせ受けた。」',
    image: maru1,
  },
  {
    name: 'マリア・ロドリゲス',
    role: '彫刻家',
    description: '「影が全ての人々の心の光を生しく、明確化をおける幾人の今は人影を待つ。750人を最後に受賞するなどの国際的な評価。」',
    image: maru2,
  },
];

export function Artists() {
  return (
    <section id="artists" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4">参加アーティスト</h2>
        <p className="text-center text-gray-400 mb-12">
          光者を彩る、世界中から才能あるアーティストとその名をご紹介します。
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-pink-500/50 transition-colors">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                    <ImageWithFallback
                      src={artist.image}
                      alt={`${artist.name}のポートレート`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-0">{artist.name}</h3>
                    <p className="text-gray-400">{artist.role}</p>
                  </div>
                </div>
                <p className="text-gray-400">{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
