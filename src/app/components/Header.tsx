import { Link, useLocation } from 'react-router';
import { Menu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherIndex, setWeatherIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const [weatherData, setWeatherData] = useState<{ text: string; icon: string | null }[]>([
    { text: '32°C  ·  Nellore', icon: '🌡' },
    { text: 'Partly Cloudy  ·  Nellore', icon: '🌤' },
  ]);

  // Scroll detection for navbar transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchWeather = async () => {
    try {
      const API_KEY = 'ccd273caeb44889c3edabd9d7393c844';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Nellore,IN&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.main && data.weather?.length > 0) {
        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].main;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setWeatherData([
          { text: `${temp}°C  ·  Nellore`, icon: iconUrl },
          { text: `${condition}  ·  Nellore`, icon: iconUrl },
        ]);
      }
    } catch {}
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeather();
    const wi = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(wi);
  }, []);

  useEffect(() => {
    const tt = setInterval(() => {
      setWeatherIndex(prev => (prev + 1) % weatherData.length);
    }, 3500);
    return () => clearInterval(tt);
  }, [weatherData.length]);

  const formatDateTime = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${dayName}, ${monthName} ${day}  ·  ${hours}:${minutes} ${ampm}`;
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

  // Determine if we're on the home page (hero video behind header)
  const isHome = location.pathname === '/';

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(15, 23, 42, 0.94)'
          : 'rgba(15, 23, 42, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(201, 163, 78, 0.2)'
          : '1px solid transparent',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(0,0,0,0.18)',
        }}
      >
        <div
          className="max-w-[1140px] mx-auto px-6"
          style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Live Clock */}
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'rgba(248,250,252,0.55)',
              whiteSpace: 'nowrap',
            }}
          >
            {formatDateTime(currentTime)}
          </div>

          {/* Right: Language + Weather */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Language selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {[
                { code: 'en', label: isMobile ? 'EN' : 'English' },
                { code: 'te', label: isMobile ? 'తె' : 'Telugu' },
                { code: 'hi', label: isMobile ? 'हि' : 'Hindi' },
              ].map(({ code, label }, i, arr) => (
                <span key={code} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => setLanguage(code as any)}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '10px',
                      fontWeight: language === code ? 600 : 400,
                      letterSpacing: '0.06em',
                      color: language === code ? '#C9A34E' : 'rgba(248,250,252,0.5)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.3s',
                      textTransform: 'uppercase',
                    }}
                  >
                    {label}
                  </button>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }}>|</span>}
                </span>
              ))}
            </div>

            {/* Separator */}
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '12px' }}>·</span>

            {/* Weather ticker */}
            <div style={{ position: 'relative', width: '140px', height: '20px', overflow: 'hidden' }}>
              {weatherData.map((weather, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    opacity: weatherIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-out',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: 'rgba(248,250,252,0.6)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {weather.icon && weather.icon.startsWith('http') ? (
                    <img src={weather.icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                  ) : (
                    <span>{weather.icon}</span>
                  )}
                  <span>{weather.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1140px] mx-auto px-6">
        <div style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid rgba(201,163,78,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(201,163,78,0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#C9A34E',
                }}
              >
                N
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                }}
              >
                NELLORE
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '8px',
                  fontWeight: 400,
                  letterSpacing: '0.25em',
                  color: '#C9A34E',
                  textTransform: 'uppercase',
                  marginTop: '-2px',
                }}
              >
                .IN
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  letterSpacing: '0.04em',
                  color: isActive(item.path) ? '#C9A34E' : 'rgba(248,250,252,0.7)',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease-out',
                  position: 'relative',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  if (!isActive(item.path)) (e.target as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  if (!isActive(item.path)) (e.target as HTMLElement).style.color = 'rgba(248,250,252,0.7)';
                }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '12px',
                      right: '12px',
                      height: '1.5px',
                      background: '#C9A34E',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;