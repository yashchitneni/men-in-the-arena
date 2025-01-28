# Frequently Asked Questions ❓

## General Questions

### Q: Do I need to know how to code to use this template?
**A:** Not at all! We've designed this template to be easily customizable without coding knowledge. You can change text, images, and colors using simple edits.

### Q: Is this template free to use?
**A:** Yes! This template is completely free for both personal and commercial use. You can use it for your community, organization, or any other purpose.

### Q: Can I remove the "Made with ❤️" credit in the footer?
**A:** Yes, you can! While we appreciate attribution, it's not required.

## Setup Questions

### Q: I'm getting an error when installing dependencies
**A:** Try these steps:
1. Make sure you have Node.js installed (version 14 or higher)
2. Delete the `node_modules` folder and `package-lock.json` file
3. Run `npm install` again
4. If problems persist, check our [troubleshooting guide](./TROUBLESHOOTING.md)

### Q: The website isn't showing up when I run `npm run dev`
**A:** Check that:
1. You're using the correct URL (`http://localhost:3000`)
2. No other application is using port 3000
3. All dependencies are installed
4. You're in the correct folder in the terminal

## Customization Questions

### Q: How do I change the main colors?
**A:** Open `src/app/globals.css` and look for the `:root` section. Here you can change color values. We use HSL colors, but you can use a color picker tool to find the values you want.

### Q: Can I add more sections to the page?
**A:** Yes! Copy an existing section component from `src/components/sections`, rename it, and add it to the main page in `src/app/page.tsx`.

### Q: How do I change the fonts?
**A:** We use the Inter font by default. To change it:
1. Open `src/app/layout.tsx`
2. Find the `Inter` import
3. Replace it with your chosen font from Google Fonts

### Q: Can I use my own images?
**A:** Absolutely! Just:
1. Add your images to the `public` folder
2. Update the image paths in the components
3. Make sure to optimize your images for web use

## Deployment Questions

### Q: How do I put my website online?
**A:** We recommend using Vercel:
1. Create a [Vercel account](https://vercel.com)
2. Connect your GitHub repository
3. Click "Import Project"
4. Follow the deployment steps

### Q: Can I use a custom domain?
**A:** Yes! After deploying:
1. Buy a domain from a provider (like GoDaddy, Namecheap, etc.)
2. Add it to your deployment platform
3. Follow their DNS configuration instructions

## Technical Questions

### Q: What technologies does this template use?
**A:** We use:
- Next.js 14 (React Framework)
- TailwindCSS (Styling)
- TypeScript (Type Safety)
- Framer Motion (Animations)

### Q: Can I add a blog/news section?
**A:** Yes! You can:
1. Use Next.js built-in blog functionality
2. Add MDX for content management
3. Or integrate a CMS like Contentful

## Still Have Questions?

- 🐛 Open an issue on GitHub

Remember: The only bad question is the one you don't ask! We're here to help you succeed with your website. 