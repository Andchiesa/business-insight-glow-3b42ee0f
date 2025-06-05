
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToAnalysis = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
            🚀 Transforme Sua Presença Digital
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
          Desbloqueie o Potencial
          <span className="block glow-text">Digital do Seu Negócio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Receba uma análise completa da sua presença online e insights personalizados de crescimento 
          para dominar seu mercado no mundo digital.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-glow"
            onClick={scrollToAnalysis}
          >
            Iniciar Análise Gratuita
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">
              ✅ Insights gratuitos • ✅ Sem cartão de crédito • ✅ Resultados instantâneos
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10.000+</div>
            <div className="text-gray-400">Negócios Analisados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
            <div className="text-gray-400">Taxa de Crescimento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24h</div>
            <div className="text-gray-400">Tempo Médio de ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};
