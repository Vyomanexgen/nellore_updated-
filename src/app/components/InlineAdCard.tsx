import React from 'react';
import { ExternalLink, Clock, MapPin, Briefcase, Calendar } from 'lucide-react';
import { AdCard } from './AdsColumn';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

interface InlineAdCardProps {
  ad: AdCard;
  variant: 'news' | 'job' | 'event' | 'generic';
}

export const InlineAdCard: React.FC<InlineAdCardProps> = ({ ad, variant }) => {
  const { t } = useLanguage();

  const handleInteract = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app this would log interaction and navigate
    console.log('Ad clicked:', ad.id);
  };

  if (variant === 'job') {
    return (
      <div 
        onClick={handleInteract}
        className="bg-[#F8FAFC] rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4]/50 transition cursor-pointer relative"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-[#111827] pr-20">{ad.businessName}</h3>
          <span className="text-[10px] font-bold tracking-wider text-[#4B5563] absolute top-5 right-5 bg-white px-2 py-0.5 rounded shadow-sm border border-[#E5E7EB]">
            {t.home.sponsored || 'SPONSORED'}
          </span>
        </div>
        <p className="text-sm text-[#6B7280] mb-2">{ad.tagline}</p>
        <div className="flex items-center gap-2 text-xs text-[#1A6FD4] mt-4 font-semibold">
          {ad.ctaLabel} <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    );
  }

  if (variant === 'event') {
    return (
      <div 
        onClick={handleInteract}
        className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4]/50 transition cursor-pointer relative group flex flex-col h-full"
      >
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider text-[#4B5563] shadow-sm z-10 uppercase">
          {t.home.sponsored || 'SPONSORED'}
        </div>
        <div
          className="h-40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${ad.imageUrl})` }}
        />
        <div className="p-4 bg-white relative z-10 flex-1 flex flex-col">
          <h3 className="font-semibold text-[#111827] mb-2 flex-1">{ad.businessName}</h3>
          <p className="text-xs text-[#6B7280] mb-3 line-clamp-2">
            {ad.tagline}
          </p>
          <Button size="sm" variant="outline" className="w-full border-[#1A6FD4] text-[#1A6FD4] hover:bg-[#E6F1FB]">
            {ad.ctaLabel}
          </Button>
        </div>
      </div>
    );
  }

  // Default to 'news' or 'generic'
  return (
    <div 
      onClick={handleInteract}
      className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4]/50 transition cursor-pointer relative group flex flex-col h-full"
    >
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider text-[#4B5563] shadow-sm z-10 uppercase">
        {t.home.sponsored || 'SPONSORED'}
      </div>
      <div
        className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${ad.imageUrl})` }}
      />
      <div className="p-4 bg-white relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-[#1A6FD4] bg-[#E6F1FB] px-2 py-1 rounded">
            Promoted
          </span>
        </div>
        <h3 className="font-semibold text-[#111827] group-hover:text-[#1A6FD4] transition line-clamp-2">
          {ad.businessName}
        </h3>
        <p className="mt-2 text-sm text-[#4B5563] line-clamp-2 flex-1">
          {ad.tagline}
        </p>
        <div className="mt-3 text-sm text-[#1A6FD4] flex items-center gap-1 group-hover:gap-2 transition-all font-semibold">
          {ad.ctaLabel} <ExternalLink className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};
