
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Video', 'Audio', 'Design', 'Digital'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Music Video Production',
      description: 'Directed and produced a music video for a local artist, showcasing their talent through creative visuals.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1740&auto=format&fit=crop',
      tags: ['Video', 'Music', 'Production'],
      category: 'Video',
    },
    {
      title: 'Brand Identity Design',
      description: 'Created a comprehensive brand identity for a startup, including logo, color palette, and visual elements.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1740&auto=format&fit=crop',
      tags: ['Branding', 'Design', 'Identity'],
      category: 'Design',
    },
    {
      title: 'Audio Engineering',
      description: 'Provided audio engineering services for a full-length album, ensuring professional sound quality.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1740&auto=format&fit=crop',
      tags: ['Audio', 'Music', 'Engineering'],
      category: 'Audio',
    },
    {
      title: 'Corporate Website',
      description: 'Designed and developed a responsive corporate website with modern aesthetics and optimal user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop',
      tags: ['Web', 'Design', 'Development'],
      category: 'Digital',
    },
    {
      title: 'Short Film Production',
      description: 'Produced and directed a short film that was featured in several independent film festivals.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1718&auto=format&fit=crop',
      tags: ['Film', 'Video', 'Production'],
      category: 'Video',
    },
    {
      title: 'Podcast Production',
      description: 'Set up and managed the audio production for a weekly podcast series, including editing and mixing.',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1740&auto=format&fit=crop',
      tags: ['Podcast', 'Audio', 'Production'],
      category: 'Audio',
    },
    {
      title: 'Product Photography',
      description: 'Executed product photography for an e-commerce brand, highlighting product features through creative composition.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop',
      tags: ['Photography', 'Product', 'Commercial'],
      category: 'Design',
    },
    {
      title: 'Social Media Campaign',
      description: 'Developed and implemented a comprehensive social media campaign to increase brand awareness and engagement.',
      image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1740&auto=format&fit=crop',
      tags: ['Social Media', 'Marketing', 'Strategy'],
      category: 'Digital',
    },
    {
      title: 'Mobile App UI Design',
      description: 'Created the user interface design for a mobile application, focusing on user experience and visual appeal.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1740&auto=format&fit=crop',
      tags: ['UI', 'UX', 'Mobile'],
      category: 'Digital',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Projects Hero Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
                My Work
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects & Portfolio</h1>
              <p className="text-lg text-muted-foreground">
                Explore a collection of my creative work across various media and disciplines. Each project represents a unique challenge and creative solution.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Projects Gallery Section */}
        <section className="section">
          <div className="section-inner">
            <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  delay={index * 100}
                />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
