import { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Hisamuddin transformed our brand identity completely. His attention to detail and creative vision exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, AppFlow',
    content: 'Working with Hisamuddin was an absolute pleasure. He delivered a stunning mobile app design that our users absolutely love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    content: 'The UI/UX design for our platform was nothing short of exceptional. Hisamuddin truly understands user experience.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Product Manager, InnovateTech',
    content: 'Creative, professional, and delivers on time. What more could you ask for? The dashboard design was exactly what we needed.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-4 mb-6">
              What Clients{' '}
              <span className="gradient-text">Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="glass-card p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-primary-foreground">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
