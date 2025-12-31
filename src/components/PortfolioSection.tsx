import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';

const categories = ['All', 'UI/UX', 'Graphics', 'Branding', 'Web Design'];

const projects = [
  {
    id: 1,
    title: 'Banking App Redesign',
    category: 'UI/UX',
    description: 'Complete redesign of a mobile banking application with focus on user experience and accessibility.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tools: ['Figma', 'Adobe XD'],
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    category: 'UI/UX',
    description: 'Modern analytics dashboard for an e-commerce platform with real-time data visualization.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tools: ['Figma', 'Sketch'],
  },
  {
    id: 3,
    title: 'Restaurant Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity package including logo, color palette, and marketing materials.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Graphics',
    description: 'Eye-catching social media graphics for a product launch campaign.',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tools: ['Photoshop', 'After Effects'],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Modern portfolio website design for a photographer with gallery features.',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tools: ['Figma', 'Webflow'],
  },
  {
    id: 6,
    title: 'Fitness App UI',
    category: 'UI/UX',
    description: 'Health and fitness tracking app with workout plans and progress monitoring.',
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    tools: ['Figma', 'Principle'],
  },
  {
    id: 7,
    title: 'Tech Startup Branding',
    category: 'Branding',
    description: 'Modern tech startup brand identity with minimalist logo and brand guidelines.',
    image: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    tools: ['Illustrator', 'Figma'],
  },
  {
    id: 8,
    title: 'Event Poster Series',
    category: 'Graphics',
    description: 'Series of event posters for a music festival with bold typography.',
    image: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    tools: ['Photoshop', 'Illustrator'],
  },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
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
              >
                {/* Project Image */}
                <div
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-2xl text-white/50">{project.id}</span>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 flex flex-col justify-end p-5 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="text-primary text-xs font-medium mb-1">{project.category}</span>
                  <h3 className="font-display font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  
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
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span className="text-primary text-xs font-medium">{project.category}</span>
                  <h3 className="font-display font-semibold text-sm mt-1">{project.title}</h3>
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
      </div>
    </section>
  );
};
