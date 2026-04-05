import { useParams, useLocation, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import AdsColumn, { moviesPageAds } from '../components/AdsColumn';
import { ArrowLeft, Calendar, Clock, MapPin, User, Mail, Phone, CreditCard } from 'lucide-react';
import { useState } from 'react';

const BookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const screening = location.state?.screening;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: 1,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const ticketPrice = 250; // ₹250 per ticket
  const totalAmount = ticketPrice * formData.tickets;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'tickets' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/movies');
    }, 3000);
  };

  if (!screening) {
    return (
      <div className="bg-[#F4F6F8] min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5 py-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#111827] mb-4">Screening not found</h1>
            <Button onClick={() => navigate('/movies')} className="bg-[#1A6FD4] hover:bg-[#0A4FAF]">
              Back to Movies
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-6 text-[#1A6FD4] hover:text-[#0A4FAF]"
              onClick={() => navigate('/movies')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Movies
            </Button>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 bg-green-50 border border-green-500 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Booking Successful!</h3>
                <p className="text-green-700">Your tickets have been booked. Redirecting...</p>
              </div>
            )}

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Book Tickets</h1>
              <p className="text-[#6B7280]">Complete your booking for the screening</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-[#111827] mb-6">Customer Details</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Number of Tickets */}
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-2">
                        Number of Tickets
                      </label>
                      <Input
                        type="number"
                        name="tickets"
                        value={formData.tickets}
                        onChange={handleInputChange}
                        min="1"
                        max="10"
                        required
                        className="w-full"
                      />
                      <p className="text-xs text-[#6B7280] mt-1">Maximum 10 tickets per booking</p>
                    </div>

                    {/* Payment Section */}
                    <div className="pt-4 border-t border-[#E5E7EB]">
                      <h3 className="text-lg font-semibold text-[#111827] mb-4">
                        <CreditCard className="w-4 h-4 inline mr-2" />
                        Payment Information
                      </h3>
                      <div className="bg-[#F5F7FA] rounded-lg p-4 mb-4">
                        <p className="text-sm text-[#6B7280] text-center">
                          Payment gateway integration will be available soon.
                          <br />
                          For now, payment will be collected at the venue.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#1A6FD4] hover:bg-[#0A4FAF] text-white py-6 text-lg"
                      disabled={showSuccess}
                    >
                      {showSuccess ? 'Booking Confirmed!' : `Confirm Booking - ₹${totalAmount}`}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-semibold text-[#111827] mb-4">Booking Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-[#111827] mb-2">{screening.name}</h3>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#6B7280] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#111827]">Venue</p>
                          <p className="text-[#6B7280]">{screening.venue}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-[#6B7280] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#111827]">Date</p>
                          <p className="text-[#6B7280]">{screening.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#6B7280] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#111827]">Time</p>
                          <p className="text-[#6B7280]">{screening.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E7EB] pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Ticket Price</span>
                      <span className="font-medium text-[#111827]">₹{ticketPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Quantity</span>
                      <span className="font-medium text-[#111827]">{formData.tickets}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Convenience Fee</span>
                      <span className="font-medium text-[#111827]">₹0</span>
                    </div>
                    <div className="border-t border-[#E5E7EB] pt-3 flex justify-between">
                      <span className="font-semibold text-[#111827]">Total Amount</span>
                      <span className="font-bold text-[#1A6FD4] text-lg">₹{totalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Ads Column */}
          <AdsColumn ads={moviesPageAds} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
