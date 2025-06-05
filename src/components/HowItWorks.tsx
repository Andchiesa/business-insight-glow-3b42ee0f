
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnalysisResults } from '@/components/AnalysisResults';

const niches = [
  "Restaurant & Food",
  "E-commerce & Retail",
  "Health & Fitness",
  "Beauty & Wellness",
  "Professional Services",
  "Real Estate",
  "Education & Training",
  "Technology & Software",
  "Automotive",
  "Home & Garden",
  "Entertainment & Events",
  "Non-profit",
  "Other"
];

export const HowItWorks = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    niche: '',
    additionalInfo: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.niche) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const resetForm = () => {
    setShowResults(false);
    setFormData({ businessName: '', niche: '', additionalInfo: '' });
  };

  if (showResults) {
    return <AnalysisResults businessData={formData} onReset={resetForm} />;
  }

  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Get Your Free Analysis
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us about your business and we'll analyze your digital presence in seconds.
          </p>
        </div>

        <Card className="glass-effect border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">
              Business Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-white text-lg">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Enter your business name"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 h-12 text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niche" className="text-white text-lg">
                  Business Niche/Segment *
                </Label>
                <Select 
                  value={formData.niche} 
                  onValueChange={(value) => setFormData({ ...formData, niche: value })}
                >
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white h-12 text-lg">
                    <SelectValue placeholder="Select your business niche" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {niches.map((niche) => (
                      <SelectItem key={niche} value={niche} className="text-white hover:bg-gray-700">
                        {niche}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-white text-lg">
                  Additional Business Details
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Tell us about your target audience, operating region, digital marketing budget, or any other relevant information..."
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 min-h-[120px] text-lg"
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={!formData.businessName || !formData.niche || isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Analyzing Your Digital Presence...
                  </div>
                ) : (
                  'Start Free Analysis'
                )}
              </Button>

              <p className="text-center text-sm text-gray-400 mt-4">
                ✅ 100% Free • ✅ No Email Required • ✅ Instant Results
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
