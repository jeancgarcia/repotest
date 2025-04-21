
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  let animationClass = '';
  switch (direction) {
    case 'up':
      animationClass = 'translate-y-10';
      break;
    case 'down':
      animationClass = '-translate-y-10';
      break;
    case 'left':
      animationClass = 'translate-x-10';
      break;
    case 'right':
      animationClass = '-translate-x-10';
      break;
    default:
      animationClass = '';
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && 'opacity-0',
        !isVisible && animationClass,
        className
      )}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export const StaggeredFade: React.FC<{
  children: React.ReactNode;
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
}> = ({ children, baseDelay = 0, staggerDelay = 0.1, className }) => {
  return (
    <div className={cn('', className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <FadeIn delay={baseDelay + index * staggerDelay} key={index}>
            {child}
          </FadeIn>
        );
      })}
    </div>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const y = scrollY * speed;

  return (
    <div
      ref={ref}
      className={cn('will-change-transform overflow-hidden', className)}
    >
      <div
        style={{
          transform: `translateY(-${y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
