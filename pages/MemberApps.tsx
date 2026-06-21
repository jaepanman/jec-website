import React from 'react';
import { ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import tangoImg from '../assets/tango.png';
import flexImg from '../assets/flex.png';
import icaneikenImg from '../assets/icaneiken.png';

interface AppCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  colorClass: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, description, url, image, colorClass }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex flex-col group h-full"
    >
      <div className="h-56 relative overflow-hidden bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback styler in case local assets are empty/corrupted
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        {/* Colorful gradient overlay if image is hidden or transparent */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${colorClass} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
      </div>
      <div className="p-10 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">{description}</p>
        </div>
        <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-jec-orange transition-colors">
          アプリを起動する
          <ExternalLink className="ml-2 w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

const MemberApps: React.FC = () => {
  const apps = [
    {
      title: 'I Can EIKEN',
      description: '英検合格を目指すためのJECオリジナル対策学習アプリ。単語、リスニング、リーディングにバランスよくアプローチ。',
      url: 'https://i-can-eiken-app.vercel.app/',
      image: icaneikenImg,
      colorClass: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'JEC TAN-GO',
      description: '単語（TANGO）をスマートに暗記。直感的で飽きのない学習フローで語彙力を飛躍的に向上させます。',
      url: 'https://jec-tan-go.vercel.app/',
      image: tangoImg,
      colorClass: 'from-orange-500 to-red-500'
    },
    {
      title: 'JEC Flex',
      description: '文法とリスニングを柔軟に鍛えるスマート学習ツール。レッスンと連動したクリエイティブな演習が充実。',
      url: 'https://jec-flex.vercel.app/',
      image: flexImg,
      colorClass: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <header className="mb-20 text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-5 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-jec-green" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">JEC Members Only</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">会員専用アプリ一覧</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            こちらはJEC英語教室の生徒様・保護者様向けの学習アプリリンク集です。<br />
            各アプリをクリックして、学習を開始してください。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {apps.map((app, index) => (
            <AppCard 
              key={index}
              title={app.title}
              description={app.description}
              url={app.url}
              image={app.image}
              colorClass={app.colorClass}
            />
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 bg-white border border-slate-100 rounded-[3rem] p-10 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-slate-800">ログイン方法について</h3>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            各アプリのログインIDおよびパスワードは、教室にて配布された案内プリントをご確認ください。<br />
            ご不明な点がある場合は、担当講師または教室窓口までお尋ねください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberApps;
