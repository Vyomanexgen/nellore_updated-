import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
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

const foods = [
  {
    id: '1',
    name: 'Nellore Fish Curry',
    description: 'Renowned for its fiery depth — a coastal fish curry slow-cooked with tamarind, red chilies, and generations of tradition.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=450&fit=crop',
  },
  {
    id: '2',
    name: 'Pulihora',
    description: 'Andhra\'s everyday ritual made extraordinary — tangy tamarind rice tempered with mustard seeds and curry leaves.',
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=450&fit=crop',
  },
  {
    id: '3',
    name: 'Pesarattu',
    description: 'The quintessential Nellore breakfast. Green gram dosa, crisp at the edges, served alongside ginger chutney and soft upma.',
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=450&fit=crop',
  },
  {
    id: '4',
    name: 'Gongura Mutton',
    description: 'Fall-off-the-bone mutton braised with tangy sorrel leaves — an Andhra delicacy that commands respect.',
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&h=450&fit=crop',
  },
  {
    id: '5',
    name: 'Paramannam',
    description: 'A sacred sweet rice pudding, made with milk, jaggery, and rice — offered first to the gods, then to guests.',
    badge: 'Traditional',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=600&h=450&fit=crop',
  },
  {
    id: '6',
    name: 'Punugulu',
    description: 'Street food elevated — crispy golden fritters born from fermented idli batter, best enjoyed with red chutney.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=450&fit=crop',
  },
];

const badgeColors: Record<string, { text: string; bg: string }> = {
  Signature: { text: '#0F172A', bg: '#C9A34E' },
  Classic:   { text: '#1E3A8A', bg: 'rgba(30,58,138,0.1)' },
  'Must Try':{ text: '#059669', bg: 'rgba(5,150,105,0.1)' },
  Heritage:  { text: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
  Traditional: { text: '#B45309', bg: 'rgba(180,83,9,0.1)' },
  Popular:   { text: '#0F172A', bg: 'rgba(201,163,78,0.18)' },
};

const FamousFoodsPage = () => {
  const { t } = useLanguage();
  const ref = useFadeIn();

  return (
    <div ref={ref} style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* ── Page Hero ── */}
      <div
        style={{
          position: 'relative',
          height: '300px',
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.28,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(248,250,252,0.15))' }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: '560px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '12px' }}>
            {t.foods.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '14px' }}>
            {t.foods.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.6)', fontSize: '15px', lineHeight: 1.7 }}>
            {t.foods.subtitle}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <main style={{ flex: 1, minWidth: 0, paddingTop: '64px', paddingBottom: '100px' }}>

            {/* Food grid — editorial 2-col */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
              }}
            >
              {foods.map((food, idx) => {
                const badge = badgeColors[food.badge] || badgeColors['Popular'];
                return (
                  <div
                    key={food.id}
                    className="fade-in-up img-zoom"
                    style={{
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#fff',
                      border: '1px solid rgba(226,232,240,0.7)',
                      boxShadow: '0 2px 20px rgba(15,23,42,0.05)',
                      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
                      animationDelay: `${(idx % 3) * 0.1}s`,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget;
                      el.style.transform = 'translateY(-4px)';
                      el.style.boxShadow = '0 16px 40px rgba(15,23,42,0.10)';
                      el.style.borderColor = 'rgba(201,163,78,0.3)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget;
                      el.style.transform = '';
                      el.style.boxShadow = '0 2px 20px rgba(15,23,42,0.05)';
                      el.style.borderColor = 'rgba(226,232,240,0.7)';
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
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
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)' }} />
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: badge.text,
                          background: badge.bg,
                          padding: '4px 10px',
                          borderRadius: '3px',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {food.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '22px 24px 24px' }}>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#0F172A',
                          marginBottom: '10px',
                          lineHeight: 1.3,
                        }}
                      >
                        {food.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '13.5px',
                          lineHeight: 1.7,
                          color: '#64748B',
                          margin: 0,
                        }}
                      >
                        {food.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual silence strip */}
            <div
              className="fade-in-up"
              style={{
                marginTop: '80px',
                background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
                borderRadius: '16px',
                padding: '60px 40px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'rgba(248,250,252,0.9)',
                  maxWidth: '560px',
                  margin: '0 auto 20px',
                  lineHeight: 1.5,
                }}
              >
                {t.foods.quote}
              </p>
              <div style={{ width: '32px', height: '1.5px', background: '#C9A34E', margin: '0 auto' }} />
            </div>
          </main>

          <AdsColumn ads={tourismPageAds} />
        </div>
      </div>
    </div>
  );
};

export default FamousFoodsPage;