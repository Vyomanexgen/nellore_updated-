import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { FileCheck, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router';

const ResultsPage = () => {
  const navigate = useNavigate();

  const results = [
    {
      id: '1',
      title: 'APPSC Group 2 Services Mains Results 2025',
      exam: 'APPSC Group 2',
      date: 'March 15 - March 30, 2026',
      status: 'Published',
      board: 'APPSC',
    },
    {
      id: '2',
      title: 'Sachivalayam Village Assistant Results',
      exam: 'Sachivalayam',
      date: 'April 1 - April 10, 2026',
      status: 'Upcoming',
      board: 'Nellore District',
    },
    {
      id: '3',
      title: 'Secondary School Certificate (SSC) Results',
      exam: 'SSC',
      date: 'March 20, 2026',
      status: 'Published',
      board: 'AP Board',
    },
    {
      id: '4',
      title: 'Inter First Year Results 2025-26',
      exam: 'Intermediate',
      date: 'April 5, 2026',
      status: 'Upcoming',
      board: 'AP Board',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Exam Results</h1>
              <p className="text-[#6B7280]">Check your exam results and notifications</p>
            </div>

            <div className="mb-6">
              <Input placeholder="Search by exam name or board..." className="max-w-md" />
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="appsc">APPSC</TabsTrigger>
                <TabsTrigger value="sachivalayam">Sachivalayam</TabsTrigger>
                <TabsTrigger value="board">Board Exams</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={
                            result.status === 'Published'
                              ? 'bg-green-100 text-green-700 hover:bg-green-100'
                              : 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                          }
                        >
                          {result.status}
                        </Badge>
                        <span className="text-xs text-[#6B7280]">{result.board}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#111827] mb-2">{result.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                        <span>{result.exam}</span>
                        <span>•</span>
                        <span>{result.date}</span>
                      </div>
                    </div>
                    <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]" onClick={() => result.status === 'Published' && navigate(`/results/${result.id}`)}>
                      {result.status === 'Published' ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          View Results
                        </>
                      ) : (
                        <>
                          <FileCheck className="w-4 h-4 mr-2" />
                          Coming Soon
                        </>
                      )}
                    </Button>
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

export default ResultsPage;