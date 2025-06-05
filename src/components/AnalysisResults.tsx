
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';

interface BusinessData {
  businessName: string;
  niche: string;
  additionalInfo: string;
}

interface AnalysisResultsProps {
  businessData: BusinessData;
  onReset: () => void;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ businessData, onReset }) => {
  const [showPremiumPreview, setShowPremiumPreview] = useState(false);

  // Generate insights based on business niche
  const generateInsights = () => {
    const baseInsights = [
      "O nome do seu negócio é memorável e facilmente reconhecível",
      "Você escolheu um nicho lucrativo com boa demanda de mercado",
      "Seu conceito de negócio mostra forte potencial para crescimento digital"
    ];

    const nicheSpecificInsights = {
      "Restaurante e Alimentação": [
        "Negócios de alimentação têm alto apelo visual para redes sociais",
        "SEO local é crucial para descoberta de restaurantes",
        "Existem oportunidades de integração com delivery"
      ],
      "E-commerce e Varejo": [
        "Forte potencial para integração com comércio social",
        "Múltiplas oportunidades de marketplace online disponíveis",
        "Email marketing normalmente mostra alto ROI no varejo"
      ],
      "Saúde e Fitness": [
        "Conteúdo em vídeo tem performance excepcional neste nicho",
        "Conteúdo de transformação antes/depois gera engajamento",
        "Construção de comunidade é um grande motor de crescimento"
      ]
    };

    return [
      ...baseInsights,
      ...(nicheSpecificInsights[businessData.niche as keyof typeof nicheSpecificInsights] || [
        "Seu nicho tem forte potencial de marketing digital",
        "Oportunidades de marketing de conteúdo são abundantes",
        "Taxas de engajamento em redes sociais são tipicamente altas"
      ])
    ];
  };

  const generateGrowthOpportunities = () => {
    return [
      "Criar e otimizar perfil do Google Meu Negócio (+120% visibilidade local)",
      "Implementar estratégia de marketing no TikTok (+300% conhecimento da marca)",
      "Desenvolver automação de email marketing (+250% retenção de clientes)",
      "Lançar anúncios direcionados Facebook/Instagram (+180% geração de leads)",
      "Criar conteúdo de blog otimizado para SEO (+200% tráfego orgânico)",
      "Configurar rastreamento de conversões e analytics (+150% insights de ROI)"
    ];
  };

  const insights = generateInsights();
  const opportunities = generateGrowthOpportunities();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Análise Concluída!
          </h2>
          <p className="text-xl text-gray-400">
            Aqui está o que encontramos para <span className="text-purple-400 font-semibold">{businessData.businessName}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* FREE SECTION - What's Working */}
          <Card className="glass-effect border-green-500/30 hover:border-green-500/50 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  INSIGHTS GRATUITOS
                </Badge>
                <CardTitle className="text-2xl text-white">O Que Está Funcionando</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 mb-6">
                Ótimas notícias! Identificamos vários pontos fortes na base do seu negócio:
              </p>
              
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{insight}</p>
                </div>
              ))}

              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <h4 className="font-semibold text-green-300 mb-2">Pontuação da Base</h4>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-green-300 font-semibold">75%</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Base sólida para crescimento digital!</p>
              </div>
            </CardContent>
          </Card>

          {/* PREMIUM SECTION - Growth Opportunities */}
          <Card className="glass-effect border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  INSIGHTS PREMIUM
                </Badge>
                <CardTitle className="text-2xl text-white">Oportunidades de Crescimento</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              {/* Blur overlay for locked content */}
              <div className={`${!showPremiumPreview ? 'blur-sm pointer-events-none' : ''} transition-all duration-300`}>
                <p className="text-gray-300 mb-6">
                  Identificamos {opportunities.length} oportunidades específicas para acelerar seu crescimento:
                </p>
                
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{opportunity}</p>
                  </div>
                ))}

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Potencial de Crescimento</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-11/12"></div>
                    </div>
                    <span className="text-purple-300 font-semibold">+340%</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Potencial estimado de crescimento com otimização</p>
                </div>
              </div>

              {/* Lock overlay */}
              {!showPremiumPreview && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Desbloqueie Sua Estratégia de Crescimento
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-sm">
                      Obtenha planos de ação detalhados, guias passo a passo e análises ilimitadas com nosso plano premium.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl animate-pulse-glow mb-3"
                      onClick={() => setShowPremiumPreview(true)}
                    >
                      Visualizar Plano de Crescimento
                    </Button>
                    <p className="text-xs text-gray-400">
                      Sem compromisso • Veja o que você receberá
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        {showPremiumPreview && (
          <Card className="glass-effect border-gradient-to-r from-purple-500/50 to-pink-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para Desbloquear o Crescimento do Seu Negócio?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Junte-se a milhares de negócios que aceleraram seu crescimento com nossos planos de ação detalhados, 
                análises ilimitadas e guias de implementação passo a passo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-glow"
                >
                  Desbloquear Plano Premium - R$29/mês
                  <ArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div>✅ Planos de Ação Detalhados</div>
                <div>✅ Análises Ilimitadas</div>
                <div>✅ Guias Passo a Passo</div>
              </div>
            </CardContent>
          </Card>
        )}

        <Separator className="my-8 bg-gray-700" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={onReset}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Analisar Outro Negócio
          </Button>
        </div>
      </div>
    </section>
  );
};
