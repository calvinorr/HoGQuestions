# House of Games Design System

## Overview

This design system provides a centralized approach to styling components consistently across the House of Games application. It uses a combination of CSS-in-JS utilities and predefined style objects to ensure visual consistency and maintainability.

## Philosophy

Instead of manually styling each component individually, we use a design system approach where:

1. **Centralized Design Tokens**: All colors, spacing, typography, and component styles are defined in one place
2. **Reusable Components**: Components use the design system tokens for consistent styling
3. **Easy Maintenance**: Changes to the design system automatically update all components
4. **Consistent UX**: All components follow the same visual language and interaction patterns

## Structure

```
frontend/src/lib/design-system.ts
├── Colors (primary, secondary, success, warning, error, glass)
├── Typography (fontFamily, fontSize, fontWeight, lineHeight)
├── Spacing (consistent spacing scale)
├── Border Radius (consistent border radius scale)
├── Shadows (consistent shadow scale)
├── Glass Morphism (reusable glass effects)
├── Component Styles (predefined component styles)
├── Animations (keyframe animations)
├── Utilities (helper functions)
└── Themes (light/dark theme presets)
```

## Usage Guide

### 1. Import the Design System

```typescript
import designSystem from '../lib/design-system';
```

### 2. Using Component Styles

#### Buttons
```typescript
// Primary button
const buttonStyle = designSystem.componentStyles.button.primary;

// Secondary button
const buttonStyle = designSystem.componentStyles.button.secondary;

// Ghost button
const buttonStyle = designSystem.componentStyles.button.ghost;
```

#### Cards
```typescript
const cardStyle = designSystem.componentStyles.card;
```

#### Forms
```typescript
const inputStyle = designSystem.componentStyles.input;
const labelStyle = designSystem.componentStyles.form.label;
const errorStyle = designSystem.componentStyles.form.error;
```

#### Badges
```typescript
const primaryBadge = designSystem.componentStyles.badge.primary;
const successBadge = designSystem.componentStyles.badge.success;
const errorBadge = designSystem.componentStyles.badge.error;
```

### 3. Using Utility Functions

#### CSS Generation
```typescript
const customStyle = designSystem.utils.css(`
  background: ${designSystem.colors.primary[500]};
  padding: ${designSystem.spacing[4]};
  border-radius: ${designSystem.borderRadius.lg};
`);
```

#### Responsive Design
```typescript
const responsiveStyle = designSystem.utils.responsive('md', `
  padding: ${designSystem.spacing[6]};
`);
```

#### Hover States
```typescript
const hoverStyle = designSystem.utils.hover(`
  background: ${designSystem.colors.primary[600]};
`);
```

### 4. Using Glass Morphism

```typescript
const glassCard = designSystem.glassMorphism.card;
const glassButton = designSystem.glassMorphism.button;
const glassInput = designSystem.glassMorphism.input;
```

## Component Examples

### Button Component
```typescript
import { Button } from './ui/button';
import designSystem from '../lib/design-system';

const CustomButton = ({ variant = 'primary', children, ...props }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variantStyles = {
    primary: designSystem.componentStyles.button.primary,
    secondary: designSystem.componentStyles.button.secondary,
    ghost: designSystem.componentStyles.button.ghost,
  };
  
  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Card Component
```typescript
import designSystem from '../lib/design-system';

const CustomCard = ({ children, ...props }) => {
  return (
    <div 
      style={designSystem.componentStyles.card}
      {...props}
    >
      {children}
    </div>
  );
};
```

### Form Component
```typescript
import designSystem from '../lib/design-system';

const CustomForm = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
    </form>
  );
};

