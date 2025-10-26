# SweetMedPharmacy - Online Pharmacy Website

## Overview
SweetMedPharmacy is a responsive single-page pharmacy website built with Next.js 16 and Tailwind CSS v4. The site showcases pharmaceutical products with integrated WhatsApp ordering functionality.

## Purpose
This MVP website serves as an online presence for SweetMedPharmacy, allowing customers to browse products and place orders directly via WhatsApp.

## Recent Changes
- **October 26, 2025**: App Router Migration
  - Migrated from Next.js Pages Router to App Router architecture
  - Created new app/ directory with layout.js and page.js
  - Added 'use client' directives to components using hooks and state
  - Moved metadata configuration to app/layout.js
  - Removed pages/ directory after successful migration
  - Verified all functionality remains intact with improved structure

- **October 26, 2025**: Shopping Cart Feature & Hero Section Redesign
  - Redesigned hero section with beautiful gradient (purple → pink → orange) and decorative elements
  - Implemented full shopping cart functionality with React Context API
  - Added cart icon in navbar with item count badge
  - Created cart drawer/modal with add, remove, update quantity, and clear features
  - Integrated WhatsApp bulk ordering - sends all cart items in one message
  - Added localStorage persistence for cart items
  - Updated product cards with "Add to Cart" buttons
  
- **October 25, 2025**: Initial project setup and full MVP implementation
  - Created Next.js project with Tailwind CSS v4
  - Implemented responsive layout with Navbar, Hero, Products, About, Contact, and Footer sections
  - Integrated WhatsApp ordering for 8 pharmaceutical products
  - Applied soft green/white color palette throughout
  - Configured deployment-ready setup for Replit

## Project Architecture

### Technology Stack
- **Framework**: Next.js 16.0.0 with React 19.2.0
- **Styling**: Tailwind CSS v4.1.16 with @tailwindcss/postcss
- **Icons**: React Icons 5.5.0
- **Package Manager**: npm with Node.js 20

### Project Structure
```
/
├── app/                  # Next.js App Router directory
│   ├── layout.js         # Root layout with CartProvider and metadata
│   └── page.js           # Homepage with all sections (client component)
├── components/
│   ├── Layout.js         # Reusable layout with Navbar, Footer, and Cart icon (client component)
│   └── Cart.js           # Shopping cart drawer/modal component (client component)
├── context/
│   └── CartContext.js    # Cart state management with React Context (client component)
├── styles/
│   └── globals.css       # Global styles with Tailwind v4 imports
├── postcss.config.js     # PostCSS configuration for Tailwind
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

### Key Features
1. **Responsive Navigation**: Sticky navbar with smooth scroll to sections and cart icon with badge
2. **Hero Section**: Beautiful multi-color gradient (purple → pink → orange) with decorative circles
3. **Shopping Cart System**: 
   - Add products to cart from product cards
   - Cart drawer shows all selected items
   - Adjust quantities with +/- buttons
   - Remove individual items or clear entire cart
   - Cart persists in localStorage
   - Cart icon badge shows total item count
4. **Product Grid**: 8 pharmacy products with images, prices (Naira), and "Add to Cart" buttons
5. **WhatsApp Bulk Ordering**: Order all cart items via one WhatsApp message
6. **About Section**: Three feature cards (Quality, Delivery, Expert Guidance)
7. **Contact Section**: Address, phone, hours, and embedded Google Maps
8. **Footer**: Site links and contact information

### WhatsApp Integration
The shopping cart includes a "Order via WhatsApp" button that:
- Opens WhatsApp with a pre-filled message containing all cart items
- Phone Number: +234 801 234 5678
- Message Format: Lists all products with quantities and prices
- Example: "Hi! I would like to order the following items: 1. Magnesium Glycinate 500mg x2 - ₦4,500..."

### Color Scheme
- Primary Green: #10B981 (pharmacy-green)
- Light Green: #34D399 (pharmacy-green-light)
- Dark Green: #059669 (pharmacy-green-dark)
- Background: White (#FFFFFF) and Light Gray (#F9FAFB)

## Configuration Notes

### Tailwind CSS v4
This project uses Tailwind CSS v4 which has a different setup than v3:
- PostCSS plugin: `@tailwindcss/postcss` (not `tailwindcss`)
- CSS import: `@import "tailwindcss";` (not `@tailwind` directives)
- Theme configuration: Defined in CSS using `@theme` directive
- Content detection: Automatic (respects .gitignore)

### Next.js Configuration
- Development server: Runs on port 5000 binding to 0.0.0.0
- Remote images: Configured for images.unsplash.com via remotePatterns
- React Strict Mode: Enabled

## Development Workflow

### Starting the Development Server
```bash
npm run dev
```
Server runs on http://localhost:5000

### Building for Production
```bash
npm run build
npm start
```

## Deployment
The project is configured for Replit deployment with:
- Development server binding to 0.0.0.0:5000
- Environment ready for instant preview
- Production-ready Next.js build process

## Future Enhancements
Potential features for future iterations:
- Product search and category filtering
- Shopping cart for bundling multiple products
- Individual product detail pages
- Customer testimonials section
- Email contact form with backend API
- Payment gateway integration
- Admin dashboard for product management

## Contact Information
- Business Phone: +234 801 234 5678
- Business Email: info@sweetmedpharmacy.com
- Location: 185 Jakpa Road Opp HQ filling Station, Warri, Nigeria

---
**Built**: October 25, 2025  
**Status**: MVP Complete and Ready for Deployment
