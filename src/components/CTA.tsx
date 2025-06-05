
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const CTA = () => {
  const scrollToAnalysis = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Don't let your competitors get ahead. Start your free digital presence analysis now and 
          discover the opportunities you're missing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-glow"
            onClick={scrollToAnalysis}
          >
            Get Free Analysis Now
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Free to Start</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400 mb-2">30 sec</div>
            <div className="text-gray-400">Quick Setup</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-400">Available Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};
