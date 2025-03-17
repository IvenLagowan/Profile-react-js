
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/895eb82e-c38c-4feb-9aaf-6a4cb91189c3.png';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <AnimatedSection animation="fade-up" className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Professional Profile
            </span>
            <h1 className="font-bold leading-tight mb-6">
              Iven Lagowan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
              Creative professional with expertise in multimedia production, design, and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => navigate('/contact')}
                className="group rounded-full px-6"
              >
                Work with me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => navigate('/projects')} 
                variant="outline" 
                className="rounded-full px-6"
              >
                View Projects
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="blur-in" delay={400} className="order-1 md:order-2 flex justify-center">
            <div className={cn(
              "relative w-[280px] h-[360px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl transition-opacity duration-1000",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}>
              <img 
                src="/lovable-uploads/895eb82e-c38c-4feb-9aaf-6a4cb91189c3.png"
                alt="Iven Lagowan"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80 transition-opacity duration-300 hover:opacity-40" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
