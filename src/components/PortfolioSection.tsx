import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';

const categories = ['All', 'UI/UX', 'Graphics', 'Branding', 'Web Design'];

const projects = [
  {
    id: 1,
    title: 'Banking App Redesign',
    category: 'UI/UX',
    description: 'Complete redesign of a mobile banking application with focus on user experience and accessibility.',
    image: 'https://res.cloudinary.com/ddwzgcbwi/image/upload/v1768129770/adwaliah-ecommerce-architect_iiwiy8.png',
    tools: ['Figma', 'Adobe XD'],
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    category: 'UI/UX',
    description: 'Modern analytics dashboard for an e-commerce platform with real-time data visualization.',
    image: 'linear-gradient(135deg, #47C6FF 0%, #3350C4 100%)',
    tools: ['Figma', 'Sketch'],
  },
  {
    id: 3,
    title: 'Restaurant Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity package including logo, color palette, and marketing materials.',
    image: 'linear-gradient(135deg, #3350C4 0%, #1B0B54 100%)',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Graphics',
    description: 'Eye-catching social media graphics for a product launch campaign.',
    image: 'linear-gradient(135deg, #EEFF4A 0%, #47C6FF 100%)',
    tools: ['Photoshop', 'After Effects'],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Modern portfolio website design for a photographer with gallery features.',
    image: 'linear-gradient(135deg, #1B0B54 0%, #47C6FF 100%)',
    tools: ['Figma', 'Webflow'],
  },
  {
    id: 6,
    title: 'Fitness App UI',
    category: 'UI/UX',
    description: 'Health and fitness tracking app with workout plans and progress monitoring.',
    image: 'linear-gradient(135deg, #47C6FF 0%, #EEFF4A 100%)',
    tools: ['Figma', 'Principle'],
  },
  {
    id: 7,
    title: 'Tech Startup Branding',
    category: 'Branding',
    description: 'Modern tech startup brand identity with minimalist logo and brand guidelines.',
    image: 'linear-gradient(135deg, #3350C4 0%, #47C6FF 100%)',
    tools: ['Illustrator', 'Figma'],
  },
  {
    id: 8,
    title: 'Event Poster Series',
    category: 'Graphics',
    description: 'Series of event posters for a music festival with bold typography.',
    image: 'linear-gradient(135deg, #1B0B54 0%, #EEFF4A 100%)',
    tools: ['Photoshop', 'Illustrator'],
  },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
              Selected{' '}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best projects that demonstrate my skills and creativity.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-neon'
                    : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 50}>
              <div
                className="group relative glass-card overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: project.image.startsWith('http')
                      ? `url(${project.image})`
                      : project.image,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-white/50">{project.id}</span>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex flex-col justify-end p-5 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <span className="text-primary font-medium text-xs mb-1">{project.category}</span>
                  <h3 className="font-display font-bold text-lg mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center gap-2">
                    <Button variant="glass" size="sm">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Bottom Info (Always visible) */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                  <span className="text-primary text-xs font-medium">{project.category}</span>
                  <h3 className="font-display font-semibold text-sm mt-1 text-white">{project.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card/90 backdrop-blur-xl border-white/10 sm:rounded-2xl">
            {selectedProject && (
              <div className="grid md:grid-cols-2">
                {/* Left side: Image */}
                <div 
                  className="h-64 md:h-[500px] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: selectedProject.image.startsWith('http')
                      ? `url(${selectedProject.image})`
                      : selectedProject.image,
                  }}
                />
                {/* Right side: Details */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <DialogTitle className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground mb-6">
                    {selectedProject.description}
                  </DialogDescription>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-fit" onClick={() => window.open('#', '_blank')}>
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
