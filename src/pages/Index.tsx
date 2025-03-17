
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProfileHero from '@/components/ProfileHero';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, Film, Music } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      icon: <Film className="h-8 w-8" />,
      title: 'Video Production',
      description: 'Professional video filming and production services for various projects and events.'
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Audio Production',
      description: 'High-quality audio recording, mixing, and mastering for music and other audio projects.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Creative Design',
      description: 'Innovative design solutions for branding, marketing, and visual identity.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Digital Solutions',
      description: 'Custom digital solutions including websites and multimedia applications.'
    }
  ];

  const featuredProjects = [
    {
      title: 'Music Video Production',
      description: 'Directed and produced a music video for a local artist, showcasing their talent through creative visuals.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1740&auto=format&fit=crop',
      tags: ['Video', 'Music', 'Production'],
      delay: 0
    },
    {
      title: 'Brand Identity Design',
      description: 'Created a comprehensive brand identity for a startup, including logo, color palette, and visual elements.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1740&auto=format&fit=crop',
      tags: ['Branding', 'Design', 'Identity'],
      delay: 150
    },
    {
      title: 'Audio Engineering',
      description: 'Provided audio engineering services for a full-length album, ensuring professional sound quality.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1740&auto=format&fit=crop',
      tags: ['Audio', 'Music', 'Engineering'],
      delay: 300
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <ProfileHero />
        
        {/* Services Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive creative services tailored to meet your specific needs and vision.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 150} animation="fade-up">
                  <div className="bg-card p-8 rounded-xl border border-border/40 h-full flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="section">
          <div className="section-inner">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my most notable work across various creative disciplines.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                />
              ))}
            </div>
            
            <AnimatedSection className="flex justify-center mt-12">
              <Link to="/projects">
                <Button variant="outline" className="rounded-full px-6 group">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Let's Connect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8">
                I'm available for freelance work and exciting collaborations. Let's discuss your project and bring your vision to life.
              </p>
              <Link to="/contact">
                <Button className="rounded-full px-8 py-6 group">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
