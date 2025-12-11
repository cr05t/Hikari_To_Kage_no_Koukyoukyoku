import { ImageWithFallback } from './figma/ImageWithFallback';

const artists = [
  {
    name: '佐藤 愛',
    role: '現代アーティスト',
    description: '「光が持つ力強い、新たな未来に希望と勇気を描き出す。多言語で表されたこと批判をさせ受けた。」',
    imageUrl: 'https://images.unsplash.com/photo-1681405203174-240c946cf06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjbGUlMjBzcGhlcmV8ZW58MXx8fHwxNzY1NDI1MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'マリア・ロドリゲス',
    role: '彫刻家',
    description: '「影が全ての人々の心の光を生しく、明確化をおける幾人の今は人影を待つ。750人を最後に受賞するなどの国際的な評価。」',
    imageUrl: 'https://images.unsplash.com/photo-1667118412076-8ce9ec3b5309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNpcmNsZSUyMGdlb21ldHJpY3xlbnwxfHx8fDE3NjU0MjU0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
                  {artist.imageUrl ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={artist.imageUrl} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '25% center' }}
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      {artist.name.charAt(0)}
                    </div>
                  )}
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