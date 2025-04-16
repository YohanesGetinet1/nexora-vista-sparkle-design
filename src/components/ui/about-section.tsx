
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-nexora-blue to-nexora-purple rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-nexora-dark rounded-tl-2xl"></div>
                  <div className="aspect-square bg-nexora-blue rounded-tr-2xl"></div>
                  <div className="aspect-square bg-nexora-purple rounded-bl-2xl"></div>
                  <div className="aspect-square bg-nexora-dark rounded-br-2xl"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gradient">Nexora</h3>
                    <p className="text-nexora-gray">Tech & Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block glass-effect px-4 py-2 rounded-full mb-4">
              <span className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-nexora-blue to-nexora-purple h-2 w-2 rounded-full mr-2"></span>
                About Nexora
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              We're a team of <span className="text-gradient">passionate</span> digital experts
            </h2>
            
            <p className="text-nexora-gray text-lg">
              At Nexora, we bring together the best of technology and marketing to create impactful digital solutions. Our approach combines innovation, strategy, and creativity to help businesses thrive in an ever-evolving digital landscape.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-nexora-blue" />
                </div>
                <p className="text-nexora-gray">
                  <span className="font-medium text-nexora-dark">Innovative Solutions</span> - We leverage cutting-edge technologies to create forward-thinking solutions.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-nexora-blue" />
                </div>
                <p className="text-nexora-gray">
                  <span className="font-medium text-nexora-dark">Client-Focused Approach</span> - Your goals and vision are at the center of everything we do.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-nexora-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-nexora-blue" />
                </div>
                <p className="text-nexora-gray">
                  <span className="font-medium text-nexora-dark">Measurable Results</span> - We deliver data-driven strategies that produce quantifiable outcomes.
                </p>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="btn-gradient px-6 py-3 rounded-full font-medium inline-flex items-center justify-center">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
