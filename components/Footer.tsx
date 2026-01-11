
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
                <span className="text-jec-green text-4xl font-bold tracking-tighter">J</span>
                <span className="text-jec-yellow text-4xl font-bold tracking-tighter">E</span>
                <span className="text-jec-orange text-4xl font-bold tracking-tighter">C</span>
                <span className="ml-2 text-slate-800 text-2xl font-bold">英語教室</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium">
              久喜・越谷に密着し、次世代を担う子供たちの英語力と表現力を育みます。<br />
              英語を通じて、新しい自分に出会える場所。
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/jec_eigo/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:text-jec-orange hover:bg-orange-50 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-slate-800 mb-8 uppercase text-xs tracking-[0.3em]">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-slate-500 hover:text-jec-orange transition-colors font-medium">
                <Mail size={20} className="mr-4 text-jec-orange" />
                <a href="mailto:admin@jec-eigo.com">admin@jec-eigo.com</a>
              </li>
              <li className="flex items-center text-slate-500 font-medium">
                <Phone size={20} className="mr-4 text-jec-orange" />
                <span>070-2158-4162</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-800 mb-8 uppercase text-xs tracking-[0.3em]">Menu</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-slate-500 hover:text-jec-orange transition-colors font-bold">ホーム</a></li>
              <li><a href="#/courses" className="text-slate-500 hover:text-jec-orange transition-colors font-bold">コース案内</a></li>
              <li><a href="#/locations" className="text-slate-500 hover:text-jec-orange transition-colors font-bold">教室案内</a></li>
              <li><a href="#/trial" className="text-jec-orange hover:underline font-bold">無料体験レッスン</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} JEC英語教室. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-600 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-slate-600 transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
