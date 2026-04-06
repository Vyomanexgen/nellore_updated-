import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.news, to: '/news' },
    { label: t.nav.jobs, to: '/jobs' },
    { label: t.nav.events, to: '/events' },
    { label: t.nav.results, to: '/results' },
  ];

  const tourismLinks = [
    { label: t.footer.hotels, to: '/tourism/stay' },
    { label: t.footer.restaurants, to: '/tourism/foods' },
    { label: t.footer.history, to: '/tourism/history' },
    { label: 'Transportation', to: '/transportation' },
    { label: t.footer.famousPlaces, to: '#' },
  ];

  const supportLinks = [
    { label: t.nav.contactUs, to: '/contact' },
    { label: t.footer.privacyPolicy, to: '#' },
    { label: t.footer.about, to: '#' },
    { label: t.footer.advertise, to: '/contact' },
  ];

  return (
    <footer
      style={{
        background: '#0F172A',
        borderTop: '1px solid rgba(201,163,78,0.15)',
        marginTop: '0',
      }}
    >
      {/* Brand tagline strip */}
      <div
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 24px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'rgba(248,250,252,0.9)',
              letterSpacing: '0.01em',
              lineHeight: 1.5,
              marginBottom: 0,
            }}
          >
            Nellore — Where Tradition Meets Tranquility
          </p>
          <div
            style={{
              width: '40px',
              height: '1.5px',
              background: '#C9A34E',
              margin: '16px auto 0',
              opacity: 0.8,
            }}
          />
        </div>
      </div>

      {/* Main footer grid */}
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '60px 24px 48px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201,163,78,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(201,163,78,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#C9A34E',
                  }}
                >
                  N
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                }}
              >
                NELLORE.IN
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'rgba(248,250,252,0.45)',
                marginBottom: '24px',
              }}
            >
              {t.footer.brandDesc}
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: 'f', label: 'Facebook' },
                { icon: 'X', label: 'Twitter' },
                { icon: '▶', label: 'YouTube' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease-out',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(201,163,78,0.5)';
                    el.style.color = '#C9A34E';
                    el.style.background = 'rgba(201,163,78,0.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.color = 'rgba(255,255,255,0.4)';
                    el.style.background = 'transparent';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title={t.footer.quickLinks} links={quickLinks} />

          {/* Tourism */}
          <FooterColumn title={t.nav.tourism} links={tourismLinks} />

          {/* Support */}
          <FooterColumn title={t.footer.support} links={supportLinks} />
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 24px',
          textAlign: 'center',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.06em',
          color: 'rgba(248,250,252,0.3)',
        }}
      >
        © {new Date().getFullYear()} NELLORE.IN · {t.footer.allRights}
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) => (
  <div>
    <h4
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#C9A34E',
        marginBottom: '20px',
      }}
    >
      {title}
    </h4>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {links.map(link => (
        <li key={link.label}>
          <Link
            to={link.to}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'rgba(248,250,252,0.45)',
              textDecoration: 'none',
              transition: 'color 0.3s ease-out',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(248,250,252,0.9)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(248,250,252,0.45)')}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
