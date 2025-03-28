
import React from 'react';
import { Shield, Database, Heart, Clock, ChartBar, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-teal-600" />,
    title: "Secure Blockchain Storage",
    description: "All donor and recipient data is securely stored on the blockchain, ensuring data integrity and security."
  },
  {
    icon: <Database className="h-8 w-8 text-teal-600" />,
    title: "Immutable Records",
    description: "Records cannot be altered or tampered with once stored on the blockchain, providing trust in the system."
  },
  {
    icon: <Heart className="h-8 w-8 text-teal-600" />,
    title: "Transparent Matching",
    description: "AI-driven matching algorithm ensures fair and transparent organ allocation based on medical need."
  },
  {
    icon: <Clock className="h-8 w-8 text-teal-600" />,
    title: "Quick Response",
    description: "Faster donor-recipient matching saves critical time in emergency situations."
  },
  {
    icon: <ChartBar className="h-8 w-8 text-teal-600" />,
    title: "Detailed Analytics",
    description: "Comprehensive analytics for healthcare providers to monitor and optimize the donation process."
  },
  {
    icon: <Users className="h-8 w-8 text-teal-600" />,
    title: "Expert Consultation",
    description: "Direct access to specialist doctors for both donors and recipients throughout the process."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold metallic-text">Key Features</h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover how Pransetu is revolutionizing organ donation through blockchain technology and AI matching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-teal-100 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="mb-4 p-3 bg-teal-50 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
