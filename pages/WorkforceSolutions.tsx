import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, CheckCircle, Zap, Shield, Briefcase, Globe, Factory, Cpu, Landmark, ShoppingCart, Stethoscope, Hammer, Search, UserCheck, Rocket, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkforceSolutions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">Expert Recruitment Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
              Strategic staffing and recruitment solutions tailored to your business goals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Offerings</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions designed to drive agility and business impact.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Contract Staffing',
                  icon: <Users className="w-10 h-10 text-cyan-500" />,
                  desc: 'Flexible temporary staffing to manage fluctuating workloads, seasonal peaks, and specialized project needs.'
                },
                {
                  title: 'Permanent Recruitment',
                  icon: <Briefcase className="w-10 h-10 text-purple-500" />,
                  desc: 'Finding and placing long-term talent that perfectly aligns with your company culture and technical requirements.'
                },
                {
                  title: 'RPO (Recruitment Process Outsourcing)',
                  icon: <Globe className="w-10 h-10 text-blue-500" />,
                  desc: 'End-to-end management of your recruitment process for greater efficiency, scalability, and lower cost.'
                },
                {
                  title: 'Managed Service Provider (MSP)',
                  icon: <Shield className="w-10 h-10 text-emerald-500" />,
                  desc: 'Comprehensive program management for your entire contingent workforce and vendor population.'
                },
                {
                  title: 'Executive Search',
                  icon: <Zap className="w-10 h-10 text-orange-500" />,
                  desc: 'Specialized retained search services to identify and attract C-suite executives and senior leadership.'
                },
                {
                  title: 'HR Consulting',
                  icon: <CheckCircle className="w-10 h-10 text-red-500" />,
                  desc: 'Strategic advisory services to optimize your workforce planning, talent retention, and organizational design.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-6 bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <Link to="/contact" className="text-cyan-600 font-bold hover:text-cyan-700 inline-flex items-center">
                    Get Started <span className="ml-1">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Specialized expertise across major global sectors.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <Cpu />, label: 'Technology' },
                { icon: <Landmark />, label: 'Finance' },
                { icon: <Stethoscope />, label: 'Healthcare' },
                { icon: <Factory />, label: 'Manufacturing' },
                { icon: <ShoppingCart />, label: 'Retail' },
                { icon: <Hammer />, label: 'Construction' }
              ].map((industry, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-cyan-50 transition-colors group cursor-pointer border border-slate-100">
                  <div className="text-slate-500 group-hover:text-cyan-600 mb-3 transition-colors">
                    {React.cloneElement(industry.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">Our Engagement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', icon: <Search />, text: 'We analyze your business needs, culture, and specific talent requirements.' },
                { step: '02', title: 'Strategy', icon: <BarChart />, text: 'We design a tailored workforce strategy aligned with your objectives.' },
                { step: '03', title: 'Acquisition', icon: <UserCheck />, text: 'We leverage our global network to source and vet top-tier candidates.' },
                { step: '04', title: 'Optimization', icon: <Rocket />, text: 'We manage onboarding and continuously optimize performance.' }
              ].map((process, i) => (
                <div key={i} className="relative">
                  <div className="mb-6 text-cyan-500">
                    {React.cloneElement(process.icon as React.ReactElement, { size: 40 })}
                  </div>
                  <div className="text-5xl font-bold text-slate-800 absolute -top-4 right-4 opacity-20 select-none">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{process.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4">
             <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
               <div className="lg:w-1/2 p-12 text-white flex flex-col justify-center">
                 <div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit">Success Story</div>
                 <h3 className="text-3xl lg:text-4xl font-bold mb-6">Scaling Tech Talent for a Fortune 500 Innovator</h3>
                 <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
                   How Avanya Infotech helped a leading fintech company scale their engineering team by 200% in 6 months while reducing time-to-hire by 40%.
                 </p>
                 <div className="grid grid-cols-3 gap-6 mb-8">
                   <div>
                     <div className="text-3xl font-bold">200%</div>
                     <div className="text-sm text-cyan-200">Team Growth</div>
                   </div>
                   <div>
                     <div className="text-3xl font-bold">40%</div>
                     <div className="text-sm text-cyan-200">Faster Hiring</div>
                   </div>
                   <div>
                     <div className="text-3xl font-bold">98%</div>
                     <div className="text-sm text-cyan-200">Retention Rate</div>
                   </div>
                 </div>
                 <Link to="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors w-fit">
                   Read Case Study
                 </Link>
               </div>
               <div className="lg:w-1/2 relative min-h-[400px]">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" alt="Team success" className="absolute inset-0 w-full h-full object-cover" />
               </div>
             </div>
           </div>
        </section>

        {/* Call to Action */}
        <section className="bg-slate-50 py-20">
           <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-1/2 animate-slide-right">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" alt="Team meeting" className="rounded-2xl shadow-2xl" />
             </div>
             <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Transform Your Workforce?</h2>
               <ul className="space-y-4 mb-8">
                 {[
                   'Access to a global talent pool of 10M+ candidates',
                   'AI-driven matching technology',
                   'Dedicated account management',
                   'Compliance and risk management'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                     <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="flex gap-4">
                 <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
                   Request Consultation
                 </Link>
                 <Link to="/about" className="px-8 py-3 rounded-full font-bold text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors">
                   Learn More
                 </Link>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkforceSolutions;