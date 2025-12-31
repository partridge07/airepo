import React from 'react';

const WhyMe: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-10 pb-12 px-4 md:px-10">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 w-fit backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span className="text-xs font-bold text-secondary/70 uppercase tracking-wider">Premium Eğitim Deneyimi</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.1] tracking-tight font-display">
              Farkımız <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0A6C85]">Nerede?</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary/70 leading-relaxed max-w-lg">
              Sadece kaymayı değil, buzla dans etmeyi öğretiyoruz. Modern teknikler, biyomekanik analiz ve kişisel ilgi ile potansiyelinizi keşfedin.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full flex items-center justify-center">
             <div className="absolute w-[80%] h-[80%] border border-white/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAnBmc28yN7R_6VQ-tPso4mMj5EO6il7-1Jm3BxQuV72yU5woTazG3Q_TPTeoQLn328FMB6bh6IVo89_R1sCOFGGDQ4gZlwXHGbh9yqK91YsZC3_N_pv3-UyP54fuNGxo6xEXBIfmDawkuaeGxll33SCHt3NCjUV4VZeCWhqhRG69oHNnUr8D2fwnGwbaXXnaBY_4RqhHyAq_5P4uty2mvnlzNqJWDchSPFdH0Xxz_N3FEhecy5TODGs6gwZ-l89yk7fMOn-YSwDo" className="w-full h-full object-cover" alt="Skating Pose" />
             </div>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-20 px-4 md:px-10 relative">
        <div className="max-w-7xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb6omAIyqMm50TJTzSV_hzhAbX_fsaIgqIZjPInnkFiTt3t5GS_aFimthR1BmrBaXc6P8OGRA0SGaCTCwgpcU8g6oWBuRTlS-42HcuDg_FPnekFFki5T-pNw6cHPoHUM4p_BvrHSWDxdkBlLYg4WOwS-UstWgJw5TXNCBmIgrbIxxenmz4XiS2-VQQsB5WLMCvcagg8DM2TOhLr6WBrrgfce8PqphYsjhtywFrGnlh7m-X3KMWPTNdEMq07NmQV058XeD5F-T_ePU" className="w-full h-full object-cover" alt="Personal Plan" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">psychology_alt</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary font-display">Kişiselleştirilmiş Programlar</h2>
              <p className="text-secondary/70 text-lg leading-relaxed">
                Her öğrencinin fiziksel yapısı, öğrenme hızı ve hedefleri parmak izi kadar benzersizdir. Standart bir müfredat yerine, size özel bir yol haritası çiziyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="glass-card p-4 rounded-xl">
                  <h3 className="font-bold text-secondary mb-1">Hedef Analizi</h3>
                  <p className="text-sm text-secondary/60">İlk ders öncesi detaylı beklenti ve yetenek değerlendirmesi.</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <h3 className="font-bold text-secondary mb-1">Dinamik Revize</h3>
                  <p className="text-sm text-secondary/60">Gelişim hızınıza göre her hafta güncellenen antrenman planı.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 md:px-10 bg-white/50 relative">
        <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">Neden Farklıyız?</span>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mt-2 font-display">Standart vs. Premium Yaklaşım</h2>
            </div>
            <div className="glass-panel rounded-3xl overflow-hidden shadow-xl border-0">
                <div className="grid grid-cols-3 bg-secondary/5 border-b border-gray-200 p-6 text-sm md:text-base">
                    <div className="col-span-1 font-bold text-secondary/50">Özellik</div>
                    <div className="col-span-1 font-bold text-center text-secondary/50">Standart Kurslar</div>
                    <div className="col-span-1 font-bold text-center text-primary text-lg">Benim Yaklaşımım</div>
                </div>
                {[
                  ['Eğitim Metodu', 'Toplu, jenerik drills', 'Biyomekanik & Kişisel'],
                  ['Geri Bildirim', 'Sözlü, ders sonu', 'Video destekli & Anlık'],
                  ['Program Esnekliği', 'Katı saatler', 'Esnek & Telafi İmkanı'],
                  ['İletişim', 'Sadece ders saati', '7/24 WhatsApp & Mentorluk']
                ].map(([feature, standard, premium], i) => (
                    <div key={i} className="grid grid-cols-3 p-6 border-b border-gray-100 items-center hover:bg-white/50 transition-colors">
                        <div className="col-span-1 font-bold text-secondary">{feature}</div>
                        <div className="col-span-1 text-center text-secondary/70 text-sm">{standard}</div>
                        <div className="col-span-1 text-center font-bold text-secondary text-sm md:text-base bg-primary/5 rounded-lg py-2">{premium}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-9xl text-primary">calendar_month</span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3 font-display">Esnek Program</h3>
                    <p className="text-secondary/70 mb-6 flex-grow">
                        Hayatın yoğunluğunu biliyoruz. Online randevu sistemi ile size uyan saatleri seçebilir, acil durumlarda 24 saat önceden haber vererek cezasız telafi dersi oluşturabilirsiniz.
                    </p>
                </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-9xl text-primary">health_and_safety</span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-2xl">shield</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3 font-display">Güvenli ve Pozitif Ortam</h3>
                    <p className="text-secondary/70 mb-6 flex-grow">
                        Öğrenme korkusunu yenmek başarının yarısıdır. Kask ve koruyucu ekipman disiplini ile risksiz bir ortam sağlarken, "yapabilirsin" odaklı pozitif koçluk ile özgüven inşa ediyoruz.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WhyMe;