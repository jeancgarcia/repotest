
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from './ui/Motion';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">DomRI</h3>
              <p className="text-gray-400 mb-6">
                Your premium guide to property investment opportunities in the breathtaking Dominican Republic.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary-light transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary-light transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary-light transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#showcase" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin size={20} className="mr-3 text-primary-light shrink-0" />
                  <span className="text-gray-400">Av. Anacaona, Santo Domingo, Dominican Republic</span>
                </li>
                <li className="flex">
                  <Phone size={20} className="mr-3 text-primary-light shrink-0" />
                  <span className="text-gray-400">+1 809 555 7890</span>
                </li>
                <li className="flex">
                  <Mail size={20} className="mr-3 text-primary-light shrink-0" />
                  <span className="text-gray-400">info@dominicanri.com</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest property listings and investment opportunities.
              </p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2023 DomRI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
