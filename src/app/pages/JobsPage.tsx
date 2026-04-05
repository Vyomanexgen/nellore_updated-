import AdsColumn, { jobsPageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { MapPin, Briefcase, IndianRupee, Filter, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useState } from 'react';

const JobsPage = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const isMobile = useMediaQuery('(max-width: 1024px)');

  // Helper function to calculate days ago
  const getDaysAgo = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
  };

  // Helper function to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // All jobs with posted dates
  const allGovtJobs = [
    {
      id: '1',
      title: 'Junior Assistant',
      organization: 'Nellore Municipal Corporation',
      location: 'Nellore',
      salary: '₹20,000-30,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Apr 30, 2026',
      postedDate: getDaysAgo(2),
      applyLink: 'https://nelloremunicipal.ap.gov.in/careers',
    },
    {
      id: '2',
      title: 'APPSC Group 2 Services',
      organization: 'Andhra Pradesh PSC',
      location: 'Nellore & Other Districts',
      salary: '₹44,000-1,42,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'May 15, 2026',
      postedDate: getDaysAgo(5),
      applyLink: 'https://psc.ap.gov.in',
    },
    {
      id: '3',
      title: 'Police Constable',
      organization: 'AP Police Recruitment',
      location: 'Nellore District',
      salary: '₹25,000-40,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Apr 25, 2026',
      postedDate: getDaysAgo(10),
      applyLink: 'https://appolice.gov.in/recruitment',
    },
    {
      id: '9',
      title: 'Revenue Inspector',
      organization: 'District Revenue Office',
      location: 'Nellore',
      salary: '₹35,000-50,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'May 20, 2026',
      postedDate: getDaysAgo(15),
      applyLink: 'https://revenue.ap.gov.in',
    },
    {
      id: '10',
      title: 'Teacher - Primary School',
      organization: 'Nellore Education Department',
      location: 'Nellore',
      salary: '₹30,000-45,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'May 25, 2026',
      postedDate: getDaysAgo(20),
      applyLink: 'https://education.ap.gov.in',
    },
    {
      id: '11',
      title: 'Staff Nurse',
      organization: 'Government General Hospital',
      location: 'Nellore',
      salary: '₹28,000-42,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Jun 5, 2026',
      postedDate: getDaysAgo(30),
      applyLink: 'https://health.ap.gov.in',
    },
    {
      id: '12',
      title: 'Clerk - Grade III',
      organization: 'Nellore Collectorate',
      location: 'Nellore',
      salary: '₹22,000-35,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Jun 10, 2026',
      postedDate: getDaysAgo(45),
      applyLink: 'https://collectorate.ap.gov.in',
    },
    {
      id: '13',
      title: 'Junior Engineer',
      organization: 'PWD Nellore',
      location: 'Nellore',
      salary: '₹40,000-60,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Jun 15, 2026',
      postedDate: getDaysAgo(60),
      applyLink: 'https://pwd.ap.gov.in',
    },
    {
      id: '14',
      title: 'Agriculture Officer',
      organization: 'Agriculture Department',
      location: 'Nellore',
      salary: '₹35,000-55,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Jun 20, 2026',
      postedDate: getDaysAgo(75),
      applyLink: 'https://agriculture.ap.gov.in',
    },
    {
      id: '15',
      title: 'Lab Technician',
      organization: 'District Hospital',
      location: 'Nellore',
      salary: '₹25,000-38,000',
      type: 'Government',
      badge: 'Published',
      lastDate: 'Jun 25, 2026',
      postedDate: getDaysAgo(88),
      applyLink: 'https://health.ap.gov.in',
    },
    {
      id: 'G1',
      title: 'Forest Ranger',
      organization: 'AP Forest Department',
      location: 'Nellore District',
      salary: '₹38,000-55,000',
      type: 'Government',
      badge: 'New',
      lastDate: 'Jul 5, 2026',
      postedDate: getDaysAgo(1),
      applyLink: 'https://forests.ap.gov.in',
    },
    {
      id: 'G2',
      title: 'MRO - Mandal Revenue Officer',
      organization: 'Revenue Department',
      location: 'Nellore (Rural)',
      salary: '₹65,000-95,000',
      type: 'Government',
      badge: 'Direct',
      lastDate: 'Jul 15, 2026',
      postedDate: getDaysAgo(3),
      applyLink: 'https://revenue.ap.gov.in',
    },
  ];

  const allPrivateJobs = [
    {
      id: '4',
      title: 'Software Engineer',
      organization: 'Tech Solutions Pvt Ltd',
      location: 'Nellore',
      salary: '₹4-6 LPA',
      type: 'Private',
      experience: '2-4 years',
      postedDate: getDaysAgo(3),
      applyLink: 'https://techsolutions.com/careers',
    },
    {
      id: '5',
      title: 'Marketing Manager',
      organization: 'Retail Mart',
      location: 'Nellore',
      salary: '₹5-7 LPA',
      type: 'Private',
      experience: '3-5 years',
      postedDate: getDaysAgo(7),
      applyLink: 'https://retailmart.com/jobs',
    },
    {
      id: '6',
      title: 'Accountant',
      organization: 'Finance Corp',
      location: 'Nellore',
      salary: '₹3-4 LPA',
      type: 'Private',
      experience: '1-3 years',
      postedDate: getDaysAgo(12),
      applyLink: 'https://financecorp.com/careers',
    },
    {
      id: '16',
      title: 'Sales Executive',
      organization: 'Automobile Dealers',
      location: 'Nellore',
      salary: '₹3-5 LPA',
      type: 'Private',
      experience: '1-3 years',
      postedDate: getDaysAgo(18),
      applyLink: 'https://autodealers.com/careers',
    },
    {
      id: '17',
      title: 'HR Manager',
      organization: 'Corporate Services Ltd',
      location: 'Nellore',
      salary: '₹6-8 LPA',
      type: 'Private',
      experience: '4-6 years',
      postedDate: getDaysAgo(25),
      applyLink: 'https://corpservices.com/jobs',
    },
    {
      id: '18',
      title: 'Graphic Designer',
      organization: 'Design Studio',
      location: 'Nellore',
      salary: '₹3-4 LPA',
      type: 'Private',
      experience: '2-4 years',
      postedDate: getDaysAgo(35),
      applyLink: 'https://designstudio.com/careers',
    },
    {
      id: '19',
      title: 'Business Analyst',
      organization: 'Consulting Firm',
      location: 'Nellore',
      salary: '₹5-7 LPA',
      type: 'Private',
      experience: '3-5 years',
      postedDate: getDaysAgo(50),
      applyLink: 'https://consulting.com/jobs',
    },
    {
      id: '20',
      title: 'Data Entry Operator',
      organization: 'BPO Services',
      location: 'Nellore',
      salary: '₹2-3 LPA',
      type: 'Private',
      experience: '0-2 years',
      postedDate: getDaysAgo(65),
      applyLink: 'https://bposervices.com/careers',
    },
    {
      id: '21',
      title: 'Customer Service Executive',
      organization: 'Telecom Company',
      location: 'Nellore',
      salary: '₹2.5-3.5 LPA',
      type: 'Private',
      experience: '1-2 years',
      postedDate: getDaysAgo(80),
      applyLink: 'https://telecom.com/jobs',
    },
    {
      id: 'P1',
      title: 'Back-end Developer',
      organization: 'Cloud Nexus',
      location: 'Nellore',
      salary: '₹5-8 LPA',
      type: 'Private',
      experience: '2-4 years',
      postedDate: getDaysAgo(2),
      applyLink: 'https://cloudnexus.com/careers',
    },
    {
      id: 'P2',
      title: 'Store Manager',
      organization: 'Lifestyle Stores',
      location: 'Nellore',
      salary: '₹4-6 LPA',
      type: 'Private',
      experience: '3-5 years',
      postedDate: getDaysAgo(4),
      applyLink: 'https://lifestyle.com/careers',
    },
  ];

  const allInternships = [
    {
      id: '7',
      title: 'Digital Marketing Intern',
      organization: 'Creative Agency',
      location: 'Nellore',
      stipend: '₹10,000/month',
      type: 'Internship',
      duration: '3 months',
      postedDate: getDaysAgo(4),
      applyLink: 'https://creativeagency.com/internships',
    },
    {
      id: '8',
      title: 'Web Development Intern',
      organization: 'IT Solutions',
      location: 'Nellore',
      stipend: '₹12,000/month',
      type: 'Internship',
      duration: '6 months',
      postedDate: getDaysAgo(8),
      applyLink: 'https://itsolutions.com/internships',
    },
    {
      id: '22',
      title: 'Content Writing Intern',
      organization: 'Media House',
      location: 'Nellore',
      stipend: '₹8,000/month',
      type: 'Internship',
      duration: '3 months',
      postedDate: getDaysAgo(22),
      applyLink: 'https://mediahouse.com/internships',
    },
    {
      id: '23',
      title: 'HR Intern',
      organization: 'Corporate Ltd',
      location: 'Nellore',
      stipend: '₹9,000/month',
      type: 'Internship',
      duration: '4 months',
      postedDate: getDaysAgo(40),
      applyLink: 'https://corporate.com/internships',
    },
    {
      id: '24',
      title: 'Finance Intern',
      organization: 'Banking Services',
      location: 'Nellore',
      stipend: '₹11,000/month',
      type: 'Internship',
      duration: '6 months',
      postedDate: getDaysAgo(55),
      applyLink: 'https://banking.com/internships',
    },
    {
      id: '25',
      title: 'UI/UX Design Intern',
      organization: 'Tech Startup',
      location: 'Nellore',
      stipend: '₹10,000/month',
      type: 'Internship',
      duration: '5 months',
      postedDate: getDaysAgo(70),
      applyLink: 'https://techstartup.com/internships',
    },
  ];

  // Filter jobs based on filterType and showAllJobs state
  const filteredGovt = allGovtJobs.filter(job => filterType === 'All' || filterType === 'Government');
  const filteredPrivate = allPrivateJobs.filter(job => filterType === 'All' || filterType === 'Private');
  const filteredInternships = allInternships.filter(job => filterType === 'All' || filterType === 'Internship');

  const govtJobs = showAllJobs ? filteredGovt : filteredGovt.slice(0, 3);
  const privateJobs = showAllJobs ? filteredPrivate : filteredPrivate.slice(0, 3);
  const internships = showAllJobs ? filteredInternships : filteredInternships.slice(0, 2);

  // Calculate total jobs in last 90 days
  const totalJobsLast90Days = filteredGovt.length + filteredPrivate.length + filteredInternships.length;

  // Helper to get days ago text
  const getDaysAgoText = (date: Date) => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2 text-center md:text-left">Job Opportunities</h1>
                <p className="text-[#6B7280] text-center md:text-left">Find the best jobs in Nellore</p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 px-2">
                <Button 
                  variant="outline" 
                  className={`border-[#1A6FD4] ${showAllJobs ? 'bg-[#1A6FD4] text-white' : 'text-[#1A6FD4] hover:bg-[#E6F1FB]'} flex-1 sm:flex-initial`}
                  onClick={() => setShowAllJobs(!showAllJobs)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {showAllJobs ? 'Show Recent' : 'See All Jobs (90 Days)'}
                </Button>
                
                <div className="flex items-center gap-1 bg-white border border-[#E5E7EB] rounded-md p-1 shadow-sm overflow-x-auto max-w-full">
                  {['All', 'Government', 'Private', 'Internship'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilterType(type)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                        filterType === type 
                          ? 'bg-[#1A6FD4] text-white shadow-md' 
                          : 'text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Banner when showing all jobs */}
            {showAllJobs && (
              <div className="mb-6 bg-[#E6F1FB] border border-[#1A6FD4] rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#1A6FD4]" />
                  <div>
                    <p className="font-semibold text-[#111827]">
                      Showing All Jobs from Past 90 Days
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Total {totalJobsLast90Days} job opportunities available ({allGovtJobs.length} Government, {allPrivateJobs.length} Private, {allInternships.length} Internships)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {(filterType === 'All' || filterType === 'Government') && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-green-600" />
                  Government Jobs
                </h2>
                <div className="space-y-4">
                  {injectAds(govtJobs, jobsPageAds, 'job', isMobile).map((item: any, idx: number) => {
                    if (item.type === 'ad') {
                      return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                    }
                    const job = item.data;
                    return (
                      <div
                        key={job.id}
                        className="bg-white rounded-xl border border-[#E5E7EB] p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1A6FD4] transition">{job.title}</h3>
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-2 py-0 h-5 text-[10px] uppercase tracking-wider">
                                {job.badge}
                              </Badge>
                            </div>
                            <p className="text-[#4B5563] font-medium">{job.organization}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#6B7280]">
                              <span className="flex items-center gap-1.5 bg-[#F9FAFB] px-2 py-1 rounded-md border border-[#F3F4F6]">
                                <MapPin className="w-4 h-4 text-[#9CA3AF]" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1.5 bg-[#F9FAFB] px-2 py-1 rounded-md border border-[#F3F4F6]">
                                <IndianRupee className="w-4 h-4 text-[#9CA3AF]" />
                                {job.salary}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center sm:items-end justify-between sm:flex-col gap-3 pt-3 sm:pt-0 border-t sm:border-none border-gray-100">
                            <div className="flex flex-col sm:items-end">
                              <span className="text-[10px] text-gray-400 uppercase font-semibold">Posted</span>
                              <span className="text-xs font-medium text-gray-600">{getDaysAgoText(job.postedDate)}</span>
                            </div>
                            <Button className="bg-[#1A6FD4] hover:bg-[#185FA5] px-6 shadow-sm" onClick={() => window.open(job.applyLink, '_blank')}>Apply Now</Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pt-4 border-t border-gray-50 text-xs md:text-sm">
                          <Calendar className="w-3.5 h-3.5 text-[#E11D48]" />
                          <span className="text-gray-500 font-medium">Last Date to Apply:</span>
                          <span className="text-[#E11D48] font-bold">{job.lastDate}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Sponsored Banner */}
            <div className="mb-12 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg p-6 text-white">
              <p className="text-xs uppercase tracking-wide mb-2 opacity-80">Sponsored</p>
              <h3 className="text-xl font-bold mb-2">Get Interview Ready with Expert Coaching</h3>
              <p className="mb-4 opacity-90 text-sm">95% Success Rate • Free Demo Classes Available</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Enroll Now
              </Button>
            </div>

            {(filterType === 'All' || filterType === 'Private') && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  Private Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {injectAds(privateJobs, jobsPageAds, 'job', isMobile).map((item: any, idx: number) => {
                    if (item.type === 'ad') {
                      return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                    }
                    const job = item.data;
                    return (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                      >
                        <h3 className="font-semibold text-[#111827] mb-2">{job.title}</h3>
                        <p className="text-sm text-[#6B7280] mb-3">{job.organization}</p>
                        <div className="space-y-2 text-xs text-[#6B7280] mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <IndianRupee className="w-3 h-3" />
                            {job.salary}
                          </div>
                          <div>Experience: {job.experience}</div>
                        </div>
                        <Button size="sm" className="w-full bg-[#1A6FD4] hover:bg-[#185FA5]" onClick={() => window.open(job.applyLink, '_blank')}>
                          Apply Now
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {(filterType === 'All' || filterType === 'Internship') && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Internships
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {internships.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-[#111827] mb-2">{job.title}</h3>
                          <p className="text-sm text-[#6B7280]">{job.organization}</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                          {job.type}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-xs text-[#6B7280] mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <IndianRupee className="w-3 h-3" />
                          {job.stipend}
                        </div>
                        <div>Duration: {job.duration}</div>
                      </div>
                      <Button size="sm" className="w-full bg-[#1A6FD4] hover:bg-[#185FA5]" onClick={() => window.open(job.applyLink, '_blank')}>
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Load More */}
            <div className="text-center">
              <Button className="bg-[#1A6FD4] hover:bg-[#185FA5] px-8" onClick={() => setShowAllJobs(!showAllJobs)}>
                {showAllJobs ? 'Show Less' : 'Loading more...'}
              </Button>
            </div>
          </main>

          {/* Right Ads Column */}
          <div className="">
            <AdsColumn ads={jobsPageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;