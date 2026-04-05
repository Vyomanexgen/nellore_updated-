import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { Bell, Eye, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useState } from 'react';

const NotificationsPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const notifications = [
    {
      id: '1',
      title: 'Property Tax Payment Deadline Extended',
      date: 'April 2, 2026',
      department: 'Municipal',
      category: 'Govt',
      body: 'The deadline for property tax payment has been extended to April 30, 2026. Citizens can pay online or visit the municipal office.',
    },
    {
      id: '2',
      title: 'New Health Insurance Scheme for BPL Families',
      date: 'April 1, 2026',
      department: 'Health',
      category: 'Health',
      body: 'Government launches comprehensive health insurance coverage for families below poverty line. Registration starts from April 10.',
    },
    {
      id: '3',
      title: 'Free Skill Development Training Program',
      date: 'March 31, 2026',
      department: 'Education',
      category: 'Education',
      body: 'Applications invited for free skill development training in IT, digital marketing, and vocational courses. Limited seats available.',
    },
    {
      id: '4',
      title: 'Road Closure Notice for Smart City Works',
      date: 'March 30, 2026',
      department: 'Infrastructure',
      category: 'Govt',
      body: 'Main road near City Center will be closed for construction from April 5-15. Alternative routes have been announced.',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2 flex items-center gap-3">
                <Bell className="w-8 h-8 text-[#1A6FD4]" />
                Notifications
              </h1>
              <p className="text-[#6B7280]">Important government notices and updates</p>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="govt">Govt</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {notification.department}
                          </Badge>
                          <span className="text-xs text-[#6B7280]">{notification.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">
                          {notification.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setExpandedId(expandedId === notification.id ? null : notification.id)
                          }
                        >
                          {expandedId === notification.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {expandedId === notification.id && (
                      <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                        <p className="text-[#6B7280]">{notification.body}</p>
                        <div className="mt-4">
                          <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
                            Subscribe for Updates
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm" className="bg-[#1A6FD4]">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </main>

          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;