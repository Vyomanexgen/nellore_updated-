import { useParams, useNavigate } from 'react-router';
import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const ResultDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on id
  const resultDetails = {
    id: id,
    title: 'APPSC Group 2 Services Mains Results 2025',
    board: 'Andhra Pradesh Public Service Commission',
    examDate: 'March 15 - March 30, 2026',
    declarationDate: 'April 3, 2026',
  };

  const candidateResults = [
    { rank: 1, rollNumber: 'AP2025001234', name: 'Rajesh Kumar Reddy', marksObtained: 485, totalMarks: 600, grade: 'A+', status: 'Pass' },
    { rank: 2, rollNumber: 'AP2025002156', name: 'Priya Lakshmi', marksObtained: 478, totalMarks: 600, grade: 'A+', status: 'Pass' },
    { rank: 3, rollNumber: 'AP2025003421', name: 'Venkata Ramana', marksObtained: 472, totalMarks: 600, grade: 'A+', status: 'Pass' },
    { rank: 4, rollNumber: 'AP2025001589', name: 'Sowmya Devi', marksObtained: 468, totalMarks: 600, grade: 'A', status: 'Pass' },
    { rank: 5, rollNumber: 'AP2025004567', name: 'Krishna Murthy', marksObtained: 462, totalMarks: 600, grade: 'A', status: 'Pass' },
    { rank: 6, rollNumber: 'AP2025002890', name: 'Anitha Kumari', marksObtained: 456, totalMarks: 600, grade: 'A', status: 'Pass' },
    { rank: 7, rollNumber: 'AP2025003145', name: 'Srinivas Rao', marksObtained: 451, totalMarks: 600, grade: 'A', status: 'Pass' },
    { rank: 8, rollNumber: 'AP2025005678', name: 'Lakshmi Prasanna', marksObtained: 448, totalMarks: 600, grade: 'B+', status: 'Pass' },
    { rank: 9, rollNumber: 'AP2025001923', name: 'Narasimha Rao', marksObtained: 445, totalMarks: 600, grade: 'B+', status: 'Pass' },
    { rank: 10, rollNumber: 'AP2025004321', name: 'Madhavi Latha', marksObtained: 442, totalMarks: 600, grade: 'B+', status: 'Pass' },
    { rank: 11, rollNumber: 'AP2025002567', name: 'Suresh Babu', marksObtained: 438, totalMarks: 600, grade: 'B+', status: 'Pass' },
    { rank: 12, rollNumber: 'AP2025003890', name: 'Kavitha Reddy', marksObtained: 435, totalMarks: 600, grade: 'B', status: 'Pass' },
    { rank: 13, rollNumber: 'AP2025001456', name: 'Ramesh Kumar', marksObtained: 431, totalMarks: 600, grade: 'B', status: 'Pass' },
    { rank: 14, rollNumber: 'AP2025005234', name: 'Padmavathi', marksObtained: 428, totalMarks: 600, grade: 'B', status: 'Pass' },
    { rank: 15, rollNumber: 'AP2025004789', name: 'Venkateswarlu', marksObtained: 425, totalMarks: 600, grade: 'B', status: 'Pass' },
  ];

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
              onClick={() => navigate('/results')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Results
            </Button>

            {/* Result Header */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[#111827] mb-3">
                    {resultDetails.title}
                  </h1>
                  <div className="space-y-2 text-sm text-[#6B7280]">
                    <p><span className="font-semibold">Board:</span> {resultDetails.board}</p>
                    <p><span className="font-semibold">Exam Date:</span> {resultDetails.examDate}</p>
                    <p><span className="font-semibold">Declaration Date:</span> {resultDetails.declarationDate}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="border-[#1A6FD4] text-[#1A6FD4] hover:bg-[#E6F1FB]">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#E5E7EB]">
                <h2 className="text-xl font-semibold text-[#111827]">Candidate Results</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F9FAFB]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Roll Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Candidate Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Marks Obtained
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Total Marks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#E5E7EB]">
                    {candidateResults.map((candidate) => (
                      <tr key={candidate.rollNumber} className="hover:bg-[#F9FAFB] transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#111827]">
                          {candidate.rank}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                          {candidate.rollNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#111827]">
                          {candidate.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                          {candidate.marksObtained}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                          {candidate.totalMarks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A6FD4]">
                          {candidate.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            {candidate.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default ResultDetailPage;