
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageCircle, HeartHandshake, Users, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react';
import storybridgeImg from '../assets/storybridge.png';
import eibunBuilderImg from '../assets/eibun-builder.png';
import icaneikenImg from '../assets/icaneiken.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
           {/* Updated Hero Image */}
           <img 
             src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000" 
             alt="Group of students on green grass field" 
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
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black mb-8 leading-[0.9] tracking-tighter text-slate-900 drop-shadow-sm">
              英語で<br />
              <span className="text-jec-green">ミライ</span>を<br />
              <span className="text-jec-orange">広げよう。</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-slate-600 max-w-xl font-medium leading-relaxed">
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
          {/* Portrait Image - Aspect ratio and object-top positioning to prevent cropping */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-50 rounded-[5rem] -z-10 transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl relative bg-slate-100 border-4 border-white">
                <img 
                  src="https://github.com/jaepanman/jec-website/blob/main/JEC-jesse.png?raw=true" 
                  alt="Jesse Ehmann - Owner" 
                  className="w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-105"
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

      {/* EdTech & Proprietary Learning Apps Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2 rounded-full mb-6 shadow-sm">
              <Smartphone className="w-4 h-4 text-jec-green" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">EdTech × 英語教育</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-8">
              教室の外でも自然に学びが続く、<br />
              独自の学習アプリ環境。
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              JEC英語教室では、週1回のレッスンにとどまらず、<span className="text-slate-900 font-bold underline decoration-jec-orange decoration-2">「ご家庭でも楽しく英語に触れ続けられる自学自習の環境」</span>を大切にしています。<br className="hidden md:block" />
              オーナーのジェシーは長年の指導経験に加え、自ら教育アプリを設計・開発するEdTechエンジニアでもあります。年齢や目標に合わせて最適化された専用アプリを生徒へ提供しています。
            </p>
          </div>

          {/* 3 App Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Card 1: JEC Storybridge */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-amber-50/80 border border-amber-100 p-2.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={storybridgeImg} 
                      alt="JEC Storybridge Emblem" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-jec-yellow/15 text-amber-900 tracking-wide">
                    幼児・小学生
                  </span>
                </div>
                <p className="text-jec-orange font-bold text-xs uppercase tracking-widest mb-1">Young Learners</p>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">JEC Storybridge</h4>
                <p className="text-slate-400 font-bold text-xs mb-5">絵本ストーリーで学ぶ英検＆語彙</p>
                <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                  かわいいイラストストーリーを読み進めながら、英検頻出の重要単語や基本文法を直感的にインプット。物語の世界を楽しみながら、自然と語彙力が身につきます。
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#絵本ストーリー</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#英検基礎語彙</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#直感インプット</span>
              </div>
            </div>

            {/* Card 2: JEC 英文ビルダー */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-50/80 border border-emerald-100 p-2.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={eibunBuilderImg} 
                      alt="JEC英文ビルダー logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-jec-green/20 text-emerald-900 tracking-wide">
                    中学生
                  </span>
                </div>
                <p className="text-jec-green font-bold text-xs uppercase tracking-widest mb-1">Junior High School</p>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">JEC 英文ビルダー</h4>
                <p className="text-slate-400 font-bold text-xs mb-5">英文構造・語順マスターアプリ</p>
                <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                  つまずきやすい英語の語順や文法構造を、視覚的・体感的に組み立てるアプリ。感覚だけに頼らず、英文の「骨組み」を正しく見抜く読解力と作文力を養います。
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#語順トレーニング</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#文法構造の視覚化</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#長文読解の土台</span>
              </div>
            </div>

            {/* Card 3: I Can EIKEN */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-orange-50/80 border border-orange-100 p-2.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={icaneikenImg} 
                      alt="I Can EIKEN logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-jec-orange/15 text-orange-900 tracking-wide">
                    全学年・英検受験生
                  </span>
                </div>
                <p className="text-jec-orange font-bold text-xs uppercase tracking-widest mb-1">Eiken Prep</p>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">I Can EIKEN</h4>
                <p className="text-slate-400 font-bold text-xs mb-5">実践的 英検総合対策アプリ</p>
                <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                  合格に必要な語彙・リスニング・実践問題を効率的に反復トレーニングできるアプリ。日々のスキマ時間を活用して、着実に合格レベルへと引き上げます。
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#合格直結演習</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#リスニング強化</span>
                <span className="bg-slate-50 px-3 py-1 rounded-lg">#スキマ時間学習</span>
              </div>
            </div>
          </div>

          {/* Bottom Highlight Callout */}
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200/80 shadow-xl flex flex-col sm:flex-row items-center gap-6 md:gap-8">
            <div className="w-16 h-16 rounded-2xl bg-jec-green/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-black text-xl md:text-2xl text-slate-900 mb-2">
                「対面レッスン」×「オリジナルアプリ」のハイブリッド学習
              </h4>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                教室での情熱的な対面レッスンで会話と表現を磨き、手元の自作アプリでご家庭のスキマ時間を活かして反復定着。この両輪が揃うことで、週1回の通学でも圧倒的な学習継続力と自信を育んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-white">
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
