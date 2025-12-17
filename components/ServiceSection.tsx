import React from 'react';
import { Users, Building2, Briefcase, Zap, LineChart, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Contract Staffing',
    description: 'Flexible temporary staffing solutions to manage fluctuating workloads and projects.',
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
    link: '/workforce-solutions',
  },
  {
    id: '2',
    title: 'Permanent Recruitment',
    description: 'Direct hire services to find long-term talent that fits your company culture.',
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80',
    link: '/workforce-solutions',
  },
  {
    id: '3',
    title: 'Executive Search',
    description: 'Retained search services for C-suite and senior leadership roles.',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80',
    link: '/workforce-solutions',
  },
  {
    id: '4',
    title: 'RPO & Consulting',
    description: 'Recruitment Process Outsourcing to streamline your entire hiring function.',
    icon: <LineChart className="w-8 h-8 text-emerald-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80',
    link: '/workforce-solutions',
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Recruitment Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive staffing and hiring solutions to meet the needs of today's dynamic business environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur rounded-lg p-2 shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;