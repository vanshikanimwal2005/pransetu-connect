
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-400 to-teal-300 flex items-center justify-center text-teal-900">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">Pransetu</span>
            </div>
            <p className="text-teal-200 mb-4">
              Revolutionizing organ donation and matching through blockchain technology, saving lives with innovation and transparency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-teal-200 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-teal-200 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/donor" className="text-teal-200 hover:text-white transition">Become a Donor</Link>
              </li>
              <li>
                <Link to="/recipient" className="text-teal-200 hover:text-white transition">Register as Recipient</Link>
              </li>
              <li>
                <Link to="/match-results" className="text-teal-200 hover:text-white transition">Matching Results</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-teal-200 hover:text-white transition">Our Doctors</Link>
              </li>
              <li>
                <Link to="/about" className="text-teal-200 hover:text-white transition">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-300 mt-0.5" />
                <span className="text-teal-200">
                  123 Medical Center Drive, <br />
                  New Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-300" />
                <a href="tel:+919876543210" className="text-teal-200 hover:text-white transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-300" />
                <a href="mailto:info@pransetu.com" className="text-teal-200 hover:text-white transition">
                  info@pransetu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-teal-700 pb-2">Stay Updated</h3>
            <p className="text-teal-200 mb-4">
              Subscribe to our newsletter for the latest updates on organ donation and our platform.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-teal-800 border border-teal-700 text-white placeholder:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-500 transition text-white py-2 rounded flex items-center justify-center"
              >
                Subscribe <Heart className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-teal-800 text-center text-teal-300">
          <p>&copy; {new Date().getFullYear()} Pransetu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
