import { Outlet, Link, useLocation, Navigate, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Home,
  Newspaper,
  Briefcase,
  Calendar,
  Trophy,
  Bell,
  MapPin,
  Tag,
  Settings,
  FileText,
} from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login', { replace: true });
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Home, label: 'Home Page', path: '/admin/homepage' },
    { icon: Newspaper, label: 'News', path: '/admin/news' },
    { icon: Briefcase, label: 'Jobs', path: '/admin/jobs' },
    { icon: Calendar, label: 'Events', path: '/admin/events' },
    { icon: Trophy, label: 'Sports', path: '/admin/sports' },
    { icon: Bell, label: 'Updates', path: '/admin/updates' },
    { icon: MapPin, label: 'Tourism', path: '/admin/tourism' },
    { icon: Tag, label: 'Offers', path: '/admin/offers' },
    { icon: FileText, label: 'Results', path: '/admin/results' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-16 bg-white border-r border-[#E5E7EB] fixed h-screen">
        <div className="h-16 flex items-center justify-center border-b border-[#E5E7EB]">
          <Link to="/" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A6FD4] to-[#0A4FAF] flex items-center justify-center text-white font-bold">
            N
          </Link>
        </div>
        
        <nav className="py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-4 hover:bg-[#E6F1FB] transition group relative ${
                isActive(item.path) ? 'bg-[#E6F1FB]' : ''
              }`}
              title={item.label}
            >
              {isActive(item.path) && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A6FD4]" />
              )}
              <item.icon
                className={`w-5 h-5 ${
                  isActive(item.path) ? 'text-[#1A6FD4]' : 'text-[#6B7280]'
                }`}
              />
              <span className="text-[9px] mt-1 text-[#6B7280]">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-16 flex-1">
        {/* Header */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-[#111827]">NELLORE.IN Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#6B7280]">Admin User</span>
            <Link to="/" className="text-sm text-[#1A6FD4] hover:underline">
              View Site
            </Link>
            <span className="text-[#D1D5DB]">|</span>
            <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
