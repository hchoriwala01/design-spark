import { Button } from './ui/button';
import { Typewriter } from './Typewriter';
import { ArrowDown, Sparkles, Palette, Layers } from 'lucide-react';

export const HeroSection = () => {
  const roles = [
    'UI/UX Designer',
    'Graphics Designer',
    'Brand Identity Expert',
    'Web Designer',
    'Creative Thinker',
  ];

  const scrollToWork = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-animated"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 floating opacity-20">
          <Sparkles className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-40 right-20 floating-delayed opacity-20">
          <Palette className="w-20 h-20 text-secondary" />
        </div>
        <div className="absolute bottom-40 left-20 floating opacity-20">
          <Layers className="w-14 h-14 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 floating-delayed opacity-15">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl" />
        </div>
        <div className="absolute top-1/3 left-1/4 floating opacity-10">
          <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 floating-delayed opacity-10">
          <div className="w-40 h-40 rounded-full bg-secondary/20 blur-2xl" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for Freelance Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 fade-in-up delay-100">
            I Design{' '}
            <span className="gradient-text">Experiences</span>
            <br />
            That People{' '}
            <span className="relative inline-block">
              <span className="text-foreground">Love</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="100%" stopColor="#9D00FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-10 h-8 fade-in-up delay-200">
            <Typewriter texts={roles} className="gradient-text font-medium" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
            <Button variant="hero" size="xl" onClick={scrollToWork}>
              <Sparkles className="w-5 h-5" />
              View My Work
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
              Let's Talk
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto fade-in-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">2+</div>
              <div className="text-sm text-muted-foreground">Years Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">30+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
