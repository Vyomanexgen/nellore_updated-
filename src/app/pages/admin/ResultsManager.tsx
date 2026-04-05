import { Eye, Edit, Trash2, Plus, Download, Upload } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

const ResultsManager = () => {
  const results = [
    {
      id: '1',
      exam: 'APPSC Group 2 Services',
      board: 'APPSC',
      resultDate: 'March 30, 2026',
      passPercentage: '18.5%',
      status: 'Published',
    },
    {
      id: '2',
      exam: 'SSC Results 2026',
      board: 'AP Board',
      resultDate: 'April 5, 2026',
      passPercentage: 'TBA',
      status: 'Upcoming',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Results Manager</h2>
          <p className="text-[#6B7280]">Manage exam results and notifications</p>
        </div>
        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
          <Plus className="w-4 h-4 mr-2" />
          Add Result
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-6 shadow-sm">
        <div className="flex gap-4">
          <Input placeholder="Search results..." className="max-w-xs" />
          <select className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm">
            <option>All Boards</option>
            <option>APPSC</option>
            <option>AP Board</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB]">
              <TableHead>Exam Name</TableHead>
              <TableHead>Board/Dept</TableHead>
              <TableHead>Result Date</TableHead>
              <TableHead>Pass %</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id} className="hover:bg-[#EFF6FF]">
                <TableCell className="font-medium">{result.exam}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{result.board}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{result.resultDate}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{result.passPercentage}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      result.status === 'Published'
                        ? 'bg-green-100 text-green-700 hover:bg-green-100'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                    }
                  >
                    {result.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost">
                      <Upload className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    {result.status === 'Upcoming' && (
                      <Button size="sm" className="bg-[#1A6FD4] hover:bg-[#185FA5]">
                        Publish
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Total Results</p>
          <p className="text-3xl font-bold text-[#111827]">45</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Published</p>
          <p className="text-3xl font-bold text-green-600">38</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Upcoming</p>
          <p className="text-3xl font-bold text-amber-600">7</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsManager;
