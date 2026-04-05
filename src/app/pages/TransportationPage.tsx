import AdsColumn, { homePageAds } from '../components/AdsColumn';
import { Button } from '../components/ui/button';
import { Train, Bus, Car, Plane, MapPin, Clock, IndianRupee, ExternalLink } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const TransportationPage = () => {
  const trains = [
    {
      id: '1',
      name: 'Chennai Mail',
      number: '12841',
      from: 'Nellore',
      to: 'Chennai',
      departure: '6:30 AM',
      arrival: '9:45 AM',
      duration: '3h 15m',
      type: 'Express',
      frequency: 'Daily',
    },
    {
      id: '2',
      name: 'Coromandel Express',
      number: '12842',
      from: 'Nellore',
      to: 'Howrah',
      departure: '8:15 AM',
      arrival: '6:30 PM',
      duration: '10h 15m',
      type: 'Superfast',
      frequency: 'Daily',
    },
    {
      id: '3',
      name: 'Bangalore Express',
      number: '17225',
      from: 'Nellore',
      to: 'Bangalore',
      departure: '10:00 AM',
      arrival: '6:30 PM',
      duration: '8h 30m',
      type: 'Express',
      frequency: 'Daily',
    },
    {
      id: '4',
      name: 'Navjeevan Express',
      number: '12296',
      from: 'Nellore',
      to: 'Ahmedabad',
      departure: '2:45 PM',
      arrival: '8:00 AM+1',
      duration: '29h 15m',
      type: 'Superfast',
      frequency: 'Daily',
    },
    {
      id: '5',
      name: 'Guwahati Express',
      number: '15930',
      from: 'Nellore',
      to: 'Guwahati',
      departure: '11:20 PM',
      arrival: '6:15 AM+2',
      duration: '42h 55m',
      type: 'Express',
      frequency: 'Weekly',
    },
  ];

  const buses = [
    {
      id: '1',
      operator: 'APSRTC',
      type: 'Volvo AC',
      from: 'Nellore',
      to: 'Chennai',
      departure: '5:00 AM',
      duration: '4h 30m',
      fare: '₹450',
      frequency: 'Every 30 mins',
    },
    {
      id: '2',
      operator: 'APSRTC',
      type: 'Volvo AC',
      from: 'Nellore',
      to: 'Bangalore',
      departure: '7:00 PM',
      duration: '9h',
      fare: '₹850',
      frequency: 'Daily',
    },
    {
      id: '3',
      operator: 'APSRTC',
      type: 'Express',
      from: 'Nellore',
      to: 'Vijayawada',
      departure: '6:30 AM',
      duration: '5h',
      fare: '₹350',
      frequency: 'Every hour',
    },
    {
      id: '4',
      operator: 'APSRTC',
      type: 'Deluxe',
      from: 'Nellore',
      to: 'Hyderabad',
      departure: '9:00 PM',
      duration: '7h 30m',
      fare: '₹650',
      frequency: 'Daily',
    },
    {
      id: '5',
      operator: 'APSRTC',
      type: 'Garuda Plus',
      from: 'Nellore',
      to: 'Tirupati',
      departure: '5:30 AM',
      duration: '2h 30m',
      fare: '₹250',
      frequency: 'Every 2 hours',
    },
    {
      id: '6',
      operator: 'Private',
      type: 'Sleeper AC',
      from: 'Nellore',
      to: 'Mumbai',
      departure: '6:00 PM',
      duration: '24h',
      fare: '₹1,500',
      frequency: 'Daily',
    },
  ];

  const airports = [
    {
      id: '1',
      name: 'Chennai International Airport',
      distance: '175 km',
      travelTime: '3h 30m',
      description: 'Nearest major international airport with flights to domestic and international destinations',
      facilities: ['International', 'Domestic', 'Cargo'],
    },
    {
      id: '2',
      name: 'Tirupati Airport',
      distance: '115 km',
      travelTime: '2h 15m',
      description: 'Regional airport with limited domestic connectivity',
      facilities: ['Domestic'],
    },
    {
      id: '3',
      name: 'Vijayawada Airport',
      distance: '210 km',
      travelTime: '4h',
      description: 'Regional airport serving coastal Andhra Pradesh',
      facilities: ['Domestic'],
    },
  ];

  const localTransport = [
    {
      id: '1',
      name: 'Auto Rickshaws',
      icon: '🛺',
      description: 'Available throughout the city. Meter fare starts at ₹30',
      availability: '24/7',
    },
    {
      id: '2',
      name: 'City Buses',
      icon: '🚌',
      description: 'APSRTC operates regular city bus services',
      availability: '5:00 AM - 10:00 PM',
    },
    {
      id: '3',
      name: 'App-based Cabs',
      icon: '🚕',
      description: 'Ola, Uber available for local and outstation travel',
      availability: '24/7',
    },
    {
      id: '4',
      name: 'Rental Cars',
      icon: '🚗',
      description: 'Self-drive and chauffeur-driven cars available',
      availability: 'On Booking',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#111827] mb-2">Transportation in Nellore</h1>
              <p className="text-[#6B7280]">Complete guide to trains, buses, flights and local transport</p>
            </div>

            {/* Trains Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-7 h-7 text-[#1A6FD4]" />
                <h2 className="text-2xl font-bold text-[#111827]">Train Services</h2>
              </div>
              <p className="text-sm text-[#6B7280] mb-5">
                Nellore Railway Station (Station Code: NLR) is well-connected to major cities across India
              </p>
              <div className="space-y-4">
                {trains.map((train) => (
                  <div
                    key={train.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-[#111827]">{train.name}</h3>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                            {train.number}
                          </Badge>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            {train.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-[#6B7280]">
                            <MapPin className="w-4 h-4" />
                            <span>{train.from} → {train.to}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#6B7280]">
                            <Clock className="w-4 h-4" />
                            <span>{train.departure} - {train.arrival}</span>
                          </div>
                          <div className="text-[#6B7280]">
                            Duration: <span className="font-medium">{train.duration}</span>
                          </div>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-2">Frequency: {train.frequency}</p>
                      </div>
                      <Button className="bg-[#1A6FD4] hover:bg-[#0A4FAF]" onClick={() => window.open('https://www.irctc.co.in', '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Book on IRCTC
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Buses Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Bus className="w-7 h-7 text-green-600" />
                <h2 className="text-2xl font-bold text-[#111827]">Bus Services</h2>
              </div>
              <p className="text-sm text-[#6B7280] mb-5">
                APSRTC and private operators provide excellent bus connectivity from Nellore
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {buses.map((bus) => (
                  <div
                    key={bus.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:shadow-md hover:border-green-600 transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-[#111827] mb-1">{bus.from} → {bus.to}</h3>
                        <p className="text-xs text-[#6B7280]">{bus.operator}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {bus.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Clock className="w-4 h-4" />
                        <span>Departure: {bus.departure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {bus.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280]">
                        <IndianRupee className="w-4 h-4" />
                        <span className="font-medium text-[#111827]">{bus.fare}</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">Frequency: {bus.frequency}</p>
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open('https://www.apsrtconline.in', '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Book Online
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Airports Section */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl font-bold text-[#111827]">Nearby Airports</h2>
              </div>
              <div className="space-y-4">
                {airports.map((airport) => (
                  <div
                    key={airport.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm hover:shadow-md hover:border-purple-600 transition"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">{airport.name}</h3>
                        <p className="text-sm text-[#6B7280] mb-3">{airport.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-[#6B7280]">Distance: <span className="font-medium text-[#111827]">{airport.distance}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Car className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-[#6B7280]">By Road: <span className="font-medium text-[#111827]">{airport.travelTime}</span></span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {airport.facilities.map((facility) => (
                        <Badge key={facility} className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Transport Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-7 h-7 text-orange-600" />
                <h2 className="text-2xl font-bold text-[#111827]">Local Transport</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {localTransport.map((transport) => (
                  <div
                    key={transport.id}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-sm hover:shadow-md hover:border-orange-600 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{transport.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#111827] mb-2">{transport.name}</h3>
                        <p className="text-sm text-[#6B7280] mb-2">{transport.description}</p>
                        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                          <Clock className="w-3 h-3" />
                          <span>Available: {transport.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Info Banner */}
            <div className="mt-12 bg-[#E6F1FB] border border-[#1A6FD4] rounded-lg p-6">
              <h3 className="font-semibold text-[#111827] mb-2">Important Information</h3>
              <ul className="space-y-1 text-sm text-[#6B7280]">
                <li>• All timings are subject to change. Please verify before travel.</li>
                <li>• For latest train schedules, visit <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="text-[#1A6FD4] hover:underline">IRCTC</a></li>
                <li>• For bus bookings, visit <a href="https://www.apsrtconline.in" target="_blank" rel="noopener noreferrer" className="text-[#1A6FD4] hover:underline">APSRTC Online</a></li>
                <li>• Pre-book taxis and cabs for hassle-free airport transfers</li>
              </ul>
            </div>
          </main>

          {/* Right Ads Column */}
          <AdsColumn ads={homePageAds} />
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
