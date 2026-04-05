import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/news', label: t.nav.news },
    { to: '/jobs', label: t.nav.jobs },
    { to: '/updates', label: t.nav.updates },
    { to: '/events', label: t.nav.events },
    { to: '/results', label: t.nav.results },
    { to: '/sports', label: t.nav.sports },
    { to: '/tourism/stay', label: t.nav.tourism },
    { to: '/transportation', label: t.nav.transportation },
    { to: '/offers', label: t.nav.offers },
    { to: '/famous-foods', label: t.nav.famousFoods },
    { to: '/nellore-history', label: t.nav.nelloreHistory },
    { to: '/movies', label: t.nav.movies },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden w-11 h-11 flex items-center justify-center text-[#111827] bg-transparent border-0 cursor-pointer"
        style={{ padding: '8px' }}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[1000]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white shadow-xl z-[1001] transition-transform duration-250 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#F3F4F6]">
          <span className="text-[#1A6FD4] font-bold text-lg">NELLORE.IN</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-[#6B7280] hover:text-[#111827]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>



        {/* Navigation Links */}
        <nav className="overflow-y-auto h-[calc(100%-200px)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block w-full h-12 px-4 flex items-center border-b border-[#F3F4F6] ${
                  isActive
                    ? 'text-[#1A6FD4] border-l-[3px] border-l-[#1A6FD4] bg-[#E6F1FB]'
                    : 'text-[#111827] hover:bg-[#F9FAFB]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#F3F4F6] space-y-2">
          <div className="flex gap-2">
            <Link 
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex-1 px-3 py-2 bg-[#1A6FD4] text-white rounded text-sm hover:bg-[#185FA5] text-center"
            >
              {t.header.login}
            </Link>
            <button className="flex-1 px-3 py-2 border border-[#1A6FD4] text-[#1A6FD4] rounded text-sm hover:bg-[#E6F1FB]">
              {t.header.register}
            </button>
          </div>
          <div className="flex justify-center gap-2 text-sm text-[#6B7280]">
            <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'}>EN</button>
            <span>|</span>
            <button onClick={() => setLanguage('te')} className={language === 'te' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'}>TE</button>
            <span>|</span>
            <button onClick={() => setLanguage('hi')} className={language === 'hi' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'}>HI</button>
          </div>
        </div>
      </div>
    </>
  );
};