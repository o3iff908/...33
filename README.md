# EPC Solutions Website

A modern, responsive website for EPC Solutions built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Interactive Elements**: Scroll animations, hover effects, and smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Sections**:
  - Hero section with navigation
  - About Us section with image placeholders
  - Services section with 5 service cards
  - How We Work section with 6 process steps
  - Project gallery with custom grid layout
  - Partners section
  - Footer with contact information

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- JavaScript (ES6+)
- Google Fonts (Poppins)

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # Interactive functionality
├── assets/
│   └── icons/          # SVG icons for "How We Work" section
└── uploads/
    └── image.png       # Design reference image
```

## Features Implemented

### CSS Features
- CSS Grid and Flexbox layouts
- Gradient backgrounds (no image dependencies)
- Smooth transitions and hover effects
- Responsive breakpoints for mobile, tablet, and desktop
- Custom placeholder images using CSS gradients
- Glassmorphism effects on partner cards

### JavaScript Features
- Mobile menu toggle
- Smooth scroll navigation
- Intersection Observer for scroll animations
- Dynamic navbar background on scroll
- Staggered animations for service cards and work steps

## Color Scheme

- Primary Blue: `#1f4e79`
- Dark Blue: `#002346`
- Accent Green: `#37d67a`
- Light variations for gradients

## Responsive Breakpoints

- Desktop: > 1000px
- Tablet: 600px - 1000px
- Mobile: < 600px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Setup

Simply open `index.html` in a web browser. No build process required.

## Customization

To customize the design:
1. Update colors in `style.css` (search for color hex codes)
2. Modify content in `index.html`
3. Adjust animations in `script.js`

## Performance

- No external image dependencies (uses CSS gradients)
- Minimal JavaScript for optimal performance
- Lazy loading animations with Intersection Observer
- Optimized CSS with minimal redundancy
