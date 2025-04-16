
import { Code, BarChart, Smartphone, Globe, PenTool, Share2 } from "lucide-react";

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
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed for seamless user experiences.",
      image: "/images/mobile-apps.jpg"
    },
    {
      icon: <Globe size={24} />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      image: "/images/seo-optimization.jpg"
    },
    {
      icon: <PenTool size={24} />,
      title: "Brand Design",
      description: "Compelling visual identities that communicate your brand's values and connect with your audience.",
      image: "/images/brand-design.jpg"
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media",
      description: "Engaging social media strategies that build communities and enhance brand loyalty.",
      image: "/images/social-media.jpg"
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
