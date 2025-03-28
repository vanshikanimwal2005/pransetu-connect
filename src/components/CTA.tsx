
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, User, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-teal-600 to-teal-500 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-10 lg:p-16 text-white lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Join our community today and help save lives through organ donation. 
                Whether you're a donor or recipient, your journey with Pransetu starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                  <Heart className="mr-2 h-5 w-5" /> Become a Donor
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700/20">
                  <User className="mr-2 h-5 w-5" /> Register as Recipient
                </Button>
              </div>
            </div>
            <div className="lg:w-1/3 p-10 flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/20 flex items-center justify-center animate-float">
                <Heart className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
