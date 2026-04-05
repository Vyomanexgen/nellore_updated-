import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface AdCard {
  id: string;
  type: 'rectangle' | 'strip' | 'square' | 'mini';
  size: string;
  businessName: string;
  tagline: string;
  imageUrl: string;
  ctaLabel: string;
}

interface AdsColumnProps {
  ads: AdCard[];
}

const AdsColumn: React.FC<AdsColumnProps> = ({ ads }) => {
  const { t } = useLanguage();
  return (
    <>
      {/* Desktop Version - Right Column */}
      <aside className="ads-column w-[280px] flex-shrink-0 hidden lg:block">
        <div className="sticky top-28 pr-4 pb-8">
          {/* Header */}
          <div className="pb-2 mb-4 border-b border-[#E5E7EB]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">{t.home.advertisements}</p>
          </div>

          {/* Ad Cards */}
          <div className="space-y-6">
            {ads.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
export const AdCard = ({ ad, mobile = false }: { ad: AdCard; mobile?: boolean }) => {
  const { t } = useLanguage();
  
  // Base styling for the card container
  const containerClasses = `w-full border border-[#E5E7EB] rounded-2xl bg-white shadow-sm transition-all duration-300 overflow-hidden relative group cursor-pointer ${
    !mobile ? 'hover:shadow-lg hover:-translate-y-0.5 hover:border-[#1A6FD4]/30' : 'active:scale-[0.98]'
  }`;

  const imageHoverClasses = !mobile ? 'transition-transform duration-500 group-hover:scale-105' : '';

  if (ad.type === 'strip' || ad.type === 'mini') {
    return (
      <div className={containerClasses}>
        {/* Sponsored Label */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider text-[#4B5563] shadow-sm z-10">
          {t.home.sponsored}
        </div>
        
        <div className="flex items-center gap-3 p-3">
          <div className="w-[80px] h-[80px] rounded-xl flex-shrink-0 overflow-hidden">
            <div
              className={`w-full h-full bg-cover bg-center ${imageHoverClasses}`}
              style={{ backgroundImage: `url(${ad.imageUrl})` }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[13px] font-bold text-[#111827] truncate">
              {ad.businessName}
            </h4>
            <p className="text-[11px] text-[#6B7280] line-clamp-2 mt-1 leading-snug">
              {ad.tagline}
            </p>
            <span className="text-[11px] font-semibold text-[#1A6FD4] mt-2 inline-flex items-center gap-1">
              Know More <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {/* Sponsored Label */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#4B5563] shadow-sm z-10">
        {t.home.sponsored}
      </div>

      {/* Image Container with hidden overflow for scale effect */}
      <div className={`w-full overflow-hidden ${ad.type === 'square' ? 'h-[200px]' : 'h-[180px]'}`}>
        <div
          className={`w-full h-full bg-cover bg-center ${imageHoverClasses}`}
          style={{ backgroundImage: `url(${ad.imageUrl})` }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-[15px] font-bold text-[#111827] break-words line-clamp-1">{ad.businessName}</h4>
        <p className="text-[13px] text-[#6B7280] mt-1 line-clamp-2 leading-relaxed">{ad.tagline}</p>
        
        <button className={`w-full mt-4 bg-[#F0F4FF] text-[#1A6FD4] font-semibold py-2.5 rounded-xl transition-colors ${!mobile ? 'group-hover:bg-[#1A6FD4] group-hover:text-white' : 'active:bg-[#E0E7FF]'}`}>
          {ad.ctaLabel}
        </button>
      </div>
    </div>
  );
};

// Default ads for different pages
export const homePageAds: AdCard[] = [
  {
    id: '1',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Grand Palace Restaurant',
    tagline: 'Authentic Telugu Cuisine & Fine Dining Experience',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    ctaLabel: 'Book Now',
  },
  {
    id: '2',
    type: 'strip',
    size: '280x90',
    businessName: 'Naukri Job Portal',
    tagline: 'Find Latest Jobs in Nellore',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop',
    ctaLabel: 'Apply',
  },
  {
    id: '3',
    type: 'square',
    size: '280x280',
    businessName: 'Lakeside Villas',
    tagline: '3BHK Premium Apartments • Ready to Move',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ctaLabel: 'View Offer',
  },
  {
    id: '4',
    type: 'strip',
    size: '280x90',
    businessName: 'Smart City Update',
    tagline: 'Government Infrastructure Development',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=200&h=200&fit=crop',
    ctaLabel: 'Know More',
  },
  {
    id: '5',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Big Bazaar Offers',
    tagline: 'Mega Sale - Up to 50% Off on All Products',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop',
    ctaLabel: 'Shop Now',
  },
];

export const jobsPageAds: AdCard[] = [
  {
    id: 'j1',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Brilliant Coaching Centre',
    tagline: 'APPSC & Group Exams • 95% Success Rate',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    ctaLabel: 'Enroll Now',
  },
  {
    id: 'j2',
    type: 'strip',
    size: '280x90',
    businessName: 'Resume Writing Pro',
    tagline: 'Professional CV Services',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=200&fit=crop',
    ctaLabel: 'Get Started',
  },
  {
    id: 'j3',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Skill Development Course',
    tagline: 'Digital Marketing • Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    ctaLabel: 'Learn More',
  },
];

export const newsPageAds: AdCard[] = [
  {
    id: 'n1',
    type: 'mini',
    size: '280x60',
    businessName: 'The Hindu',
    tagline: 'Official News Sponsor',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=200&fit=crop',
    ctaLabel: 'Visit',
  },
  {
    id: 'n2',
    type: 'rectangle',
    size: '280x250',
    businessName: 'City Business Hub',
    tagline: 'Your Local Business Directory',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    ctaLabel: 'Explore',
  },
  {
    id: 'n3',
    type: 'strip',
    size: '280x90',
    businessName: 'Ace Coaching',
    tagline: 'Competitive Exam Preparation',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop',
    ctaLabel: 'Join Now',
  },
];

export const tourismPageAds: AdCard[] = [
  {
    id: 't1',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Haritha Hotel Nellore',
    tagline: 'Premium Stays • Best Rates Guaranteed',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    ctaLabel: 'Book Now',
  },
  {
    id: 't2',
    type: 'strip',
    size: '280x90',
    businessName: 'Nellore Travel Package',
    tagline: 'Explore Heritage Sites',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=200&fit=crop',
    ctaLabel: 'View Package',
  },
  {
    id: 't3',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Car Rental Services',
    tagline: 'Self Drive & Chauffeur Available',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    ctaLabel: 'Book Car',
  },
];

export const moviesPageAds: AdCard[] = [
  {
    id: 'm1',
    type: 'rectangle',
    size: '280x250',
    businessName: 'City Multiplex Cinema',
    tagline: 'Latest Releases • Premium Experience',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
    ctaLabel: 'Book Tickets',
  },
  {
    id: 'm2',
    type: 'strip',
    size: '280x90',
    businessName: 'Popcorn Corner',
    tagline: 'Snacks & Beverages',
    imageUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=200&h=200&fit=crop',
    ctaLabel: 'Order Now',
  },
  {
    id: 'm3',
    type: 'rectangle',
    size: '280x250',
    businessName: 'Film Production House',
    tagline: 'Auditions Open • Register Today',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop',
    ctaLabel: 'Register',
  },
];

// Removed MobileAdsCarousel as we now use InlineAdCard for mobile and inline ad experiences.

export default AdsColumn;