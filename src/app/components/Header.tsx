import { Link, useLocation } from 'react-router';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherIndex, setWeatherIndex] = useState(0);

  const weatherData = [
    '🌡 32°C  📍 Nellore',
    '🌤 Partly Cloudy  📍 Nellore',
    '🌡 32°C  📍 Nellore',
  ];

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotate weather ticker every 3 seconds
  useEffect(() => {
    const weatherTimer = setInterval(() => {
      setWeatherIndex((prev) => (prev + 1) % weatherData.length);
    }, 3000);
    return () => clearInterval(weatherTimer);
  }, []);

  const formatDateTime = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    return `${dayName}, ${monthName} ${day}, ${year}  |  ${hours}:${minutes} ${ampm}`;
  };
  
  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.news, path: '/news' },
    { label: t.nav.jobs, path: '/jobs' },
    { label: t.nav.updates, path: '/updates' },
    { label: t.nav.events, path: '/events' },
    { label: t.nav.results, path: '/results' },
    { label: t.nav.sports, path: '/sports' },
    { label: t.nav.tourism, path: '/tourism/stay' },
    { label: t.nav.transportation, path: '/transportation' },
    { label: t.nav.offers, path: '/offers' },
    { label: t.nav.famousFoods, path: '/famous-foods' },
    { label: t.nav.nelloreHistory, path: '/nellore-history' },
    { label: t.nav.movies, path: '/movies' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      {/* Top Bar */}
      <div className="bg-[#F0F4FF] border-b border-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-5 h-9 flex items-center justify-between text-xs md:text-xs text-[#6B7280]">
          {/* Left: Live Clock */}
          <div className="flex items-center font-medium text-[10px] md:text-xs">
            {formatDateTime(currentTime)}
          </div>
          
          {/* Right: Language, Login, Register + Weather Ticker */}
          <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-xs">
            <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition hidden md:inline`}>{t.header.english}</button>
            <span className="text-[#D1D5DB] hidden md:inline">/</span>
            <button onClick={() => setLanguage('te')} className={`${language === 'te' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition hidden md:inline`}>{t.header.telugu}</button>
            <span className="text-[#D1D5DB] hidden md:inline">/</span>
            <button onClick={() => setLanguage('hi')} className={`${language === 'hi' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition hidden md:inline`}>{t.header.hindi}</button>
            <span className="text-[#D1D5DB] hidden md:inline">|</span>
            <Link to="/login" className="hover:text-[#1A6FD4] transition hidden md:inline">{t.header.login}</Link>
            <span className="text-[#D1D5DB] hidden md:inline">/</span>
            <button className="hover:text-[#1A6FD4] transition hidden md:inline">{t.header.register}</button>
            <span className="text-[#D1D5DB] hidden md:inline">|</span>
            {/* Weather Ticker with fade transition */}
            <div className="relative w-32 md:w-44 h-4 overflow-hidden">
              {weatherData.map((weather, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center transition-opacity duration-500"
                  style={{
                    opacity: weatherIndex === index ? 1 : 0,
                  }}
                >
                  {weather}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A6FD4] to-[#0A4FAF] flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <h1 className="text-2xl font-bold text-[#1A6FD4]">NELLORE.IN</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-[13px] transition-all relative ${
                  isActive(item.path)
                    ? 'text-[#1A6FD4] font-semibold'
                    : 'text-[#6B7280] hover:text-[#1A6FD4]'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A6FD4]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Menu */}
          <div className="flex items-center gap-3">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;