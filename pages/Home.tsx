
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageCircle, HeartHandshake, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-slate-50 py-20">
        <div className="absolute inset-0 z-0">
           {/* Image of children playing outside */}
           <img 
             src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=2000" 
             alt="Children playing outside" 
             className="w-full h-full object-cover opacity-25"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-1.5 h-1.5 bg-jec-green rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Kuki & Koshigaya Japan</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black mb-6 leading-[0.95] tracking-tighter text-slate-900 drop-shadow-sm">
              英語で<br />
              <span className="text-jec-green">ミライ</span>を<br />
              <span className="text-jec-orange">広げよう。</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-slate-600 max-w-xl font-medium leading-relaxed">
              JEC英語教室は、自ら「考え、発信する」力を育む<br className="hidden sm:block" />少人数制のクリエイティブ英会話です。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/trial" 
                className="bg-jec-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center group shadow-2xl shadow-orange-500/20 active:scale-95"
              >
                無料体験レッスン
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/courses" 
                className="bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all text-center active:scale-95"
              >
                コースを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Introduction & Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          {/* Portrait Image */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-50 rounded-[5rem] -z-10 transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-100 border-4 border-white">
                <img 
                  src="https://github.com/jaepanman/jec-website/blob/main/JEC-jesse.png?raw=true" 
                  alt="Jesse Ehmann - Owner" 
                  className="w-full h-full object-cover object-center transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-white/50">
                    <p className="text-jec-orange font-black text-[10px] tracking-[0.4em] uppercase mb-1">Founder & Director</p>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">イーマン ジェシー</h4>
                    <p className="text-slate-400 font-bold text-sm">Jesse Ehmann</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Content */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col space-y-16">
              <div className="space-y-6">
                <span className="text-jec-green font-black uppercase tracking-[0.4em] text-xs block">Our Story</span>
                <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                  一人ひとりの可能性を、<br />本物の英語で引き出す。
                </h3>
              </div>
              
              <div className="space-y-10 text-slate-500 text-xl leading-relaxed font-medium">
                <p>
                  JEC英語教室のオーナー、ジェシー・イーマンは2010年から日本での英語教育に従事してきました。
                  公立・私立学校での豊富な指導経験から、日本の子どもたちが本当に必要としている「生きた英語」の学び方を熟知しています。
                </p>
                <p>
                  私たちのミッションは、単なる知識の伝達ではありません。英語をツールとして使いこなし、自分の意見を世界に発信できる自信を育むことです。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
                  <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-center">
                    <p className="text-slate-900 font-black text-5xl mb-2 tracking-tighter">14+</p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Years in Japan</p>
                  </div>
                  <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-center">
                    <p className="text-slate-900 font-black text-5xl mb-2 tracking-tighter">Max 6</p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Students per Class</p>
                  </div>
                </div>

                <p>
                  フォニックスによる基礎固めから、STEAM教育を取り入れた探求型学習まで、
                  子どもたちがワクワクしながら成長できる環境を、久喜と越谷の教室で提供しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: MessageCircle, color: 'text-jec-green', bg: 'bg-jec-green/10', title: '毎回の実践', desc: 'アウトプットの時間を最大化し、実際に「使える」自信を育てます。' },
               { icon: BookOpen, color: 'text-jec-yellow', bg: 'bg-jec-yellow/10', title: 'フォニックス', desc: '正しい発音とスペリングの土台を、体系的なメソッドで指導します。' },
               { icon: Users, color: 'text-jec-orange', bg: 'bg-jec-orange/10', title: '少人数制', desc: '最大6名のクラスで、一人ひとりの個性に寄り添います。' },
               { icon: HeartHandshake, color: 'text-slate-900', bg: 'bg-slate-800/10', title: '対面授業', desc: '表情やニュアンスが伝わる対面での対話を大切にしています。' },
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={item.color} size={32} />
                  </div>
                  <h4 className="font-bold text-2xl mb-4 text-slate-900 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-jec-orange/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-none">ミライの英語を、<br />はじめよう。</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            まずは実際のクラスを体験してみませんか？<br />
            無理な勧誘はありませんので、お気軽にお越しください。
          </p>
          <Link 
            to="/trial" 
            className="inline-block bg-jec-orange text-white px-16 py-7 rounded-full font-bold text-2xl hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20"
          >
            無料体験レッスンを予約
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
