import { Outlet, useLocation, Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { homePageAds, newsPageAds, jobsPageAds, tourismPageAds, moviesPageAds } from './AdsColumn';
import { useLanguage } from '../context/LanguageContext';

const Root = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  

  // Determine which ads to show based on the route
  const getAdsForRoute = () => {
    const path = location.pathname;
    if (path === '/') return homePageAds;
    if (path.startsWith('/news')) return newsPageAds;
    if (path.startsWith('/jobs')) return jobsPageAds;
    if (path.startsWith('/tourism') || path.startsWith('/famous-foods') || path.startsWith('/nellore-history')) return tourismPageAds;
    if (path.startsWith('/movies') || path.startsWith('/booking')) return moviesPageAds;
    return homePageAds; // Default
  };

  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col overflow-x-hidden">
      <Header />
      {isHomePage && <NewsTicker />}
      <main className="flex-1">
        <Outlet />
        {/* Native Mobile Ads Carousel - Removed in favor of native inline feed ads */}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Icon (Large screens only) */}
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-5 right-5 w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all items-center justify-center z-50 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

const NewsTicker = () => {
  const { t } = useLanguage();
  const headlines = [
    'New Metro Rail Project Announced for Nellore',
    'District Collector Launches Digital Services Portal',
    'Nellore Ranks Among Top Smart Cities in India',
    'Annual Budget Allocation Increased by 25%',
    'Infrastructure Development Projects Fast-Tracked',
  ];

  return (
    <div className="bg-white border-b border-[#E0E4EA] h-9 flex items-center px-4 overflow-hidden">
      <div className="flex items-center gap-3">
        <Link 
          to="/news" 
          className="bg-red-600 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap font-medium animate-glow hover:brightness-110 transition cursor-pointer flex-shrink-0"
        >
          {t.home.latestNews}
        </Link>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap text-[13px] text-[#374151]">
            {headlines.join(' • ')} • {headlines.join(' • ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;