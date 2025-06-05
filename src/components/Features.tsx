
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Google Presence Analysis",
    description: "Complete audit of your Google My Business profile, search rankings, and local SEO performance.",
    icon: "🎯",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Social Media Audit",
    description: "Comprehensive analysis of your presence across Facebook, Instagram, TikTok, LinkedIn and more.",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Website Optimization",
    description: "Detailed review of your website's design, usability, mobile optimization and conversion potential.",
    icon: "💻",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Digital Marketing Strategy",
    description: "Evaluation of your paid ads, email marketing, SEO, and content marketing effectiveness.",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Competitor Analysis",
    description: "See how you stack up against competitors and identify opportunities they're missing.",
    icon: "🔍",
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    title: "Growth Roadmap",
    description: "Get a personalized action plan with specific steps to grow your digital presence.",
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
            Comprehensive Digital Analysis
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our AI-powered platform analyzes every aspect of your digital presence to uncover 
            hidden opportunities and growth potential.
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
