
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-nexora-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">Nexora</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Services</a>
            <a href="#about" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">About Us</a>
            <a href="#portfolio" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Portfolio</a>
            <a href="#testimonials" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="#contact" className="btn-gradient px-6 py-2 rounded-full font-medium">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-nexora-dark shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Services</a>
              <a href="#about" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">About Us</a>
              <a href="#portfolio" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Portfolio</a>
              <a href="#testimonials" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-nexora-dark dark:text-nexora-light hover:text-nexora-blue dark:hover:text-nexora-blue font-medium transition-colors duration-300">Contact</a>
              <a href="#contact" className="btn-gradient px-6 py-2 rounded-full font-medium text-center">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
