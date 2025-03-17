
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  className?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  className,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <AnimatedSection 
      animation="scale-in" 
      delay={delay} 
      className={cn("group overflow-hidden rounded-xl", className)}
    >
      <div className="relative overflow-hidden rounded-xl border border-border/40 h-full bg-card">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Project <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
