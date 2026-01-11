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
    image: 'data:image/jpeg;base64,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',
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
