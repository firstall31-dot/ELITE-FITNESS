# Setup Guide

## Prerequisites

- Node.js 18.x or higher
- pnpm 10.x or higher

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git
cd ELITE-FITNESS
```

2. **Install dependencies:**
```bash
pnpm install
```

## Development

### Start the development server:
```bash
pnpm start
```

The app will be available at `http://localhost:4200/`

### Build for production:
```bash
pnpm run build
```

The production build will be in the `dist/fitness-coaching` folder.

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── app.component.ts    # Root component
│   └── app.routes.ts       # Route configuration
├── assets/                 # Static assets
├── styles.scss            # Global styles
├── main.ts                # Application entry point
└── index.html             # HTML template
```

## Technologies Used

- **Angular 18** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Utility-first CSS framework
- **Taiga UI** - Component library
- **RxJS** - Reactive programming library
- **pnpm** - Package manager

## Features

- ✅ Responsive design
- ✅ Modern Angular 18 with standalone components
- ✅ Tailwind CSS styling
- ✅ Lazy-loaded routes
- ✅ SEO optimized
- ✅ Production-ready build

## Deployment

### Vercel
The app is configured for automatic deployment to Vercel. Push to the main branch and Vercel will automatically build and deploy.

### Manual Deployment
1. Build the app: `pnpm run build`
2. Deploy the `dist/fitness-coaching` folder to your hosting service

## Troubleshooting

### Port 4200 already in use
```bash
ng serve --port 4300
```

### Clear cache
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Support

For issues and questions, please open an issue on GitHub.
