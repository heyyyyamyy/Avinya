import React from 'react';
import { Stat } from '../types';
import { Trophy, Globe, Users, Award } from 'lucide-react';

const stats: Stat[] = [
  { id: '1', value: '75+', label: 'Countries & Territories' },
  { id: '2', value: '400K+', label: 'Clients Worldwide' },
  { id: '3', value: '600K+', label: 'People Employed Daily' },
  { id: '4', value: '70+', label: 'Years of Experience' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-4 font-semibold tracking-wider uppercase text-sm">
              <Award className="w-5 h-5" />
              <span>World's Most Ethical Companies</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Global Leader in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Innovative Workforce Solutions
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We connect the deep potential of human capital to the ambitions of business. Avanya Infotech serves both large and small organizations across all industry sectors through our diverse brands and offerings.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition-colors">
              Explore Our Story
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;