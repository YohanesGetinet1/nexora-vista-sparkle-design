
import { ArrowUpRight } from "lucide-react";

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online store with seamless checkout and inventory management."
    },
    {
      title: "Brand Redesign Campaign",
      category: "Digital Marketing",
      description: "Complete visual identity refresh that increased brand recognition by 45%."
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Cross-platform mobile application for tracking workouts and nutrition."
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Intuitive interface design for a cloud-based project management tool."
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-nexora-gray text-lg">
            Explore our recent projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nexora-blue to-nexora-purple rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-nexora-light text-nexora-dark px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-nexora-gray mb-6">{item.description}</p>
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-nexora-blue hover:text-nexora-purple transition-colors duration-300 font-medium"
                  >
                    View Project <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-nexora-blue/5 to-nexora-purple/5 rounded-bl-3xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="px-6 py-3 rounded-full font-medium border border-nexora-gray/20 hover:border-nexora-blue transition-colors duration-300 inline-flex items-center justify-center">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
