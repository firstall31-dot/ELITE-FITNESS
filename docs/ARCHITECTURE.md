# Architecture Overview

## Project Structure

### Components

#### Header Component (`src/app/components/header/`)
- Responsive navigation header
- Mobile menu toggle
- Logo and branding
- Navigation links

#### Footer Component (`src/app/components/footer/`)
- Footer information
- Links and social media
- Copyright information

#### Hero Component (`src/app/components/hero/`)
- Landing page hero section
- Call-to-action buttons
- Background animations

#### Services Preview Component (`src/app/components/services-preview/`)
- Overview of available services
- Service cards with descriptions

#### About Preview Component (`src/app/components/about-preview/`)
- About section preview
- Team information

#### Testimonials Component (`src/app/components/testimonials/`)
- Client testimonials carousel
- Rating display
- Navigation controls

#### Stats Component (`src/app/components/stats/`)
- Key statistics display
- Animated counters

#### CTA Section Component (`src/app/components/cta-section/`)
- Call-to-action section
- Conversion optimization

### Pages

#### Home Page (`src/app/pages/home/`)
- Landing page
- Combines multiple components
- Scroll animations

#### Services Page (`src/app/pages/services/`)
- Detailed service listings
- Pricing comparison table
- FAQ section

#### About Page (`src/app/pages/about/`)
- Company information
- Team profiles
- Mission and values

#### Contact Page (`src/app/pages/contact/`)
- Contact form
- Contact information
- Map integration

## Routing

Routes are defined in `src/app/app.routes.ts`:
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Custom configuration in `tailwind.config.js`
- Global styles in `src/styles.scss`

### Custom Styles
- SCSS variables and mixins
- Component-scoped styles
- Responsive design utilities

## State Management

- Angular signals for reactive state
- Component-level state management
- No external state management library needed

## Build Process

### Development Build
- Source maps enabled
- Unminified code
- Fast rebuild times

### Production Build
- Code minification
- Tree-shaking
- Lazy-loaded routes
- Optimized bundle size

## Performance Optimizations

1. **Code Splitting** - Lazy-loaded routes
2. **Tree-shaking** - Unused code removal
3. **Minification** - CSS and JavaScript compression
4. **Lazy Loading** - Components loaded on demand
5. **Change Detection** - OnPush strategy where applicable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## SEO

- Meta tags in index.html
- Open Graph tags
- Twitter card tags
- Structured data ready
