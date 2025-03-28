
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Video, User, Heart, Shield, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Transplant Surgeon",
    initials: "PS",
    experience: "15+ years",
    bio: "Specialized in liver and kidney transplants with extensive experience in complex organ transplantation procedures.",
    availability: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. Arun Patel",
    specialty: "Nephrologist",
    initials: "AP",
    experience: "12+ years",
    bio: "Expert in kidney care and transplantation procedures with a focus on post-transplant recovery and care.",
    availability: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    initials: "SJ",
    experience: "10+ years",
    bio: "Specializes in heart transplantation and cardiac care with expertise in advanced heart failure management.",
    availability: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Hepatologist",
    initials: "MC",
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
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Avatar className="h-32 w-32 bg-teal-200 text-teal-800">
                    <AvatarFallback className="text-4xl font-semibold">{doctor.initials}</AvatarFallback>
                  </Avatar>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {doctor.specialty === "Transplant Surgeon" && <Award className="h-5 w-5 text-teal-100" />}
                    {doctor.specialty === "Nephrologist" && <Shield className="h-5 w-5 text-teal-100" />}
                    {doctor.specialty === "Cardiologist" && <Heart className="h-5 w-5 text-teal-100" />}
                    {doctor.specialty === "Hepatologist" && <Clock className="h-5 w-5 text-teal-100" />}
                    <span className="text-white font-medium text-sm">{doctor.specialty}</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl text-teal-800">{doctor.name}</CardTitle>
                <CardDescription className="text-teal-600 font-medium flex items-center">
                  <User className="h-3 w-3 mr-1" /> 
                  <span>Medical ID: {doctor.id}00{Math.floor(Math.random() * 100) + 1}</span>
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
