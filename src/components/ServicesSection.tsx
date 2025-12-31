import { ScrollReveal } from './ScrollReveal';
import { 
  Palette, 
  Smartphone, 
  Globe, 
  Layers, 
  PenTool, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging digital experiences that users love. From wireframes to high-fidelity prototypes.',
    color: 'from-primary to-blue-400',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual storytelling through stunning graphics. Social media, marketing materials, and print designs.',
    color: 'from-secondary to-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Complete branding solutions that make your business stand out. Logo design, style guides, and more.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Responsive and engaging website designs that convert visitors into customers. Modern and fast.',
    color: 'from-green-400 to-primary',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Design',
    description: 'User-centered mobile app interfaces for iOS and Android. Seamless experiences on every device.',
    color: 'from-orange-400 to-secondary',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    description: 'Memorable brand marks that tell your story. Timeless logos that work across all mediums.',
    color: 'from-purple-400 to-primary',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">What I Do</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
              Services That{' '}
              <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, I offer comprehensive design services tailored to your unique needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group glass-card-hover p-8 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
