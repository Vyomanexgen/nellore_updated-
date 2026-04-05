import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';

const ContactUsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0A4FAF] py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{t.nav.contactUs}</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-4">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 py-12 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6F1FB] text-[#1A6FD4] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">{t.contact.ourOffice}</h3>
                  <p className="text-sm text-[#6B7280]">{t.contact.addressInfo}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6F1FB] text-[#1A6FD4] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">{t.contact.phoneText}</h3>
                  <p className="text-sm text-[#6B7280]">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6F1FB] text-[#1A6FD4] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827]">{t.contact.emailText}</h3>
                  <p className="text-sm text-[#6B7280]">contact@nellore.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E7EB]">
              <h2 className="text-2xl font-bold text-[#111827] mb-6">{t.contact.sendMessageHeader}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">{t.contact.firstName}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">{t.contact.lastName}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">{t.contact.emailAddress}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">{t.contact.messageText}</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition resize-none" placeholder={t.contact.messagePlaceholder}></textarea>
                </div>

                <Button className="w-full bg-[#1A6FD4] hover:bg-[#185FA5] text-white py-3 rounded-lg font-medium text-lg h-auto">
                  {t.contact.sendBtn}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
