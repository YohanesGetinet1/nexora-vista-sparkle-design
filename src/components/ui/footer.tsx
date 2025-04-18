import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-nexora-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold text-gradient">Nexora</a>
            </div>
            <p className="text-gray-400 mb-6">
              Innovative technology and marketing solutions that help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Brand Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Social Media</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Our Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Nexora Tech and Marketing. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            Back to top <ArrowUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}