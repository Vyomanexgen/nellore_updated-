import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { Trophy, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const SportsPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-80 bg-gradient-to-r from-black/70 to-black/50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=600&fit=crop)`,
            zIndex: -1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="relative max-w-[1280px] mx-auto px-5 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Scores, Fixtures, and Local Sports Updates</h1>
            <p className="text-xl text-white/90">Stay updated with Nellore sports</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F6F8] min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-6">
            <main className="flex-1 min-w-0 py-10">
              {/* Live Scores */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-[#1A6FD4]" />
                  Live Scores
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { team1: 'Nellore Lions', team2: 'City Warriors', score: '125 - 118', status: 'Live' },
                    { team1: 'District FC', team2: 'United SC', score: '2 - 1', status: 'Live' },
                  ].map((match, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-[#111827]">{match.team1}</h3>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                          <span className="w-2 h-2 bg-red-700 rounded-full inline-block mr-1 animate-pulse"></span>
                          {match.status}
                        </Badge>
                      </div>
                      <div className="text-center text-3xl font-bold text-[#111827] mb-4">
                        {match.score}
                      </div>
                      <div className="text-center font-semibold text-[#6B7280]">{match.team2}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Upcoming Events */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#1A6FD4]" />
                  Upcoming Events
                </h2>
                <div className="bg-white rounded-lg border border-[#E5E7EB] divide-y divide-[#E5E7EB] shadow-sm">
                  {[
                    { event: 'District Cricket Championship', date: 'April 20, 2026', venue: 'City Stadium' },
                    { event: 'Football League Finals', date: 'April 28, 2026', venue: 'Sports Complex' },
                    { event: 'Marathon 2026', date: 'May 5, 2026', venue: 'City Center' },
                    { event: 'Badminton Tournament', date: 'May 15, 2026', venue: 'Indoor Stadium' },
                  ].map((event, idx) => (
                    <div key={idx} className="p-4 hover:bg-[#F5F7FA] transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-[#111827] mb-1">{event.event}</h3>
                          <p className="text-sm text-[#6B7280]">{event.venue}</p>
                        </div>
                        <span className="text-sm text-[#1A6FD4] font-medium">{event.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Latest News */}
              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-6">Latest Sports News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: 'Nellore Athlete Wins Gold at State Championship',
                      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop',
                    },
                    {
                      title: 'New Sports Academy Opening Next Month',
                      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop',
                    },
                  ].map((news, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                    >
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-[#111827]">{news.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <AdsColumn ads={homePageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;