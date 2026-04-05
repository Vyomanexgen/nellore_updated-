import { Eye, Edit, Trash2, Plus, Download } from 'lucide-react';
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

const NewsManager = () => {
  const news = [
    {
      id: '1',
      title: 'Smart City Project Update',
      category: 'Infrastructure',
      date: 'April 3, 2026',
      author: 'Editor',
      views: 3250,
      status: 'Published',
      featured: true,
    },
    {
      id: '2',
      title: 'New Shopping Complex Opens',
      category: 'Business',
      date: 'April 2, 2026',
      author: 'Reporter',
      views: 1890,
      status: 'Published',
      featured: false,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">News Manager</h2>
          <p className="text-[#6B7280]">Manage news articles and breaking news</p>
        </div>
        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
          <Plus className="w-4 h-4 mr-2" />
          Create Article
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-6 shadow-sm">
        <div className="flex gap-4">
          <Input placeholder="Search articles..." className="max-w-xs" />
          <select className="border border-[#D1D5DB] rounded-md px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

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
            {news.map((article) => (
              <TableRow key={article.id} className="hover:bg-[#EFF6FF]">
                <TableCell className="font-medium">
                  {article.title}
                  {article.featured && (
                    <Badge className="ml-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                      Featured
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{article.category}</Badge>
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">{article.date}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{article.author}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{article.views}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {article.status}
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
                    <Button size="sm" variant="ghost" className="text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewsManager;
