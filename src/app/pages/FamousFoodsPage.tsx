import AdsColumn, { tourismPageAds } from '../components/AdsColumn';

const FamousFoodsPage = () => {
  const foods = [
    {
      id: '1',
      name: 'Nellore Fish Curry',
      description: 'Authentic coastal fish curry with aromatic spices and tangy tamarind',
      badge: 'Popular',
    },
    {
      id: '2',
      name: 'Pulihora',
      description: 'Tamarind rice tempered with mustard seeds and curry leaves',
      badge: 'Must Try',
    },
    {
      id: '3',
      name: 'Pesarattu',
      description: 'Green gram dosa served with ginger chutney and upma',
      badge: 'Popular',
    },
    {
      id: '4',
      name: 'Gongura Mutton',
      description: 'Spicy mutton curry cooked with tangy gongura (sorrel) leaves',
      badge: 'Must Try',
    },
    {
      id: '5',
      name: 'Paramannam',
      description: 'Traditional sweet rice pudding made with milk, rice and jaggery',
      badge: 'Popular',
    },
    {
      id: '6',
      name: 'Punugulu',
      description: 'Deep-fried savory snack made from idli batter',
      badge: 'Must Try',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">Famous Foods of Nellore</h1>
              <p className="text-sm md:text-base text-[#6B7280]">Authentic Telugu cuisine and local delicacies</p>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {foods.map((food) => (
                <div
                  key={food.id}
                  className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition relative"
                >
                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      food.badge === 'Popular' 
                        ? 'bg-[#E6F1FB] text-[#1A6FD4]' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {food.badge}
                    </span>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="h-[180px] bg-[#E5E7EB] rounded-t-lg flex items-center justify-center">
                    <div className="text-[#9CA3AF] text-5xl">🍛</div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-[15px] text-[#111827] mb-2">{food.name}</h3>
                    <p className="text-[13px] text-[#6B7280]">{food.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Right Ads Column */}
          <AdsColumn ads={tourismPageAds} />
        </div>
      </div>
    </div>
  );
};

export default FamousFoodsPage;