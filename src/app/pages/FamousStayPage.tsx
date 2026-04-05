import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
import { Star, MapPin, Wifi, Coffee, Car } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

const FamousStayPage = () => {
  const [priceRange, setPriceRange] = useState('All');
  const [rating, setRating] = useState('All');

  const hotels = [
    {
      id: '1',
      name: 'Grand Bay Hotel',
      rating: 4.5,
      stars: 5,
      reviews: 1250,
      location: 'City Center, Nellore',
      price: 3500,
      priceLabel: '₹3,500 - ₹6,000',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Pool'],
    },
    {
      id: '2',
      name: 'Haritha Beach Resort',
      rating: 4.8,
      stars: 4,
      reviews: 890,
      location: 'Beach Road, Nellore',
      price: 4000,
      priceLabel: '₹4,000 - ₹8,000',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      amenities: ['Sea View', 'Restaurant', 'Spa', 'WiFi'],
    },
    {
      id: '3',
      name: 'Heritage Palace',
      rating: 4.3,
      stars: 4,
      reviews: 650,
      location: 'MG Road, Nellore',
      price: 2500,
      priceLabel: '₹2,500 - ₹5,000',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
      amenities: ['Free Parking', 'WiFi', 'Restaurant', 'Gym'],
    },
    {
      id: '4',
      name: 'Comfort Inn Nellore',
      rating: 4.2,
      stars: 3,
      reviews: 420,
      location: 'Railway Station Road',
      price: 2000,
      priceLabel: '₹2,000 - ₹4,000',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
      amenities: ['Budget Friendly', 'Clean Rooms', 'WiFi', 'Breakfast'],
    },
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = 
      priceRange === 'All' || 
      (priceRange === 'Under ₹2,000' && hotel.price < 2000) ||
      (priceRange === '₹2,000 - ₹5,000' && hotel.price >= 2000 && hotel.price <= 5000) ||
      (priceRange === 'Above ₹5,000' && hotel.price > 5000);
    
    const matchesRating = 
      rating === 'All' || 
      (rating === '5 Star' && hotel.stars === 5) ||
      (rating === '4 Star' && hotel.stars === 4) ||
      (rating === '3 Star' && hotel.stars === 3);

    return matchesPrice && matchesRating;
  });

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Hotels & Stays in Nellore</h1>
              <p className="text-[#6B7280]">Find the perfect accommodation for your visit</p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]"
                >
                  <option value="All">Price Range</option>
                  <option value="Under ₹2,000">Under ₹2,000</option>
                  <option value="₹2,000 - ₹5,000">₹2,000 - ₹5,000</option>
                  <option value="Above ₹5,000">Above ₹5,000</option>
                </select>
                <select 
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]"
                >
                  <option value="All">Star Rating</option>
                  <option value="5 Star">5 Star</option>
                  <option value="4 Star">4 Star</option>
                  <option value="3 Star">3 Star</option>
                </select>
                <select className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]">
                  <option>Amenities</option>
                  <option>WiFi</option>
                  <option>Pool</option>
                  <option>Parking</option>
                </select>
                <Button 
                  className="bg-[#1A6FD4] hover:bg-[#185FA5]"
                  onClick={() => {setPriceRange('All'); setRating('All');}}
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className="space-y-5">
              {filteredHotels.length > 0 ? filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                >
                  <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                    <div
                      className="w-full h-48 md:w-80 md:h-60 bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#111827] mb-1">{hotel.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                              <Star className="w-4 h-4 text-green-700 fill-green-700" />
                              <span className="text-sm font-semibold text-green-700">{hotel.rating}</span>
                            </div>
                            <span className="text-sm text-[#6B7280]">({hotel.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <MapPin className="w-4 h-4" />
                            {hotel.location}
                          </div>
                        </div>
                        <div className="text-left sm:text-right border-t sm:border-none border-gray-100 pt-3 sm:pt-0">
                          <div className="text-[10px] uppercase tracking-wider text-[#6B7280] mb-0.5">Starting from</div>
                          <div className="text-xl md:text-2xl font-bold text-[#10B981]">{hotel.priceLabel}</div>
                          <div className="text-xs text-[#6B7280]">per night</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#F5F7FA] text-[#6B7280] px-2 py-1 rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button variant="outline" className="border-[#1A6FD4] text-[#1A6FD4] w-full sm:w-auto">
                          View Details
                        </Button>
                        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5] w-full sm:w-auto">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-500">No hotels found matching your criteria.</p>
                  <Button 
                    variant="link" 
                    className="text-[#1A6FD4]"
                    onClick={() => {setPriceRange('All'); setRating('All');}}
                  >
                    Clear all filters
                  </Button>
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