
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "Free Analysis",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Basic digital presence scan",
      "Identify current strengths",
      "Foundation score analysis",
      "General improvement areas"
    ],
    buttonText: "Start Free Analysis",
    popular: false,
    gradient: "from-gray-600 to-gray-700"
  },
  {
    name: "Growth Accelerator",
    price: "$29",
    period: "/month",
    description: "Everything you need to grow",
    features: [
      "Unlimited detailed analyses",
      "Specific action plans with timelines",
      "Step-by-step implementation guides",
      "Competitor analysis & insights",
      "Monthly progress tracking",
      "Priority email support",
      "ROI tracking & optimization tips"
    ],
    buttonText: "Start Growing Now",
    popular: true,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and large businesses",
    features: [
      "Everything in Growth Accelerator",
      "White-label reports",
      "Multiple business profiles",
      "Team collaboration tools",
      "API access",
      "Dedicated account manager",
      "Custom integrations"
    ],
    buttonText: "Contact Sales",
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
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with our free analysis, then unlock the full potential of your business with detailed growth strategies.
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
                  Most Popular
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
                    ⚡ Most businesses see results within 30 days
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            🔒 Secure payment • 30-day money-back guarantee • Cancel anytime
          </p>
          <p className="text-sm text-gray-500">
            Join 10,000+ businesses already growing with our platform
          </p>
        </div>
      </div>
    </section>
  );
};
