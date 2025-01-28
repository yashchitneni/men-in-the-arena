# Images Directory Structure 📸

This directory contains all the images used in your website. Each subdirectory has a specific purpose:

## Directory Structure

```
images/
├── logos/         # Your company/community logos
├── avatars/       # Team member or testimonial profile pictures
├── features/      # Images for feature sections
├── hero/          # Hero section background and images
└── screenshots/   # Screenshots of your website/app
```

## Usage Guidelines 📝

### 1. Logos
- Place your main logo here
- Recommended formats: SVG (preferred), PNG with transparency
- Example: `logo-light.svg`, `logo-dark.svg`

### 2. Avatars
- Profile pictures for team members or testimonials
- Recommended size: 400x400px
- Use consistent aspect ratio (1:1)
- Example: `john-doe.jpg`, `jane-smith.jpg`

### 3. Features
- Images illustrating your features/benefits
- Keep file sizes optimized
- Use descriptive names
- Example: `collaboration.png`, `analytics.png`

### 4. Hero
- Main banner images
- High-quality but optimized
- Consider mobile viewing
- Example: `hero-bg.jpg`, `hero-illustration.svg`

### 5. Screenshots
- Product/website screenshots
- Different device sizes (mobile, tablet, desktop)
- Example: `dashboard-mobile.png`, `dashboard-desktop.png`

## Best Practices ✨

1. **File Names**
   - Use lowercase letters
   - Use hyphens instead of spaces
   - Be descriptive: `team-meeting.jpg` vs `img1.jpg`

2. **Optimization**
   - Compress images before adding
   - Use appropriate formats:
     - Photos: JPG/WEBP
     - Graphics: PNG/SVG
     - Logos: SVG preferred

3. **Dimensions**
   - Logos: At least 200px height
   - Avatars: 400x400px
   - Hero images: 1920x1080px max
   - Feature images: 800x600px recommended

4. **File Size Guidelines**
   - Hero images: < 200KB
   - Regular images: < 100KB
   - Logos/icons: < 50KB

## Using Images in Components

```jsx
// Example usage in components
import Image from 'next/image'

// For logos
<Image
  src="/images/logos/logo-main.svg"
  alt="Company Name"
  width={150}
  height={50}
/>

// For avatars
<Image
  src="/images/avatars/john-doe.jpg"
  alt="John Doe"
  width={64}
  height={64}
  className="rounded-full"
/>

// For features
<Image
  src="/images/features/collaboration.png"
  alt="Team Collaboration"
  width={400}
  height={300}
/>
```

## Need Help? 🤝

- Use Cursor AI (Cmd/Ctrl + K) for image optimization tips
- Check our [Customization Guide](../docs/CUSTOMIZATION.md)
- Open an issue if you have questions 