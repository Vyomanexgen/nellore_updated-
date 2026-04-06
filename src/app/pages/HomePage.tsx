import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import heroVideo from '../../YTDown.com_YouTube_Media_KUOx4OA8qjQ_002_720p.mp4';
import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { ArrowRight, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/* ── Intersection-observer fade-in ──────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const items = el.querySelectorAll('.fade-in-up');
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Section Heading ─────────────────────────────────────── */
const SectionHeading = ({
  eyebrow,
  title,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) => (
  <div className={className}>
    {eyebrow && (
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C9A34E',
          display: 'block',
          marginBottom: '10px',
        }}
      >
        {eyebrow}
      </span>
    )}
    <h2
      style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 700,
        color: '#0F172A',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        marginBottom: '12px',
      }}
    >
      {title}
    </h2>
    <div style={{ width: '40px', height: '2px', background: '#C9A34E' }} />
  </div>
);

/* ── Luxury Card ─────────────────────────────────────────── */
const LuxCard = ({
  image,
  eyebrow,
  title,
  meta,
  to,
  delay = 0,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  to: string;
  delay?: number;
}) => (
  <Link
    to={to}
    className="fade-in-up"
    style={{
      display: 'block',
      borderRadius: '12px',
      overflow: 'hidden',
      background: '#fff',
      border: '1px solid rgba(226,232,240,0.8)',
      boxShadow: '0 2px 20px rgba(15,23,42,0.05)',
      textDecoration: 'none',
      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
      animationDelay: `${delay}s`,
    }}
    onMouseEnter={e => {
      const el = e.currentTarget;
      el.style.transform = 'translateY(-4px)';
      el.style.boxShadow = '0 16px 48px rgba(15,23,42,0.12)';
      el.style.borderColor = 'rgba(201,163,78,0.35)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget;
      el.style.transform = '';
      el.style.boxShadow = '0 2px 20px rgba(15,23,42,0.05)';
      el.style.borderColor = 'rgba(226,232,240,0.8)';
    }}
  >
    {/* Image */}
    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.9s ease-out',
        }}
        className="img-inner"
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 60%)',
        }}
      />
      {eyebrow && (
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0F172A',
            background: '#C9A34E',
            padding: '4px 10px',
            borderRadius: '2px',
          }}
        >
          {eyebrow}
        </span>
      )}
    </div>
    {/* Content */}
    <div style={{ padding: '20px 22px 22px' }}>
      {meta && (
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            color: '#94A3B8',
            letterSpacing: '0.06em',
            marginBottom: '8px',
          }}
        >
          {meta}
        </p>
      )}
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.05rem',
          fontWeight: 600,
          color: '#0F172A',
          lineHeight: 1.4,
          marginBottom: 0,
        }}
      >
        {title}
      </h3>
    </div>
  </Link>
);

