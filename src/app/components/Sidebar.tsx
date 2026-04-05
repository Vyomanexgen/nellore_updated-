import { Link } from 'react-router';
import { 
  Briefcase, 
  Newspaper, 
  Bell, 
  Calendar, 
  FileText, 
  Trophy, 
  MapPin, 
  Tag 
} from 'lucide-react';

const Sidebar = () => {
  const categories = [
    { icon: Newspaper, label: 'News', path: '/news', color: 'text-blue-600' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs', color: 'text-green-600' },
    { icon: Bell, label: 'Updates', path: '/updates', color: 'text-purple-600' },
    { icon: Calendar, label: 'Events', path: '/events', color: 'text-pink-600' },
    { icon: FileText, label: 'Results', path: '/results', color: 'text-orange-600' },
    { icon: Trophy, label: 'Sports', path: '/sports', color: 'text-red-600' },
    { icon: MapPin, label: 'Tourism', path: '/tourism/stay', color: 'text-teal-600' },
    { icon: Tag, label: 'Offers', path: '/offers', color: 'text-indigo-600' },
  ];

  const whatsNew = [
    'New Government Jobs Released',
    'APPSC Exam Results 2025',
    'Nellore Smart City Updates',
    'Tourism Festival Announced',
    'Local Business Directory',
  ];

  return (
    <aside className="w-[200px] flex-shrink-0 hidden lg:block">
      {/* Quick Links */}
      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 mb-5 shadow-sm">
        <h3 className="font-semibold text-[#111827] mb-3">Quick Links</h3>
        <nav className="space-y-1">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6B7280] hover:bg-[#F5F7FA] hover:text-[#1A6FD4] transition group"
            >
              <cat.icon className={`w-4 h-4 ${cat.color} group-hover:text-[#1A6FD4]`} />
              <span>{cat.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* What's New */}
      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4 shadow-sm">
        <h3 className="font-semibold text-[#111827] mb-3">What's New</h3>
        <ul className="space-y-2">
          {whatsNew.map((item, idx) => (
            <li key={idx} className="text-xs text-[#6B7280] hover:text-[#1A6FD4] cursor-pointer transition">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
