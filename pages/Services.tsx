import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="pb-20 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-10 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col items-center text-center gap-8">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent z-10"></div>
            <img alt="Close up of ice skates" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALucusSyToV6fGVNZE8WmFbShqvITF4vfHaO7KMEeBrVrJqVaDS66Wb-RHciNKQ41OAa49MChgLagA-Dgvt7sKmchTjJfjzZR5kdiU4wTbSs77FfDd_1f8xVqiNVe-PkUVccqa2-wyMQRDvgMqVcwGBXS0_oxrCD8fliHgZpwU5ZhmY4lponn92UY11ZTbehjtL2jhkDSc9VLwLqLtME0fb88rTPeBMbSaIlaCvAJfsWutGq9aeeKLqBSldcrsdHEsPfrQFqOQg6c" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6">
              <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg font-display">
                Size Uygun Programı Bulun
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl drop-shadow-md">
                Buz üzerindeki hedeflerinize ulaşmak için seviyenize en uygun paketi seçin ve potansiyelinizi keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 sm:px-10 pb-16 flex justify-center">
        <div className="max-w-[1100px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/20"></div>
              <div>
                <h3 className="text-secondary text-lg font-bold mb-2 font-display">Başlangıç</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-secondary">₺1200</span>
                  <span className="text-sm text-gray-500 font-medium">/4 Ders</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Buzla ilk tanışma ve temel denge için ideal.</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {['Temel kayma teknikleri', 'Düşme ve kalkma eğitimi', 'Denge çalışmaları'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {item}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-lg">cancel</span>
                  Video Analiz
                </div>
              </div>
              <button className="w-full h-12 rounded-xl bg-gray-100 text-secondary font-bold hover:bg-primary/20 transition-colors">
                Paketi Seç
              </button>
            </div>

            {/* Development */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative border-primary/50 ring-4 ring-primary/10 bg-white/70">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-b-lg shadow-sm">
                EN POPÜLER
              </div>
              <div className="mt-2">
                <h3 className="text-secondary text-lg font-bold mb-2 font-display">Gelişim</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-secondary">₺2000</span>
                  <span className="text-sm text-gray-500 font-medium">/4 Ders</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Tekniklerini geliştirmek isteyenler için.</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {['İleri sürüş teknikleri', 'Geri kayma ve dönüşler', 'Temel figürler (Spin giriş)', 'Temel Video Analiz'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full h-12 rounded-xl bg-primary text-secondary font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark hover:text-white transition-all">
                Paketi Seç
              </button>
            </div>

            {/* Pro */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-secondary/10"></div>
              <div>
                <h3 className="text-secondary text-lg font-bold mb-2 font-display">Profesyonel</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-secondary">₺3500</span>
                  <span className="text-sm text-gray-500 font-medium">/4 Ders</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Yarışma ve ileri düzey performans.</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {['Koreografi ve müzik çalışması', 'Yarışma simülasyonu', 'İleri düzey Jump & Spin', 'Detaylı Video Analiz & Feedback'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full h-12 rounded-xl bg-gray-100 text-secondary font-bold hover:bg-primary/20 transition-colors">
                Paketi Seç
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-10 pb-16 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col gap-6">
          <h2 className="text-2xl font-bold px-2 font-display">Paket Karşılaştırma</h2>
          <div className="glass-panel rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200/60 bg-secondary/5">
                  <th className="px-6 py-4 text-left text-sm font-bold text-secondary w-1/4">Özellik</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-secondary w-1/4">Başlangıç</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary w-1/4">Gelişim</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-secondary w-1/4">Profesyonel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/50">
                {[
                  ['Pist Giriş Ücreti', 'Hariç', 'Dahil', 'Dahil'],
                  ['Ders Süresi', '45 dk', '60 dk', '90 dk'],
                  ['Ekipman Kiralama', 'Dahil', 'Hariç (Kendi pateniniz önerilir)', 'Hariç'],
                  ['Program Esnekliği', 'Sabit Saatler', 'Esnek', 'Tam Esnek (7/24)'],
                ].map(([feature, col1, col2, col3], idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 font-bold">{col1}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 font-bold">{col2}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500 font-bold">{col3}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">Whatsapp Desteği</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500"><span className="material-symbols-outlined text-gray-300">remove</span></td>
                  <td className="px-6 py-4 text-center text-sm text-primary"><span className="material-symbols-outlined">check</span></td>
                  <td className="px-6 py-4 text-center text-sm text-primary"><span className="material-symbols-outlined">check</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="px-4 sm:px-10 pb-16 flex justify-center">
        <div className="max-w-[960px] w-full">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left font-display">60 Dakikalık Derste Neler Oluyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 relative">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-2">
                <span className="material-symbols-outlined">directions_run</span>
              </div>
              <h3 className="text-lg font-bold font-display">1. Isınma & Hazırlık</h3>
              <p className="text-sm text-gray-600">İlk 10-15 dakika kasları ısıtmak ve sakatlık riskini önlemek için buz dışı ve buz içi hafif egzersizler yapılır.</p>
              <span className="absolute top-4 right-4 text-xs font-bold bg-white/50 px-2 py-1 rounded text-gray-500">10 dk</span>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 relative border-primary/30 shadow-lg shadow-primary/5 bg-white/70">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-lg mb-2">
                <span className="material-symbols-outlined">ice_skating</span>
              </div>
              <h3 className="text-lg font-bold font-display">2. Teknik Çalışma</h3>
              <p className="text-sm text-gray-600">Ana bölüm. Kayma teknikleri, dönüşler, frenler veya figür çalışmaları seviyenize göre yoğun şekilde işlenir.</p>
              <span className="absolute top-4 right-4 text-xs font-bold bg-white/50 px-2 py-1 rounded text-gray-500">40 dk</span>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 relative">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-2">
                <span className="material-symbols-outlined">accessibility_new</span>
              </div>
              <h3 className="text-lg font-bold font-display">3. Soğuma & Analiz</h3>
              <p className="text-sm text-gray-600">Son bölümde kasları rahatlatma egzersizleri yapılır ve günün performansı hakkında kısa bir değerlendirme sunulur.</p>
              <span className="absolute top-4 right-4 text-xs font-bold bg-white/50 px-2 py-1 rounded text-gray-500">10 dk</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;