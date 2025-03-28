
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Phone, Mail, Video, Search, Filter, Star, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Transplant Surgeon",
    initials: "PS",
    experience: "15+ years",
    bio: "Specialized in liver and kidney transplants with extensive experience in complex organ transplantation procedures.",
    availability: "Mon, Wed, Fri",
    rating: 4.9,
    reviews: 124,
    specialties: ["Kidney Transplant", "Liver Transplant"],
    location: "New Delhi, India",
    hospital: "Pransetu Medical Center"
  },
  {
    id: 2,
    name: "Dr. Arun Patel",
    specialty: "Nephrologist",
    initials: "AP",
    experience: "12+ years",
    bio: "Expert in kidney care and transplantation procedures with a focus on post-transplant recovery and care.",
    availability: "Tue, Thu, Sat",
    rating: 4.8,
    reviews: 98,
    specialties: ["Kidney Transplant", "Dialysis"],
    location: "Mumbai, India",
    hospital: "Global Nephrology Institute"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    initials: "SJ",
    experience: "10+ years",
    bio: "Specializes in heart transplantation and cardiac care with expertise in advanced heart failure management.",
    availability: "Mon, Tue, Thu",
    rating: 4.7,
    reviews: 87,
    specialties: ["Heart Transplant", "Cardiac Surgery"],
    location: "Bangalore, India",
    hospital: "Heart Care Foundation"
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Hepatologist",
    initials: "MC",
    experience: "14+ years",
    bio: "Expert in liver diseases and transplantation with a specialization in living donor liver transplants.",
    availability: "Wed, Fri, Sat",
    rating: 4.9,
    reviews: 112,
    specialties: ["Liver Transplant", "Hepatitis Treatment"],
    location: "Chennai, India",
    hospital: "Liver Care Center"
  },
  {
    id: 5,
    name: "Dr. Anjali Mehta",
    specialty: "Pulmonologist",
    initials: "AM",
    experience: "11+ years",
    bio: "Specialized in lung transplantation and respiratory care with expertise in treating complex pulmonary conditions.",
    availability: "Mon, Wed, Fri",
    rating: 4.8,
    reviews: 92,
    specialties: ["Lung Transplant", "Respiratory Care"],
    location: "Hyderabad, India",
    hospital: "Pulmonary Institute"
  }
];

const DoctorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold metallic-text">Our Medical Specialists</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                Connect with experienced transplant specialists for consultations, evaluations, and ongoing care.
              </p>
            </div>

            <div className="mb-10 bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="Search by name, specialty, or location..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="shrink-0">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
                <div className="shrink-0">
                  <Button variant="outline" className="border-teal-500 text-teal-700 w-full">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Specialists</TabsTrigger>
                <TabsTrigger value="transplant">Transplant Surgeons</TabsTrigger>
                <TabsTrigger value="nephrologist">Nephrologists</TabsTrigger>
                <TabsTrigger value="cardiologist">Cardiologists</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {doctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 p-6">
                        <div className="flex flex-col items-center justify-center">
                          <Avatar className="h-32 w-32 bg-teal-200 text-teal-800">
                            <AvatarFallback className="text-4xl font-semibold">{doctor.initials}</AvatarFallback>
                          </Avatar>
                          <div className="mt-4 text-center">
                            <p className="text-white font-medium text-lg">{doctor.specialty}</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <CardHeader className="pb-2">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <div>
                              <CardTitle className="text-xl text-teal-800">{doctor.name}</CardTitle>
                              <p className="text-teal-600 font-medium">Medical ID: {doctor.id}00{Math.floor(Math.random() * 100) + 1}</p>
                            </div>
                            <div className="flex items-center text-sm bg-teal-50 px-3 py-1 rounded-full">
                              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="font-semibold text-teal-800">{doctor.rating}</span>
                              <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-gray-600 mb-4">{doctor.bio}</p>
                              <div className="flex items-start gap-2 mb-2">
                                <div className="shrink-0 mt-1">
                                  <MapPin className="h-4 w-4 text-teal-500" />
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">
                                    {doctor.hospital}, {doctor.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="h-4 w-4 text-teal-500" />
                                <p className="text-sm text-gray-600">Available: {doctor.availability}</p>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {doctor.specialties.map((specialty, index) => (
                                  <span 
                                    key={index} 
                                    className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col gap-3 justify-end">
                              <div className="flex items-center p-3 bg-teal-50 rounded-lg mb-2">
                                <div className="text-sm text-teal-800">
                                  <span className="font-medium">Experience:</span> 
                                  <span className="ml-2">{doctor.experience}</span>
                                </div>
                              </div>
                              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                                <Video className="mr-2 h-4 w-4" /> Book Video Consultation
                              </Button>
                              <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="border-teal-200 hover:bg-teal-50">
                                  <Phone className="mr-2 h-4 w-4" /> Call
                                </Button>
                                <Button variant="outline" className="border-teal-200 hover:bg-teal-50">
                                  <Mail className="mr-2 h-4 w-4" /> Message
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Other tabs content - simplified for brevity */}
              <TabsContent value="transplant">
                <Card className="p-10 text-center">
                  <h3 className="text-xl font-medium text-teal-800 mb-4">Transplant Surgeons</h3>
                  <p className="text-gray-600">
                    Our transplant surgeons are highly skilled specialists who perform organ transplantation procedures.
                  </p>
                </Card>
              </TabsContent>
              
              <TabsContent value="nephrologist">
                <Card className="p-10 text-center">
                  <h3 className="text-xl font-medium text-teal-800 mb-4">Nephrologists</h3>
                  <p className="text-gray-600">
                    Our nephrologists specialize in kidney care and treating diseases of the kidneys.
                  </p>
                </Card>
              </TabsContent>
              
              <TabsContent value="cardiologist">
                <Card className="p-10 text-center">
                  <h3 className="text-xl font-medium text-teal-800 mb-4">Cardiologists</h3>
                  <p className="text-gray-600">
                    Our cardiologists specialize in heart transplants and treating cardiovascular diseases.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
