'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  glassmorphism?: boolean;
  hoverEffect?: boolean;
}

export const Card = ({
  children,
  className,
  glassmorphism = true,
  hoverEffect = true,
}: CardProps) => {
  const baseStyles = glassmorphism ? 'card-glass' : 'card-base';
  const hoverStyles = hoverEffect ? 'hover:shadow-glow' : '';

  return (
    <div className={cn(baseStyles, hoverStyles, className)}>
      {children}
    </div>
  );
};
