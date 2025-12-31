import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !name)) return;
    
    // Mock user name if logging in without prior registration in this session
    const userName = name || email.split('@')[0];
    login(email, userName);
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/10 rounded-tr-full -ml-8 -mb-8"></div>

        <div className="text-center mb-8 relative z-10">
          <span className="material-symbols-outlined text-4xl text-primary mb-2">lock</span>
          <h1 className="text-3xl font-bold text-secondary font-display">
            {isLogin ? 'Hoş Geldiniz' : 'Aramıza Katılın'}
          </h1>
          <p className="text-slate-500 mt-2">
            {isLogin 
              ? 'Derslerinizi ve yorumlarınızı yönetmek için giriş yapın.' 
              : 'BuzAkademi ailesine katılarak avantajlardan yararlanın.'}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-slate-100/50 p-1 rounded-xl mb-8 relative z-10">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
              isLogin ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
              !isLogin ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Kayıt Ol
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Ad Soyad</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-white/60 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all outline-none"
                  placeholder="Adınız Soyadınız"
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">E-posta</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-white/60 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all outline-none"
                placeholder="ornek@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Şifre</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">key</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-white/60 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 mt-4 flex items-center justify-center gap-2"
          >
            {isLoading ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
                <>
                {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
                <span className="material-symbols-outlined">arrow_forward</span>
                </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-slate-400">
           <p>Demo Bilgisi: Yönetici girişi için e-posta içinde "admin" kullanın.</p>
           <p className="mt-1">Örn: admin@buzakademi.com</p>
        </div>
      </div>
    </div>
  );
};

export default Login;