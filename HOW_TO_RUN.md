# How to Run This Project

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## All Available Commands

```bash
# Development
npm run dev              # Start dev server on port 3000

# Production
npm run build            # Build for production
npm start                # Start production server

# Type Checking
npm run type-check       # Check TypeScript types
```

## Important Notes

- ✅ Use `npm` commands (NOT yarn)
- ✅ Project runs on TypeScript
- ✅ Dev server runs on `http://localhost:3000`

## Troubleshooting

### If you see "intrinsics" warnings
These are just warnings from React types and won't affect the app. The project will still run fine.

### If port 3000 is busy
Stop any other processes using port 3000 or change the port in package.json

### If you see yarn.lock appear
Delete it immediately:
```bash
rm yarn.lock
npm install
```

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
- `lib/` - Utility functions
- `hooks/` - Custom React hooks
- `types/` - TypeScript type definitions
