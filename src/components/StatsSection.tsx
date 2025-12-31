import { ScrollReveal } from './ScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { Briefcase, Users, Award, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    icon: Users,
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: 2,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center group">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Value */}
                <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
