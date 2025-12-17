import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Article } from '../types';
import { Calendar, ArrowRight, Download, Mic, Play, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Work: Hybrid Models Here to Stay',
    category: 'Workforce Trends',
    date: 'Oct 12, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Explore how organizations are adapting to the permanent shift towards hybrid work environments.',
  },
  {
    id: '2',
    title: 'AI in Recruitment: Enhancing Human Connection',
    category: 'Technology',
    date: 'Sep 28, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80',
    excerpt: 'How artificial intelligence is being used to streamline hiring while keeping the human touch.',
  },
  {
    id: '3',
    title: 'Closing the Skills Gap in Tech',
    category: 'Talent Development',
    date: 'Sep 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Strategies for companies to upskill their workforce and meet the demands of tomorrow.',
  },
  {
    id: '4',
    title: 'The Rise of the Gig Economy',
    category: 'Industry News',
    date: 'Aug 22, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Understanding the impact of contract and freelance work on the global economy.',
  },
  {
    id: '5',
    title: 'Building a Diverse and Inclusive Workforce',
    category: 'DE&I',
    date: 'Aug 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Actionable steps for creating a culture of belonging in your organization.',
  },
  {
    id: '6',
    title: 'Navigating Salary Negotiations',
    category: 'Career Advice',
    date: 'Jul 30, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Tips for both employers and candidates on handling compensation discussions.',
  }
];

const Insights: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Insights & News</h1>
            <p className="text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Expert perspectives, research, and analysis on the world of work.
            </p>
          </div>
        </section>

        {/* Featured Report */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
               <div className="md:w-1/2 relative min-h-[300px]">
                 <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Report cover" />
                 <div className="absolute inset-0 bg-slate-900/20"></div>
                 <div className="absolute top-6 left-6 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured Report</div>
               </div>
               <div className="md:w-1/2 p-10 flex flex-col justify-center">
                 <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">2024 Global Talent Shortage Report</h2>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   Discover the latest trends in talent scarcity, skills gaps, and strategies leading organizations are using to attract and retain top talent in a competitive market.
                 </p>
                 <div className="flex gap-4">
                   <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                     <Download className="w-4 h-4" /> Download Report
                   </button>
                   <button className="flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                     Read Summary
                   </button>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white sticky top-[72px] z-30 shadow-sm">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex items-center gap-4 min-w-max">
              <span className="flex items-center gap-2 text-slate-500 font-semibold mr-4"><Filter className="w-4 h-4" /> Filter by:</span>
              {['All Topics', 'Workforce Trends', 'Technology', 'Leadership', 'Career Advice', 'DE&I', 'Policy'].map((topic, i) => (
                <button key={i} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={article.id} className="group cursor-pointer flex flex-col bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-800 uppercase tracking-wide z-10">
                      {article.category}
                    </div>
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-grow text-sm">
                      {article.excerpt}
                    </p>
                    <Link to={`/insights`} className="text-cyan-600 font-bold hover:underline mt-auto flex items-center text-sm">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
               <div>
                 <h2 className="text-3xl font-bold mb-2">Webinars & Events</h2>
                 <p className="text-slate-400">Join our experts for live discussions on industry hot topics.</p>
               </div>
               <Link to="#" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center">View Calendar <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Navigating the AI Revolution in HR', date: 'Nov 15, 2023', time: '10:00 AM EST', type: 'Live Webinar' },
                { title: 'Global Mobility: Managing a Borderless Workforce', date: 'Nov 22, 2023', time: '2:00 PM GMT', type: 'Virtual Panel' }
              ].map((event, i) => (
                <div key={i} className="bg-slate-800 p-6 rounded-xl flex items-start gap-4 hover:bg-slate-750 border border-slate-700 hover:border-cyan-500 transition-all cursor-pointer group">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-lg text-white shrink-0">
                     <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">{event.type}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{event.title}</h3>
                    <div className="flex gap-4 text-sm text-slate-400">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
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

export default Insights;