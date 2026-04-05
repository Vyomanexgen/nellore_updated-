import { useState } from 'react';
import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { FileText, Eye, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useNavigate } from 'react-router';

const UpdatesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const updates = [
    {
      id: '1',
      title: 'Smart City Road Infrastructure Development Phase 2',
      date: 'April 2, 2026',
      department: 'Infrastructure',
      category: 'Govt',
    },
    {
      id: '2',
      title: 'New Primary Health Centers to Open in Rural Areas',
      date: 'April 1, 2026',
      department: 'Health',
      category: 'Health',
    },
    {
      id: '3',
      title: 'Digital Library Access for All Government Schools',
      date: 'March 31, 2026',
      department: 'Education',
      category: 'Education',
    },
    {
      id: '4',
      title: 'Water Supply Enhancement Project Completed',
      date: 'March 30, 2026',
      department: 'Municipal',
      category: 'Infrastructure',
    },
    {
      id: '5',
      title: 'Farmer Welfare Scheme Registration Open',
      date: 'March 29, 2026',
      department: 'Agriculture',
      category: 'Govt',
    },
  ];

  const filteredUpdates = updates.filter((update: any) => 
    activeTab === 'all' || update.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">Government Updates</h1>
              <p className="text-sm md:text-base text-[#6B7280]">Latest civic and government notifications</p>
            </div>

            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <TabsList className="bg-white border border-[#E5E7EB]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#1A6FD4] data-[state=active]:text-white">All</TabsTrigger>
                <TabsTrigger value="govt" className="data-[state=active]:bg-[#1A6FD4] data-[state=active]:text-white">Govt</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-[#1A6FD4] data-[state=active]:text-white">Education</TabsTrigger>
                <TabsTrigger value="infrastructure" className="data-[state=active]:bg-[#1A6FD4] data-[state=active]:text-white">Infrastructure</TabsTrigger>
                <TabsTrigger value="health" className="data-[state=active]:bg-[#1A6FD4] data-[state=active]:text-white">Health</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-3">
              {filteredUpdates.map((update) => (
                <div
                  key={update.id}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {update.department}
                        </Badge>
                        <span className="text-xs text-[#6B7280]">{update.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#111827] mb-2">{update.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => navigate(`/updates/${update.id}`)}>
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;