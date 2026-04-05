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
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // Handle responsive resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [weatherData, setWeatherData] = useState<{ text: string; icon: string | null }[]>([
    { text: '32°C  📍 Nellore', icon: '🌡' },
    { text: 'Partly Cloudy  📍 Nellore', icon: '🌤' },
    { text: '32°C  📍 Nellore', icon: '🌡' },
  ]);

  // Fetch real-time weather data for Nellore
  const fetchWeather = async () => {
    try {
      const API_KEY = 'ccd273caeb44889c3edabd9d7393c844';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Nellore,IN&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.main && data.weather && data.weather.length > 0) {
        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].main;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
        setWeatherData([
          { text: `${temp}°C  📍 Nellore`, icon: iconUrl },
          { text: `${condition}  📍 Nellore`, icon: iconUrl },
          { text: `${temp}°C  📍 Nellore`, icon: iconUrl },
        ]);
      }
    } catch (error) {
      console.error('Weather fetch error:', error);
    }
  };

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initial fetch and set interval for weather refresh (every 15 minutes)
  useEffect(() => {
    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(weatherInterval);
  }, []);

  // Rotate weather ticker every 3 seconds
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setWeatherIndex((prev) => (prev + 1) % weatherData.length);
    }, 3000);
    return () => clearInterval(tickerTimer);
  }, [weatherData.length]);

  const formatDateTime = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = isMobile ? shortDays[date.getDay()] : days[date.getDay()];
    const monthName = isMobile ? shortMonths[date.getMonth()] : months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    if (isMobile) {
      return `${dayName}, ${monthName} ${day} | ${hours}:${minutes} ${ampm}`;
    }
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
          <div className="flex items-center font-semibold text-[10px] md:text-xs whitespace-nowrap overflow-hidden flex-shrink-0">
            {formatDateTime(currentTime)}
          </div>
          
          {/* Right: Language, Login, Register + Weather Ticker */}
          <div className="flex items-center gap-1.5 md:gap-4 text-[8px] md:text-xs">
            <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition uppercase`}>{isMobile ? 'EN' : t.header.english}</button>
            <span className="text-[#D1D5DB]">/</span>
            <button onClick={() => setLanguage('te')} className={`${language === 'te' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition`}>{isMobile ? 'తె' : t.header.telugu}</button>
            <span className="text-[#D1D5DB]">/</span>
            <button onClick={() => setLanguage('hi')} className={`${language === 'hi' ? 'text-[#1A6FD4] font-bold' : 'hover:text-[#1A6FD4]'} transition`}>{isMobile ? 'हि' : t.header.hindi}</button>
            <span className="text-[#D1D5DB] inline-block">|</span>
            <Link to="/login" className="hover:text-[#1A6FD4] transition hidden md:inline">{t.header.login}</Link>
            <span className="text-[#D1D5DB] hidden md:inline">/</span>
            <button className="hover:text-[#1A6FD4] transition hidden md:inline">{t.header.register}</button>
            <span className="text-[#D1D5DB] hidden md:inline">|</span>
            {/* Weather Ticker with fade transition */}
            <div className="relative w-36 md:w-56 h-4 md:h-7 overflow-hidden ml-1">
              {weatherData.map((weather, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center transition-opacity duration-500 whitespace-nowrap text-[10px] md:text-[13px] font-medium"
                  style={{
                    opacity: weatherIndex === index ? 1 : 0,
                  }}
                >
                  {weather.icon && weather.icon.startsWith('http') ? (
                    <img src={weather.icon} alt="weather" className="w-7 h-7 md:w-12 md:h-12 object-contain -ml-1.5 md:-ml-2" />
                  ) : (
                    <span className="mr-1.5">{weather.icon}</span>
                  )}
                  <span>{weather.text}</span>
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