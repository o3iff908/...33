const fs = require('fs');
const path = require('path');

// Create placeholder SVG images
function createPlaceholderSVG(width, height, text, gradient1 = '#4a90e2', gradient2 = '#357abd') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradient1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradient2};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad)"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Create all needed placeholder images
const images = [
  { name: 'hero.jpg', width: 1920, height: 1080, text: 'Hero Background', g1: '#1f4e79', g2: '#2d6a9f' },
  { name: 'about1.jpg', width: 800, height: 600, text: 'Team Engineers', g1: '#e0e0e0', g2: '#f5f5f5' },
  { name: 'about2.jpg', width: 600, height: 400, text: 'Project Planning', g1: '#d0d0d0', g2: '#e8e8e8' },
  { name: 'services-bg.jpg', width: 1920, height: 1080, text: 'Services', g1: '#0d2d4a', g2: '#1f4e79' },
  { name: 'service1.jpg', width: 800, height: 500, text: 'Renewable Energy', g1: '#4CAF50', g2: '#45a049' },
  { name: 'service2.jpg', width: 800, height: 500, text: 'Project Services', g1: '#2196F3', g2: '#1976D2' },
  { name: 'service3.jpg', width: 800, height: 500, text: 'Filtration Services', g1: '#FF9800', g2: '#F57C00' },
  { name: 'service4.jpg', width: 800, height: 500, text: 'Terminal Services', g1: '#9C27B0', g2: '#7B1FA2' },
  { name: 'service5.jpg', width: 800, height: 500, text: 'Agency Services', g1: '#607D8B', g2: '#455A64' },
  { name: 'g1.jpg', width: 600, height: 600, text: 'Gallery 1', g1: '#34495e', g2: '#2c3e50' },
  { name: 'g2.jpg', width: 600, height: 400, text: 'Gallery 2', g1: '#16a085', g2: '#1abc9c' },
  { name: 'g3.jpg', width: 600, height: 400, text: 'Gallery 3', g1: '#2980b9', g2: '#3498db' },
  { name: 'g4.jpg', width: 600, height: 400, text: 'Gallery 4', g1: '#8e44ad', g2: '#9b59b6' },
  { name: 'g5.jpg', width: 1200, height: 400, text: 'Gallery 5', g1: '#c0392b', g2: '#e74c3c' },
];

images.forEach(img => {
  const svg = createPlaceholderSVG(img.width, img.height, img.text, img.g1, img.g2);
  fs.writeFileSync(path.join(__dirname, img.name), svg);
});

// Create icon placeholders
const icons = [
  'design', 'strategy', 'location', 'vendor', 'materials', 'risk'
];

icons.forEach((icon, index) => {
  const colors = ['#1f4e79', '#37d67a', '#ff9800', '#e74c3c', '#9b59b6', '#3498db'];
  const iconSVG = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="${colors[index % colors.length]}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle">✓</text>
  </svg>`;
  
  fs.mkdirSync(path.join(__dirname, 'assets', 'icons'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'assets', 'icons', `${icon}.png`), iconSVG);
});

// Create partner images
fs.mkdirSync(path.join(__dirname, 'assets', 'images'), { recursive: true });

const partnerBg = createPlaceholderSVG(800, 600, 'Partners', '#1f4e79', '#2d6a9f');
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'partners-bg.jpg'), partnerBg);

const logoSVG = `<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="80" fill="#ffffff" rx="5"/>
  <text x="50%" y="50%" font-family="Arial" font-size="18" fill="#1f4e79" text-anchor="middle" dominant-baseline="middle" font-weight="bold">MONOBUOY</text>
</svg>`;
fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'monobuoy-logo.png'), logoSVG);

console.log('✓ All placeholder images created successfully!');
