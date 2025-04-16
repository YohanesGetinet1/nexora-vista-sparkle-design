
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Working with Nexora transformed our online presence completely. Their team delivered a stunning website and strategic marketing campaign that increased our conversions by 75%.",
      rating: 5
    },
    {
      name: "Mark Williams",
      role: "Marketing Director, Innovate Solutions",
      content: "The Nexora team brought our brand vision to life. Their creative approach and technical expertise made our project a success beyond expectations.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      role: "Founder, Bloom Boutique",
      content: "As a small business owner, I needed a partner who understood my needs. Nexora provided personalized service and delivered a website that perfectly represents my brand.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-nexora-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-nexora-gray text-lg">
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col relative"
            >
              <div className="absolute top-6 right-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-nexora-gray italic">"{testimonial.content}"</p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-nexora-blue to-nexora-purple flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-nexora-dark">{testimonial.name}</h4>
                    <p className="text-sm text-nexora-gray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
