import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { Tag, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const OffersPage = () => {
  const offers = [
    {
      id: '1',
      brand: 'Big Bazaar',
      headline: 'Mega Weekend Sale - Up to 50% Off',
      discount: '50%',
      expiry: 'April 10, 2026',
      category: 'Shopping',
      location: 'City Center',
    },
    {
      id: '2',
      brand: 'Grand Palace Restaurant',
      headline: 'Family Dining Package - Flat 30% Off',
      discount: '30%',
      expiry: 'April 15, 2026',
      category: 'Food & Dining',
      location: 'MG Road',
    },
    {
      id: '3',
      brand: 'Fitness First Gym',
      headline: 'Annual Membership at Special Price',
      discount: '40%',
      expiry: 'April 20, 2026',
      category: 'Fitness',
      location: 'Multiple Locations',
    },
    {
      id: '4',
      brand: 'Electronics Mart',
      headline: 'Latest Gadgets - Exclusive Discounts',
      discount: '25%',
      expiry: 'April 12, 2026',
      category: 'Electronics',
      location: 'Main Bazaar',
    },
    {
      id: '5',
      brand: 'Spa & Wellness',
      headline: 'Relaxation Package for Couples',
      discount: '35%',
      expiry: 'April 18, 2026',
      category: 'Wellness',
      location: 'Beach Road',
    },
    {
      id: '6',
      brand: 'Fashion Hub',
      headline: 'Summer Collection Launch Offer',
      discount: '45%',
      expiry: 'April 25, 2026',
      category: 'Fashion',
      location: 'City Mall',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-[#111827] mb-2">Exclusive Offers</h1>
                <p className="text-[#6B7280]">Best deals and discounts in Nellore</p>
              </div>
              <div className="flex gap-3">
                <select className="border border-[#D1D5DB] rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]">
                  <option>Category</option>
                  <option>Shopping</option>
                  <option>Food & Dining</option>
                  <option>Fitness</option>
                  <option>Electronics</option>
                </select>
                <Button variant="outline" className="border-[#1A6FD4] text-[#1A6FD4]">
                  <Tag className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition relative overflow-hidden"
                >
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-green-500 text-white text-xl font-bold px-3 py-2 rounded-full shadow-lg">
                      {offer.discount} OFF
                    </div>
                  </div>

                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2">{offer.category}</Badge>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2 pr-16">
                      {offer.brand}
                    </h3>
                    <p className="text-sm text-[#6B7280]">{offer.headline}</p>
                  </div>

                  <div className="space-y-2 text-xs text-[#6B7280] mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      Expires: {offer.expiry}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {offer.location}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Claim Offer
                  </Button>
                </div>
              ))}
            </div>

            {/* Show Expired Toggle */}
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#6B7280] text-[#6B7280]">
                Show Expired Offers
              </Button>
            </div>
          </main>

          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default OffersPage;