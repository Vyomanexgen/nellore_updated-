import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router';
import { Button } from '../components/ui/button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // If already logged in, redirect to expected route
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'Nelloriens@gmail.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin', { replace: true });
    } else {
      setError('Invalid email or password.');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A6FD4] to-[#0A4FAF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            N
          </div>
          <h2 className="text-2xl font-bold text-[#111827]">NELLORE.IN Admin</h2>
          <p className="text-sm font-medium text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-full mt-3">
            Temporary Development Only
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition"
              placeholder="Enter admin email"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#374151] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#1A6FD4] focus:border-[#1A6FD4] outline-none transition"
              placeholder="Enter password"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#1A6FD4] hover:bg-[#185FA5] text-white py-3 rounded-lg font-medium text-lg h-auto">
            Login to Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
