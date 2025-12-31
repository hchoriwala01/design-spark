import { ScrollReveal } from './ScrollReveal';
import { Button } from './ui/button';
import { Download, Award, Briefcase, Coffee } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Graphic Design', level: 90 },
  { name: 'Brand Identity', level: 88 },
  { name: 'Prototyping', level: 92 },
  { name: 'Web Design', level: 85 },
  { name: 'Motion Graphics', level: 75 },
];

const highlights = [
  { icon: Briefcase, value: '2+', label: 'Years Experience' },
  { icon: Award, value: '50+', label: 'Projects Done' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">About Me</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate designer who transforms ideas into visually stunning and user-friendly digital experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image & Highlights */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Profile Card */}
              <div className="relative glass-card p-4 max-w-md mx-auto lg:mx-0">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="font-display font-bold text-5xl text-primary-foreground">H</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">Hisamuddin</h3>
                    <p className="text-muted-foreground">UI/UX & Graphics Designer</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 neon-glow">
                  <span className="gradient-text font-semibold">2+ Years Exp.</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex justify-center gap-6 mt-12">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-display font-bold text-xl gradient-text">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content & Skills */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4">
                Hi, I'm Hisamuddin – Your Creative Partner
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 2 years of experience in UI/UX and graphic design, I specialize in creating 
                intuitive digital experiences that not only look beautiful but also solve real problems. 
                My approach combines creativity with strategic thinking to deliver designs that resonate 
                with users and drive results.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I believe great design is about understanding people. Every project I take on starts 
                with deep research and ends with pixel-perfect execution. Whether it's a mobile app, 
                website, or brand identity, I pour my heart into every pixel.
              </p>

              {/* Skills */}
              <div className="space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Resume */}
              <Button variant="hero" size="lg">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
