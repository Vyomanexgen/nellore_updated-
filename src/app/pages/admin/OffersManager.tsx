import { Eye, Edit, Trash2, Plus } from 'lucide-react';
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

const OffersManager = () => {
  const offers = [
    {
      id: '1',
      title: 'Big Bazaar Mega Sale',
      business: 'Big Bazaar',
      discount: '50%',
      expiry: 'April 10, 2026',
      status: 'Active',
    },
    {
      id: '2',
      title: 'Restaurant Package',
      business: 'Grand Palace',
      discount: '30%',
      expiry: 'April 15, 2026',
      status: 'Active',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Offers Manager</h2>
          <p className="text-[#6B7280]">Manage promotional offers and deals</p>
        </div>
        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
          <Plus className="w-4 h-4 mr-2" />
          Create Offer
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-6 shadow-sm">
        <Input placeholder="Search offers..." className="max-w-xs" />
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB]">
              <TableHead>Title</TableHead>
              <TableHead>Business</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id} className="hover:bg-[#EFF6FF]">
                <TableCell className="font-medium">{offer.title}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{offer.business}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {offer.discount}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-[#6B7280]">{offer.expiry}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {offer.status}
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

export default OffersManager;
