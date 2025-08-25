/**
 * House of Games Design System
 *
 * Centralized design tokens and styling utilities for consistent UI across all components.
 * This approach ensures that all components follow the same design language and styling patterns.
 */

import React from 'react';

// Type definitions
type ColorPalette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Typography = {
  fontFamily: {
    sans: string[];
    mono: string[];
  };
  fontSize: Record<string, string>;
  fontWeight: Record<string, number>;
  lineHeight: Record<string, string>;
};

type Spacing = Record<string, string>;

type BorderRadius = Record<string, string>;

type Shadows = Record<string, string>;

type ComponentStyles = {
  card: string;
  button: {
    primary: string;
    secondary: string;
    ghost: string;
  };
  input: string;
  select: string;
  textarea: string;
  badge: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
  };
  table: {
    header: string;
    row: string;
    hover: string;
  };
  form: {
    label: string;
    description: string;
    error: string;
  };
  loading: {
    spinner: string;
    skeleton: string;
  };
};

// Color Palette
export const colors = {
  // Primary colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Secondary colors
  secondary: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
  
  // Success colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Warning colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  // Error colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Glass morphism colors
  glass: {
    primary: 'rgba(59, 130, 246, 0.1)',
    secondary: 'rgba(148, 163, 184, 0.1)',
    background: 'rgba(15, 23, 42, 0.8)',
    border: 'rgba(148, 163, 184, 0.2)',
    hover: 'rgba(30, 41, 59, 0.6)',
  },
};

// Typography
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
  },
  
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

// Spacing
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
};

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

// Glass Morphism Styles
export const glassMorphism = {
  card: `
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  `,
  
  button: `
    background: rgba(59, 130, 246, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.3);
    transition: all 0.2s ease;
  `,
  
  input: `
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(148, 163, 184, 0.3);
    backdrop-filter: blur(10px);
  `,
  
  hover: `
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(59, 130, 246, 0.5);
  `,
};

