
import React from 'react';
import { LOCATIONS } from '../constants';
import { Phone, MapPin, ExternalLink, School } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20 text-center">
          <span className="text-jec-orange font-bold tracking-widest uppercase text-sm">Schools</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-8">教室案内</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            埼玉県内に2つの教室を展開しています。どちらの教室も駅から近く、通いやすい環境が整っています。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-50 flex flex-col group hover:shadow-2xl transition-all duration-500">
              <div className="h-72 relative overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800 shadow-lg flex items-center">
                  <School className="w-4 h-4 mr-2 text-jec-orange" />
                  {loc.id === 'kuki' ? '久喜本部' : '越谷校'}
                </div>
              </div>
              <div className="p-10 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">{loc.name}</h2>
                <div className="space-y-5 mb-10">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-jec-orange mr-4 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">{loc.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-jec-orange mr-4 flex-shrink-0" />
                    <p className="text-slate-800 font-black text-2xl tracking-tighter">{loc.phone}</p>
                  </div>
                </div>
                
                <div className="rounded-3xl overflow-hidden h-72 border-4 border-slate-50 mb-10 shadow-inner">
                   <iframe 
                    title={`${loc.name} map`}
                    src={loc.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                   ></iframe>
                </div>

                <a 
                  href={loc.externalMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
                >
                  Googleマップで開く
                  <ExternalLink className="ml-3 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-20 bg-jec-green/5 border-2 border-jec-green/20 rounded-[3rem] p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">各教室での見学も随時受付中！</h3>
          <p className="text-slate-600 leading-relaxed mb-0">
            実際のレッスンの様子を見学いただけます。お近くの教室までお気軽にお電話、またはお問い合わせフォームよりご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
