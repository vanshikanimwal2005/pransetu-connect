
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, BarChart, UserPlus, FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-teal-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/dd89ed71-6624-4276-875a-5f71677b63ff.png" 
              alt="Pransetu Logo" 
              className="h-10 w-auto" 
            />
            <span className="text-2xl font-bold metallic-text hidden sm:inline-block">Pransetu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-teal-800 hover:text-teal-600 font-medium transition">Home</Link>
            <Link to="/donor" className="text-teal-800 hover:text-teal-600 font-medium transition">Donor</Link>
            <Link to="/recipient" className="text-teal-800 hover:text-teal-600 font-medium transition">Recipient</Link>
            <Link to="/match-results" className="text-teal-800 hover:text-teal-600 font-medium transition">Match Results</Link>
            <Link to="/doctors" className="text-teal-800 hover:text-teal-600 font-medium transition">Doctors</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-teal-500 text-teal-700 hover:bg-teal-50">
              <FileText className="mr-2 h-4 w-4" /> Learn More
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <UserPlus className="mr-2 h-4 w-4" /> Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-teal-700 hover:bg-teal-50 rounded-md"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-teal-100">
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="px-4 py-2 text-teal-800 hover:bg-teal-50 rounded-md transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/donor" 
                className="px-4 py-2 text-teal-800 hover:bg-teal-50 rounded-md transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Donor
              </Link>
              <Link 
                to="/recipient" 
                className="px-4 py-2 text-teal-800 hover:bg-teal-50 rounded-md transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipient
              </Link>
              <Link 
                to="/match-results" 
                className="px-4 py-2 text-teal-800 hover:bg-teal-50 rounded-md transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Match Results
              </Link>
              <Link 
                to="/doctors" 
                className="px-4 py-2 text-teal-800 hover:bg-teal-50 rounded-md transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <div className="flex gap-2 mt-2 px-4">
                <Button variant="outline" className="border-teal-500 text-teal-700 hover:bg-teal-50 w-full">
                  Learn More
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
