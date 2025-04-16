
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message or toast notification
    alert("Thanks for your message! We'll get back to you soon.");
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
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Email Us</h4>
                  <p className="text-nexora-gray">contact@nexora.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Call Us</h4>
                  <p className="text-nexora-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-nexora-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-nexora-dark">Visit Us</h4>
                  <p className="text-nexora-gray">123 Tech Boulevard, Innovation City, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nexora-gray mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nexora-gray mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-nexora-gray mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nexora-gray mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nexora-blue focus:ring-1 focus:ring-nexora-blue transition-colors duration-300"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-gradient px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center w-full"
                >
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
