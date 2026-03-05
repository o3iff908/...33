#!/bin/bash

# Create placeholder images using ImageMagick if available, otherwise create simple colored rectangles
# For hero background
convert -size 1920x1080 gradient:#002346-#1f4e79 hero.jpg 2>/dev/null || echo "ImageMagick not available"

# For about images
convert -size 800x600 xc:#1f4e79 about1.jpg 2>/dev/null
convert -size 600x400 xc:#37d67a about2.jpg 2>/dev/null

# For service images
for i in {1..5}; do
  convert -size 600x400 xc:#$(printf '%02x%02x%02x' $((31+i*20)) $((78+i*10)) $((121-i*10))) service$i.jpg 2>/dev/null
done

# For gallery images
for i in {1..5}; do
  convert -size 800x600 xc:#$(printf '%02x%02x%02x' $((100+i*20)) $((100+i*15)) $((150-i*10))) g$i.jpg 2>/dev/null
done

# For services background
convert -size 1920x1080 gradient:#1f4e79-#002346 services-bg.jpg 2>/dev/null

echo "Placeholder images created (if ImageMagick available)"
