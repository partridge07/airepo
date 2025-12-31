import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">Profesyonel Eğitmen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary leading-[1.1] tracking-tight font-display">
              Buzun Üzerinde <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">15 Yıllık Tutku</span> ve Disiplin
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Eski milli sporcu ve profesyonel eğitmen olarak, rekabetçi geçmişimden gelen tecrübeyi yeni nesil şampiyonlara aktarıyorum. Her süzülüşte mükemmelliği hedefliyoruz.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 mt-4">
              <div>
                <div className="text-3xl font-black text-secondary font-display">15+</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">Yıl Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-black text-secondary font-display">20+</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">Şampiyon</div>
              </div>
              <div>
                <div className="text-3xl font-black text-secondary font-display">5K+</div>
                <div className="text-xs text-slate-500 font-medium uppercase mt-1">Saat Ders</div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-square">
              <img
                alt="Profesyonel Eğitmen Portresi"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBokmrb5jh6peJrsYPAm37qwUkDVLDJTWVRRbVVRReO5qdYeJaEuN-IUIuFZ4us1qQ5SWNUJtjhct-3kG023_ldc3UnT6bR5tmppGRvME6IyekJ51BOjZt00WfpWp0RXaTNqMOTjE6-ggEsy0dmmU8LuANpWo_9gusAS30idrenEzF6h7ikcPZQUPN9zzm1TiBXetM7k7MmjzIVDoJQixQnRhPKgf7ZoCF4Phqmc6OCpQKXO0gauefktDh6hn1cGsg3OBKEfsQUXgU"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Darkened */}
      <section className="py-16 bg-secondary/5 backdrop-blur-sm border-y border-white/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-5xl text-primary/40 mb-6">format_quote</span>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary italic leading-tight mb-8 font-display">
            "Her öğrenci farklıdır, bu yüzden her program kişiye özel olmalıdır. Sadece teknik becerileri değil, sporcunun karakterini ve özgüvenini de inşa ediyoruz."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-300"></div>
            <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Eğitmen Felsefesi</span>
            <div className="h-px w-12 bg-slate-300"></div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-4 font-display">Eğitim ve Sertifikalar</h2>
          <p className="text-slate-600">Uluslararası standartlarda eğitim metodolojileri ve spor bilimleri üzerine akademik uzmanlık.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
            <h3 className="text-xl font-bold text-secondary font-display">ISU Sertifikası</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Uluslararası Paten Birliği (ISU) tarafından onaylanmış ileri düzey teknik antrenörlük belgesi.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
            <h3 className="text-xl font-bold text-secondary font-display">Spor Bilimleri Fakültesi</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Antrenörlük Eğitimi Bölümü Lisans Derecesi. Biyomekanik ve spor psikolojisi uzmanlığı.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">psychology</span>
            </div>
            <h3 className="text-xl font-bold text-secondary font-display">PSA Üyeliği</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Profesyonel Patenciler Birliği aktif üyesi ve sürekli eğitim programı katılımcısı.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section - Gradient adjusted */}
      <section className="py-20 bg-gradient-to-b from-slate-50/50 to-slate-100/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center font-display">Kariyer Yolculuğum</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform md:-translate-x-1/2"></div>
            <div className="flex flex-col gap-12">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group">
                <div className="order-2 md:order-1 md:w-[45%] md:text-right pl-20 md:pl-0">
                  <h3 className="text-lg font-bold text-secondary font-display">Milli Takım Kariyeri</h3>
                  <p className="text-primary font-medium mb-2">2008</p>
                  <p className="text-slate-600 text-sm">Genç yaşta milli takıma seçilerek uluslararası arenada ülkemizi temsil etme gururu.</p>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 order-1 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-sm">flag</span>
                </div>
                <div className="order-3 md:w-[45%] hidden md:block"></div>
              </div>
              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group">
                <div className="order-2 md:order-1 md:w-[45%] hidden md:block"></div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 order-1 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-sm">emoji_events</span>
                </div>
                <div className="order-2 md:order-1 md:w-[45%] text-left pl-20 md:pl-0">
                  <h3 className="text-lg font-bold text-secondary font-display">İlk Uluslararası Madalya</h3>
                  <p className="text-primary font-medium mb-2">2012</p>
                  <p className="text-slate-600 text-sm">Balkan Şampiyonası'nda Gümüş Madalya kazanarak kariyerimin en önemli başarısını elde ettim.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row gap-8 items-center md:justify-between group">
                <div className="order-2 md:order-1 md:w-[45%] md:text-right pl-20 md:pl-0">
                  <h3 className="text-lg font-bold text-secondary font-display">Profesyonel Eğitmenliğe Geçiş</h3>
                  <p className="text-primary font-medium mb-2">2015</p>
                  <p className="text-slate-600 text-sm">Aktif sporculuk kariyerimi noktalayarak tecrübelerimi yeni nesillere aktarmaya başladım.</p>
                </div>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 order-1 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-sm">sports_score</span>
                </div>
                <div className="order-3 md:w-[45%] hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center font-display">Buzun Büyüsü</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
            <img className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuHhjxI4dInz0uiVUucuqj07nqG_X0fu-8kXI3GvW5Fzr2sD8Tkhrhsy7qxLQlW4129e4OruNH4pBR7a5CBjA5VkyriRdzdQ4fJqpB8yxOhidSFS1exrlgqZAGFG_QcswWtQSRYuJQob9JKvS_qFvlB37-_DhrzOEczGPDr_tSLgHZgy_xKDeVUw5r_Oz8y-OPb367kLEDc8GT1dDpRx1Z1ObP3LB2YrlCAN4n_r55e4agI_kDtl_RjO3JyM8-yUz-iAdx804mZOE" alt="Sanatsal Performans" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
              <p className="text-white font-medium">Sanatsal Performans</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
            <img className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZowLdUai1JhbuPQWZ8wA2KM1wUgtnzsec5xJqCx630SwiLTq0Dzv1aq6axns9_TQvDxbN8USmxfz4P-abPFRjltBrGfmUP3WCHKdbS7py_d8K0p8nL2Jtu0KpAuc40bKpyUwcpK6p8X8GaW89T3ya4DtXfw2Xeu-HE3d4PIirx2eKVvTmK-QNqp7nEEYpNSrMlNFCSJQnPVv1dT9owPomWVJEB4OOCHIS3fypPbg_K01riIC08I_SZkRUQ5sGgxjq6Khs_idGIuI" alt="Skates" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
            <img className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqrN4BgIs0Ea3Aw7jRL9Aq5y4psJdUDr29vIvT7mrZoT4KMVj3kdjUp6pdAcTv4_vbX5X9ilxvA0q-sFAnUIhZNWyNR20FQCze8oDdAGjIYIOyDncwhDrGYNQa1zZojSaDgtZ9K4AK7b0ZxvJc6ZLcaA35jy59bZrQnb-PborbuHqYQLlCmzhqDSYE_LWugXUtyOVVGxuUMhfECc5120dP-N4NelUCzusHEkxne9lK-x9I32CpoY0cfiZkW_wPIQaW0N-VObkb64" alt="Teaching" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer">
            <img className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3MAm3RuVx9dauj-DSkmztm3QM5DSuQjHq2pwCdMPjhUxJT2jp23AX-n78edbOK_YoJoTeZsKoeqw5sBec7A0fFxDmg1W_Wp85syhdIFx9G9ts3aAQIOB-o2aO3sXxuDxlW4OaLQB0oUOIiFaKS8ZTjYJcUeCMirofkyqw-9G3-7refF5rtBjeEFYwHsBXPi4P3WQ1NhtD09aqj1zMjPHErLj7l1QXI-fSCMILyEKi2FulGFIH373HFTL-vVoszimuFdEJmbjiFLc" alt="Ice Rink" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;