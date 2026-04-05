import { Link } from 'react-router';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A4FAF] text-white mt-8">
      <div className="max-w-[1280px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">NELLORE.IN</h3>
            <p className="text-sm text-white/80 mb-4">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white transition">{t.nav.home}</Link></li>
              <li><Link to="/jobs" className="hover:text-white transition">{t.nav.jobs}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t.nav.news}</Link></li>
              {/* <li><Link to="#" className="hover:text-white transition">{t.footer.constituencies}</Link></li> */}
            </ul>
          </div>

          {/* Column 3: Tourism */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.tourism}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/tourism/stay" className="hover:text-white transition">{t.footer.hotels}</Link></li>
              <li><Link to="/tourism/foods" className="hover:text-white transition">{t.footer.restaurants}</Link></li>
              <li><Link to="/tourism/history" className="hover:text-white transition">{t.footer.history}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t.footer.famousPlaces}</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/contact" className="hover:text-white transition">{t.nav.contactUs}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t.footer.privacyPolicy}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t.footer.about}</Link></li>
              <li><Link to="#" className="hover:text-white transition">{t.footer.advertise}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} NELLORE.IN · {t.footer.allRights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
