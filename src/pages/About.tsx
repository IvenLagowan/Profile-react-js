
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, Award, BookOpen, Calendar } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    'Video Production',
    'Audio Engineering',
    'Photography',
    'Creative Direction',
    'Brand Development',
    'Digital Marketing',
    'Content Creation',
    'Event Management',
  ];

  const experiences = [
    {
      period: '2020 - Present',
      role: 'Creative Director',
      company: 'Independent',
      description: 'Leading creative projects for various clients, overseeing production from concept to completion.'
    },
    {
      period: '2018 - 2020',
      role: 'Video Producer',
      company: 'Media Productions Inc.',
      description: 'Produced high-quality video content for commercial and artistic projects, managing production teams.'
    },
    {
      period: '2015 - 2018',
      role: 'Audio Engineer',
      company: 'Sound Studios',
      description: 'Engineered and mixed audio for music, film, and advertising projects, ensuring professional quality.'
    }
  ];

  const education = [
    {
      period: '2012 - 2015',
      degree: 'Bachelor of Arts in Media Production',
      institution: 'Creative Arts University',
      description: 'Focused on multimedia production, including video, audio, and digital content creation.'
    },
    {
      period: '2010 - 2012',
      degree: 'Associate Degree in Audio Engineering',
      institution: 'Technical College',
      description: 'Specialized in audio recording, mixing, and production techniques.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* About Hero Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/895eb82e-c38c-4feb-9aaf-6a4cb91189c3.png"
                    alt="Iven Lagowan"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 transition-opacity duration-300 hover:opacity-40" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Iven Lagowan</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a creative professional with a passion for multimedia production, design, and innovative solutions. With years of experience in the creative industry, I've developed a unique approach that combines technical expertise with artistic vision.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My goal is to create meaningful and impactful work that resonates with audiences and helps clients achieve their objectives. I believe in the power of creativity to transform ideas into compelling experiences.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary mb-2">5+</span>
                    <span className="text-sm text-muted-foreground text-center">Years of Experience</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                    <span className="text-3xl font-bold text-primary mb-2">50+</span>
                    <span className="text-sm text-muted-foreground text-center">Projects Completed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="section">
          <div className="section-inner">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse range of creative and technical skills developed through education and practical experience.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <AnimatedSection 
                  key={skill} 
                  animation="fade-up" 
                  delay={index * 100}
                  className="bg-card hover:bg-card/80 border border-border/50 rounded-xl p-6 flex items-center transition-colors duration-300"
                >
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{skill}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience and Education Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <AnimatedSection className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
                  </div>
                </AnimatedSection>
                
                <div className="space-y-8">
                  {experiences.map((item, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                      <div className="relative pl-8 border-l-2 border-border">
                        <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <div className="mb-1 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="text-muted-foreground mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <AnimatedSection className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
                  </div>
                </AnimatedSection>
                
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 150 + 100}>
                      <div className="relative pl-8 border-l-2 border-border">
                        <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                        <div className="mb-1 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
