import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">AVANYA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Avanya Infotech is the global leader in innovative workforce solutions, connecting human potential to the power of business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Workforce Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/workforce-solutions" className="hover:text-cyan-400 transition-colors">Recruitment Process Outsourcing</Link></li>
              <li><Link to="/workforce-solutions" className="hover:text-cyan-400 transition-colors">Managed Service Provider</Link></li>
              <li><Link to="/workforce-solutions" className="hover:text-cyan-400 transition-colors">Talent Resourcing</Link></li>
              <li><Link to="/workforce-solutions" className="hover:text-cyan-400 transition-colors">Consulting Services</Link></li>
              <li><Link to="/career-resources" className="hover:text-cyan-400 transition-colors">Career Management</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Job Seekers</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/career-resources" className="hover:text-cyan-400 transition-colors">Browse Jobs</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Submit Resume</Link></li>
              <li><Link to="/career-resources" className="hover:text-cyan-400 transition-colors">Career Advice</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Find a Branch</Link></li>
              <li><Link to="/insights" className="hover:text-cyan-400 transition-colors">Media Center</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Investor Relations</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Vendor Partners</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Avanya Infotech. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;