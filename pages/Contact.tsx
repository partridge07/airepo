import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send the data here
  };

  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">İletişime Geçin</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 font-display">
             Haydi Başlayalım!
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
             Buz üzerindeki yolculuğunuz için ilk adımı atın. Sorularınız için bize ulaşın veya hemen ders talebi oluşturun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
           {/* Form */}
           <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden min-h-[500px]">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
             
             {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                        <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">Mesajınız Alındı!</h2>
                    <p className="text-slate-600 mb-8 max-w-sm">
                        Bizimle iletişime geçtiğiniz için teşekkürler. Ekibimiz size en kısa sürede (genellikle 24 saat içinde) dönüş yapacaktır.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-bold hover:underline"
                    >
                        Yeni bir mesaj gönder
                    </button>
                </div>
             ) : (
                 <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 font-display">
                        <span className="material-symbols-outlined text-primary">edit_note</span>
                        Ders Talep Formu
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="block">
                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Ad Soyad</span>
                            <input required type="text" className="w-full px-4 py-3 rounded-lg border-slate-200 bg-white/50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all text-slate-800 outline-none" placeholder="Adınız ve Soyadınız" />
                        </label>
                        <label className="block">
                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">E-posta</span>
                            <input required type="email" className="w-full px-4 py-3 rounded-lg border-slate-200 bg-white/50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all text-slate-800 outline-none" placeholder="ornek@email.com" />
                        </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="block">
                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Telefon</span>
                            <input required type="tel" className="w-full px-4 py-3 rounded-lg border-slate-200 bg-white/50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all text-slate-800 outline-none" placeholder="0555 123 45 67" />
                        </label>
                        <label className="block">
                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Seviye</span>
                            <select className="w-full px-4 py-3 rounded-lg border-slate-200 bg-white/50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all text-slate-800 outline-none">
                                <option>Seçiniz...</option>
                                <option>Başlangıç</option>
                                <option>Orta</option>
                                <option>İleri</option>
                            </select>
                        </label>
                        </div>
                        <label className="block">
                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Hedefleriniz & Notlar</span>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border-slate-200 bg-white/50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all text-slate-800 outline-none resize-none" placeholder="Buz pateninden beklentileriniz neler?"></textarea>
                        </label>
                        <div className="pt-2">
                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">send</span>
                                Bilgi Talep Et
                            </button>
                            <p className="text-center text-slate-500 text-xs mt-4 flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                                24 saat içinde dönüş garantisi
                            </p>
                        </div>
                    </form>
                 </>
             )}
           </div>

           {/* Info */}
           <div className="lg:col-span-5 space-y-6">
             <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">E-posta</h3>
                    <a href="mailto:info@buzakademi.com" className="text-slate-600 hover:text-primary transition-colors text-sm">info@buzakademi.com</a>
                </div>
             </div>
             <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">Telefon</h3>
                    <a href="tel:+905551234567" className="text-slate-600 hover:text-primary transition-colors text-sm">+90 555 123 4567</a>
                </div>
             </div>
             <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">Konum</h3>
                    <p className="text-slate-600 text-sm">Buzul Spor Merkezi, Kadıköy, İstanbul</p>
                </div>
             </div>
             <div className="glass-panel p-2 rounded-2xl overflow-hidden shadow-sm h-48 relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwXNGG_FCOlGrnY2PFeyQTAo1HPH-wuH4XQfP-FX-nV5qpBLN9WVhf8Zg_ASmmCisQ4f1Oa-sbjwokJM8dWQnt9kL0sPsb38s1lUKx8r-yyIsxwxTpm1MbouaxnPZihi8aro4E7H7Ny-TsAu9sY6NUUgqGWlXlToe0qRydA9nkfLKarWbXVaOzt0YiXFH_v7usJk4VAwLS85OC2_p2ir46aJ2U7OR4lO6MOz1XhVVEbJG2hpxEzTC0ndFPuijbYBPOEkTYhntsqk" className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Map" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-all">
                    <button className="bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">map</span>
                        Haritada Gör
                    </button>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;