import { Eye, Edit, Trash2, Plus, Download, Filter } from 'lucide-react';
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

const JobsManager = () => {
  const jobs = [
    {
      id: '1',
      title: 'Junior Assistant',
      category: 'Government',
      date: 'April 1, 2026',
      author: 'Admin',
      views: 1250,
      status: 'Published',
    },
    {
      id: '2',
      title: 'Software Engineer',
      category: 'Private',
      date: 'April 2, 2026',
      author: 'Admin',
      views: 890,
      status: 'Published',
    },
    {
      id: '3',
      title: 'Marketing Executive',
      category: 'Private',
      date: 'April 3, 2026',
      author: 'Admin',
      views: 654,
      status: 'Draft',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Jobs Manager</h2>
          <p className="text-[#6B7280]">Manage job postings and applications</p>
        </div>
        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
          <Plus className="w-4 h-4 mr-2" />
          Add New Job
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-6 shadow-sm">
        <div className="flex gap-4">
          <Input placeholder="Search jobs..." className="max-w-xs" />
          <select className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <select className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]">
            <option>All Categories</option>
            <option>Government</option>
            <option>Private</option>
            <option>Internship</option>
          </select>
          <input
            type="date"
            className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4]"
          />
          <Button variant="outline" className="border-[#1A6FD4] text-[#1A6FD4]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB]">
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id} className="hover:bg-[#EFF6FF] transition">
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{job.category}</Badge>
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">{job.date}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{job.author}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{job.views}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      job.status === 'Published'
                        ? 'bg-green-100 text-green-700 hover:bg-green-100'
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-100'
                    }
                  >
                    {job.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    {job.status === 'Draft' && (
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
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Total Jobs</p>
          <p className="text-3xl font-bold text-[#111827]">127</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Published</p>
          <p className="text-3xl font-bold text-green-600">98</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Draft</p>
          <p className="text-3xl font-bold text-amber-600">29</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm">
          <p className="text-sm text-[#6B7280] mb-2">Total Views</p>
          <p className="text-3xl font-bold text-[#1A6FD4]">45.2K</p>
        </div>
      </div>
    </div>
  );
};

export default JobsManager;
