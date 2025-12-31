import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
      setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımda', path: '/about' },
    { name: 'Hizmetler', path: '/services' },
    { name: 'Neden Ben', path: '/why-me' },
    { name: 'Başarı Hikayeleri', path: '/stories' },
    { name: 'İletişim', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel mx-2 mt-2 rounded-2xl border-white/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">ac_unit</span>
            <span className="font-bold text-xl tracking-tight text-secondary">
              Buz<span className="text-primary">Akademi</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary font-bold'
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                 <div className="flex flex-col items-end">
                    <span className="text-sm font-bold text-secondary">{user.name}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 rounded-full">
                        {user.role === 'admin' ? 'Yönetici' : 'Öğrenci'}
                    </span>
                 </div>
                 <button 
                    onClick={handleLogout}
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-600"
                    title="Çıkış Yap"
                 >
                    <span className="material-symbols-outlined text-lg">logout</span>
                 </button>
              </div>
            ) : (
                <Link to="/login">
                    <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors px-4 py-2">
                        Giriş Yap
                    </button>
                </Link>
            )}

            <Link to="/contact">
                <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5 flex items-center gap-1">
                <span>Ders Al</span>
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-primary transition-colors p-2"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel mx-4 mt-2 rounded-2xl p-4 absolute left-0 right-0 shadow-xl border border-white/60">
          <div className="flex flex-col space-y-4">
             {/* Mobile User Info */}
             {user && (
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-secondary">{user.name}</div>
                        <div className="text-xs text-primary font-bold uppercase">{user.role === 'admin' ? 'Yönetici' : 'Öğrenci'}</div>
                    </div>
                    <button onClick={handleLogout} className="ml-auto text-xs text-slate-500 underline">Çıkış</button>
                </div>
             )}

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium p-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {!user && (
                <Link to="/login" className="text-base font-medium p-2 rounded-lg text-slate-600 hover:bg-slate-50">
                    Giriş Yap / Kayıt Ol
                </Link>
            )}

            <Link to="/contact" className="w-full">
                <button className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-md">
                Ders Al
                </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;