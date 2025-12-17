import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Briefcase, BookOpen, UserCheck, Star, FileText, Video, Calculator, HelpCircle, ChevronRight, Clock, DollarSign, X, Upload, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  { title: 'Senior Frontend Developer', location: 'Remote / Bangalore, India', type: 'Full-time', posted: '2 days ago', salary: '₹25L - ₹40L' },
  { title: 'Data Scientist', location: 'New York, USA', type: 'Contract', posted: '5 days ago', salary: '$80 - $120 / hr' },
  { title: 'Human Resources Manager', location: 'Mumbai, India', type: 'Full-time', posted: '1 day ago', salary: '₹15L - ₹22L' },
  { title: 'Project Manager', location: 'London, UK', type: 'Full-time', posted: '1 week ago', salary: '£65k - £85k' },
  { title: 'Full Stack Engineer', location: 'Hyderabad, India', type: 'Full-time', posted: '3 days ago', salary: '₹18L - ₹30L' },
  { title: 'UX Designer', location: 'Remote / Toronto', type: 'Full-time', posted: '1 week ago', salary: '$90k - $110k' },
  { title: 'Cloud Architect', location: 'Pune, India', type: 'Full-time', posted: '2 days ago', salary: '₹35L - ₹50L' },
];

const CareerResources: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleApplyClick = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setApplicationStatus('idle');
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationStatus('submitting');
    
    // Simulate API submission delay
    setTimeout(() => {
      setApplicationStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Search Hero */}
        <section className="bg-cyan-600 py-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">Find Your Dream Job</h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Explore thousands of opportunities with top employers around the globe. We connect talent with ambition.
            </p>
            
            <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex-1 flex items-center bg-slate-100 rounded-lg px-4 py-3 border border-transparent focus-within:border-cyan-500 transition-colors">
                <Search className="w-5 h-5 text-slate-400 mr-2" />
                <input type="text" placeholder="Job title, keywords..." className="bg-transparent w-full focus:outline-none text-slate-800 placeholder-slate-500" />
              </div>
              <div className="flex-1 flex items-center bg-slate-100 rounded-lg px-4 py-3 border border-transparent focus-within:border-cyan-500 transition-colors">
                <MapPin className="w-5 h-5 text-slate-400 mr-2" />
                <input type="text" placeholder="City, state, or zip" className="bg-transparent w-full focus:outline-none text-slate-800 placeholder-slate-500" />
              </div>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Search Jobs
              </button>
            </div>
            <div className="mt-6 text-sm text-cyan-100 animate-slide-up" style={{ animationDelay: '300ms' }}>
              Popular: <span className="underline cursor-pointer hover:text-white mx-1">Remote</span> <span className="underline cursor-pointer hover:text-white mx-1">Java Developer</span> <span className="underline cursor-pointer hover:text-white mx-1">Marketing Manager</span>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Featured Opportunities</h2>
              <Link to="#" className="text-cyan-600 font-bold hover:text-cyan-700 flex items-center text-sm">View All Jobs <ChevronRight className="w-4 h-4" /></Link>
            </div>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 hover:text-cyan-600 cursor-pointer transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-500 mt-2 text-sm">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-slate-400"><Clock className="w-3 h-3" /> {job.posted}</span>
                    <button 
                      onClick={() => handleApplyClick(job)}
                      className="bg-cyan-50 text-cyan-700 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-100 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Modal */}
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up relative">
              
              <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50">
                <div>
                   <h3 className="text-xl font-bold text-slate-900">Apply for Position</h3>
                   <p className="text-sm text-slate-500">{selectedJob.title} • {selectedJob.location}</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-200 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                {applicationStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted!</h4>
                    <p className="text-slate-600 mb-8 max-w-sm">
                      Thank you for applying for the <span className="font-semibold text-slate-900">{selectedJob.title}</span> position. 
                      Our recruitment team will review your application and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(false)} 
                      className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors w-full sm:w-auto"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                         <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all bg-slate-50 focus:bg-white" />
                       </div>
                       <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                         <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all bg-slate-50 focus:bg-white" />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                       <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all bg-slate-50 focus:bg-white" />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                       <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all bg-slate-50 focus:bg-white" />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">Resume / CV</label>
                       <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-cyan-500 hover:bg-cyan-50 transition-all cursor-pointer bg-slate-50">
                          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-700 font-medium">Click to upload or drag and drop</p>
                          <p className="text-xs text-slate-500 mt-1">PDF, DOCX, JPG up to 10MB</p>
                       </div>
                     </div>
                     <button 
                        type="submit" 
                        disabled={applicationStatus === 'submitting'}
                        className="w-full bg-cyan-600 text-white font-bold py-4 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-cyan-200"
                     >
                        {applicationStatus === 'submitting' ? (
                          <>Processing Application...</>
                        ) : (
                          <>Submit Application <ChevronRight className="w-4 h-4" /></>
                        )}
                     </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Your Journey to a New Career</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-0"></div>
              
              {[
                { title: 'Create Profile', icon: <UserCheck />, desc: 'Upload your resume and set your preferences.' },
                { title: 'Apply or Get Scouted', icon: <Search />, desc: 'Apply to jobs or let our recruiters find you.' },
                { title: 'Interview', icon: <Video />, desc: 'Connect with employers for screening and interviews.' },
                { title: 'Get Hired', icon: <Briefcase />, desc: 'Negotiate your offer and start your new chapter.' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Tools */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Career Tools & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-cyan-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Resume Builder</h3>
                <p className="text-slate-600 mb-6">Create a professional resume in minutes with our ATS-friendly templates.</p>
                <Link to="#" className="text-cyan-600 font-bold hover:underline inline-flex items-center">Start Building <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Salary Calculator</h3>
                <p className="text-slate-600 mb-6">Know your worth. Compare salaries by job title, location, and experience.</p>
                <Link to="#" className="text-cyan-600 font-bold hover:underline inline-flex items-center">Check Salaries <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skills Assessment</h3>
                <p className="text-slate-600 mb-6">Test your skills and earn badges to stand out to potential employers.</p>
                <Link to="#" className="text-cyan-600 font-bold hover:underline inline-flex items-center">Take a Quiz <ChevronRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Is there a fee for job seekers?', a: 'No, our services are completely free for candidates. We are paid by the employers to find great talent like you.' },
                { q: 'How long does the process take?', a: 'It varies by role and employer, but typically the process from application to offer takes 2-4 weeks.' },
                { q: 'Do you offer remote jobs?', a: 'Yes, we have a wide selection of remote and hybrid opportunities across various industries.' },
                { q: 'Can I apply for multiple jobs?', a: 'Absolutely! You can apply to as many positions as you are qualified for.' }
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 hover:border-cyan-300 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-500" />
                    {item.q}
                  </h3>
                  <p className="text-slate-600 ml-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerResources;