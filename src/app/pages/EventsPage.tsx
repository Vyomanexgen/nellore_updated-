import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

const EventsPage = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const events = [
    {
      id: '1',
      title: 'Nellore Food Festival 2026',
      date: 'April 15-17, 2026',
      location: 'Nellore Stadium',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      registrations: 2500,
    },
    {
      id: '2',
      title: 'Heritage Walk & Cultural Tour',
      date: 'April 20, 2026',
      location: 'Old City Heritage Sites',
      image: 'https://images.unsplash.com/photo-1687674280833-16d188bb3e42?w=400&h=300&fit=crop',
      registrations: 450,
    },
    {
      id: '3',
      title: 'Nellore Job Fair 2026',
      date: 'April 25, 2026',
      location: 'Convention Center',
      image: 'https://images.unsplash.com/photo-1762504351153-58a41cd486dd?w=400&h=300&fit=crop',
      registrations: 1800,
    },
    {
      id: '4',
      title: 'Tech Innovation Summit',
      date: 'May 5-6, 2026',
      location: 'IT Park Auditorium',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      registrations: 600,
    },
    {
      id: '5',
      title: 'Sports Meet - District Level',
      date: 'May 10-12, 2026',
      location: 'Sports Complex',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
      registrations: 3200,
    },
    {
      id: '6',
      title: 'Book Fair & Literature Festival',
      date: 'May 18-20, 2026',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      registrations: 850,
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Upcoming Events</h1>
              <p className="text-[#6B7280]">Discover and register for local events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {injectAds(events, homePageAds, 'event', isMobile).map((item: any, idx: number) => {
                if (item.type === 'ad') {
                  return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                }
                const event = item.data;
                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="p-5">
                      <h3 className="font-semibold text-[#111827] mb-3">{event.title}</h3>
                      <div className="space-y-2 text-sm text-[#6B7280] mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {event.registrations} registered
                        </div>
                      </div>
                      <Button className="w-full bg-[#1A6FD4] hover:bg-[#185FA5]">
                        Register Now
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          <div className="">
            <AdsColumn ads={homePageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;