/* ════════════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════════════ */
const HomePage = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [isMuted, setIsMuted] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const pageRef = useFadeIn();

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const featuredNews = [
    {
      id: '1',
      title: 'Nellore Smart City Initiative Accelerates Into Its Next Chapter',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop',
      time: '2 hours ago',
      category: 'Infrastructure',
    },
    {
      id: '2',
      title: 'APPSC Group 2: 500 Positions Open Across Administrative Roles',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
      time: '4 hours ago',
      category: 'Careers',
    },
    {
      id: '3',
      title: 'Annual Cultural Festival Returns to Nellore This Season',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop',
      time: '6 hours ago',
      category: 'Culture',
    },
  ];

  const latestJobs = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Nellore',
      salary: '₹4–6 LPA',
      type: 'Private',
    },
    {
      id: '2',
      title: 'Junior Assistant',
      company: 'Nellore Municipal Corporation',
      location: 'Nellore',
      salary: '₹20,000–30,000',
      type: 'Government',
    },
    {
      id: '3',
      title: 'Marketing Executive',
      company: 'Retail Mart',
      location: 'Nellore',
      salary: '₹3–4 LPA',
      type: 'Private',
    },
  ];

  const featuredEvents = [
    {
      id: '1',
      title: 'Nellore Food Festival 2026',
      date: 'April 15–17, 2026',
      location: 'Nellore Stadium',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    },
    {
      id: '2',
      title: 'Heritage Walk Through the Old City',
      date: 'April 20, 2026',
      location: 'Old City Quarter',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
    },
    {
      id: '3',
      title: 'Nellore Career Fair 2026',
      date: 'April 25, 2026',
      location: 'Convention Centre',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    },
  ];

  const famousFoods = [
    {
      name: 'Nellore Chepala Pulusu',
      note: 'Signature coastal fish curry',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=400&fit=crop',
    },
    {
      name: 'Gongura Mutton',
      note: 'Slow-cooked with tangy sorrel leaves',
      image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&h=400&fit=crop',
    },
    {
      name: 'Pesarattu & Upma',
      note: 'The quintessential Andhra breakfast',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop',
    },
  ];

  const trendingHeadlines = [
    'Metro Rail Feasibility Study Approved for Nellore District',
    'District Collector Launches Integrated Digital Services Portal',
    'Nellore Recognised Among India\'s Top Smart Cities 2026',
    'Annual Infrastructure Budget Expanded by 25%',
    'Coastal Road Development Projects Fast-Tracked',
  ];

  return (
    <div ref={pageRef} style={{ background: '#F8FAFC' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
          background: '#0F172A',
          overflow: 'hidden',
        }}
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            animation: 'slowZoom 14s ease-out forwards',
            transform: isMobile ? 'scale(1.35)' : 'scale(1)',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 60%, rgba(15,23,42,0.6) 100%)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to top, #F8FAFC, transparent)',
            zIndex: 2,
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#C9A34E',
                marginBottom: '20px',
                opacity: heroLoaded ? 1 : 0,
                transition: 'opacity 0.9s ease-out 0.2s',
              }}
            >
              Andhra Pradesh, India
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                opacity: heroLoaded ? 1 : 0,
                transition: 'opacity 0.9s ease-out 0.35s',
              }}
            >
              {t.home.nellore} —<br />
              <em style={{ fontWeight: 400 }}>{t.home.heroTagline}</em>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                color: 'rgba(248,250,252,0.7)',
                lineHeight: 1.8,
                marginBottom: '40px',
                maxWidth: '480px',
                margin: '0 auto 40px',
                opacity: heroLoaded ? 1 : 0,
                transition: 'opacity 0.9s ease-out 0.5s',
              }}
            >
              Where ancient traditions meet serene coastal beauty.
              A city that reveals itself slowly, and stays with you forever.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                opacity: heroLoaded ? 1 : 0,
                transition: 'opacity 0.9s ease-out 0.65s',
              }}
            >
              <Link to="/tourism/stay" className="btn-gold">
                Explore Nellore
                <ArrowRight size={14} />
              </Link>
              <Link to="/nellore-history" className="btn-gold-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
                Our Heritage
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              opacity: heroLoaded ? 0.7 : 0,
              transition: 'opacity 0.9s ease-out 1s',
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(248,250,252,0.5)',
              }}
            >
              Scroll
            </span>
            <ChevronDown
              size={16}
              color="rgba(248,250,252,0.4)"
              style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Mute toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 4,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────── */}
      <div style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>

            {/* ── Left: Main Content ── */}
            <main style={{ flex: 1, minWidth: 0 }}>

              {/* ── FEATURED NEWS ─────────────────────────── */}
              <section style={{ padding: '80px 0 60px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                  <SectionHeading eyebrow="Latest" title={t.home.featuredNews} />
                  <Link to="/news" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A34E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t.home.viewAll} <ArrowRight size={12} />
                  </Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                  {injectAds(featuredNews, homePageAds, 'news', isMobile).map((item: any, idx: number) => {
                    if (item.type === 'ad') return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                    const news = item.data;
                    return (
                      <LuxCard
                        key={news.id}
                        to={`/news/${news.id}`}
                        image={news.image}
                        eyebrow={news.category}
                        title={news.title}
                        meta={news.time}
                        delay={idx * 0.1}
                      />
                    );
                  })}
                </div>
              </section>

              {/* ── VISUAL SILENCE — full-width image + single line ── */}
              <section
                className="lux-silence fade-in-up"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=500&fit=crop)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  borderRadius: '16px',
                  marginBottom: '80px',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.62)', borderRadius: '16px' }} />
                <p className="silence-text">
                  "Discover a coast that whispers,<br />rather than shouts."
                </p>
              </section>

              {/* ── CAREER OPPORTUNITIES ──────────────────── */}
              <section style={{ paddingBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                  <SectionHeading eyebrow="Opportunities" title={t.home.latestJobs} />
                  <Link to="/jobs" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A34E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t.home.viewAll} <ArrowRight size={12} />
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {injectAds(latestJobs, homePageAds, 'job', isMobile).map((item: any, idx: number) => {
                    if (item.type === 'ad') return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                    const job = item.data;
                    return (
                      <div
                        key={job.id}
                        className="fade-in-up lux-card"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '20px 24px',
                          gap: '20px',
                          flexWrap: 'wrap',
                          animationDelay: `${idx * 0.1}s`,
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#0F172A', margin: 0 }}>
                              {job.title}
                            </h3>
                            <span
                              style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: '10px',
                                fontWeight: 500,
                                letterSpacing: '0.06em',
                                padding: '2px 8px',
                                borderRadius: '3px',
                                background: job.type === 'Government' ? 'rgba(16,185,129,0.1)' : 'rgba(30,58,138,0.08)',
                                color: job.type === 'Government' ? '#059669' : '#1E3A8A',
                              }}
                            >
                              {job.type}
                            </span>
                          </div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B', margin: 0 }}>
                            {job.company} · {job.location}
                          </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 600, color: '#C9A34E' }}>
                            {job.salary}
                          </span>
                          <Link to="/jobs" className="btn-gold" style={{ padding: '8px 20px', fontSize: '11px' }}>
                            Apply
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── FEATURED EVENTS ───────────────────────── */}
              <section style={{ paddingBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                  <SectionHeading eyebrow="Upcoming" title={t.home.featuredEvents} />
                  <Link to="/events" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A34E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {t.home.viewAll} <ArrowRight size={12} />
                  </Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                  {featuredEvents.map((event, idx) => (
                    <LuxCard
                      key={event.id}
                      to="/events"
                      image={event.image}
                      title={event.title}
                      meta={`${event.date}  ·  ${event.location}`}
                      delay={idx * 0.1}
                    />
                  ))}
                </div>
              </section>

              {/* ── FAMOUS FOOD ───────────────────────────── */}
              <section
                style={{
                  paddingBottom: '80px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                  <SectionHeading eyebrow="Cuisine" title="The Flavours of Nellore" />
                  <Link to="/famous-foods" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C9A34E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Explore More <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Editorial: first item large, rest small */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Large feature */}
                  <div
                    className="fade-in-up img-zoom"
                    style={{
                      gridRow: 'span 2',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      position: 'relative',
                      minHeight: '380px',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      className="img-inner"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${famousFoods[0].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '8px' }}>{famousFoods[0].note}</p>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: 0 }}>{famousFoods[0].name}</h3>
                    </div>
                  </div>
                  {/* Smaller two */}
                  {famousFoods.slice(1).map((food, idx) => (
                    <div
                      key={idx}
                      className="fade-in-up img-zoom"
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: '175px',
                        cursor: 'pointer',
                        animationDelay: `${(idx + 1) * 0.1}s`,
                      }}
                    >
                      <div
                        className="img-inner"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `url(${food.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)' }} />
                      <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '4px' }}>{food.note}</p>
                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.95rem', fontWeight: 600, color: '#fff', margin: 0 }}>{food.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── TRENDING ──────────────────────────────── */}
              <section style={{ paddingBottom: '80px' }}>
                <SectionHeading eyebrow="Updates" title="Trending in Nellore" className="fade-in-up" />
                <div
                  style={{
                    marginTop: '32px',
                    background: '#fff',
                    borderRadius: '12px',
                    border: '1px solid rgba(226,232,240,0.8)',
                    overflow: 'hidden',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                  }}
                >
                  {trendingHeadlines.map((title, idx) => (
                    <Link
                      key={idx}
                      to="/news"
                      className="fade-in-up"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 24px',
                        borderBottom: idx < trendingHeadlines.length - 1 ? '1px solid rgba(226,232,240,0.6)' : 'none',
                        textDecoration: 'none',
                        transition: 'background 0.3s ease-out',
                        animationDelay: `${idx * 0.08}s`,
                        gap: '16px',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#F8FAFC')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: 'rgba(201,163,78,0.25)',
                            minWidth: '24px',
                          }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '14px',
                            color: '#0F172A',
                            lineHeight: 1.5,
                          }}
                        >
                          {title}
                        </span>
                      </div>
                      <ArrowRight size={14} color="#C9A34E" style={{ flexShrink: 0 }} />
                    </Link>
                  ))}
                </div>
              </section>

              {/* ── CTA BANNER ─────────────────────────────── */}
              <section
                className="fade-in-up"
                style={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
                  borderRadius: '16px',
                  padding: '60px 48px',
                  marginBottom: '80px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background: 'rgba(201,163,78,0.07)',
                  }}
                />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '14px' }}>
                  Partner with us
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  {t.home.advertiseHere}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.6)', fontSize: '15px', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
                  {t.home.reachThousands}
                </p>
                <Link to="/contact" className="btn-gold">
                  {t.home.contactUs} <ArrowRight size={14} />
                </Link>
              </section>

            </main>

            {/* ── Right Ads Column ── */}
            <div style={{ display: isMobile ? 'none' : 'block' }}>
              <AdsColumn ads={homePageAds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;