import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

interface Story {
  id: number;
  name: string;
  age: string;
  img: string;
  quote: string;
  tag: string;
  color: string;
  rating: number;
}

const SuccessStories: React.FC = () => {
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  
  const initialStories: Story[] = [
    {
      id: 1,
      name: "Elif Yılmaz",
      age: "24 Yaş • İleri Seviye",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVJ1PIW9ZfkAvp6z_041Docp2dWiKegpWadJXzmmrW5T2DyIGKn2UpWNEv7bdUsiOixu-P3CfC2SJBOSg2yMEMT_d7cZCOa-H6RaVmw4l0d5Uh74W5tZil02CZUxN7U3LcTrUBV_5RkII-dP6_bOmea7hcqxdlYNUqDgLOxywGIYCYAs3S3xFVqE3QPKtONIb2ociVb9OxJPOOSqTqU086ROSP5wLLihOSChdbBX3W-T9sWXYogAYXSFxKKKLZCwjcsJqWJCu52qY",
      quote: "Buzda kaymak benim için bir hayaldi. 3 ay gibi kısa bir sürede temel hareketleri öğrenip kendi koreografimi çalışmaya başladım. Sabrı ve ilgisi için hocama teşekkürler.",
      tag: "Hobi Grubu",
      color: "green",
      rating: 5
    },
    {
      id: 2,
      name: "Ayşe K.",
      age: "12 Yaş • Yarışmacı",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGvnQmVyi5IYvYtMUNeq_ypCUZQYmNxQLKygKXvFpNQaHezMdH_fYY9GiErOfkgPUogEbTVaOCd-_7upzA9zm8dDupENXdxcwWO9cGAvi5kcgY86wM6w57wOQuNDEMJ_JIoZKPk5ai0pp9SG4qbZlO1WuSuXydqMtriZ5O2nnnNdBiLzMsqgWf6lIAv6XSnsuks1f-efqohOsqLQxyhymK_jYKvhOPY0YIIdzOpVopfWS7115nCM-iU-mv3-Nz2I90uzK1mIganSI",
      quote: "İlk yarışmamda gümüş madalya kazandım! Antrenmanlar zorlu ama çok eğlenceli geçiyor. Kendime güvenim her derste artıyor.",
      tag: "Gümüş Madalya",
      color: "amber",
      rating: 5
    },
    {
      id: 3,
      name: "Caner D.",
      age: "28 Yaş • Başlangıç",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-frJrGp3KCh5irqOI8xrB0b4JTPkNHu_Jd9-c3s5fkai46gf4T5kpdVUOxe_LqNeRe5xHJIN_IMxrYq_CjAgG79C_QQ0lvrzCs0N0U6w3cpMFqcx6ihumr2KeGTAOTo_ft3qUDKtBfElAVWZvykewSRKe9Gy50YRbc3m4vz3f7K5U57qogaRnAcAVlYvL74PsaKCntCivEPawsLfsL2a6GxZD1Gw1YwX6pO9xKkgPs51irHqskH8s1UNKIXphJE6EgOBUP6D_rfg",
      quote: "Yetişkin yaşta başlamaktan çekiniyordum ama ortam o kadar destekleyici ki... İş stresini atmak için en iyi aktivite.",
      tag: "Yetişkin Grubu",
      color: "blue",
      rating: 4
    }
  ];

  const [stories, setStories] = useState<Story[]>(initialStories);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;

    const newStory: Story = {
      id: Date.now(),
      name: user.name,
      age: "Yeni Öğrenci",
      img: `https://ui-avatars.com/api/?name=${user.name.replace(' ', '+')}&background=13c4ec&color=fff`,
      quote: comment,
      tag: "Onay Bekliyor",
      color: "gray",
      rating: 5
    };

    // Prepend the new story
    setStories([newStory, ...stories]);
    setComment('');
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Bu yorumu silmek istediğinize emin misiniz?")) {
      setStories(stories.filter(s => s.id !== id));
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="relative pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 text-center md:text-left space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                 <span className="material-symbols-outlined text-sm">verified</span>
                 Öğrenci Deneyimleri
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary leading-[1.1] font-display">
                 Buzda Yazılan <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Başarı Hikayeleri</span>
               </h1>
               <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 w-fit mx-auto md:mx-0">
                  <div className="text-center">
                    <span className="block text-5xl font-black text-secondary tracking-tighter">4.9</span>
                    <div className="flex text-amber-400 text-sm mt-1">
                      {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined fill-current text-[18px]">star</span>)}
                    </div>
                  </div>
                  <div className="h-12 w-px bg-slate-200"></div>
                  <div>
                    <span className="block text-lg font-bold text-secondary">Mükemmel</span>
                    <span className="text-sm text-slate-500">200+ Doğrulanmış Yorum</span>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </header>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div key={story.id} className="glass-card rounded-2xl p-6 flex flex-col h-full group relative">
                   {user?.role === 'admin' && (
                     <button 
                        onClick={() => handleDelete(story.id)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors z-10"
                        title="Yorumu Sil"
                     >
                       <span className="material-symbols-outlined">delete</span>
                     </button>
                   )}
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                       <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <h4 className="font-bold text-secondary">{story.name}</h4>
                       <p className="text-xs text-slate-500">{story.age}</p>
                     </div>
                   </div>
                   <div className="flex text-amber-400 text-sm mb-3">
                      {[1,2,3,4,5].map(j => (
                          <span key={j} className={`material-symbols-outlined text-[18px] ${j <= story.rating ? 'fill-current' : 'text-slate-300'}`}>star</span>
                      ))}
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">"{story.quote}"</p>
                   <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${story.color}-100 text-${story.color}-800`}>
                        {story.tag}
                      </span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Comment Section - Auth Restricted */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
             {/* Admin View */}
             {user && user.role === 'admin' ? (
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                        <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Yönetici Paneli</h3>
                    <p className="text-slate-500 mb-6">Yukarıdaki listeden yorumları silebilirsiniz.</p>
                </div>
             ) : user ? (
                /* Logged in User View */
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-secondary mb-6 font-display flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">rate_review</span>
                        Deneyiminizi Paylaşın
                    </h3>
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                            {user.name.charAt(0)}
                        </div>
                        <div className="flex-grow">
                             <p className="text-sm font-bold text-secondary mb-1">{user.name}</p>
                             <div className="flex gap-1 text-slate-300 mb-2 cursor-pointer hover:text-amber-400 transition-colors">
                                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xl">star</span>)}
                             </div>
                        </div>
                    </div>
                    <textarea 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-4 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:border-primary outline-none transition-all min-h-[120px] mb-4"
                        placeholder="Dersler hakkındaki düşüncelerinizi yazın..."
                        required
                    ></textarea>
                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-primary/30">
                        Yorumu Gönder
                    </button>
                    <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Yorumunuz anında listeye eklenecektir (Demo modu).
                    </p>
                </form>
             ) : (
                /* Guest View */
                <div className="text-center py-8">
                    <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">lock</span>
                    <h3 className="text-xl font-bold text-secondary mb-3">Yorum Yapmak İçin Giriş Yapın</h3>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">
                        Sadece ders alan öğrencilerimiz yorum yapabilir. Bu sayede topluluğumuzun güvenilirliğini koruyoruz.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/login">
                            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform">
                                Giriş Yap
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="px-8 py-3 rounded-xl font-bold text-slate-600 border border-slate-300 hover:bg-slate-50 transition-colors">
                                Ders Al
                            </button>
                        </Link>
                    </div>
                </div>
             )}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <span className="text-primary font-bold tracking-wider uppercase text-sm">Gerçek Bir Hikaye</span>
             <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 font-display">Ayşe: 3 Ayda Sıfırdan Yarışmaya</h2>
           </div>
           <div className="space-y-12 relative">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
             
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1 text-center md:text-right order-2 md:order-1">
                 <h3 className="text-xl font-bold text-secondary font-display">1. Ay: İlk Adımlar</h3>
                 <p className="text-slate-500 mt-2">Denge, temel kayma teknikleri ve güven kazanma süreci.</p>
               </div>
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg relative z-10 order-1 md:order-2 border-4 border-white font-bold">01</div>
               <div className="flex-1 order-3"></div>
             </div>

             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1 order-3 md:order-1"></div>
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg relative z-10 order-1 md:order-2 border-4 border-white font-bold">02</div>
               <div className="flex-1 text-center md:text-left order-2 md:order-3">
                 <h3 className="text-xl font-bold text-secondary font-display">2. Ay: Figürler ve Spinler</h3>
                 <p className="text-slate-500 mt-2">İleri seviye tekniklere geçiş. Tek ayak spinleri ve basit atlayışlar.</p>
               </div>
             </div>

             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1 text-center md:text-right order-2 md:order-1">
                 <h3 className="text-xl font-bold text-secondary font-display">3. Ay: Yarışma Heyecanı</h3>
                 <p className="text-slate-500 mt-2">Ayşe, Amatörler Kupası'nda ilk performansını sergileyerek gümüş madalya kazandı.</p>
               </div>
               <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0 shadow-lg relative z-10 order-1 md:order-2 border-4 border-white">
                 <span className="material-symbols-outlined text-xl">emoji_events</span>
               </div>
               <div className="flex-1 order-3"></div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;