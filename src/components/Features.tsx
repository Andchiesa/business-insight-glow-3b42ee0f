
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Análise de Presença no Google",
    description: "Auditoria completa do seu perfil no Google Meu Negócio, posicionamento em buscas e performance de SEO local.",
    icon: "🎯",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Auditoria de Redes Sociais",
    description: "Análise abrangente da sua presença no Facebook, Instagram, TikTok, LinkedIn e outras redes sociais.",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Otimização de Website",
    description: "Revisão detalhada do design, usabilidade, otimização mobile e potencial de conversão do seu site.",
    icon: "💻",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Estratégia de Marketing Digital",
    description: "Avaliação dos seus anúncios pagos, email marketing, SEO e efetividade do marketing de conteúdo.",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Análise da Concorrência",
    description: "Veja como você se compara aos concorrentes e identifique oportunidades que eles estão perdendo.",
    icon: "🔍",
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    title: "Roadmap de Crescimento",
    description: "Receba um plano de ação personalizado com passos específicos para crescer sua presença digital.",
    icon: "🚀",
    gradient: "from-pink-500 to-red-500"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Análise Digital Abrangente
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossa plataforma com IA analisa todos os aspectos da sua presença digital para descobrir 
            oportunidades ocultas e potencial de crescimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
