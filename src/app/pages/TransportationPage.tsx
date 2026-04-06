import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { Train, Bus, Car, Plane, Clock, MapPin, ExternalLink } from 'lucide-react';
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

/* ── Section heading ── */
const Heading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div style={{ marginBottom: '32px' }}>
    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '10px' }}>
      {eyebrow}
    </p>
    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#0F172A', lineHeight: 1.2, marginBottom: '12px' }}>
      {title}
    </h2>
    <div style={{ width: '36px', height: '2px', background: '#C9A34E' }} />
  </div>
);

const trains = [
  { id: '1', name: 'Chennai Mail', number: '12841', from: 'Nellore', to: 'Chennai', departure: '6:30 AM', arrival: '9:45 AM', duration: '3h 15m', type: 'Express', frequency: 'Daily' },
  { id: '2', name: 'Coromandel Express', number: '12842', from: 'Nellore', to: 'Howrah', departure: '8:15 AM', arrival: '6:30 PM', duration: '10h 15m', type: 'Superfast', frequency: 'Daily' },
  { id: '3', name: 'Bangalore Express', number: '17225', from: 'Nellore', to: 'Bangalore', departure: '10:00 AM', arrival: '6:30 PM', duration: '8h 30m', type: 'Express', frequency: 'Daily' },
  { id: '4', name: 'Navjeevan Express', number: '12296', from: 'Nellore', to: 'Ahmedabad', departure: '2:45 PM', arrival: '8:00 AM+1', duration: '29h 15m', type: 'Superfast', frequency: 'Daily' },
];

const buses = [
  { id: '1', operator: 'APSRTC', type: 'Volvo AC', to: 'Chennai', departure: '5:00 AM', duration: '4h 30m', fare: '₹450', frequency: 'Every 30 mins' },
  { id: '2', operator: 'APSRTC', type: 'Volvo AC', to: 'Bangalore', departure: '7:00 PM', duration: '9h', fare: '₹850', frequency: 'Daily' },
  { id: '3', operator: 'APSRTC', type: 'Express', to: 'Vijayawada', departure: '6:30 AM', duration: '5h', fare: '₹350', frequency: 'Hourly' },
  { id: '4', operator: 'APSRTC', type: 'Deluxe', to: 'Hyderabad', departure: '9:00 PM', duration: '7h 30m', fare: '₹650', frequency: 'Daily' },
];

