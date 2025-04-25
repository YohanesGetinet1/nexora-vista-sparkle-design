import { Mail, Phone, MapPin, Send } from "lucide-react";
import.meta
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thanks for your message! We'll get back to you soon."
        });
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block glass-effect px-4 py-2 rounded-full mb-4">
              <span className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-nexora-blue to-nexora-purple h-2 w-2 rounded-full mr-2"></span>
                Get In Touch
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's start a <span className="text-gradient">conversation</span>
            </h2>
            
            <p className="text-nexora-gray text-lg">
              Have a project in mind or want to learn more about our services? We're here to help you achieve your digital goals.
            </p>
            
            <div className="space-y-4 py-4">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Email Us</h4>
                  <a href="mailto:nexoratechsolution25@gmail.com" className="text-nexora-gray hover:underline">
                    nexoratechsolution25@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Call Us</h4>
                  <a href="tel:+16146223014" className="text-nexora-gray hover:underline">
                    +1 (614) 622-3014
                  </a><br />
                  <a href="tel:+917406635671" className="text-nexora-gray hover:underline">
                    +91 (740) 663-5671
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Visit Us</h4>
                  <a
                    href="https://www.google.com/maps/place/Columbus,+Ohio,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nexora-gray hover:underline"
                  >
                    Columbus, Ohio, USA
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-nexora-dark/80 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nexora-gray mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nexora-gray mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-nexora-gray mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nexora-gray mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gradient px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center w-full transition-transform duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <Send size={18} className="ml-2" /></>
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-center text-nexora-gray mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-nexora-blue hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}