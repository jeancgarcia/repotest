
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FadeIn } from './ui/Motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80" 
          alt="Dominican Republic Scenic Landscape" 
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-gradient"></div>
      </div>
      
      {/* Foreground Content */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl text-white">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              We are <br />
              <span className="text-primary-light">Dominican</span> <br />
              guides
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl mb-8 max-w-xl">
              Your premium guide to property investment opportunities in the breathtaking Dominican Republic.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-white hover:bg-primary-hover flex items-center gap-2 text-lg px-6 py-6">
                Explore Now
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-6 py-6">
                View Properties
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
