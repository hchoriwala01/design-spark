import { Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container-custom relative z-10 py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-display font-bold text-primary-foreground text-xl">
                H
              </div>
              <span className="font-display font-bold text-xl">Hisamuddin</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Creating digital experiences that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="group glass-card p-3 hover:bg-primary/20 hover:border-primary/50 hover:shadow-neon transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Hisamuddin. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {' '}by Hisamuddin
          </p>
        </div>
      </div>
    </footer>
  );
};
