import { useState } from 'react';
import { Link } from 'react-router';
import heroVideo from '../../YTDown.com_YouTube_Media_KUOx4OA8qjQ_002_720p.mp4';
import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { ArrowRight, Calendar, Briefcase, TrendingUp, Clock, MapPin, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [isMuted, setIsMuted] = useState(true);
  
  const featuredNews = [
    {
      id: '1',
      title: 'Nellore Smart City Project Progressing Rapidly',
      image: 'https://images.unsplash.com/photo-1633702738734-443da2c18f3c?w=800&h=500&fit=crop',
      time: '2 hours ago',
      category: 'Infrastructure',
    },
    {
      id: '2',
      title: 'APPSC Group 2 Notification Released for 500 Posts',
      image: 'https://images.unsplash.com/photo-1722684768315-11fc753354f6?w=800&h=500&fit=crop',
      time: '4 hours ago',
      category: 'Jobs',
    },
    {
      id: '3',
      title: 'Annual Cultural Festival to Begin Next Week',
      image: 'https://images.unsplash.com/photo-1774798909993-eecdf8de4472?w=800&h=500&fit=crop',
      time: '6 hours ago',
      category: 'Events',
    },
  ];

  const latestJobs = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Nellore',
      salary: '₹4-6 LPA',
      type: 'Private',
    },
    {
      id: '2',
      title: 'Junior Assistant',
      company: 'Nellore Municipal Corporation',
      location: 'Nellore',
      salary: '₹20,000-30,000',
      type: 'Government',
    },
    {
      id: '3',
      title: 'Marketing Executive',
      company: 'Retail Mart',
      location: 'Nellore',
      salary: '₹3-4 LPA',
      type: 'Private',
    },
  ];

  const featuredEvents = [
    {
      id: '1',
      title: 'Nellore Food Festival 2025',
      date: 'April 15-17, 2026',
      location: 'Nellore Stadium',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    },
    {
      id: '2',
      title: 'Heritage Walk Tour',
      date: 'April 20, 2026',
      location: 'Old City',
      image: 'https://images.unsplash.com/photo-1687674280833-16d188bb3e42?w=400&h=300&fit=crop',
    },
    {
      id: '3',
      title: 'Job Fair 2026',
      date: 'April 25, 2026',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1762504351153-58a41cd486dd?w=400&h=300&fit=crop',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] bg-black overflow-hidden group">
        <video 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.35] md:scale-100"
          style={{ zIndex: 0 }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" style={{ zIndex: 1 }} />
        
        {/* Sound Toggle Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          style={{ zIndex: 3 }}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        
        <div className="relative max-w-[1280px] mx-auto px-5 h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-white text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.home.exploreTitle}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {t.home.exploreSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#F4F6F8]">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-10">
            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <div className="max-w-[1000px]">
                {/* Featured News */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827]">{t.home.featuredNews}</h2>
                    <Link
                      to="/news"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      {t.home.viewAll} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {injectAds(featuredNews, homePageAds, 'news', isMobile).map((item: any, idx: number) => {
                      if (item.type === 'ad') {
                        return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                      }
                      const news = item.data;
                      return (
                        <Link
                          key={news.id}
                          to={`/news/${news.id}`}
                          className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition group"
                        >
                          <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: `url(${news.image})` }}
                          />
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-[#1A6FD4] bg-[#E6F1FB] px-2 py-1 rounded">
                                {news.category}
                              </span>
                              <span className="text-xs text-[#6B7280] flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {news.time}
                              </span>
                            </div>
                            <h3 className="font-semibold text-[#111827] group-hover:text-[#1A6FD4] transition line-clamp-2">
                              {news.title}
                            </h3>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>

                {/* Sponsored Banner */}
                <div className="mb-12 bg-gradient-to-r from-[#1A6FD4] to-[#0A4FAF] rounded-2xl p-8 text-white text-center shadow-lg">
                  <p className="text-xs uppercase tracking-wide mb-2 opacity-80">{t.home.sponsored}</p>
                  <h3 className="text-2xl font-bold mb-2">{t.home.advertiseHere}</h3>
                  <p className="mb-4 opacity-90">{t.home.reachThousands}</p>
                  <Link to="/contact">
                    <Button className="bg-white text-[#1A6FD4] hover:bg-gray-100 font-bold px-8 py-2 shadow-md border-none">
                      {t.home.contactUs}
                    </Button>
                  </Link>
                </div>

                {/* Latest Jobs */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-[#1A6FD4]" />
                      {t.home.latestJobs}
                    </h2>
                    <Link
                      to="/jobs"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      {t.home.viewAll} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {injectAds(latestJobs, homePageAds, 'job', isMobile).map((item: any, idx: number) => {
                      if (item.type === 'ad') {
                        return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                      }
                      const job = item.data;
                      return (
                        <div
                          key={job.id}
                          className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-[#111827]">{job.title}</h3>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                job.type === 'Government'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}
                            >
                              {job.type}
                            </span>
                          </div>
                          <p className="text-sm text-[#6B7280] mb-2">{job.company}</p>
                          <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-3">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[#10B981]">{job.salary}</span>
                            <Button size="sm" className="bg-[#1A6FD4] hover:bg-[#185FA5]">
                              {t.home.apply}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Featured Events */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-[#1A6FD4]" />
                      {t.home.featuredEvents}
                    </h2>
                    <Link
                      to="/events"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      {t.home.viewAll} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {featuredEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <div
                          className="h-40 bg-cover bg-center"
                          style={{ backgroundImage: `url(${event.image})` }}
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-[#111827] mb-2">{event.title}</h3>
                          <p className="text-xs text-[#6B7280] mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </p>
                          <p className="text-xs text-[#6B7280] mb-3 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </p>
                          <Button size="sm" variant="outline" className="w-full border-[#1A6FD4] text-[#1A6FD4] hover:bg-[#E6F1FB]">
                            {t.home.register}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Inline Mobile Ads - Placed optimally between sections to preserve readability */}
                {/* MobileAdsCarousel completely removed, relying solely on inline feed injection */}

                {/* Trending News */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-[#1A6FD4]" />
                      Trending News
                    </h2>
                  </div>

                  <div className="bg-white rounded-lg border border-[#E5E7EB] divide-y divide-[#E5E7EB] shadow-sm">
                    {[
                      'New Metro Rail Project Announced for Nellore',
                      'District Collector Launches Digital Services Portal',
                      'Nellore Ranks Among Top Smart Cities in India',
                      'Annual Budget Allocation Increased by 25%',
                      'Infrastructure Development Projects Fast-Tracked',
                    ].map((title, idx) => (
                      <Link
                        key={idx}
                        to="/news"
                        className="flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition"
                      >
                        <span className="text-sm text-[#111827]">{title}</span>
                        <ArrowRight className="w-4 h-4 text-[#6B7280]" />
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Sports Section */}
                <section className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-[#1A6FD4]" />
                      Sports
                    </h2>
                    <Link
                      to="/sports"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { sport: 'Cricket', match: 'Nellore vs Guntur', score: '145/3 (20 overs)' },
                      { sport: 'Football', match: 'District League Final', score: 'Today 5:00 PM' },
                      { sport: 'Badminton', match: 'State Championship', score: 'Semi-Finals' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg border border-[#E5E7EB] p-4 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <h3 className="font-semibold text-[#111827] mb-2">{item.sport}</h3>
                        <p className="text-sm text-[#6B7280] mb-1">{item.match}</p>
                        <p className="text-xs text-[#10B981] font-medium">{item.score}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Sports Forecast */}
                <section className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-[#1A6FD4]" />
                      Sports Forecast
                    </h2>
                    <Link
                      to="/sports"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
                    <h3 className="font-semibold text-[#111827] mb-3">IPL 2026 - Nellore Franchise</h3>
                    <div className="space-y-2 text-sm text-[#6B7280]">
                      <p><span className="font-medium">Match:</span> Nellore Warriors vs Chennai Super Kings</p>
                      <p><span className="font-medium">Venue:</span> Nellore Cricket Stadium</p>
                      <p><span className="font-medium">Date:</span> April 15, 2026</p>
                      <p><span className="font-medium">Time:</span> 7:30 PM IST</p>
                    </div>
                  </div>
                </section>

                {/* Famous Food */}
                <section className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-[#1A6FD4]" />
                      Famous Food
                    </h2>
                    <Link
                      to="/famous-foods"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { food: 'Nellore Chepala Pulusu', restaurant: 'Sri Venkateswara Hotel' },
                      { food: 'Kaja Sweet', restaurant: 'Famous Sweets Corner' },
                      { food: 'Ulava Charu', restaurant: 'Traditional Kitchen' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <div className="h-40 bg-[#E5E7EB] flex items-center justify-center">
                          <div className="text-[#9CA3AF] text-5xl">🍽️</div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#111827] mb-1">{item.food}</h3>
                          <p className="text-sm text-[#6B7280]">{item.restaurant}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Results */}
                <section className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-[#1A6FD4]" />
                      Results
                    </h2>
                    <Link
                      to="/results"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { exam: 'SSC 10th Class', board: 'AP Board', status: 'Published' },
                      { exam: 'Intermediate Results', board: 'Board of Intermediate', status: 'Published' },
                      { exam: 'EAMCET 2026', board: 'JNTU', status: 'Declared' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg border border-[#E5E7EB] p-4 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-[#111827]">{item.exam}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-[#6B7280]">{item.board}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Movies */}
                <section className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#111827] flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-[#1A6FD4]" />
                      Movies
                    </h2>
                    <Link
                      to="/movies"
                      className="text-sm text-[#1A6FD4] hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { title: 'Nellore Veerudu', genre: 'Action', release: 'April 10, 2026' },
                      { title: 'Penna Paatalu', genre: 'Drama', release: 'April 15, 2026' },
                      { title: 'Coastal Dreams', genre: 'Romance', release: 'April 20, 2026' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <div className="h-48 bg-[#E5E7EB] flex items-center justify-center">
                          <div className="text-[#9CA3AF] text-6xl">🎬</div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-[#111827] mb-1">{item.title}</h3>
                          <p className="text-sm text-[#6B7280] mb-1">{item.genre}</p>
                          <p className="text-xs text-[#10B981]">{item.release}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </main>

            {/* Right Ads Column */}
            <div className="">
              <AdsColumn ads={homePageAds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;