const CustomInput = ({ label, error, ...props }) => {
  return (
    <div className="space-y-2">
      <label style={designSystem.componentStyles.form.label}>
        {label}
      </label>
      <input 
        style={designSystem.componentStyles.input}
        {...props}
      />
      {error && (
        <div style={designSystem.componentStyles.form.error}>
          {error}
        </div>
      )}
    </div>
  );
};
```

## Color System

### Primary Colors
- Blue 500: Main brand color
- Blue 600: Hover states
- Blue 700: Active states

### Secondary Colors
- Gray 700: Backgrounds
- Gray 600: Borders
- Gray 500: Text

### Status Colors
- Green: Success states
- Yellow: Warning states
- Red: Error states

### Glass Colors
- Semi-transparent backgrounds with blur effects
- Consistent opacity levels
- Subtle borders

## Typography System

### Font Scale
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)

### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

## Spacing System

### Consistent Spacing Scale
- 0: 0
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)

## Component Guidelines

### Cards
- Use glass-morphism effect
- Consistent padding (6 units)
- Rounded corners (0.75rem)
- Subtle shadows

### Buttons
- Primary: Gradient background with glass effect
- Secondary: Solid background with glass effect
- Ghost: Transparent background with glass effect
- Consistent padding and border radius

### Forms
- Glass-morphism inputs
- Consistent label styling
- Clear error messages
- Proper spacing between elements

### Tables
- Glass-morphism rows
- Hover effects
- Consistent header styling
- Proper spacing

### Badges
- Status-based colors
- Consistent padding
- Proper font weights
- Text transformation

## Migration Guide

### From Manual Styling to Design System

1. **Identify repetitive patterns** in your current styling
2. **Create design tokens** for colors, spacing, and typography
3. **Update components** to use the design system
4. **Test thoroughly** to ensure visual consistency
5. **Update documentation** with new usage patterns

### Example Migration

**Before:**
```typescript
const MyComponent = () => {
  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
    }}>
      <h2 style={{
        color: 'rgba(241, 245, 249, 0.9)',
        fontSize: '1.25rem',
        fontWeight: '600',
      }}>
        Title
      </h2>
    </div>
  );
};
```

**After:**
```typescript
import designSystem from '../lib/design-system';

const MyComponent = () => {
  return (
    <div style={designSystem.componentStyles.card}>
      <h2 style={{
        color: designSystem.colors.foreground,
        fontSize: designSystem.fontSize.xl,
        fontWeight: designSystem.fontWeight.semibold,
      }}>
        Title
      </h2>
    </div>
  );
};
```

## Best Practices

1. **Use the design system consistently** across all components
2. **Avoid inline styles** - use the design system tokens
3. **Create reusable components** that leverage the design system
4. **Document new components** using the design system
5. **Test for visual consistency** across different components
6. **Update the design system** when adding new features
7. **Use responsive utilities** for mobile-first design
8. **Implement proper accessibility** with semantic HTML

## Future Enhancements

1. **Dark mode support** with theme switching
2. **Component library** with pre-built components
3. **Storybook integration** for component documentation
4. **Automated testing** for visual consistency
5. **CSS variables** for dynamic theming
6. **Animation library** with predefined animations
7. **Icon system** with consistent sizing and colors
8. **Layout system** with grid and flex utilities

## Contributing

1. **Follow the existing patterns** in the design system
2. **Use consistent naming conventions**
3. **Document new features** in this file
4. **Test thoroughly** before making changes
5. **Get feedback** from the team on design decisions
6. **Keep the design system** DRY (Don't Repeat Yourself)

## Troubleshooting

### Common Issues

1. **Styling not applying**: Check if the design system is properly imported
2. **TypeScript errors**: Ensure proper typing for style objects
3. **Performance issues**: Use memoization for expensive style calculations
4. **Browser compatibility**: Test across different browsers and devices

### Debugging Tips

1. Use browser dev tools to inspect styles
2. Check for CSS specificity conflicts
3. Verify that design tokens are being applied correctly
4. Test with different screen sizes and devices

---

This design system will ensure that all components in the House of Games application maintain a consistent, professional appearance while being easy to maintain and update.