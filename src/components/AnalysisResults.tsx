
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
      "Your business name is memorable and brandable",
      "You've chosen a profitable niche with good market demand",
      "Your business concept shows strong potential for digital growth"
    ];

    const nicheSpecificInsights = {
      "Restaurant & Food": [
        "Food businesses have high visual appeal for social media",
        "Local SEO is crucial for restaurant discovery",
        "Food delivery integration opportunities exist"
      ],
      "E-commerce & Retail": [
        "Strong potential for social commerce integration",
        "Multiple online marketplace opportunities available",
        "Email marketing typically shows high ROI in retail"
      ],
      "Health & Fitness": [
        "Video content performs exceptionally well in this niche",
        "Before/after transformation content drives engagement",
        "Community building is a major growth driver"
      ]
    };

    return [
      ...baseInsights,
      ...(nicheSpecificInsights[businessData.niche as keyof typeof nicheSpecificInsights] || [
        "Your niche has strong digital marketing potential",
        "Content marketing opportunities are abundant",
        "Social media engagement rates are typically high"
      ])
    ];
  };

  const generateGrowthOpportunities = () => {
    return [
      "Create and optimize Google My Business profile (+120% local visibility)",
      "Implement TikTok marketing strategy (+300% brand awareness)",
      "Develop email marketing automation (+250% customer retention)",
      "Launch targeted Facebook/Instagram ads (+180% lead generation)",
      "Create SEO-optimized blog content (+200% organic traffic)",
      "Set up conversion tracking and analytics (+150% ROI insights)"
    ];
  };

  const insights = generateInsights();
  const opportunities = generateGrowthOpportunities();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Analysis Complete!
          </h2>
          <p className="text-xl text-gray-400">
            Here's what we found for <span className="text-purple-400 font-semibold">{businessData.businessName}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* FREE SECTION - What's Working */}
          <Card className="glass-effect border-green-500/30 hover:border-green-500/50 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  FREE INSIGHTS
                </Badge>
                <CardTitle className="text-2xl text-white">What's Working</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 mb-6">
                Great news! We've identified several strengths in your business foundation:
              </p>
              
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{insight}</p>
                </div>
              ))}

              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <h4 className="font-semibold text-green-300 mb-2">Foundation Score</h4>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-green-300 font-semibold">75%</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Strong foundation for digital growth!</p>
              </div>
            </CardContent>
          </Card>

          {/* PREMIUM SECTION - Growth Opportunities */}
          <Card className="glass-effect border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  PREMIUM INSIGHTS
                </Badge>
                <CardTitle className="text-2xl text-white">Growth Opportunities</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              {/* Blur overlay for locked content */}
              <div className={`${!showPremiumPreview ? 'blur-sm pointer-events-none' : ''} transition-all duration-300`}>
                <p className="text-gray-300 mb-6">
                  We've identified {opportunities.length} specific opportunities to accelerate your growth:
                </p>
                
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{opportunity}</p>
                  </div>
                ))}

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Growth Potential</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full w-11/12"></div>
                    </div>
                    <span className="text-purple-300 font-semibold">+340%</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Estimated growth potential with optimization</p>
                </div>
              </div>

              {/* Lock overlay */}
              {!showPremiumPreview && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Unlock Your Growth Strategy
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-sm">
                      Get detailed action plans, step-by-step guides, and unlimited analyses with our premium plan.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl animate-pulse-glow mb-3"
                      onClick={() => setShowPremiumPreview(true)}
                    >
                      Preview Growth Plan
                    </Button>
                    <p className="text-xs text-gray-400">
                      No commitment • See what you'll get
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
                Ready to Unlock Your Business Growth?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses that have accelerated their growth with our detailed action plans, 
                unlimited analyses, and step-by-step implementation guides.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-glow"
                >
                  Unlock Premium Plan - $29/month
                  <ArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div>✅ Detailed Action Plans</div>
                <div>✅ Unlimited Analyses</div>
                <div>✅ Step-by-Step Guides</div>
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
            Analyze Another Business
          </Button>
        </div>
      </div>
    </section>
  );
};
