
import { ArrowRight, MousePointer, Zap, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block glass-effect px-4 py-2 rounded-full mb-4">
              <span className="flex items-center text-sm font-medium">
                <span className="bg-gradient-to-r from-nexora-blue to-nexora-purple h-2 w-2 rounded-full mr-2"></span>
                Leading Tech & Marketing Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Brand with <span className="text-gradient">Innovative</span> Solutions
            </h1>
            
            <p className="text-nexora-gray text-lg md:text-xl">
              We combine cutting-edge technology with strategic marketing to propel your business forward in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-gradient px-6 py-3 rounded-full font-medium inline-flex items-center justify-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#portfolio" className="px-6 py-3 rounded-full font-medium border border-nexora-gray/20 hover:border-nexora-blue transition-colors duration-300 inline-flex items-center justify-center">
                See Our Work
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center">
                  <MousePointer size={18} className="text-nexora-blue" />
                </div>
                <span className="font-medium">User-Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-nexora-purple/10 flex items-center justify-center">
                  <Zap size={18} className="text-nexora-purple" />
                </div>
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-nexora-blue/10 flex items-center justify-center">
                  <BarChart3 size={18} className="text-nexora-blue" />
                </div>
                <span className="font-medium">Data-Driven</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nexora-blue to-nexora-purple rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-nexora-dark via-nexora-dark/90 to-nexora-dark/80 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">Nexora</div>
                    <div className="text-lg text-white/70 mt-2">Tech & Marketing</div>
                    <div className="mt-6 animate-float">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-nexora-blue to-nexora-purple mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 h-40 w-40 bg-nexora-blue/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-4 -top-4 h-40 w-40 bg-nexora-purple/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
