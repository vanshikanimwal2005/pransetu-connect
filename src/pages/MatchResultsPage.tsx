
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, Heart, Search, Clock, UserCheck, Shield, Zap, AlertTriangle } from 'lucide-react';

const MatchResultsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
                <Cpu className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold metallic-text">AI Match Results</h1>
              <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                Our advanced AI-matching algorithm analyzes medical data stored on the blockchain to find optimal donor-recipient matches.
              </p>
            </div>

            <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                      placeholder="Search by ID, name, or organ type..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="shrink-0">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="recent">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="recent">Recent Matches</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <div className="hidden md:block">
                  <Button variant="outline" className="border-teal-500 text-teal-700">
                    <Zap className="mr-2 h-4 w-4" /> Generate Report
                  </Button>
                </div>
              </div>

              <TabsContent value="recent" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Match Card 1 */}
                  <Card>
                    <CardHeader className="bg-teal-50 border-b border-teal-100">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-teal-800">Match #A78321</CardTitle>
                        <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> Pending
                        </div>
                      </div>
                      <CardDescription>Matched 2 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Donor</div>
                          <div className="font-semibold">Raj Patel</div>
                          <div className="text-sm text-gray-600">34, Male, B+</div>
                        </div>
                        <div className="flex items-center justify-center">
                          <Heart className="h-8 w-8 text-red-500 animate-pulse" />
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Recipient</div>
                          <div className="font-semibold">Meera Shah</div>
                          <div className="text-sm text-gray-600">42, Female, B+</div>
                        </div>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Organ:</span> 
                          <span className="ml-2">Kidney</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Compatibility:</span>
                          <span className="ml-2 text-green-600 font-medium">98%</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-1 text-teal-600" /> Verified on blockchain
                        </div>
                        <div className="flex items-center">
                          <UserCheck className="h-4 w-4 mr-1 text-teal-600" /> Doctor Approved
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Match Card 2 */}
                  <Card>
                    <CardHeader className="bg-teal-50 border-b border-teal-100">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-teal-800">Match #B45672</CardTitle>
                        <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          <UserCheck className="h-3 w-3 mr-1" /> Confirmed
                        </div>
                      </div>
                      <CardDescription>Matched 5 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Donor</div>
                          <div className="font-semibold">Sarah Wilson</div>
                          <div className="text-sm text-gray-600">29, Female, A-</div>
                        </div>
                        <div className="flex items-center justify-center">
                          <Heart className="h-8 w-8 text-red-500" />
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Recipient</div>
                          <div className="font-semibold">Amit Sharma</div>
                          <div className="text-sm text-gray-600">45, Male, A-</div>
                        </div>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Organ:</span> 
                          <span className="ml-2">Liver</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Compatibility:</span>
                          <span className="ml-2 text-green-600 font-medium">96%</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-1 text-teal-600" /> Verified on blockchain
                        </div>
                        <div className="flex items-center">
                          <UserCheck className="h-4 w-4 mr-1 text-teal-600" /> Doctor Approved
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Match Card 3 */}
                  <Card>
                    <CardHeader className="bg-teal-50 border-b border-teal-100">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-teal-800">Match #C23456</CardTitle>
                        <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" /> Urgent
                        </div>
                      </div>
                      <CardDescription>Matched 1 day ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Donor</div>
                          <div className="font-semibold">John Chen</div>
                          <div className="text-sm text-gray-600">42, Male, O+</div>
                        </div>
                        <div className="flex items-center justify-center">
                          <Heart className="h-8 w-8 text-red-500 animate-pulse-slow" />
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-sm text-gray-500">Recipient</div>
                          <div className="font-semibold">Priya Gupta</div>
                          <div className="text-sm text-gray-600">16, Female, O-</div>
                        </div>
                      </div>

                      <div className="bg-teal-50 p-3 rounded-lg flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Organ:</span> 
                          <span className="ml-2">Heart</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-teal-800">Compatibility:</span>
                          <span className="ml-2 text-green-600 font-medium">94%</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-1 text-teal-600" /> Verified on blockchain
                        </div>
                        <div className="flex items-center">
                          <UserCheck className="h-4 w-4 mr-1 text-teal-600" /> Doctor Approved
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="border-teal-500 text-teal-700">
                    Load More Results
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
                  <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-yellow-800 mb-2">Pending Matches</h3>
                  <p className="text-yellow-700 mb-4">
                    Matches in this section are awaiting final approval from medical professionals.
                  </p>
                  <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-100">
                    Check Back Later
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <UserCheck className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-green-800 mb-2">Completed Matches</h3>
                  <p className="text-green-700 mb-4">
                    These matches have resulted in successful organ transplantations.
                  </p>
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-100">
                    View Success Stories
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MatchResultsPage;
