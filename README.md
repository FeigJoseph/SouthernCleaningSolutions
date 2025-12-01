# Southern Cleaning Solutions

A modern, professional website for Southern Cleaning Solutions - providing expert window, glass, and exterior cleaning services across Palm Beach and Broward County, Florida.

## Features

- **Service Showcase**: Display of all cleaning services including window cleaning, glass door cleaning, hard water stain removal, and gutter cleaning
- **Flexible Service Packages**: Annual, bi-annual, quarterly, bi-monthly, and monthly service plans with discounts
- **Free Estimates**: Same-day estimate availability
- **Contact Form**: Message board for customers to submit inquiries
- **Google Reviews Integration**: Link to leave reviews
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **React + TypeScript**: Built with modern web technologies
- **Vite**: Fast development and production builds

## Website Information

- **Phone**: (954) 995-0455
- **Email**: southerncleaningsolutions.fl@gmail.com
- **Service Areas**: Palm Beach County, Broward County
- **Experience**: 10+ years in the industry
- **Website**: southerncleaningsolutions.fl.com

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- A code editor (like [VS Code](https://code.visualstudio.com/))

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/FeigJoseph/SouthernCleaningSolutions
   cd SouthernCleaningSolutions
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Development

- The development server supports hot reloading - any changes you make will be reflected immediately in the browser
- To stop the development server, press `Ctrl + C` in the terminal

## Building for Production

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Deploying to GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

   This will push the `dist` folder to the `gh-pages` branch, making your site available at `https://FeigJoseph.github.io/SouthernCleaningSolutions`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation header with links
│   ├── Hero.tsx            # Landing hero section
│   ├── Services.tsx        # Service offerings
│   ├── Packages.tsx        # Service package plans
│   ├── About.tsx           # Company information
│   ├── MessageBoard.tsx    # Contact form for inquiries
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer with links and info
│   ├── ScrollToTop.tsx     # Scroll to top button
│   ├── CTA.tsx             # Call-to-action section
│   └── Navigation.tsx      # Smooth scroll navigation
├── assets/                 # Images and assets
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
└── index.css               # Global styles
```

## Customization

### Company Information

To update company details, edit:

- `src/components/Navbar.tsx` - Phone number and navigation
- `src/components/Hero.tsx` - Hero headline and description
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer content

### Services

Edit `src/components/Services.tsx` to add or modify service offerings.

### Packages

Edit `src/components/Packages.tsx` to adjust service packages and discounts.

### Branding Colors

The site uses a blue/cyan color scheme. To change:

- Update color values in component `className` attributes
- Primary: `blue-*`, Secondary: `cyan-*`

## Need Help?

If you encounter any issues:

1. Make sure all dependencies are installed correctly: `npm install`
2. Check that you're using Node.js version 16 or higher
3. Try deleting the `node_modules` folder and running `npm install` again
4. Clear your browser cache if changes don't appear

## License

This project is private and confidential.
