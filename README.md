# IgnitePulse

A modern multi-page ecommerce front-end built with **React + Vite**.

This project includes a polished landing experience, category pages, shop filtering, product detail flow, wishlist/cart/checkout state management, and FAQ support - all implemented with reusable React components.

## Live Demo

Production URL: **https://ignitepulse-zuraiz.netlify.app**

## Project Overview

IgnitePulse is designed as a clean, conversion-focused ecommerce UI with:

- Component-driven architecture
- Responsive design for desktop/tablet/mobile
- Route-based navigation with React Router
- Stateful shopping flow (wishlist, cart, checkout)
- Reusable section components for scalability

## Core Features

- Full landing page (Home = Landing)
- Shop page with working product filters
- Category pages: Fashion, Electronics, Home & Living
- Product detail page with:
  - quantity selector
  - add to cart
  - wishlist toggle
  - related products
- Wishlist page
- Cart page with quantity controls and order summary
- Checkout page with form and order confirmation state
- Blog page
- About page
- FAQs page + reusable FAQ section on Home

## UI/UX Highlights

- Premium-style hero sections and card-based layout
- Interactive hover states and micro transitions
- Sticky/glass-like navigation bar
- Clean section hierarchy and typography
- Mobile-friendly breakpoints and layout fallbacks

## Tech Stack

- **React 19**
- **Vite 7**
- **React Router DOM**
- **React Icons**
- **ESLint**

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build locally

```bash
npm run preview
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build in `dist/`
- `npm run lint` - run ESLint checks
- `npm run preview` - preview built app

## Project Structure

```text
src/
  components/
    common/
    home/
    category/
  context/
  data/
  pages/
  App.jsx
  App.css
  main.jsx
public/
  _redirects
  vite.svg
```

## Deployment

The app is deployed on **Netlify** and configured for SPA routing via `public/_redirects`.

## Author

**Muhammad Zuraiz Khan**

GitHub: https://github.com/zuraiz-01/ignitepulse
