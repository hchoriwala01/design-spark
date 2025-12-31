import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      <div
        className={`absolute bottom-16 right-0 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="glass-card p-4 mb-2 min-w-[200px]">
          <p className="text-sm text-muted-foreground mb-3">Ready to start a project?</p>
          <Button variant="hero" size="sm" className="w-full" onClick={scrollToContact}>
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-neon-intense hover:scale-110 transition-all duration-300 ${
          isOpen ? 'rotate-90' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>
    </div>
  );
};
