import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import StatsSection from '../components/StatsSection';
import InsightsSection from '../components/InsightsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        <StatsSection />
        <InsightsSection />
        
        {/* Simple Newsletter Section */}
        <section className="bg-cyan-600 py-16 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Stay ahead in the world of work</h2>
            <p className="mb-8 max-w-xl mx-auto text-cyan-100">Subscribe to our newsletter for the latest workforce trends, insights, and expert advice delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-3 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
              />
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;