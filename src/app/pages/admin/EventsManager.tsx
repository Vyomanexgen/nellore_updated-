import { Eye, Edit, Trash2, Plus, Users } from 'lucide-react';
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

const EventsManager = () => {
  const events = [
    {
      id: '1',
      name: 'Food Festival 2026',
      venue: 'Nellore Stadium',
      date: 'April 15-17, 2026',
      registrations: 2500,
      status: 'Upcoming',
    },
    {
      id: '2',
      name: 'Job Fair',
      venue: 'Convention Center',
      date: 'April 25, 2026',
      registrations: 1800,
      status: 'Upcoming',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Events Manager</h2>
          <p className="text-[#6B7280]">Manage events and registrations</p>
        </div>
        <Button className="bg-[#1A6FD4] hover:bg-[#185FA5]">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-6 shadow-sm">
        <Input placeholder="Search events..." className="max-w-xs" />
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB]">
              <TableHead>Event Name</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Registrations</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} className="hover:bg-[#EFF6FF]">
                <TableCell className="font-medium">{event.name}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{event.venue}</TableCell>
                <TableCell className="text-sm text-[#6B7280]">{event.date}</TableCell>
                <TableCell>
                  <span className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <Users className="w-4 h-4" />
                    {event.registrations}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                    {event.status}
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

export default EventsManager;
