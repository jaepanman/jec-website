
import React from 'react';
import { COURSES } from '../constants';
import { Clock, Target, Info, CheckCircle2 } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-jec-orange font-bold tracking-widest uppercase text-sm">Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-8">コース案内</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            幼児から中学生まで、一人ひとりの目的やレベルに合わせた多彩なコースをご用意しています。<br className="hidden md:block" />
            ※詳しい料金については、体験レッスン時にご案内いたします。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white border-t-8 ${course.colorClass} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col h-full border-x border-b border-slate-100 group`}
            >
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-400 uppercase tracking-tighter mb-1">{course.name}</h2>
                  <h3 className="text-2xl font-bold text-slate-800">{course.nameJp}</h3>
                </div>
                
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{course.description}</p>
                
                <div className="space-y-4 bg-slate-50 p-5 rounded-2xl group-hover:bg-white transition-colors duration-300">
                  <div className="flex items-center text-sm text-slate-600">
                    <Target className="w-5 h-5 text-jec-orange mr-3" />
                    <span className="font-bold text-slate-800 mr-2">対象:</span> {course.target}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-5 h-5 text-jec-orange mr-3" />
                    <span className="font-bold text-slate-800 mr-2">時間:</span> {course.duration}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-xs text-slate-400">
                <Info className="w-4 h-4 mr-2" />
                各教室の空き状況はお問い合わせください。
              </div>
            </div>
          ))}
        </div>

        {/* Private Lesson Special Card */}
        <div className="mt-20 relative bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-jec-yellow/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">プライベートレッスン</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                マンツーマンでじっくり学びたい方のために、30分、45分、60分の個別指導も行っています。
                苦手分野の克服や、英検対策、集中的な会話練習など、目的に合わせたカリキュラムを作成します。
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['完全オーダーメイド', '自分のペースで', '試験対策に強い'].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-jec-green mr-3" />
                プライベートのメリット
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-jec-green/20 text-jec-green rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1 shrink-0">1</span>
                  <p className="text-slate-300">講師を独り占めできるので、発話量が圧倒的に多い。</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-jec-yellow/20 text-jec-yellow rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1 shrink-0">2</span>
                  <p className="text-slate-300">わからないところをその場ですぐに質問・解決できる。</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-jec-orange/20 text-jec-orange rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1 shrink-0">3</span>
                  <p className="text-slate-300">急な用事でのスケジュール調整も柔軟に対応。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
