import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Figure skater"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXtEg1PULb8ZfmRb31d_Hua8nz_u7u1gLGyjrxRXBYB4Vm80ke94QYKdHooebHdGlDgNItBbvdD_1mVCHqaH6sz7Obe_4_Nza0gYb-8ftMnTia1WmMFqfWsPmwzVbhaibicNMKMV2D1_8Mbas6iRBuS-VO_LWqm7UPWhB9oSifYAlnIG93rKcHq20KOrFo79zL3scoKjyLVh7WG3aOVqFqnXkNdGzFmgUDNTNDfpI1f-uWTc6Qz9BGUfvcTouuRXwts4dxndv-A4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light to-transparent opacity-90 h-32 bottom-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase">Profesyonel Buz Pateni Eğitimi</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Buzun Üzerinde <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-200">Hayallerinize</span> Ulaşın
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light leading-relaxed max-w-2xl">
              İster başlangıç seviyesinde olun ister profesyonel hedefleriniz olsun, kişiselleştirilmiş koçluk ile buzun özgürlüğünü keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2 group">
                    Hemen Başla
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
              </Link>
              <Link to="/services">
                <button className="w-full sm:w-auto glass-panel text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/30 flex items-center justify-center gap-2">
                    Paketleri İncele
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="relative -mt-20 z-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-slate-600 font-medium">Mutlu Öğrenci</p>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15</div>
                <p className="text-slate-600 font-medium">Yıl Deneyim</p>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">%98</div>
                <p className="text-slate-600 font-medium">Memnuniyet Oranı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-300 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  alt="Professional ice skating instructor"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlpG1eupF8-h7H3dNirEw-jfybw3pViKace6QoTbC94Yn59jxOjiszxdXlrWXDTyMNz0b8UYZSORCPmzvdBIG0ih2F0E1o-tIRsPXIgisufcrOE-F81aViQhJqXTU5wdO-FE_R1Q1D-CT9xQWk77_kuT8GfrY2EP1l4yfd3mHokuxx2pWMRmFhQvUo1VSSOJH93YwSNlZ2_hIO2yuwi35eem5BWKh_d9ps5hsAZSDhaP7ZexTpGG8KGcoEQrn69RBwYXF47kBjL38"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold text-xl">Elif Yılmaz</p>
                  <p className="text-sm opacity-80">Baş Antrenör</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Eğitmeniniz Hakkında</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">Buzdaki Tutkuyu Profesyonelliğe Dönüştürüyoruz</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Buz pateni sadece bir spor değil, aynı zamanda bir ifade biçimidir. 15 yılı aşkın profesyonel kariyerim ve ulusal düzeydeki başarılarımla, her yaştan öğrenciye buzun üzerinde güvenle durmayı öğretiyorum.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sertifikalı Eğitim</h4>
                    <p className="text-sm text-slate-500">Uluslararası geçerlilikte sertifikalar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Esnek Saatler</h4>
                    <p className="text-sm text-slate-500">Size uygun zaman dilimleri.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group">
                Daha Fazla Bilgi
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Darkened Background */}
      <section className="py-20 bg-secondary/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Hizmet Paketleri</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Size En Uygun Eğitimi Seçin</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group bg-white/60">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">person</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">Özel Dersler</h4>
              <p className="text-slate-600 mb-6">Birebir ilgi ve kişiselleştirilmiş program ile en hızlı gelişimi sağlayın.</p>
              <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark">
                Detayları İncele <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
              </Link>
            </div>
            {/* Service 2 */}
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group relative border-primary/30 bg-white/70">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPÜLER</div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">Grup Dersleri</h4>
              <p className="text-slate-600 mb-6">Arkadaşlarınızla veya yeni insanlarla tanışarak eğlenceli bir ortamda öğrenin.</p>
              <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark">
                Detayları İncele <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
              </Link>
            </div>
            {/* Service 3 */}
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group bg-white/60">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">stars</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">Koreografi</h4>
              <p className="text-slate-600 mb-6">Yarışmalara hazırlanan veya sanatsal yönünü geliştirmek isteyenler için.</p>
              <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark">
                Detayları İncele <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Preview - Gradient adjustment */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                     <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Neden Biz?</h2>
                     <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">Standartların Ötesinde Bir Eğitim</h3>
                     <p className="text-slate-600 text-lg leading-relaxed mb-8">
                         Sadece kaymayı değil, buzu hissetmeyi öğretiyoruz. Her öğrencinin potansiyelini açığa çıkaran kişiselleştirilmiş metodolojimizle fark yaratıyoruz.
                     </p>
                     
                     <div className="space-y-6">
                         <div className="flex items-center gap-4 group">
                             <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <span className="material-symbols-outlined">psychology</span>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-900">Kişiselleştirilmiş Program</h4>
                                 <p className="text-sm text-slate-500">Hedeflerinize ve seviyenize özel antrenman planı.</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-4 group">
                             <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <span className="material-symbols-outlined">calendar_month</span>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-900">Esnek Randevu Sistemi</h4>
                                 <p className="text-sm text-slate-500">Hayat temponuza uygun ders saatleri.</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-4 group">
                             <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                 <span className="material-symbols-outlined">security</span>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-900">Maksimum Güvenlik</h4>
                                 <p className="text-sm text-slate-500">Profesyonel ekipman ve gözetim.</p>
                             </div>
                         </div>
                     </div>

                     <div className="mt-10">
                         <Link to="/why-me" className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                             Farkımızı Keşfedin
                             <span className="material-symbols-outlined ml-2">arrow_forward</span>
                         </Link>
                     </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="relative glass-panel p-2 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/40">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb6omAIyqMm50TJTzSV_hzhAbX_fsaIgqIZjPInnkFiTt3t5GS_aFimthR1BmrBaXc6P8OGRA0SGaCTCwgpcU8g6oWBuRTlS-42HcuDg_FPnekFFki5T-pNw6cHPoHUM4p_BvrHSWDxdkBlLYg4WOwS-UstWgJw5TXNCBmIgrbIxxenmz4XiS2-VQQsB5WLMCvcagg8DM2TOhLr6WBrrgfce8PqphYsjhtywFrGnlh7m-X3KMWPTNdEMq07NmQV058XeD5F-T_ePU" 
                            alt="Training session" 
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Başarı Hikayeleri</h2>
                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Öğrencilerimizden Dinleyin</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-2xl relative">
                    <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-4 right-4">format_quote</span>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVJ1PIW9ZfkAvp6z_041Docp2dWiKegpWadJXzmmrW5T2DyIGKn2UpWNEv7bdUsiOixu-P3CfC2SJBOSg2yMEMT_d7cZCOa-H6RaVmw4l0d5Uh74W5tZil02CZUxN7U3LcTrUBV_5RkII-dP6_bOmea7hcqxdlYNUqDgLOxywGIYCYAs3S3xFVqE3QPKtONIb2ociVb9OxJPOOSqTqU086ROSP5wLLihOSChdbBX3W-T9sWXYogAYXSFxKKKLZCwjcsJqWJCu52qY" alt="Student" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900">Elif Yılmaz</h4>
                            <div className="flex text-amber-400 text-sm">
                                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current text-[18px]">star</span>)}
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600 italic mb-4">
                        "Buzda kaymak benim için bir hayaldi. 3 ay gibi kısa bir sürede temel hareketleri öğrenip kendi koreografimi çalışmaya başladım."
                    </p>
                    <Link to="/stories" className="text-primary font-bold text-sm hover:underline">Hikayeyi Oku</Link>
                </div>

                <div className="glass-card p-8 rounded-2xl relative flex flex-col justify-center items-center text-center bg-secondary/5 border-secondary/10">
                    <h4 className="text-2xl font-bold text-secondary mb-2">4.9/5 Mükemmel Puan</h4>
                    <p className="text-slate-600 mb-6">200'den fazla mutlu öğrenci yanılıyor olamaz.</p>
                    <Link to="/stories">
                        <button className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-md">
                            Tüm Yorumları Gör
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative glass-card p-12 md:p-20 rounded-3xl overflow-hidden bg-white/70">
            {/* Background blur effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent -z-10"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Buzdaki Yolculuğunuza Bugün Başlayın</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              İlk dersinizde %20 indirim fırsatını kaçırmayın. Hemen iletişime geçin, programınızı birlikte oluşturalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all transform hover:-translate-y-1">
                    Ders Al
                  </button>
              </Link>
              <Link to="/contact">
                  <button className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg text-slate-700 border-2 border-slate-200 hover:border-primary hover:text-primary transition-all bg-white/50">
                    Bize Ulaşın
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;