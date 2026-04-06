import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useRef } from 'react';

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

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid rgba(226,232,240,0.8)',
  background: '#F8FAFC',
  color: '#0F172A',
  outline: 'none',
  transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out',
  boxSizing: 'border-box' as const,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: '#64748B',
  display: 'block',
  marginBottom: '8px',
};

const ContactUsPage = () => {
  const { t } = useLanguage();
  const ref = useFadeIn();

  const contactInfo = [
    {
      icon: <MapPin size={20} color="#C9A34E" />,
      label: t.contact.ourOffice,
      value: t.contact.addressInfo,
    },
    {
      icon: <Phone size={20} color="#C9A34E" />,
      label: t.contact.phoneText,
      value: '+91 98765 43210',
    },
    {
      icon: <Mail size={20} color="#C9A34E" />,
      label: t.contact.emailText,
      value: 'contact@nellore.in',
    },
  ];

  return (
    <div ref={ref} style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* ── Hero ── */}
      <div
        style={{
          position: 'relative',
          background: '#0F172A',
          paddingTop: '80px',
          paddingBottom: '100px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Decorative orbs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(201,163,78,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(30,58,138,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '14px' }}>
            Get in Touch
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '14px' }}>
            {t.nav.contactUs}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.6)', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* ── Main content, overlapping hero ── */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '-48px auto 0',
          padding: '0 24px 100px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '28px',
            alignItems: 'start',
          }}
          className="fade-in-up"
        >
          {/* Contact info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactInfo.map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '22px 20px',
                  border: '1px solid rgba(226,232,240,0.8)',
                  boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,163,78,0.1)', border: '1px solid rgba(201,163,78,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748B', marginBottom: '6px' }}>
                  {label}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#0F172A', lineHeight: 1.6, margin: 0 }}>
                  {value}
                </p>
              </div>
            ))}

            {/* Social note */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0F172A, #1E3A8A)',
                borderRadius: '14px',
                padding: '22px 20px',
              }}
            >
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontStyle: 'italic', color: 'rgba(248,250,252,0.8)', lineHeight: 1.6, margin: 0 }}>
                "Your story of Nellore matters to us. Let's begin a conversation."
              </p>
              <div style={{ width: '28px', height: '1.5px', background: '#C9A34E', marginTop: '14px' }} />
            </div>
          </div>

          {/* Contact form */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              padding: '40px',
              border: '1px solid rgba(226,232,240,0.8)',
              boxShadow: '0 8px 40px rgba(15,23,42,0.08)',
            }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              {t.contact.sendMessageHeader}
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#C9A34E', marginBottom: '28px' }} />

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>{t.contact.firstName}</label>
                  <input
                    type="text"
                    placeholder="John"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(201,163,78,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,163,78,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(226,232,240,0.8)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{t.contact.lastName}</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(201,163,78,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,163,78,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(226,232,240,0.8)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>{t.contact.emailAddress}</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(201,163,78,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,163,78,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(226,232,240,0.8)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={labelStyle}>{t.contact.messageText}</label>
                <textarea
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(201,163,78,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,163,78,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(226,232,240,0.8)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ justifyContent: 'center', width: '100%', padding: '16px 24px', fontSize: '12px', letterSpacing: '0.1em' }}
              >
                {t.contact.sendBtn} <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
