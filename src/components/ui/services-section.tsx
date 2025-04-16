
import { Code, BarChart, Smartphone, Globe, PenTool, Share2 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies for optimal performance."
    },
    {
      icon: <BarChart size={24} />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic, generate leads, and increase your brand's online presence."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed for seamless user experiences."
    },
    {
      icon: <Globe size={24} />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website."
    },
    {
      icon: <PenTool size={24} />,
      title: "Brand Design",
      description: "Compelling visual identities that communicate your brand's values and connect with your audience."
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media",
      description: "Engaging social media strategies that build communities and enhance brand loyalty."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-nexora-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-nexora-gray text-lg">
            Comprehensive solutions tailored to elevate your business in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexora-blue/10 to-nexora-purple/10 flex items-center justify-center mb-4">
                <div className="text-nexora-blue">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-nexora-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
