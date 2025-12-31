import { ScrollReveal } from './ScrollReveal';
import { Search, Lightbulb, Palette, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Research & Discovery',
    description: 'Understanding your goals, audience, and competition through in-depth research and analysis.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Ideation & Wireframing',
    description: 'Brainstorming creative solutions and creating low-fidelity wireframes to map the user journey.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Visual Design',
    description: 'Crafting beautiful, pixel-perfect designs with attention to every detail and brand consistency.',
  },
  {
    icon: TestTube,
    number: '04',
    title: 'Testing & Iteration',
    description: 'Validating designs through user testing and refining based on feedback and analytics.',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Delivery & Support',
    description: 'Delivering final assets with documentation and providing ongoing support as needed.',
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.05),transparent_70%)]" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">My Process</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
              How I{' '}
              <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results every time.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative group">
                  {/* Step Card */}
                  <div className="glass-card-hover p-6 text-center h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 glass-card px-3 py-1">
                      <span className="gradient-text font-display font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
