
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Iven Lagowan</h3>
            <p className="text-muted-foreground max-w-md">
              Creating innovative solutions with a focus on design and user experience.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex space-x-6 mb-6">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </NavLink>
              <NavLink to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </NavLink>
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </NavLink>
            </nav>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iven Lagowan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
