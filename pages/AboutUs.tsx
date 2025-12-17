import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Globe, Heart, TrendingUp, ShieldCheck, Leaf, Target, Clock, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 animate-slide-up">About Avanya Infotech</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              We are a premier global recruitment agency, connecting human potential to the power of business since 1998.
            </p>
          </div>
        </section>

        {/* Mission/Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2 animate-slide-right relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-100 rounded-full z-0"></div>
                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full z-0"></div>
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team" className="rounded-2xl shadow-2xl relative z-10" />
               </div>
               <div className="lg:w-1/2 animate-slide-up">
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                   <Target className="w-8 h-8 text-cyan-600" /> Our Mission
                 </h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   To be the most trusted recruitment partner for our clients, helping them build world-class teams, and to provide meaningful career opportunities to professionals globally.
                 </p>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                   <Globe className="w-8 h-8 text-purple-600" /> Our Vision
                 </h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   We believe that the right job can transform a person's life and the right talent can transform a business. We are dedicated to building a better future of work for everyone.
                 </p>
               </div>
             </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-slate-50 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our History</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200"></div>
              {[
                { year: '1998', title: 'Founded', desc: 'Avanya starts as a boutique recruitment firm in Bangalore.' },
                { year: '2005', title: 'Global Expansion', desc: 'Opened first international staffing offices in London and New York.' },
                { year: '2012', title: 'Service Diversification', desc: 'Launched RPO and Executive Search divisions.' },
                { year: '2020', title: 'Digital Transformation', desc: 'Released proprietary AI-matching platform for faster hiring.' },
                { year: 'Today', title: 'Industry Leader', desc: 'Placing over 100,000 candidates annually across 75 countries.' }
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between mb-8 w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  <div className="z-10 bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-lg shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className={`w-5/12 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${i % 2 === 0 ? 'text-right' : ''}`}>
                    <span className="text-cyan-600 font-bold text-lg block mb-1">{item.year}</span>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Jenkins', role: 'CEO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80' },
                { name: 'David Chen', role: 'CTO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' },
                { name: 'Elena Rodriguez', role: 'Chief People Officer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80' }
              ].map((leader, i) => (
                <div key={i} className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-cyan-200 transition-colors">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-slate-500 font-medium">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-12 h-12 text-cyan-400" />, title: 'People First', desc: 'We care about people and the role of work in their lives.' },
                { icon: <TrendingUp className="w-12 h-12 text-purple-400" />, title: 'Knowledge', desc: 'We share our knowledge and expertise to help everyone succeed.' },
                { icon: <ShieldCheck className="w-12 h-12 text-green-400" />, title: 'Innovation', desc: 'We lead in the world of work by daring to innovate.' },
                { icon: <Heart className="w-12 h-12 text-red-400" />, title: 'Integrity', desc: 'We do the right thing, even when no one is watching.' }
              ].map((value, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
             <div className="md:w-1/3 flex justify-center">
               <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <Leaf className="w-16 h-16" />
               </div>
             </div>
             <div className="md:w-2/3">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Committed to Sustainability</h2>
               <p className="text-slate-600 text-lg mb-6">
                 We are committed to running our business responsibly and sustainability. We aim to achieve Net Zero emissions by 2030 and are actively working to reduce our carbon footprint across all operations.
               </p>
               <button className="text-green-700 font-bold hover:underline flex items-center gap-2">
                 Read our ESG Report <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;