
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50 py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="metallic-text">Revolutionizing</span> 
              <br /> Organ Donation with Blockchain
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Pransetu leverages AI and blockchain technology to create transparent, 
              fair organ matching for donors and recipients, saving lives through innovation.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Heart className="mr-2 h-5 w-5" /> Become a Donor
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-700 hover:bg-teal-50">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold metallic-text">1000+</p>
                <p className="text-sm text-gray-600">Donors</p>
              </div>
              <div className="h-10 border-r border-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold metallic-text">500+</p>
                <p className="text-sm text-gray-600">Recipients</p>
              </div>
              <div className="h-10 border-r border-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold metallic-text">300+</p>
                <p className="text-sm text-gray-600">Matches</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-full animate-float">
              <img 
                src="/lovable-uploads/8483488c-a04f-4b81-b3ab-aec2c924d95b.png" 
                alt="Medical illustration" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-teal-100">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-500 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800">AI-Powered Matching</h4>
                    <p className="text-sm text-gray-600">Ensures fair & transparent pairing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