const airports = [
  { id: '1', name: 'Chennai International', distance: '175 km', time: '3h 30m', type: 'International · Domestic', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=280&fit=crop' },
  { id: '2', name: 'Tirupati Airport', distance: '115 km', time: '2h 15m', type: 'Domestic', image: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=500&h=280&fit=crop' },
  { id: '3', name: 'Vijayawada Airport', distance: '210 km', time: '4h', type: 'Domestic', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&h=280&fit=crop' },
];

const localTransport = [
  { icon: '🛺', name: 'Auto Rickshaws', note: 'Meter fare from ₹30 · Available 24/7' },
  { icon: '🚌', name: 'City Buses', note: 'APSRTC city routes · 5:00 AM – 10:00 PM' },
  { icon: '🚕', name: 'App-Based Cabs', note: 'Ola & Uber · Available 24/7' },
  { icon: '🚗', name: 'Rental Cars', note: 'Self-drive & chauffeur · On booking' },
];

const TransportationPage = () => {
  const { t } = useLanguage();
  const ref = useFadeIn();

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1474487548417-781cb6d646b3?w=1400&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            opacity: 0.2,
          }}
        />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '12px' }}>
            {t.transport.eyebrow}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '12px' }}>
            {t.transport.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.6)', fontSize: '15px' }}>
            {t.transport.subtitle}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <main style={{ flex: 1, minWidth: 0, paddingTop: '64px', paddingBottom: '100px' }}>

            {/* ── Rail ── */}
            <section style={{ marginBottom: '80px' }}>
              <Heading eyebrow={t.transport.byRail} title={t.transport.trainConnections} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {trains.map((train, idx) => (
                  <div
                    key={train.id}
                    className="fade-in-up"
                    style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '20px 24px',
                      border: '1px solid rgba(226,232,240,0.8)',
                      boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '20px',
                      flexWrap: 'wrap',
                      transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
                      animationDelay: `${idx * 0.08}s`,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 32px rgba(15,23,42,0.08)'; el.style.borderColor = 'rgba(201,163,78,0.25)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 12px rgba(15,23,42,0.04)'; el.style.borderColor = 'rgba(226,232,240,0.8)'; }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <Train size={14} color="#C9A34E" />
                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#0F172A', margin: 0 }}>{train.name}</h3>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 500, color: '#64748B', background: '#F1F5F9', padding: '2px 8px', borderRadius: '3px' }}>{train.number}</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, color: '#1E3A8A', background: 'rgba(30,58,138,0.08)', padding: '2px 8px', borderRadius: '3px' }}>{train.type}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin size={11} color="#94A3B8" />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B' }}>{train.from} → {train.to}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={11} color="#94A3B8" />
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B' }}>{train.departure} – {train.arrival}</span>
                        </div>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, color: '#C9A34E' }}>{train.duration}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open('https://www.irctc.co.in', '_blank')}
                      className="btn-gold"
                      style={{ fontSize: '11px', padding: '10px 18px', flexShrink: 0 }}
                    >
                      <ExternalLink size={12} /> Book on IRCTC
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Road ── */}
            <section style={{ marginBottom: '80px' }}>
              <Heading eyebrow={t.transport.byRoad} title={t.transport.busServices} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                {buses.map((bus, idx) => (
                  <div
                    key={bus.id}
                    className="fade-in-up"
                    style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '22px 24px',
                      border: '1px solid rgba(226,232,240,0.8)',
                      boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                      transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
                      animationDelay: `${idx * 0.08}s`,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 28px rgba(15,23,42,0.08)'; el.style.borderColor = 'rgba(201,163,78,0.25)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 12px rgba(15,23,42,0.04)'; el.style.borderColor = 'rgba(226,232,240,0.8)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}>
                          Nellore → {bus.to}
                        </h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: '#94A3B8', letterSpacing: '0.05em' }}>{bus.operator}</p>
                      </div>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, color: '#059669', background: 'rgba(5,150,105,0.08)', padding: '3px 8px', borderRadius: '3px', whiteSpace: 'nowrap' }}>
                        {bus.type}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                      {[
                        { label: 'Departs', value: bus.departure },
                        { label: 'Duration', value: bus.duration },
                        { label: 'Frequency', value: bus.frequency },
                      ].map(({ label, value }) => (
                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: '#94A3B8' }}>{label}</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#0F172A', fontWeight: 500 }}>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid rgba(226,232,240,0.6)' }}>
                      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#C9A34E' }}>{bus.fare}</span>
                      <button
                        onClick={() => window.open('https://www.apsrtconline.in', '_blank')}
                        className="btn-gold"
                        style={{ fontSize: '10px', padding: '8px 14px' }}
                      >
                        {t.transport.bookOnline}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Air ── */}
            <section style={{ marginBottom: '80px' }}>
              <Heading eyebrow={t.transport.byAir} title={t.transport.nearbyAirports} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {airports.map((airport, idx) => (
                  <div
                    key={airport.id}
                    className="fade-in-up"
                    style={{
                      background: '#fff',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: '1px solid rgba(226,232,240,0.8)',
                      boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                      display: 'flex',
                      flexDirection: 'row',
                      transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
                      animationDelay: `${idx * 0.1}s`,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 36px rgba(15,23,42,0.08)'; el.style.borderColor = 'rgba(201,163,78,0.25)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 16px rgba(15,23,42,0.04)'; el.style.borderColor = 'rgba(226,232,240,0.8)'; }}
                  >
                    <div
                      style={{
                        width: '200px',
                        flexShrink: 0,
                        backgroundImage: `url(${airport.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                      }}
                    >
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.3)' }} />
                      <div style={{ position: 'absolute', bottom: '14px', left: '14px' }}>
                        <Plane size={20} color="#C9A34E" />
                      </div>
                    </div>
                    <div style={{ flex: 1, padding: '24px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{airport.name}</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: '#94A3B8', letterSpacing: '0.06em', marginBottom: '16px' }}>{airport.type}</p>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', color: '#94A3B8', marginBottom: '2px' }}>Distance</div>
                          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#C9A34E' }}>{airport.distance}</div>
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', color: '#94A3B8', marginBottom: '2px' }}>By Road</div>
                          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>{airport.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Local ── */}
            <section style={{ marginBottom: '60px' }}>
              <Heading eyebrow={t.transport.cityConnections} title={t.transport.localTransport} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {localTransport.map((item, idx) => (
                  <div
                    key={item.name}
                    className="fade-in-up"
                    style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '24px',
                      border: '1px solid rgba(226,232,240,0.8)',
                      boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                      textAlign: 'center',
                      transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
                      animationDelay: `${idx * 0.08}s`,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 10px 32px rgba(15,23,42,0.08)'; el.style.borderColor = 'rgba(201,163,78,0.25)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 12px rgba(15,23,42,0.04)'; el.style.borderColor = 'rgba(226,232,240,0.8)'; }}
                  >
                    <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B', lineHeight: 1.6 }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Info note */}
            <div
              className="fade-in-up"
              style={{
                background: 'rgba(201,163,78,0.06)',
                border: '1px solid rgba(201,163,78,0.2)',
                borderRadius: '12px',
                padding: '24px 28px',
              }}
            >
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '12px' }}>
                {t.transport.travellerNote}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  t.transport.noteTimings,
                  <>{t.transport.noteIRCTC} <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A34E' }}>irctc.co.in</a></>,
                  <>{t.transport.noteAPSRTC} <a href="https://www.apsrtconline.in" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A34E' }}>apsrtconline.in</a></>,
                  t.transport.noteTaxi,
                ].map((note, i) => (
                  <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: '#64748B', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#C9A34E', marginTop: '1px', flexShrink: 0 }}>·</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

          </main>

          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
