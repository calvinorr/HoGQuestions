import React from 'react';

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
  variant?: 'text' | 'title' | 'stat' | 'card';
}

export default function SkeletonLoader({ 
  lines = 3, 
  className = '', 
  variant = 'text' 
}: SkeletonLoaderProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'title':
        return 'skeleton-title';
      case 'stat':
        return 'skeleton-stat';
      case 'card':
        return 'skeleton-card';
      default:
        return 'skeleton-text';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`${getVariantClass()} ${variant === 'card' ? 'h-32' : ''}`}
        />
      ))}
    </div>
  );
}