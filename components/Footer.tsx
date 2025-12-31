import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">ac_unit</span>
              <span className="font-bold text-xl tracking-tight">
                Buz<span className="text-primary">Akademi</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Profesyonel buz pateni eğitimi ile hayallerinize ulaşın. Kaliteli, güvenli ve eğlenceli bir öğrenme deneyimi.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'YT'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-display">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Hakkımda</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Hizmetler</Link></li>
              <li><Link to="/why-me" className="hover:text-primary transition-colors">Neden Ben</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-display">Hizmetler</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Özel Dersler</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Grup Dersleri</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Yetişkin Kursları</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Çocuk Kursları</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Koreografi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-display">İletişim</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Buz Sporları Salonu<br />İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">email</span>
                <span>info@buzakademi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2023 BuzAkademi. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;