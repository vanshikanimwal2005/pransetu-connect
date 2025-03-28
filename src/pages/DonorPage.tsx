import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { User, Heart, FileText, AlertCircle } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';

const DonorPage = () => {
  const { toast } = useToast();
  const [hasMedicalHistory, setHasMedicalHistory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering as a donor. We will contact you soon.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold metallic-text">Become a Donor</h1>
              <p className="mt-4 text-lg text-gray-700">
                Join our life-saving mission by registering as an organ donor. Your generosity can save lives.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <Card>
                  <CardHeader className="bg-teal-600 text-white">
                    <CardTitle className="flex items-center text-xl">
                      <Heart className="mr-2 h-5 w-5" /> Why Donate?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <div className="bg-teal-100 p-1 rounded-full mt-1">
                          <Heart className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-teal-800">Save Lives</p>
                          <p className="text-sm text-gray-600">One donor can save up to 8 lives through organ donation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-teal-100 p-1 rounded-full mt-1">
                          <Heart className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-teal-800">Transparent Process</p>
                          <p className="text-sm text-gray-600">Blockchain ensures your donation is ethically managed</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-teal-100 p-1 rounded-full mt-1">
                          <Heart className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-teal-800">Medical Support</p>
                          <p className="text-sm text-gray-600">Access to specialized doctors throughout the process</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-800">Important Note</p>
                          <p className="text-sm text-yellow-700">
                            Registration requires verification of your identity and medical history.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:w-2/3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-teal-800">
                      <User className="mr-2 h-5 w-5" /> Donor Registration Form
                    </CardTitle>
                    <CardDescription>
                      Please fill out the form below with accurate information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="+1 (555) 000-0000" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bloodType">Blood Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Blood Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="a-positive">A+</SelectItem>
                              <SelectItem value="a-negative">A-</SelectItem>
                              <SelectItem value="b-positive">B+</SelectItem>
                              <SelectItem value="b-negative">B-</SelectItem>
                              <SelectItem value="ab-positive">AB+</SelectItem>
                              <SelectItem value="ab-negative">AB-</SelectItem>
                              <SelectItem value="o-positive">O+</SelectItem>
                              <SelectItem value="o-negative">O-</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organType">Organ Type for Donation</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Organ Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kidney">Kidney</SelectItem>
                            <SelectItem value="liver">Liver</SelectItem>
                            <SelectItem value="heart">Heart</SelectItem>
                            <SelectItem value="lungs">Lungs</SelectItem>
                            <SelectItem value="pancreas">Pancreas</SelectItem>
                            <SelectItem value="intestines">Intestines</SelectItem>
                            <SelectItem value="corneas">Corneas</SelectItem>
                            <SelectItem value="tissue">Tissue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4 p-4 bg-teal-50 rounded-lg border border-teal-100">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="hasMedicalHistory" 
                            checked={hasMedicalHistory}
                            onCheckedChange={(checked) => setHasMedicalHistory(checked as boolean)}
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="hasMedicalHistory" className="font-medium text-teal-800">I have a documented medical history</Label>
                            <p className="text-sm text-gray-600">Check this if you have a documented medical history in the ABHA system</p>
                          </div>
                        </div>
                        
                        {hasMedicalHistory && (
                          <div className="pt-4 pl-7">
                            <div className="space-y-2">
                              <Label htmlFor="abhaId">ABHA ID (Ayushman Bharat Health Account)</Label>
                              <Input id="abhaId" placeholder="14-digit ABHA ID" className="border-teal-200" />
                              <p className="text-xs text-gray-500">Your ABHA ID will help us retrieve your medical records securely</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalHistory">Additional Medical Information</Label>
                        <Textarea 
                          id="medicalHistory" 
                          placeholder="Please provide any additional medical information relevant to organ donation..." 
                          className="h-24"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="consent" className="rounded text-teal-600" required />
                        <Label htmlFor="consent" className="text-sm">
                          I consent to having my data stored securely on the blockchain for organ matching purposes
                        </Label>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="border-t pt-6 flex justify-between flex-wrap gap-4">
                    <Button variant="outline" className="border-teal-500 text-teal-700">
                      <FileText className="mr-2 h-4 w-4" /> Download Information
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      <Heart className="mr-2 h-4 w-4" /> Register as Donor
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonorPage;
