import React from 'react';
import { Article } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';
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
  }
];

const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-slide-right">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">Latest Insights</h2>
            <p className="text-slate-500">Expert perspectives on the world of work.</p>
          </div>
          <Link to="/insights" className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors">
            View All Articles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link to={`/insights`} key={article.id} className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-60 overflow-hidden rounded-xl mb-6">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-800 uppercase tracking-wide z-10">
                  {article.category}
                </div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-slate-600 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;