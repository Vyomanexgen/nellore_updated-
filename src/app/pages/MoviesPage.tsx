import AdsColumn, { moviesPageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';

const MoviesPage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const movies = [
    {
      id: '1',
      title: 'Nellore Veerudu',
      genre: 'Action',
      year: '2025',
    },
    {
      id: '2',
      title: 'Penna Paatalu',
      genre: 'Drama',
      year: '2024',
    },
    {
      id: '3',
      title: 'Coastal Dreams',
      genre: 'Romance',
      year: '2026',
    },
    {
      id: '4',
      title: 'Heritage Quest',
      genre: 'Adventure',
      year: '2025',
    },
    {
      id: '5',
      title: 'City Lights',
      genre: 'Thriller',
      year: '2024',
    },
    {
      id: '6',
      title: 'Telugu Pride',
      genre: 'Biography',
      year: '2026',
    },
  ];

  const upcomingScreenings = [
    {
      id: '1',
      name: 'Nellore Film Festival 2026',
      venue: 'City Multiplex',
      date: 'April 10, 2026',
      time: '6:00 PM',
    },
    {
      id: '2',
      name: 'Classic Cinema Screening',
      venue: 'Heritage Theater',
      date: 'April 15, 2026',
      time: '7:30 PM',
    },
    {
      id: '3',
      name: 'Telugu Movie Marathon',
      venue: 'Grand Cinema Hall',
      date: 'April 20, 2026',
      time: '5:00 PM',
    },
    {
      id: '4',
      name: 'Regional Film Showcase',
      venue: 'Community Center',
      date: 'April 25, 2026',
      time: '6:30 PM',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-[22px] font-semibold text-[#111827] mb-2">Nellore Movies</h1>
              <p className="text-[13px] text-[#6B7280]">Local films, Telugu cinema events and screenings</p>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {injectAds(movies, moviesPageAds, 'generic', isMobile).map((item: any, idx: number) => {
                if (item.type === 'ad') {
                  return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                }
                const movie = item.data;
                return (
                  <div
                    key={movie.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                  >
                    <div className="h-[200px] bg-[#E5E7EB] flex items-center justify-center">
                      <div className="text-[#9CA3AF] text-5xl">🎬</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[15px] text-[#111827] mb-2">{movie.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-[#E6F1FB] text-[#1A6FD4] px-2 py-1 rounded font-medium">
                          {movie.genre}
                        </span>
                        <span className="text-[13px] text-[#6B7280]">{movie.year}</span>
                      </div>
                      <a
                        href="#"
                        className="text-[13px] text-[#1A6FD4] hover:underline"
                      >
                        Watch Trailer
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Upcoming Screenings */}
            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-6">Upcoming Screenings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {upcomingScreenings.map((screening) => (
                  <div
                    key={screening.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                  >
                    <h3 className="font-semibold text-[15px] text-[#111827] mb-3">{screening.name}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-medium">Venue:</span> {screening.venue}
                      </p>
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-medium">Date:</span> {screening.date}
                      </p>
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-medium">Time:</span> {screening.time}
                      </p>
                    </div>
                    <Button className="w-full bg-[#1A6FD4] hover:bg-[#0A4FAF] text-white" onClick={() => navigate(`/booking/${screening.id}`, { state: { screening } })}>
                      Book Ticket
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Ads Column */}
          <div className="">
            <AdsColumn ads={moviesPageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;