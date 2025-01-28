# Getting Started Guide 🚀

This guide will walk you through setting up your community website step by step. No coding experience required!

## Prerequisites

You'll need to install these tools first (don't worry, it's easy!):

1. **Node.js** - This helps run your website locally
   - Go to [Node.js website](https://nodejs.org)
   - Download the "LTS" version (LTS means Long Term Support)
   - Run the installer you downloaded
   - To verify installation, open your terminal/command prompt and type:
     ```bash
     node --version
     ```
   - If you see a number like `v18.17.0`, you're good to go!

2. **Visual Studio Code** - This helps you edit the website content
   - Download from [Visual Studio Code website](https://code.visualstudio.com)
   - Install it on your computer
   - It's free and super helpful for editing your website!

## Setting Up Your Website

### Step 1: Get the Template Files

1. Go to the template repository (where you're reading this)
2. Click the green "Code" button
3. Click "Download ZIP"
4. Unzip the file to a folder on your computer

### Step 2: Open the Project

1. Open Visual Studio Code
2. Go to File → Open Folder
3. Select the folder you just unzipped
4. If asked "Do you trust the authors?", click "Yes"

### Step 3: Install Dependencies

1. In Visual Studio Code, click View → Terminal
2. In the terminal that appears, type:
   ```bash
   npm install
   ```
3. Wait for it to finish (this might take a few minutes)

### Step 4: Start Your Website

1. In the same terminal, type:
   ```bash
   npm run dev
   ```
2. Open your web browser
3. Go to `http://localhost:3000`
4. You should see your website running!

## Making It Your Own

### Changing Text

1. In VS Code, look at the left sidebar
2. Open the `src/components/sections` folder
3. Click on any file to edit its contents
4. Common files to edit:
   - `Hero.tsx` - Main headline and intro
   - `Features.tsx` - Your features/benefits
   - `FAQ.tsx` - Common questions
   - `Footer.tsx` - Contact information

### Changing Colors

1. Open `src/app/globals.css`
2. Look for the `:root` section
3. Change color values to match your brand
4. Save the file - changes appear instantly!

### Adding Images

1. Put your images in the `public` folder
2. Reference them in components like:
   ```html
   <img src="/your-image.jpg" alt="Description" />
   ```

## Need Help?

- 🤔 Check our [FAQ](./FAQ.md)
- 🐛 Found a problem? Open an "Issue" on GitHub
- 💡 Want to suggest something? Create a "Discussion"

Remember: There's no such thing as a stupid question. We're here to help! 