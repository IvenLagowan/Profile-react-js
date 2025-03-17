
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'contact@ivenlagowan.com',
      link: 'mailto:contact@ivenlagowan.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+62 123 456 7890',
      link: 'tel:+621234567890'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: 'Instagram',
      link: '#'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
      link: '#'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      link: '#'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Contact Hero Section */}
        <section className="section bg-secondary">
          <div className="section-inner">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or want to discuss potential collaboration? I'd love to hear from you. Reach out using the form below or through my contact information.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Contact Form and Info Section */}
        <section className="section">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="slide-in-left">
                <div className="bg-card rounded-xl border border-border/40 p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="bg-card rounded-xl border border-border/40 p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={item.name}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
