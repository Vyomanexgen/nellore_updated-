import { useParams, useNavigate } from 'react-router';
import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const UpdateDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on id
  const updateDetails = {
    id: id,
    title: 'Smart City Road Infrastructure Development Phase 2',
    date: 'April 2, 2026',
    department: 'Infrastructure Department',
    category: 'Govt',
    fullDescription: `The Smart City Road Infrastructure Development Phase 2 project marks a significant milestone in Nellore's journey towards becoming a modern, well-connected urban center. This ambitious initiative aims to transform the city's road network with state-of-the-art infrastructure and intelligent transportation systems.

The project encompasses the construction and modernization of over 45 kilometers of major arterial roads and 120 kilometers of internal roads across all municipal zones. Key features include dedicated cycling lanes, pedestrian-friendly walkways with proper lighting, and smart traffic management systems equipped with AI-powered cameras for real-time monitoring.

Special attention has been given to eco-friendly construction practices, with the use of recycled materials and permeable pavements to enhance water drainage. The roads will feature solar-powered street lights and IoT-enabled sensors for automated maintenance alerts.

The estimated budget for this phase is ₹850 crores, with funding from both central and state government schemes. The project timeline spans 18 months, with completion expected by September 2027.

Local residents and businesses are encouraged to participate in the public consultation process to ensure that the development meets community needs. The Infrastructure Department has set up dedicated helplines and information centers across the city.

This initiative is expected to significantly reduce traffic congestion, improve air quality, and enhance the overall quality of life for Nellore's residents while supporting economic growth and tourism development.`,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
  };

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            {/* Back Button */}
            <Button
              variant="outline"
              size="sm"
              className="mb-6 border-[#E5E7EB] text-[#6B7280] hover:bg-[#F9FAFB]"
              onClick={() => navigate('/updates')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Updates
            </Button>

            {/* Detail Content */}
            <div className="flex gap-6">
              {/* Left: Article Content (60%) */}
              <div className="flex-[0_0_60%]">
                <div className="bg-white rounded-lg border border-[#E5E7EB] p-8 shadow-sm">
                  {/* Category Badge and Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {updateDetails.category}
                    </Badge>
                    <span className="text-sm text-[#6B7280]">{updateDetails.date}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold text-[#111827] mb-4">
                    {updateDetails.title}
                  </h1>

                  {/* Department */}
                  <p className="text-sm text-[#6B7280] mb-6 italic">
                    Published by: {updateDetails.department}
                  </p>

                  {/* Full Description */}
                  <div className="prose prose-gray max-w-none">
                    {updateDetails.fullDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-[#374151] leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Image (40%) */}
              <div className="flex-[0_0_40%]">
                <div className="sticky top-24">
                  <div
                    className="rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm"
                    style={{
                      backgroundImage: `url(${updateDetails.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '500px',
                    }}
                  />
                </div>
              </div>
            </div>
          </main>

          {/* Right Ads Column */}
          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default UpdateDetailPage;