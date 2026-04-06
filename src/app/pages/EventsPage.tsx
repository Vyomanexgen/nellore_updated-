import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const EventsPage = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { t } = useLanguage();
  const ref = useFadeIn();

  const events = [
    {
      id: '1',
      title: 'Nellore Food Festival 2026',
      date: 'April 15–17, 2026',
      location: 'Nellore Stadium',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      registrations: 2500,
      category: 'Food & Culture',
    },
    {
      id: '2',
      title: 'Heritage Walk & Cultural Tour',
      date: 'April 20, 2026',
      location: 'Old City Heritage Sites',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
      registrations: 450,
      category: 'Heritage',
    },
    {
      id: '3',
      title: 'Nellore Career Fair 2026',
      date: 'April 25, 2026',
      location: 'Convention Centre',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      registrations: 1800,
      category: 'Careers',
    },
    {
      id: '4',
      title: 'Tech Innovation Summit',
      date: 'May 5–6, 2026',
      location: 'IT Park Auditorium',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      registrations: 600,
      category: 'Technology',
    },
    {
      id: '5',
      title: 'District Sports Meet',
      date: 'May 10–12, 2026',
      location: 'Sports Complex',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      registrations: 3200,
      category: 'Sports',
    },
    {
      id: '6',
      title: 'Book Fair & Literature Festival',
      date: 'May 18–20, 2026',
      location: 'City Centre',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      registrations: 850,
      category: 'Literature',
    },
  ];

  return (
    <div ref={ref} style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* ── Page Hero ── */}
      <div
        style={{
          position: 'relative',
          height: '280px',
          background: '#0F172A',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '12px' }}>
            {t.events.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
            {t.events.title}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <main style={{ flex: 1, minWidth: 0, paddingTop: '64px', paddingBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {injectAds(events, homePageAds, 'event', isMobile).map((item: any, idx: number) => {
                if (item.type === 'ad') return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                const event = item.data;
                return (
                  <div
                    key={event.id}
                    className="fade-in-up img-zoom"
                    style={{
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#fff',
                      border: '1px solid rgba(226,232,240,0.7)',
                      boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
                      animationDelay: `${(idx % 3) * 0.1}s`,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 40px rgba(15,23,42,0.10)'; el.style.borderColor = 'rgba(201,163,78,0.3)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 16px rgba(15,23,42,0.05)'; el.style.borderColor = 'rgba(226,232,240,0.7)'; }}
                  >
                    {/* Image */}
                    <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                      <div
                        className="img-inner"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${event.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 55%)' }} />
                      {/* Category tag */}
                      <span style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#0F172A',
                        background: '#C9A34E',
                        padding: '4px 10px',
                        borderRadius: '2px',
                      }}>
                        {event.category}
                      </span>
                      {/* Date overlay */}
                      <div style={{ position: 'absolute', bottom: '14px', left: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={12} color="#C9A34E" />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: 'rgba(248,250,252,0.85)' }}>{event.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '20px 22px 22px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                        {event.title}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <MapPin size={12} color="#94A3B8" />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B' }}>{event.location}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Users size={12} color="#94A3B8" />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B' }}>{event.registrations.toLocaleString()} registered</span>
                        </div>
                      </div>
                      <button
                        className="btn-gold"
                        style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '11px 20px' }}
                      >
                        {t.events.registerNow} <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          <div style={{ display: isMobile ? 'none' : 'block' }}>
            <AdsColumn ads={homePageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;