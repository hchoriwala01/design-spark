import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransformClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-12';
      case 'down':
        return '-translate-y-12';
      case 'left':
        return 'translate-x-12';
      case 'right':
        return '-translate-x-12';
      default:
        return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`opacity-0 ${getTransformClass()} transition-all duration-700 ease-out [&.revealed]:opacity-100 [&.revealed]:translate-x-0 [&.revealed]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
};
