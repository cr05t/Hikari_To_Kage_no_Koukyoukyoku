import React from "react";
import exhibitorsLocal from "./exhibitorsLocal.json";
import exhibitorsLocalChallenge2 from "./exhibitorsLocalChallenge2.json";
import exhibitorsLocalChallenge3 from "./exhibitorsLocalChallenge3.json";

export default function App2() {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-black text-white font-['Noto_Sans_JP'] transition-colors duration-300">
      {/* Header */}
      <header className="relative min-h-screen overflow-hidden pt-6 md:pt-10 bg-black">
        <div className="absolute top-4 right-4 z-30">
          <img 
            alt="Ikesen logo"
            src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/hero/p-choetsu-section-hero__ikesen-image.png"
            className="w-24 md:w-32 lg:w-40 drop-shadow-lg"
          />
        </div>
        <div className="w-full px-4 flex flex-col md:flex-row items-start gap-6 md:gap-10">
          <div className="flex flex-col gap-4 w-40 md:w-56 lg:w-64 z-20">
            <img
              alt="Gutsugutsu vertical logo"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/hero/p-choetsu-section-hero__gutsugutsu-image.webp"
              className="w-full h-auto drop-shadow-xl"
            />
            <img
              alt="Choetsu title image"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/hero/p-choetsu-section-hero__title-image.webp"
              className="w-full h-auto drop-shadow-xl"
            />
            <div className="pt-2">
              <div className="flex flex-col items-start gap-2 mb-8 text-left">
                <p className="text-base md:text-lg font-bold text-white font-serif">2025</p>
                <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white whitespace-nowrap flex items-baseline gap-2">
                  <span>5.20</span>
                  <span className="text-xl md:text-2xl text-gray-300">-</span>
                  <span>6.9</span>
                </p>
          </div>
              <div className="grid grid-cols-3 gap-3 text-xs md:text-sm font-serif text-white pt-4">
            <div>
                  <span className="inline-flex items-center gap-1 font-bold text-white whitespace-nowrap">Challenge 1</span>
                  <div className="border-t border-gray-700 mt-2 pt-2">5.20 - 5.26</div>
            </div>
            <div>
                  <span className="inline-flex items-center gap-1 font-bold text-white whitespace-nowrap">Challenge 2</span>
                  <div className="border-t border-gray-700 mt-2 pt-2">5.27 - 6.2</div>
            </div>
            <div>
                  <span className="inline-flex items-center gap-1 font-bold text-white whitespace-nowrap">Challenge 3</span>
                  <div className="border-t border-gray-700 mt-2 pt-2">6.3 - 6.9</div>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <img
                  alt="Pavilion image"
                  src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/hero/p-choetsu-section-hero__pavilion-image.webp"
                  className="w-full max-w-xs h-auto object-contain"
                />
                <div className="text-white text-sm md:text-base leading-relaxed whitespace-nowrap">
                  <div>大阪・関西万博</div>
                  <div>大阪ヘルスケアパビリオン</div>
                  <div>リボーンチャレンジ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 min-h-[70vh] rounded-2xl overflow-hidden">
            <img 
              alt="Expo 2025 hero background" 
              className="absolute inset-0 w-full h-full object-cover opacity-100 transform scale-[0.9] origin-top-left" 
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/hero/p-choetsu-section-hero__main-image--01--pc.webp"
            />
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4 py-10" />
          </div>
        </div>
      </header>

      {/* Concept Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-5xl mx-auto">
            <div className="md:w-2/3 space-y-8 order-2 md:order-1">
              <img
                alt="Concept title"
                src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/concept/p-choetsu-section-concept__title-image.webp"
                className="absolute top-0 left-100 z-0 w-40 md:w-56 lg:w-64 opacity-80 select-none pointer-events-none"
              />
              <div className="relative z-10">
                  <div className="space-y-6 text-white leading-relaxed text-justify text-lg md:text-xl">
                  <p>未来がどこへ向かうのか。<br />不透明な世界の中で、進化のスピードだけが加速する今。<br /> もう、前に進むだけが進歩という時代じゃない。</p>
                  <p>2025年、万博会場に集うのは、<br />産業の枠組みや業界の常識を超え、<br />これまでのテクノロジーの適用範囲をはみ出して、<br />新しいモノやコトを生み出す「超越人」。</p>
                  <p>今はまだ、メインストリートから外れた横道こそが、<br />未来にとってつもない影響を与え、<br />いつか世界の奔流になるかもしれない。</p>
                  <p>大阪の横丁が、道行く人を思わず吸い寄せるように、<br />面白い未来がひしめき合っている。<br />それが、大阪超越文化横丁です。</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end order-1 md:order-2">
              <img
                alt="Concept copy"
                src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/concept/p-choetsu-section-concept__copy-image--pc.webp"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain drop-shadow-lg"
              />
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img 
              alt="Conceptual render of the alley" 
              className="w-full h-auto" 
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/concept/p-choetsu-section-concept__view.webp"
            />
          </div>
        </div>
      </section>

      {/* What's Section */}
      <section className="py-20 bg-black transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-12">
            <img
              alt="What's title"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/whats/p-choetsu-section-whats__title-image.webp"
              className="w-48 md:w-64 lg:w-72 h-auto mx-auto bg-white p-2 rounded-md"
            />
          </div>
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight inline-block origin-left scale-x-110">
              常識や技術の壁を超え、<br />
              未来を切り拓く32の超越人
            </h3>
            <p className="text-sm md:text-base text-white">
              まだ社会の本流ではない所で人知れず挑んできた関西の企業人たち。<br />
              ふだんは一見目立たない存在かもしれないが、会社の未来を背負い、産業や業界の行く末を本気で考え、<br />
              困難な課題や既成概念を乗り越えようとするうちに、圧倒的な「超越力」を身につけてしまった。<br /><br />
              不透明な視界も突き破るほどの眼光で未来を見つめ、<br />
              大阪から前例のないチャレンジを成し遂げようとしている。
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-[#DDC8F2] rounded-3xl p-8 shadow-lg border border-gray-800 relative overflow-hidden group">
            <div className="flex justify-center mb-8">
              <img
                alt="Area 出展パビリオン"
                src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/area/p-choetsu-section-area__title-image.webp"
                className="w-48 md:w-64 lg:w-72 h-auto mx-auto"
              />
            </div>
            <h4 className="text-xl font-bold mb-8 text-black">大阪ヘルスケアパビリオン リボーンチャレンジ</h4>
            <div className="relative rounded-xl overflow-hidden bg-transparent group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-shadow duration-500">
              <img 
                alt="Osaka Healthcare Pavilion" 
                className="w-full h-auto object-contain" 
                src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/area/p-choetsu-section-area__view-image.webp"
              />
            </div>
            <p className="mt-2 text-[11px] text-left text-black">提供：（公社）大阪パビリオン</p>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#DDC8F2] rounded-3xl p-8 shadow-lg border border-gray-800 relative overflow-hidden group">
            <div className="mb-8 text-center">
              <div className="inline-block rounded-md p-0 bg-transparent">
                <img
                  alt="Report title"
                  src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/report/p-choetsu-section-report__title-image.webp"
                  className="w-48 md:w-56 lg:w-64 h-auto mx-auto"
                />
              </div>
              <p className="text-xl font-bold mb-8 text-black"><br />プロジェクトレポート</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="hidden relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg group/video cursor-pointer">
                <img 
                  alt="Report Video 1" 
                  className="w-full h-full object-cover opacity-60 group-hover/video:opacity-80 transition" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARzaUVKaE_J0K_b4-qcRSrTBuJdUj4ZAmrdffyzqMZ2aPoy3x2Kqgaq38Jz6BMTXUNSMTgcVe3uip77l0uSLJ6LV4Xj0qeE3gJNVWOBce9VU_xDrw_yoSNRZHKlD1tC6d4K00nIbLh96x3INK3cCTUwoFM0ApDA_hhusnVupdvYI2b5J7vB4wVJjyY1Tzcs9tWNh0-RMSN223RIsmtfEyXxNE7XhExOspmhATOS3a_iX9SpMTaeE0o5BQ7TBVRF-XuWsVRQ1W4JBYW"
                />
                <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover/video:scale-110 transition">
                    <span className="material-icons text-white text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="hidden relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg group/video cursor-pointer">
                <img 
                  alt="Report Video 2" 
                  className="w-full h-full object-cover opacity-60 group-hover/video:opacity-80 transition" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrpCvgNpn0DwWvmxNk7eOHpJZTv2b7o1O-dG5sabH0qKKa0bt1KiSETNYPNRaE4bPF3EyJQbKYOIL3fTiJnLB8hKr_695O944kZp1D8mEpIpjnBuKbf09CIbReQQlH18V6XR7tMvj6fFUj0d3GjN5Jl0lHYF8iqpYjmPNNcYy-6cRGAUbVCfGv7RgRLAxfUqFAIyh9irmJ_p2NAhZHiR3QuzPMJSxwX6cwCKD9k3WLM2xqXoe4gv5phS4gc5l-sCIExBhuEIBLiTQR"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black/40 backdrop-blur rounded-full flex items-center justify-center border border-white/50 group-hover/video:scale-110 transition">
                    <span className="material-icons text-white text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AV1G0EMaunc"
                  title="Report Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5SMld0OusMg"
                  title="Report Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-24 bg-black text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-24">
            <img
              alt="Exhibitors title"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors-list/p-choetsu-section-exhibitors-list__title-image.webp"
              className="w-1/3 md:w-1/4 lg:w-1/4 h-auto object-contain"
            />
          </div>

          {/* Challenge 1 */}
            <div className="mb-32">
              <div className="flex flex-col items-center gap-4 mb-12 pb-8 text-center">
                <div className="flex items-center gap-0 w-full justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      alt="Challenge 1 date"
                      src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__date-image--reborn01.webp"
                      className="w-1/3 max-w-[1000px] h-auto object-contain"
                    />
                    <img
                      alt="Challenge 1 title"
                      src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__title-image--reborn01--pc.webp"
                      className="w-1/2 max-w-[700px] h-auto object-contain ml-6 md:ml-20"
                    />
                  </div>
                  <img
                    alt="Challenge 1 main"
                    src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__main-image--reborn01.webp"
                    className="w-1/2 max-w-[320px] h-auto object-contain"
                  />
                </div>
                <div className="mt-6 max-w-5xl mx-auto text-center">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    明るく楽しい未来を創造する企業家たちによる大阪の未来予想図を表現し、大阪から「ワクワク」と「おも<br />
                    しろい」を世界へ発信します。多様化する生活者のニーズに寄り添った高品質な製品やサービスの開発を行<br />
                    っている企業の技術を用いて、未来の大阪での暮らしを、「交流」や「対話」を軸に表現し、来場者が思わ<br />
                    ずワクワクし笑顔になるコンテンツを展開します。
                  </p>
                </div>
              </div>
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,10rem)] md:grid-cols-[repeat(4,9rem)] lg:grid-cols-[repeat(4,11rem)] w-fit mx-auto gap-x-6 gap-y-10 max-w-6xl">
              {exhibitorsLocal.map((item, idx) => (
                <div key={idx} className="group w-[44%] sm:w-40 md:w-36 lg:w-44 text-left">
                  <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden mb-3 relative">
                    <img 
                      alt="Exhibitor" 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                      src={item.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                  <h4 className="text-sm font-bold leading-tight mb-1 text-white">{item.title}</h4>
                  <p className="text-xs text-white">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="mb-32">
            <div className="flex flex-col items-center gap-4 mb-12 pb-8 text-center">
              <div className="flex items-center gap-0 w-full justify-center">
                <div className="flex flex-col items-center gap-1">
                  <img
                    alt="Challenge 2 date"
                    src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__date-image--reborn02.webp"
                    className="w-1/3 max-w-[1000px] h-auto object-contain"
                  />
                  <img
                    alt="Challenge 2 title"
                    src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__title-image--reborn02--pc.webp"
                    className="w-1/2 max-w-[700px] h-auto object-contain ml-6 md:ml-20"
                  />
                </div>
                <img
                  alt="Challenge 2 main"
                  src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__main-image--reborn02.webp"
                  className="w-1/2 max-w-[320px] h-auto object-contain"
                />
              </div>
              <div className="mt-4 max-w-5xl mx-auto text-center">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  Society5.0における未来の「モノづくり現場」を体感してもらえる空間を創出します。デジタル技術を活<br />
                  用して、変化をし続ける産業界のなかでも、製造業にフォーカスを当て、デジタルトランスフォーメーショ<br />
                  ン（DX）を進める企業と、その技術を提供するスタートアップの取組みを「未来の製造現場」として表現<br />
                  し、来場者が未来の製造業のあり方を体感できるコンテンツの展開をめざします。
                </p>
              </div>
            </div>
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,10rem)] md:grid-cols-[repeat(4,9rem)] lg:grid-cols-[repeat(4,11rem)] w-fit mx-auto gap-x-6 gap-y-10 max-w-6xl">
              {exhibitorsLocalChallenge2.map((item, idx) => (
                <div key={item.id ?? idx} className="group w-full text-left">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden mb-3">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src={item.img}
                      alt={item.title || "Exhibitor"}
                    />
                  </div>
                  <h4 className="text-sm font-bold leading-tight mb-1 text-white">{item.title}</h4>
                  <p className="text-xs text-white">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge 3 */}
          <div>
            <div className="flex flex-col items-center gap-4 mb-12 pb-8 text-center">
              <div className="flex items-center gap-0 w-full justify-center">
                <div className="flex flex-col items-center gap-1">
                  <img
                    alt="Challenge 3 date"
                    src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__date-image--reborn03.webp"
                    className="w-1/3 max-w-[1000px] h-auto object-contain"
                  />
                  <img
                    alt="Challenge 3 title"
                    src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__title-image--reborn03--pc.webp"
                    className="w-1/2 max-w-[700px] h-auto object-contain ml-6 md:ml-20"
                  />
                </div>
                <img
                  alt="Challenge 3 main"
                  src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/choetsu/exhibitors/p-choetsu-section-exhibitors__main-image--reborn03.webp"
                  className="w-1/2 max-w-[320px] h-auto object-contain"
                />
              </div>
              <div className="mt-4 max-w-5xl mx-auto text-center">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  「ウェルビーイング（Well-being）」の実現に向けて活動する企業が思い描く少し先の未来を楽しく体験<br />
                  してもらえる空間を創出します。ジェンダー問題や従業員の健康維持など、生き方・働き方に関する社会課<br />
                  題解決のために活躍する企業の技術やサービスを用い、「誰もが生きやすい近未来の社会や職場」を表現<br />
                  し、未来のライフスタイルを体感してもらうことで、来場者のより充実した人生に繋がるきっかけとなるこ<br />
                  とをめざします。
                </p>
              </div>
                    </div>
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,10rem)] md:grid-cols-[repeat(4,9rem)] lg:grid-cols-[repeat(4,11rem)] w-fit mx-auto gap-x-6 gap-y-10 max-w-6xl">
              {exhibitorsLocalChallenge3.map((item, idx) => (
                <div key={item.id ?? idx} className="group w-full text-left">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden mb-3">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src={item.img}
                      alt={item.title || "Exhibitor"}
                    />
                    </div>
                  <h4 className="text-sm font-bold leading-tight mb-1 text-white">{item.title}</h4>
                  <p className="text-xs text-white">{item.company}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-black transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-blue-900 rounded-xl p-8 md:p-12 text-white shadow-2xl border border-blue-700 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 blur-3xl rounded-full opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-lime-300 tracking-[0.14em] scale-x-110 inline-block">展示概要</h2>
              <p className="text-sm md:text-base mb-8 tracking-widest uppercase">池田泉州銀行 GUTSU GUTSU CHALLENGE<br />大阪超越文化横丁</p>
              <dl className="space-y-6 text-sm">
                <div className="border-b border-blue-500/50 pb-4">
                  <dt className="inline-block bg-white text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-2">展示期間</dt>
                  <dd className="pl-0 md:pl-2 space-y-1">
                    <p>CHALLENGE 1 : 2025年5月20日 - 5月26日</p>
                    <p>CHALLENGE 2 : 2025年5月27日 - 6月2日</p>
                    <p>CHALLENGE 3 : 2025年6月3日 - 6月9日</p>
                  </dd>
                </div>
                <div className="border-b border-blue-500/50 pb-4">
                  <dt className="inline-block bg-white text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-2">場所</dt>
                  <dd className="pl-0 md:pl-2">
                    大阪・関西万博 大阪ヘルスケアパビリオン「リボーンチャレンジ」
                  </dd>
                </div>
                <div className="border-b border-blue-500/50 pb-4">
                  <dt className="inline-block bg-white text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-2">内容</dt>
                  <dd className="pl-0 md:pl-2 space-y-3">
                    <div>
                      <strong>CHALLENGE 1 &lt;ライフスタイル・コミュニケーション&gt;</strong><br />
                      大阪発！ワクワクする未来の暮らし<br />
                      ～世界一おもしろい都市を目指して～
                    </div>
                    <div>
                      <strong>CHALLENGE 2 &lt;デジタル・環境&gt;</strong><br />
                      共に創ろう、ヒトとモノとデジタルの未来<br />
                      ～デジタル技術で変わる、大阪のモノづくり～
                    </div>
                    <div>
                      <strong>CHALLENGE 3 &lt;ヘルスケア・SDGs・ライフスタイル&gt;</strong><br />
                      みんなで描こう、誰もが暮らしやすい社会<br />
                      ～未来の生き方・働き方～
                    </div>
                  </dd>
                </div>
                <div className="pt-2">
                  <dt className="inline-block bg-white text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-2">主催</dt>
                  <dd className="pl-0 md:pl-2 text-blue-100 mb-4">
                    株式会社池田泉州銀行
                  </dd>
                  <hr className="border-blue-500/50 mb-4" />
                  <dt className="inline-block bg-white text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-2">協力</dt>
                  <dd className="pl-0 md:pl-2 text-blue-100">
                    2025年日本国際博覧会大阪パビリオン推進委員会<br />
                    中小・スタートアップ出展企画推進委員会
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast and Contact Section */}
      <section className="py-20 bg-black dark:bg-[#050505]">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="bg-gradient-to-r from-purple-100 to-white dark:from-white/10 dark:to-white/5 p-8 rounded-xl text-center border border-purple-200 dark:border-white/10">
            <img
              alt="Podcast"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/common-choetsu/podcast/c-section-podcast-choetsu__title-image.webp"
              className="mx-auto mb-4 w-40 md:w-48 h-auto object-contain"
            />
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">MBSラジオ「日本一明るい経済電波新聞」にて、出展者が毎週ゲストとして出演。<br />各種Podcastでも配信中ですのでぜひお聴きください！</p>
            <a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-none transition w-full md:w-auto" href="#">
              MBSラジオ 日本一明るい経済電波新聞
              <span className="material-icons ml-2 text-sm">arrow_forward_ios</span>
            </a>
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-white dark:from-white/10 dark:to-white/5 p-8 rounded-xl text-center border border-pink-200 dark:border-white/10">
            <img
              alt="Contact"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/common-choetsu/contact/c-section-contact-choetsu__title-image.webp"
              className="mx-auto mb-4 w-40 md:w-48 h-auto object-contain"
            />
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">ご不明点等ございましたら下記までご連絡お願いします。</p>
            <hr className="border-black-200 dark:border-white/20 mb-4" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">池田泉州銀行 地域共創イノベーション部</p>
            <a className="text-lg font-bold text-gray-800 dark:text-white hover:text-[#d946ef] transition" href="mailto:expo2025@sihd-bk.jp">expo2025@sihd-bk.jp</a>
          </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-white mb-0">本事業は「池田泉州銀行 GUTSU GUTSU CHALLENGE」から生まれました。</p>
          <div className="flex items-center justify-center">
            <img
              alt="GUTSU GUTSU logo"
              src="https://www.sihd-bk.jp/corporation/expo2025/assets/img/common-choetsu/logo-footer.svg"
              className="w-60 h-60 object-contain"
            />
      </div>
        </div>
      </footer>
    </div>
  );
}

