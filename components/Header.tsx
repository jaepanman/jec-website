
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'ホーム', path: '/' },
    { name: 'コース', path: '/courses' },
    { name: '教室', path: '/locations' },
    { name: '無料体験', path: '/trial', highlight: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-50">
      <div className="container mx-auto px-3 sm:px-6 md:px-8 h-20 flex items-center justify-between gap-2">
        {/* Logo Section */}
        <Link to="/" className="flex items-center shrink-0 group">
          <div className="flex items-center">
             <span className="text-jec-green text-2xl md:text-3xl font-black tracking-tighter">J</span>
             <span className="text-jec-yellow text-2xl md:text-3xl font-black tracking-tighter">E</span>
             <span className="text-jec-orange text-2xl md:text-3xl font-black tracking-tighter">C</span>
             <span className="ml-1 sm:ml-2 text-slate-800 text-xs sm:text-sm md:text-lg font-black tracking-tight whitespace-nowrap">英語教室</span>
          </div>
        </Link>

        {/* Persistent Navigation Buttons */}
        <nav className="flex items-center space-x-1 sm:space-x-3 md:space-x-6 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] sm:text-xs md:text-sm font-black transition-all whitespace-nowrap px-2 sm:px-3 py-2 rounded-full flex items-center justify-center ${
                link.highlight 
                  ? 'bg-jec-orange text-white shadow-md hover:bg-orange-600 hover:shadow-lg active:scale-95 ml-1 sm:ml-2 px-3 sm:px-5' 
                  : location.pathname === link.path 
                    ? 'text-jec-orange bg-orange-50' 
                    : 'text-slate-600 hover:text-jec-orange hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