// Component Styles
export const componentStyles = {
  // Card styles
  card: `
    ${glassMorphism.card}
    padding: ${spacing[6]};
    transition: all 0.3s ease;
  `,
  
  // Button styles
  button: {
    primary: `
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(99, 102, 241, 0.2) 100%);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: white;
      font-weight: 600;
      padding: ${spacing[3]} ${spacing[6]};
      border-radius: ${borderRadius.lg};
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `,
    
    secondary: `
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: rgba(241, 245, 249, 0.9);
      font-weight: 500;
      padding: ${spacing[2.5]} ${spacing[5]};
      border-radius: ${borderRadius.md};
      transition: all 0.2s ease;
    `,
    
    ghost: `
      background: transparent;
      backdrop-filter: blur(10px);
      border: 1px solid transparent;
      color: rgba(241, 245, 249, 0.8);
      font-weight: 500;
      padding: ${spacing[2]} ${spacing[4]};
      border-radius: ${borderRadius.md};
      transition: all 0.2s ease;
    `,
  },
  
  // Input styles
  input: `
    ${glassMorphism.input}
    padding: ${spacing[2.5]} ${spacing[3]};
    border-radius: ${borderRadius.md};
    font-size: ${typography.fontSize.sm};
    transition: all 0.2s ease;
    color: rgba(241, 245, 249, 0.9);
    placeholder: rgba(148, 163, 184, 0.5);
  `,
  
  // Select styles
  select: `
    ${glassMorphism.input}
    padding: ${spacing[2.5]} ${spacing[3]};
    border-radius: ${borderRadius.md};
    font-size: ${typography.fontSize.sm};
    transition: all 0.2s ease;
    color: rgba(241, 245, 249, 0.9);
    backdrop-filter: blur(10px);
  `,
  
  // Textarea styles
  textarea: `
    ${glassMorphism.input}
    padding: ${spacing[3]};
    border-radius: ${borderRadius.md};
    font-size: ${typography.fontSize.sm};
    transition: all 0.2s ease;
    color: rgba(241, 245, 249, 0.9);
    resize: none;
    min-height: 80px;
  `,
  
  // Badge styles
  badge: {
    primary: `
      background: rgba(59, 130, 246, 0.2);
      color: rgba(96, 165, 250, 0.9);
      border: 1px solid rgba(59, 130, 246, 0.3);
      font-weight: 600;
      padding: ${spacing[1]} ${spacing[2.5]};
      border-radius: ${borderRadius.default};
      font-size: ${typography.fontSize.xs};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,
    
    secondary: `
      background: rgba(148, 163, 184, 0.2);
      color: rgba(203, 213, 225, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.3);
      font-weight: 500;
      padding: ${spacing[1]} ${spacing[2.5]};
      border-radius: ${borderRadius.default};
      font-size: ${typography.fontSize.xs};
    `,
    
    success: `
      background: rgba(34, 197, 94, 0.2);
      color: rgba(74, 222, 128, 0.9);
      border: 1px solid rgba(34, 197, 94, 0.3);
      font-weight: 600;
      padding: ${spacing[1]} ${spacing[2.5]};
      border-radius: ${borderRadius.default};
      font-size: ${typography.fontSize.xs};
    `,
    
    error: `
      background: rgba(239, 68, 68, 0.2);
      color: rgba(248, 113, 113, 0.9);
      border: 1px solid rgba(239, 68, 68, 0.3);
      font-weight: 600;
      padding: ${spacing[1]} ${spacing[2.5]};
      border-radius: ${borderRadius.default};
      font-size: ${typography.fontSize.xs};
    `,
  },
  
  // Table styles
  table: {
    header: `
      background: rgba(15, 23, 42, 0.6);
      border-bottom: 1px solid rgba(148, 163, 184, 0.2);
      font-weight: 600;
      color: rgba(241, 245, 249, 0.9);
      font-size: ${typography.fontSize.sm};
    `,
    
    row: `
      background: rgba(15, 23, 42, 0.4);
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      transition: all 0.2s ease;
    `,
    
    hover: `
      background: rgba(30, 41, 59, 0.6);
    `,
  },
  
  // Form styles
  form: {
    label: `
      font-weight: 500;
      color: rgba(241, 245, 249, 0.9);
      font-size: ${typography.fontSize.sm};
      margin-bottom: ${spacing[1]};
    `,
    
    description: `
      color: rgba(148, 163, 184, 0.7);
      font-size: ${typography.fontSize.xs};
      margin-top: ${spacing[1]};
    `,
    
    error: `
      color: rgba(248, 113, 113, 0.9);
      font-size: ${typography.fontSize.xs};
      margin-top: ${spacing[1]};
    `,
  },
  
  // Loading styles
  loading: {
    spinner: `
      width: 20px;
      height: 20px;
      border: 2px solid rgba(148, 163, 184, 0.2);
      border-top: 2px solid rgba(59, 130, 246, 0.8);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `,
    
    skeleton: `
      background: linear-gradient(90deg, rgba(148, 163, 184, 0.1) 25%, rgba(148, 163, 184, 0.2) 50%, rgba(148, 163, 184, 0.1) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    `,
  },
};

// Animation utilities
export const animations = {
  spin: `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,
  
  shimmer: `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `,
  
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  
  slideIn: `
    @keyframes slideIn {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
  `,
};

// Utility functions
export const utils = {
  // Generate CSS classes from styles
  css: (styles: string) => styles.trim(),
  
  // Combine multiple style objects
  combine: (...styles: string[]) => styles.join(' '),
  
  // Create responsive classes
  responsive: (breakpoint: 'sm' | 'md' | 'lg' | 'xl', styles: string) => {
    const breakpoints = {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    };
    return `@media (min-width: ${breakpoints[breakpoint]}) { ${styles} }`;
  },
  
  // Create hover states
  hover: (styles: string) => `&:hover { ${styles} }`,
  
  // Create focus states
  focus: (styles: string) => `&:focus { ${styles} }`,
  
  // Create active states
  active: (styles: string) => `&:active { ${styles} }`,
};

// Theme presets
export const themes = {
  light: {
    background: 'rgba(241, 245, 249, 0.95)',
    foreground: 'rgba(15, 23, 42, 0.95)',
    card: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(226, 232, 240, 0.8)',
    input: 'rgba(255, 255, 255, 0.9)',
  },
  
  dark: {
    background: 'rgba(15, 23, 42, 0.95)',
    foreground: 'rgba(241, 245, 249, 0.95)',
    card: 'rgba(30, 41, 59, 0.8)',
    border: 'rgba(71, 85, 105, 0.5)',
    input: 'rgba(30, 41, 59, 0.9)',
  },
};

// Export all design system utilities
export const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  glassMorphism,
  componentStyles,
  animations,
  utils,
  themes,
};

// Export types for TypeScript
export type {
  ColorPalette,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
  ComponentStyles,
};

// Export default for backward compatibility
export default designSystem;