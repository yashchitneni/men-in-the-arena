# Customization Guide 🎨

Make this template your own with our easy-to-follow customization guide. No coding experience needed!

## Quick Customizations 🚀

### Changing Text Content

1. **Hero Section** (`src/components/sections/Hero.tsx`)
   ```jsx
   // Find this text
   <h1>Welcome to Our Community</h1>
   // Change it to your text
   <h1>Welcome to [Your Community Name]</h1>
   ```

2. **Features** (`src/components/sections/Features.tsx`)
   - Look for the `features` array
   - Change titles and descriptions
   - Icons can be changed using [Lucide Icons](https://lucide.dev)

3. **Statistics** (`src/components/sections/Statistics.tsx`)
   - Find the `stats` array
   - Update numbers and labels

4. **FAQ** (`src/components/sections/FAQ.tsx`)
   - Locate the `faqs` array
   - Add/remove/modify questions and answers

### Changing Colors 🌈

Open `src/app/globals.css`:

```css
:root {
  /* Change these values for light mode */
  --primary: 222.2 47.4% 11.2%;    /* Main color */
  --secondary: 210 40% 96.1%;      /* Secondary color */
  --accent: 210 40% 96.1%;         /* Accent color */
}

.dark {
  /* Change these values for dark mode */
  /* Similar structure as above */
}
```

### Adding Your Logo 🖼️

1. Add your logo to `public/images/`
2. Update the logo in `src/components/sections/Hero.tsx`:
   ```jsx
   <Image
     src="/images/your-logo.png"
     alt="Your Company"
     width={150}
     height={50}
   />
   ```

## Intermediate Customizations 🛠️

### Custom Fonts

1. Choose a font from [Google Fonts](https://fonts.google.com)
2. In `src/app/layout.tsx`:
   ```typescript
   import { Roboto } from 'next/font/google' // Change font

   const roboto = Roboto({
     subsets: ['latin'],
     weight: ['400', '700']
   })
   ```

### Adding New Sections

1. Create new file in `src/components/sections/`
2. Copy structure from existing section
3. Add to `src/app/page.tsx`

### Custom Animations

Use Framer Motion to add animations:

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

## Advanced Customizations 🔧

### Custom Theme

Modify `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      // Add custom values
      spacing: {
        '128': '32rem',
      },
      // Custom breakpoints
      screens: {
        '3xl': '1600px',
      },
    },
  },
}
```

### Adding Analytics

```typescript
// In src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Custom Components

Create reusable components in `src/components/ui/`:

```typescript
// src/components/ui/Card.tsx
export const Card = ({ title, children }) => (
  <div className="p-6 bg-card rounded-lg shadow-lg">
    <h3 className="text-xl font-bold">{title}</h3>
    {children}
  </div>
)
```

## Best Practices 🌟

1. **Images**
   - Optimize before adding
   - Use next/image component
   - Provide alt text

2. **Performance**
   - Compress images
   - Lazy load content
   - Use proper image formats

3. **Accessibility**
   - Use semantic HTML
   - Provide alt text
   - Maintain color contrast

4. **Mobile First**
   - Test on multiple devices
   - Use responsive classes
   - Check touch targets

## Need More Help? 🤝

- 📖 Check our [FAQ](./FAQ.md)
- 💡 Join our Discord community
- 🐛 Open an issue on GitHub

Remember: Take it step by step, and don't hesitate to ask for help! 