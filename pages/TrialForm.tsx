
import React, { useState, useEffect } from 'react';
import { DAYS, SUGGESTIONS, LOCATIONS } from '../constants';
import { LessonType, TrialFormData, Availability } from '../types';
import { 
  Send, CheckCircle, Info, Calendar, Clock as ClockIcon, 
  User, Mail, MessageSquare, ChevronDown, ChevronUp, 
  MapPin, Loader2, GraduationCap, History, Baby, UserCheck
} from 'lucide-react';

/**
 * Access environment variables in a Vite-friendly way.
 */
const GOOGLE_SHEET_URL = (import.meta as any).env?.VITE_GOOGLE_SHEET_URL;

const GRADES = [
  '年少・年中・年長',
  '小学1年生', '小学2年生', '小学3年生', 
  '小学4年生', '小学5年生', '小学6年生',
  '中学1年生', '中学2年生', '中学3年生',
  '高校生以上'
];

const EXPERIENCE_OPTIONS = [
  '未経験 (Beginner)',
  '1年未満',
  '1〜2年',
  '3〜5年',
  '5年以上'
];

const TrialForm: React.FC = () => {
  const [formData, setFormData] = useState<TrialFormData>({
    parentName: '',
    studentName: '',
    email: '',
    isAdult: false,
    age: '',
    grade: '',
    experience: '',
    interests: '',
    lessonType: LessonType.EITHER,
    locationId: 'kuki',
    availabilities: []
  });
  
  const [showSaturday, setShowSaturday] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const WEEKDAY_TIMES = [];
  for (let h = 16; h < 21; h++) {
    WEEKDAY_TIMES.push(`${h}:00`, `${h}:30`);
  }
  WEEKDAY_TIMES.push('21:00');

  const SATURDAY_TIMES = [];
  for (let h = 10; h < 21; h++) {
    SATURDAY_TIMES.push(`${h}:00`, `${h}:30`);
  }
  SATURDAY_TIMES.push('21:00');

  useEffect(() => {
    if (formData.locationId === 'koshigaya') {
      setShowSaturday(false);
      setFormData(prev => ({
        ...prev,
        availabilities: prev.availabilities.filter(a => a.day === 'Thursday')
      }));
    }
  }, [formData.locationId]);

  const toggleAvailability = (day: string, time: string) => {
    if (formData.locationId === 'koshigaya' && day !== 'Thursday') return;

    const exists = formData.availabilities.find(a => a.day === day && a.time === time);
    if (exists) {
      setFormData(prev => ({
        ...prev,
        availabilities: prev.availabilities.filter(a => !(a.day === day && a.time === time))
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        availabilities: [...prev.availabilities, { day, time }]
      }));
    }
  };

  const isChecked = (day: string, time: string) => {
    return formData.availabilities.some(a => a.day === day && a.time === time);
  };

  const isDayDisabled = (day: string) => {
    return formData.locationId === 'koshigaya' && day !== 'Thursday';
  };

  const dayLabelMap: {[key: string]: string} = {
    'Monday': '月', 'Tuesday': '火', 'Wednesday': '水', 'Thursday': '木', 'Friday': '金', 'Saturday': '土'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.availabilities.length < 2) {
      alert("スケジュール調整をスムーズに行うため、恐れ入りますが希望日時を2つ以上選択してください。");
      return;
    }

    if (!GOOGLE_SHEET_URL) {
      console.error('GOOGLE_SHEET_URL is not defined in environment variables.');
      alert('システムの準備が整っていません。Vercelの設定で VITE_GOOGLE_SHEET_URL が登録されているか確認してください。');
      return;
    }

    setIsSubmitting(true);

    // Format availabilities for the spreadsheet
    const formattedAvailabilities = formData.availabilities
      .map(a => `${dayLabelMap[a.day]} ${a.time}`)
      .join(', ');

    // Explicitly construct payload to avoid object-serialization issues in GAS
    const payload = {
      parentName: formData.parentName,
      studentName: formData.isAdult ? '本人' : (formData.studentName || '本人'),
      email: formData.email,
      age: formData.age || 'N/A',
      grade: formData.grade || 'N/A',
      experience: formData.experience || 'なし',
      interests: formData.interests || '特になし',
      lessonType: formData.lessonType,
      locationName: LOCATIONS.find(l => l.id === formData.locationId)?.name || formData.locationId,
      availabilities: formattedAvailabilities,
      submittedAt: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('申し訳ありません。送信中にエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addSuggestion = (field: keyof TrialFormData, val: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof TrialFormData] 
        ? `${prev[field as keyof TrialFormData]}、${val}` 
        : val
    }));
  };

  if (isSubmitted) {
    return (
      <div className="py-32 container mx-auto px-4 md:px-8 max-w-2xl text-center">
        <div className="bg-white p-16 rounded-[3rem] shadow-2xl border border-jec-green/30 animate-in zoom-in duration-500">
          <div className="flex justify-center mb-8">
            <div className="bg-jec-green/20 p-6 rounded-full">
              <CheckCircle className="text-jec-green w-16 h-16" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-slate-800">お申し込み完了！</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            体験レッスンのリクエストを送信しました。<br />
            <span className="font-bold text-slate-800">{formData.email}</span> 宛てに、担当スタッフより詳細確認のメールをお送りします。しばらくお待ちください。
          </p>
          <a href="/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all active:scale-95">
            トップページへ戻る
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <header className="mb-16 text-center">
          <span className="text-jec-orange font-bold tracking-widest uppercase text-sm">Free Trial</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">無料体験レッスン申し込み</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            スケジュール調整のため、<span className="text-jec-orange font-bold underline">複数の候補日時</span>を選択してください。
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-[3rem] overflow-hidden border border-slate-100 relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-50 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-jec-orange animate-spin mb-4" />
              <p className="text-slate-900 font-bold text-xl">送信中...</p>
            </div>
          )}

          <div className="p-8 md:p-16 space-y-12">
            
            {/* Adult Toggle */}
            <div className="flex justify-center">
              <button 
                type="button"
                onClick={() => setFormData({...formData, isAdult: !formData.isAdult})}
                className={`flex items-center space-x-4 px-8 py-4 rounded-2xl border-2 transition-all ${
                  formData.isAdult 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                    : 'bg-white text-slate-600 border-slate-100 hover:border-slate-200'
                }`}
              >
                <UserCheck className={`w-6 h-6 ${formData.isAdult ? 'text-jec-green' : 'text-slate-300'}`} />
                <span className="font-bold text-lg">大人（ご本人）のお申し込みですか？</span>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${formData.isAdult ? 'bg-jec-green' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${formData.isAdult ? 'left-7' : 'left-1'}`}></div>
                </div>
              </button>
            </div>

            {/* Basic Info Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-orange pl-4">基本情報</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center text-sm font-bold text-slate-700 mb-3">
                    <User className="w-4 h-4 mr-2 text-jec-orange" />
                    {formData.isAdult ? 'お名前' : '保護者様のお名前'}
                  </label>
                  <input required type="text" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium" placeholder="例：山田 太郎" />
                </div>
                <div>
                  <label className="flex items-center text-sm font-bold text-slate-700 mb-3">
                    <Mail className="w-4 h-4 mr-2 text-jec-green" />
                    メールアドレス
                  </label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium" placeholder="example@mail.com" />
                </div>
              </div>
            </div>

            {/* Student Details - Hidden if Adult */}
            {!formData.isAdult && (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-yellow pl-4">生徒様の情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <label className="flex items-center text-sm font-bold text-slate-700 mb-3"><User className="w-4 h-4 mr-2 text-jec-yellow" />生徒様のお名前</label>
                    <input required={!formData.isAdult} type="text" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium" placeholder="お子様のお名前" />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-bold text-slate-700 mb-3"><Baby className="w-4 h-4 mr-2 text-jec-green" />年齢</label>
                    <input type="text" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium" placeholder="例：6歳" />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-bold text-slate-700 mb-3"><GraduationCap className="w-4 h-4 mr-2 text-jec-orange" />学年</label>
                    <select value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium bg-white appearance-none cursor-pointer">
                      <option value="">選択してください</option>
                      {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-green pl-4">英語学習歴</h2>
              <div>
                <label className="flex items-center text-sm font-bold text-slate-700 mb-3">
                  <History className="w-4 h-4 mr-2 text-jec-yellow" />
                  これまでの英語学習経験を教えてください
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <textarea rows={2} value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium" placeholder="例：幼稚園で2年、自宅学習など" />
                  <div className="flex flex-wrap gap-2">
                    {EXPERIENCE_OPTIONS.map(opt => (
                      <button key={opt} type="button" onClick={() => setFormData({...formData, experience: opt})} className={`text-xs px-4 py-2 rounded-full border transition-all font-bold ${formData.experience === opt ? 'bg-jec-green border-jec-green text-white shadow-md' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location Selection */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-orange pl-4">希望の教室</h2>
              <div className="flex flex-col md:flex-row gap-6">
                {LOCATIONS.map((loc) => (
                  <label key={loc.id} className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 cursor-pointer transition-all flex-grow ${formData.locationId === loc.id ? 'border-jec-green bg-green-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}>
                    <input type="radio" name="location" checked={formData.locationId === loc.id} onChange={() => setFormData({...formData, locationId: loc.id})} className="hidden" />
                    <MapPin className={`w-8 h-8 mb-3 ${formData.locationId === loc.id ? 'text-jec-green' : 'text-slate-300'}`} />
                    <span className={`font-black text-lg ${formData.locationId === loc.id ? 'text-slate-900' : 'text-slate-500'}`}>{loc.name}</span>
                    {loc.id === 'koshigaya' && <span className="text-xs font-bold text-jec-orange mt-2">※体験は木曜日のみ</span>}
                  </label>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-yellow pl-4">ご希望のレッスン</h2>
              <div>
                <label className="flex items-center text-sm font-bold text-slate-700 mb-3"><MessageSquare className="w-4 h-4 mr-2 text-jec-orange" />具体的なご希望（あれば）</label>
                <textarea rows={3} value={formData.interests} onChange={(e) => setFormData({...formData, interests: e.target.value})} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-jec-orange focus:ring-4 focus:ring-orange-50 outline-none transition-all text-lg font-medium mb-4" placeholder="例：英検対策、日常会話を伸ばしたい..." />
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest self-center mr-2">おすすめ：</span>
                  {SUGGESTIONS.map((sug) => (
                    <button key={sug} type="button" onClick={() => addSuggestion('interests', sug)} className="text-sm bg-slate-50 text-slate-600 px-4 py-2 rounded-full border border-slate-100 hover:bg-jec-orange hover:text-white transition-all font-medium">+ {sug}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-5">形式</label>
                  <div className="flex gap-2">
                    {[ { val: LessonType.GROUP, label: 'グループ' }, { val: LessonType.PRIVATE, label: '個別' }, { val: LessonType.EITHER, label: 'どちらでも' } ].map(({val, label}) => (
                      <button key={val} type="button" onClick={() => setFormData({...formData, lessonType: val})} className={`flex-grow py-3 rounded-xl border-2 font-bold transition-all text-sm ${formData.lessonType === val ? 'border-jec-orange bg-orange-50 text-jec-orange shadow-inner' : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center border-l-4 border-jec-green pl-4">候補日時の選択</h2>
                <span className="text-jec-orange font-bold text-sm bg-orange-50 px-4 py-1 rounded-full animate-bounce">※2つ以上選択してください</span>
              </div>

              {/* Day Grid */}
              <div className="overflow-x-auto bg-slate-50 rounded-[2rem] border border-slate-100 p-4 md:p-8">
                <table className="w-full border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th className="w-20"></th>
                      {WEEKDAYS.map(day => (
                        <th key={day} className={`text-center p-2 font-bold text-sm uppercase tracking-tighter ${isDayDisabled(day) ? 'text-slate-200' : 'text-slate-500'}`}>
                          {dayLabelMap[day]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {WEEKDAY_TIMES.map(time => (
                      <tr key={time}>
                        <td className="text-right pr-4 text-xs font-bold text-slate-400 align-middle">{time}</td>
                        {WEEKDAYS.map(day => {
                          const disabled = isDayDisabled(day);
                          return (
                            <td key={`${day}-${time}`} className="p-0">
                              <button type="button" disabled={disabled} onClick={() => toggleAvailability(day, time)} className={`w-full h-10 rounded-lg border-2 transition-all flex items-center justify-center ${isChecked(day, time) ? 'bg-jec-green border-jec-green text-white shadow-md' : disabled ? 'bg-slate-50 border-slate-50 opacity-20' : 'bg-white border-slate-100 hover:border-slate-300'}`}>
                                {isChecked(day, time) && <CheckCircle className="w-4 h-4" />}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Saturday Toggle */}
              {formData.locationId !== 'koshigaya' && (
                <div className="space-y-4">
                  <button type="button" onClick={() => setShowSaturday(!showSaturday)} className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center transition-all border-2 ${showSaturday ? 'bg-jec-orange text-white border-jec-orange shadow-lg' : 'bg-white text-slate-600 border-slate-100 hover:border-slate-200'}`}>
                    <Calendar className="w-5 h-5 mr-3" />
                    土曜日の時間を表示する (+¥1,000)
                    {showSaturday ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                  </button>
                  {showSaturday && (
                    <div className="bg-orange-50/50 rounded-[2.5rem] border-2 border-orange-100 p-8 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {SATURDAY_TIMES.map(time => (
                          <button key={`Saturday-${time}`} type="button" onClick={() => toggleAvailability('Saturday', time)} className={`px-6 py-3 rounded-xl font-bold border-2 transition-all min-w-[100px] text-center ${isChecked('Saturday', time) ? 'bg-jec-orange border-jec-orange text-white shadow-md' : 'bg-white border-orange-100 text-orange-800 hover:border-orange-300'}`}>
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Selection Summary */}
              <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold flex items-center"><ClockIcon className="w-5 h-5 mr-2 text-jec-yellow" />選択中の日時: {formData.availabilities.length} 件</h3>
                  {formData.availabilities.length < 2 && <span className="text-xs font-bold text-jec-orange">あと {2 - formData.availabilities.length} 件必要です</span>}
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.availabilities.map((a, i) => (
                    <span key={i} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-bold border border-white/10">{dayLabelMap[a.day]} {a.time}</span>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" disabled={formData.availabilities.length < 2 || isSubmitting} className="w-full py-6 bg-jec-orange text-white rounded-2xl font-black text-2xl hover:bg-orange-600 shadow-2xl flex items-center justify-center transition-all hover:scale-[1.01] active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? <span className="flex items-center"><Loader2 className="w-6 h-6 animate-spin mr-3" />送信中...</span> : <>予約リクエストを送信<Send className="ml-4 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
            </button>
            
            <p className="text-center text-slate-400 text-xs font-medium">※ご入力いただいた情報は、体験レッスンのご案内のみに使用いたします。</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrialForm;
