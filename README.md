# Voltcraft 3D Printing Services

A modern web application for Voltcraft's 3D printing quote and order system. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Instant Quote Generator**: Upload STL/OBJ/3MF files and get instant price estimates
- **STL File Parser**: Client-side analysis of 3D models (volume, dimensions, triangle count)
- **Material Selection**: Multiple filament options with property comparisons
- **Customizable Print Settings**: Layer height, infill density, support structures
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Sleek dark theme with smooth animations

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **File Handling**: React Dropzone

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd voltcraft-3d
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
voltcraft-3d/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── FileUpload.tsx
│   │   ├── MaterialSelector.tsx
│   │   ├── PrintSettingsForm.tsx
│   │   ├── QuoteSummary.tsx
│   │   └── OrderForm.tsx
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── QuotePage.tsx
│   │   ├── MaterialsPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/             # Static data
│   │   └── materials.ts  # Material configurations
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   ├── stlParser.ts  # STL file parsing
│   │   └── quoteCalculator.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── favicon.svg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Material Pricing

| Material | Price per gram | Best for |
|----------|---------------|----------|
| PLA | ₦15 | Prototypes, decorative items |
| PLA+ | ₦18 | Functional prototypes |
| PETG | ₦20 | Functional parts, food-safe items |
| ABS | ₦18 | Heat-resistant parts |
| TPU | ₦25 | Flexible parts, phone cases |
| PA-CF | ₦45 | Engineering parts, drones |

## Print Settings

- **Layer Height**: 0.08mm - 0.28mm
- **Infill**: 5% - 100%
- **Support**: Optional (adds ~15% material)

## Customization

### Updating Material Prices

Edit `src/data/materials.ts` to update prices or add new materials.

### Changing Quote Calculations

Modify `src/utils/quoteCalculator.ts` to adjust pricing formulas.

### Styling

The design uses Tailwind CSS with custom colors defined in `tailwind.config.js`.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This site can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Future Enhancements

- [ ] 3D model preview using Three.js
- [ ] User accounts and order history
- [ ] Payment integration
- [ ] Admin dashboard for order management
- [ ] Email notifications
- [ ] Real-time order tracking

## License

© 2024 Voltcraft. All rights reserved.

## Contact

- Website: [voltcraft.org.ng](https://voltcraft.org.ng)
- Email: info@voltcraft.org.ng
