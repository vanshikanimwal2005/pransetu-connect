
import React from 'react';
import { UserPlus, Database, Cpu, Heart, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-white" />,
    title: "Registration",
    description: "Donors and recipients register on the platform, providing necessary medical information.",
    iconBg: "bg-teal-600"
  },
  {
    icon: <Database className="h-12 w-12 text-white" />,
    title: "Blockchain Storage",
    description: "All data is securely stored on the blockchain, ensuring privacy and immutability.",
    iconBg: "bg-teal-500"
  },
  {
    icon: <Cpu className="h-12 w-12 text-white" />,
    title: "AI Matching",
    description: "AI algorithm analyzes stored data to find optimal donor-recipient matches.",
    iconBg: "bg-teal-600"
  },
  {
    icon: <Heart className="h-12 w-12 text-white" />,
    title: "Life-Saving Match",
    description: "Match results are displayed, and medical professionals facilitate the transplantation process.",
    iconBg: "bg-teal-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold metallic-text">How It Works</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our streamlined process uses blockchain technology to safely match donors with recipients
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-teal-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className={`${step.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10`}>
                  {step.icon}
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-white rounded-full border-2 border-teal-500 flex items-center justify-center font-bold text-teal-800">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="h-8 w-8 text-teal-400 mt-4 rotate-90 md:rotate-0 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
