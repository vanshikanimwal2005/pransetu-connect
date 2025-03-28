import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { User, FileText, AlertCircle, Clock } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const RecipientPage = () => {
  const { toast } = useToast();
  const [urgency, setUrgency] = React.useState([5]);
  const [hasMedicalHistory, setHasMedicalHistory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering as a recipient. We will contact you soon.",
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
              <h1 className="text-3xl md:text-4xl font-bold metallic-text">Register as Recipient</h1>
              <p className="mt-4 text-lg text-gray-700">
                Join our platform to find suitable organ donors through our blockchain-powered matching system.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <Card>
                  <CardHeader className="bg-teal-600 text-white">
                    <CardTitle className="flex items-center text-xl">
                      <Clock className="mr-2 h-5 w-5" /> Priority System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      Our AI algorithm prioritizes recipients based on medical urgency, compatibility, and waiting time:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <div className="bg-red-100 p-1 rounded-full mt-1">
                          <Clock className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium text-red-800">Critical (8-10)</p>
                          <p className="text-sm text-gray-600">Immediate need, life-threatening condition</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-orange-100 p-1 rounded-full mt-1">
                          <Clock className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-orange-800">Urgent (5-7)</p>
                          <p className="text-sm text-gray-600">Condition deteriorating, needs attention soon</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-teal-100 p-1 rounded-full mt-1">
                          <Clock className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="font-medium text-teal-800">Stable (1-4)</p>
                          <p className="text-sm text-gray-600">Condition managed, can wait for matching</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-800">Fair Matching</p>
                          <p className="text-sm text-blue-700">
                            Our blockchain technology ensures a transparent and fair matching process based on medical need, not financial status.
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
                      <User className="mr-2 h-5 w-5" /> Recipient Registration Form
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
                          <Input id="firstName" placeholder="Jane" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Smith" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="jane.smith@example.com" required />
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
                        <Label htmlFor="organNeeded">Organ Needed</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Organ Needed" />
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

                      <div className="space-y-4">
                        <Label>Medical Urgency Level (1-10)</Label>
                        <Slider 
                          value={urgency} 
                          min={1} 
                          max={10} 
                          step={1} 
                          onValueChange={setUrgency} 
                          className="py-4"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Low</span>
                          <span>Current: {urgency[0]}</span>
                          <span>High</span>
                        </div>
                      </div>

                      <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="hasMedicalHistory" 
                            checked={hasMedicalHistory}
                            onCheckedChange={(checked) => setHasMedicalHistory(checked as boolean)}
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="hasMedicalHistory" className="font-medium text-blue-800">I have a documented medical history</Label>
                            <p className="text-sm text-gray-600">Check this if you have a documented medical history in the ABHA system</p>
                          </div>
                        </div>
                        
                        {hasMedicalHistory && (
                          <div className="pt-4 pl-7">
                            <div className="space-y-2">
                              <Label htmlFor="abhaId">ABHA ID (Ayushman Bharat Health Account)</Label>
                              <Input id="abhaId" placeholder="14-digit ABHA ID" className="border-blue-200" />
                              <p className="text-xs text-gray-500">Your ABHA ID will help us access your medical records securely for better matching</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalCondition">Additional Medical Information</Label>
                        <Textarea 
                          id="medicalCondition" 
                          placeholder="Please provide any additional details about your medical condition..." 
                          className="h-24"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hospitalName">Current Hospital/Medical Center</Label>
                        <Input id="hospitalName" placeholder="City Medical Center" />
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
                      Register as Recipient
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

export default RecipientPage;
