
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Mail, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Transplant Surgeon",
    image: "/lovable-uploads/49c70d07-f111-42e8-974d-31460a5b20d2.png",
    experience: "15+ years",
    bio: "Specialized in liver and kidney transplants with extensive experience in complex organ transplantation procedures.",
    availability: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. Arun Patel",
    specialty: "Nephrologist",
    image: "/lovable-uploads/1334449b-5781-4f29-86d5-091f9dd38d73.png",
    experience: "12+ years",
    bio: "Expert in kidney care and transplantation procedures with a focus on post-transplant recovery and care.",
    availability: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "/lovable-uploads/75552868-81fd-4bd5-a3cc-b5a1b6a1d647.png",
    experience: "10+ years",
    bio: "Specializes in heart transplantation and cardiac care with expertise in advanced heart failure management.",
    availability: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Hepatologist",
    image: "/lovable-uploads/866d6ce2-50be-44a7-9292-ce8e20997512.png",
    experience: "14+ years",
    bio: "Expert in liver diseases and transplantation with a specialization in living donor liver transplants.",
    availability: "Wed, Fri, Sat"
  }
];

const DoctorConsultation = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold metallic-text">Meet Our Specialists</h2>
          <p className="mt-4 text-lg text-gray-700">
            Get expert consultation from our team of specialized doctors for all your transplantation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl text-teal-800">{doctor.name}</CardTitle>
                <CardDescription className="text-teal-600 font-medium">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="font-medium">Experience:</span>
                  <span className="ml-2">{doctor.experience}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{doctor.bio}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                  <span>Available: {doctor.availability}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-teal-200 hover:bg-teal-50">
                  <Phone className="h-4 w-4 mr-1" /> Call
                </Button>
                <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
                  <Video className="h-4 w-4 mr-1" /> Consult
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            View All Specialists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;
