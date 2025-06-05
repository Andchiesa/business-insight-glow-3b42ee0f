
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "Análise Gratuita",
    price: "Grátis",
    description: "Perfeito para começar",
    features: [
      "Análise básica da presença digital",
      "Identificar pontos fortes atuais",
      "Análise da pontuação da base",
      "Áreas gerais de melhoria"
    ],
    buttonText: "Começar Análise Gratuita",
    popular: false,
    gradient: "from-gray-600 to-gray-700"
  },
  {
    name: "Acelerador de Crescimento",
    price: "R$29",
    period: "/mês",
    description: "Tudo que você precisa para crescer",
    features: [
      "Análises detalhadas ilimitadas",
      "Planos de ação específicos com cronogramas",
      "Guias de implementação passo a passo",
      "Análise da concorrência e insights",
      "Acompanhamento mensal do progresso",
      "Suporte prioritário por email",
      "Rastreamento de ROI e dicas de otimização"
    ],
    buttonText: "Começar a Crescer Agora",
    popular: true,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Para agências e grandes empresas",
    features: [
      "Tudo do Acelerador de Crescimento",
      "Relatórios com marca personalizada",
      "Múltiplos perfis de negócios",
      "Ferramentas de colaboração em equipe",
      "Acesso à API",
      "Gerente de conta dedicado",
      "Integrações personalizadas"
    ],
    buttonText: "Contatar Vendas",
    popular: false,
    gradient: "from-cyan-600 to-blue-600"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Escolha Seu Plano de Crescimento
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comece com nossa análise gratuita, depois desbloqueie todo o potencial do seu negócio com estratégias detalhadas de crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`glass-effect transition-all duration-300 hover:scale-105 relative ${
                plan.popular 
                  ? 'border-purple-500/50 hover:border-purple-400' 
                  : 'border-gray-700/50 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg"
                  className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white animate-glow`
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
                
                {plan.popular && (
                  <p className="text-center text-sm text-gray-400 mt-2">
                    ⚡ A maioria dos negócios vê resultados em 30 dias
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            🔒 Pagamento seguro • Garantia de 30 dias • Cancelar a qualquer momento
          </p>
          <p className="text-sm text-gray-500">
            Junte-se a mais de 10.000 negócios já crescendo com nossa plataforma
          </p>
        </div>
      </div>
    </section>
  );
};
