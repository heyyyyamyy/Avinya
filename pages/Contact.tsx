import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Contact Us</h1>
            <p className="text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Have questions? We're here to help you find the right solution.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8 animate-slide-right">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Headquarters</h4>
                        <p className="text-slate-600">Building No. 7, Naraingarh Chowk, Amritsar Bypass<br/>near New Maharaja Public School, Hamid Pura, Amritsar, Punjab – 143105</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Phone</h4>
                        <p className="text-slate-600">+91 7982520628</p>
                        <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm IST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">General Inquiry</h4>
                        <p className="text-slate-600">Info@avinyainfotech.co.in</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 pt-6 mt-2">
                       <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase text-slate-400">Department Emails</h4>
                       <ul className="space-y-3 text-sm">
                         <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-400"/> <span>Sales: sales@avinyainfotech.co.in</span></li>
                         <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-slate-400"/> <span>Support: support@avinyainfotech.co.in</span></li>
                         <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400"/> <span>PR: media@avinyainfotech.co.in</span></li>
                       </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:w-2/3 bg-white p-8 lg:p-12 rounded-xl shadow-lg animate-slide-up">
                <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all">
                      <option>General Inquiry</option>
                      <option>Looking for Talent</option>
                      <option>Looking for a Job</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-4 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;