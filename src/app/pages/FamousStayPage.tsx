import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
import { Star, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

/* ── Fade-in observer ── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const hotels = [
  {
    id: '1',
    name: 'Grand Bay Hotel',
    rating: 4.5,
    stars: 5,
    reviews: 1250,
    location: 'City Centre, Nellore',
    price: 3500,
    priceLabel: '₹3,500 – ₹6,000',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=500&fit=crop',
    amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Pool'],
    tag: 'Luxury',
  },
  {
    id: '2',
    name: 'Haritha Beach Resort',
    rating: 4.8,
    stars: 4,
    reviews: 890,
    location: 'Beach Road, Nellore',
    price: 4000,
    priceLabel: '₹4,000 – ₹8,000',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&h=500&fit=crop',
    amenities: ['Sea View', 'Restaurant', 'Spa', 'WiFi'],
    tag: 'Beachfront',
  },
  {
    id: '3',
    name: 'Heritage Palace',
    rating: 4.3,
    stars: 4,
    reviews: 650,
    location: 'MG Road, Nellore',
    price: 2500,
    priceLabel: '₹2,500 – ₹5,000',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&h=500&fit=crop',
    amenities: ['Free Parking', 'WiFi', 'Restaurant', 'Gym'],
    tag: 'Heritage',
  },
  {
    id: '4',
    name: 'Comfort Inn Nellore',
    rating: 4.2,
    stars: 3,
    reviews: 420,
    location: 'Railway Station Road',
    price: 2000,
    priceLabel: '₹2,000 – ₹4,000',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&h=500&fit=crop',
    amenities: ['Budget Friendly', 'Clean Rooms', 'WiFi', 'Breakfast'],
    tag: 'Value',
  },
];

const FamousStayPage = () => {
  const { t } = useLanguage();
  const [priceRange, setPriceRange] = useState('All');
  const [rating, setRating] = useState('All');
  const ref = useFadeIn();

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice =
      priceRange === 'All' ||
      (priceRange === 'Under ₹2,000' && hotel.price < 2000) ||
      (priceRange === '₹2,000 – ₹5,000' && hotel.price >= 2000 && hotel.price <= 5000) ||
      (priceRange === 'Above ₹5,000' && hotel.price > 5000);
    const matchesRating =
      rating === 'All' ||
      (rating === '5 Star' && hotel.stars === 5) ||
      (rating === '4 Star' && hotel.stars === 4) ||
      (rating === '3 Star' && hotel.stars === 3);
    return matchesPrice && matchesRating;
  });

  const selectStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.04em',
    padding: '10px 16px',
    borderRadius: '6px',
    border: '1px solid rgba(201,163,78,0.3)',
    background: 'rgba(15,23,42,0.04)',
    color: '#0F172A',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    minWidth: '160px',
  };

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.3,
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '12px' }}>
            {t.stay.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '12px' }}>
            {t.stay.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.6)', fontSize: '15px' }}>
            {t.stay.subtitle}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <main style={{ flex: 1, minWidth: 0, paddingTop: '48px', paddingBottom: '100px' }}>

            {/* ── Filters ── */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid rgba(201,163,78,0.15)',
                padding: '20px 24px',
                marginBottom: '48px',
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                alignItems: 'center',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
              }}
            >
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>
                {t.stay.filterBy}
              </span>
              <select value={priceRange} onChange={e => setPriceRange(e.target.value)} style={selectStyle}>
                <option value="All">{t.stay.priceRange}</option>
                <option value="Under ₹2,000">Under ₹2,000</option>
                <option value="₹2,000 – ₹5,000">₹2,000 – ₹5,000</option>
                <option value="Above ₹5,000">Above ₹5,000</option>
              </select>
              <select value={rating} onChange={e => setRating(e.target.value)} style={selectStyle}>
                <option value="All">{t.stay.starRating}</option>
                <option value="5 Star">5 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="3 Star">3 Star</option>
              </select>
              {(priceRange !== 'All' || rating !== 'All') && (
                <button
                  onClick={() => { setPriceRange('All'); setRating('All'); }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: '#C9A34E',
                    background: 'none',
                    border: '1px solid rgba(201,163,78,0.35)',
                    borderRadius: '6px',
                    padding: '9px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  {t.stay.clear}
                </button>
              )}
            </div>

            {/* ── Hotel Cards ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {filteredHotels.length > 0 ? filteredHotels.map((hotel, idx) => (
                <div
                  key={hotel.id}
                  className="fade-in-up"
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(226,232,240,0.8)',
                    boxShadow: '0 2px 20px rgba(15,23,42,0.05)',
                    display: 'flex',
                    flexDirection: 'row',
                    transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
                    animationDelay: `${idx * 0.1}s`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 16px 48px rgba(15,23,42,0.10)';
                    el.style.borderColor = 'rgba(201,163,78,0.3)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = '';
                    el.style.boxShadow = '0 2px 20px rgba(15,23,42,0.05)';
                    el.style.borderColor = 'rgba(226,232,240,0.8)';
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '280px',
                      minHeight: '220px',
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    className="img-zoom"
                  >
                    <div
                      className="img-inner"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${hotel.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(15,23,42,0.1))' }} />
                    {/* Tag */}
                    <span
                      style={{
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
                        borderRadius: '3px',
                      }}
                    >
                      {hotel.tag}
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                          {hotel.name}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(201,163,78,0.1)', padding: '3px 8px', borderRadius: '4px' }}>
                            <Star size={11} color="#C9A34E" fill="#C9A34E" />
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, color: '#C9A34E' }}>{hotel.rating}</span>
                          </div>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#94A3B8' }}>({hotel.reviews} reviews)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin size={12} color="#94A3B8" />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B' }}>{hotel.location}</span>
                        </div>
                      </div>
                      {/* Price */}
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '4px' }}>{t.stay.from}</div>
                        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#C9A34E' }}>{hotel.priceLabel}</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', color: '#94A3B8' }}>{t.stay.perNight}</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                      {hotel.amenities.map(a => (
                        <span
                          key={a}
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '10px',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            color: '#64748B',
                            background: '#F1F5F9',
                            padding: '4px 10px',
                            borderRadius: '3px',
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                      <button className="btn-gold-outline" style={{ fontSize: '11px', padding: '10px 20px' }}>
                        {t.stay.viewDetails}
                      </button>
                      <button className="btn-gold" style={{ fontSize: '11px', padding: '10px 20px' }}>
                        {t.stay.reserveNow}
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div style={{ textAlign: 'center', padding: '60px 24px', background: '#fff', borderRadius: '12px', border: '1px dashed rgba(201,163,78,0.3)' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: '#64748B' }}>No properties match your filters.</p>
                  <button onClick={() => { setPriceRange('All'); setRating('All'); }} className="btn-gold-outline" style={{ marginTop: '16px', fontSize: '11px', padding: '10px 20px' }}>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </main>

          <AdsColumn ads={tourismPageAds} />
        </div>
      </div>
    </div>
  );
};

export default FamousStayPage;