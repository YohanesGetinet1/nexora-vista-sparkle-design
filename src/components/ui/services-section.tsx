
import { Code, BarChart, Smartphone, Globe, PenTool, Share2, Database, BarChart3, Briefcase, LineChart } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies for optimal performance.",
      image: "/images/web-development.jpg"
    },
    {
      icon: <BarChart size={24} />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic, generate leads, and increase your brand's online presence.",
      image: "/images/digital-marketing.jpg"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Tech Outsourcing",
      description: "End-to-end technical resource outsourcing solutions to help you scale without the overhead.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1400&q=80"
    },
    {
      icon: <Database size={24} />,
      title: "Data Analytics",
      description: "Extract valuable insights from your data to make informed business decisions and identify trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
    },
    {
      icon: <LineChart size={24} />,
      title: "Business Analytics",
      description: "Comprehensive analysis of your business performance metrics to guide strategic planning.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
    },
    {
      icon: <Share2 size={24} />,
      title: "Marketing Outsourcing",
      description: "Skilled marketing professionals to handle your campaigns and content creation needs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-nexora-light dark:bg-nexora-dark/90">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-nexora-gray dark:text-nexora-light/80 text-lg">
            Comprehensive solutions tailored to elevate your business in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-nexora-dark/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden group"
            >
              <div className="h-40 w-full mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-nexora-blue/10 to-nexora-purple/10 flex items-center justify-center mb-4">
                <div className="text-nexora-blue">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-nexora-gray dark:text-nexora-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
