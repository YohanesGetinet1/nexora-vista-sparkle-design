
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Cell Healthcare",
      category: "Healthcare Website",
      description: "A complete healthcare platform with patient management and online consultation features.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=80",
      url: "https://cellhealthcare.in/"
    },
    {
      title: "InterTechub",
      category: "Tech Platform",
      description: "Modern technology platform offering integrated solutions for businesses.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      url: "https://intertechub.com/"
    },
    {
      title: "E-Commerce Solution",
      category: "Web Development",
      description: "A full-featured online store with seamless checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80",
      url: "#"
    },
    {
      title: "Brand Redesign Campaign",
      category: "Digital Marketing",
      description: "Complete visual identity refresh that increased brand recognition by 45%.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1400&q=80",
      url: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-nexora-gray text-lg">
            Explore our recent projects and see how we've helped businesses achieve their goals through tech outsourcing and marketing solutions.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-nexora-dark shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-nexora-blue to-nexora-purple rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-nexora-light dark:bg-nexora-dark/50 text-nexora-dark dark:text-nexora-light px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-nexora-gray mb-6">{item.description}</p>
                    <div className="mt-auto">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-nexora-blue hover:text-nexora-purple transition-colors duration-300 font-medium"
                      >
                        Visit Website <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
        
        <div className="text-center mt-12">
          <a href="#" className="px-6 py-3 rounded-full font-medium border border-nexora-gray/20 hover:border-nexora-blue dark:border-nexora-gray/50 dark:hover:border-nexora-purple transition-colors duration-300 inline-flex items-center justify-center">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
