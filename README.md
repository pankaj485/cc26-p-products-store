# FreeAPI Product Store

A responsive product catalog web app built with React 19 and TypeScript. It fetches paginated product data from the [FreeAPI.app](https://freeapi.app) public products endpoint and displays them as browsable cards with pagination.

## Features

- Paginated product listing (10 products per page)
- Product cards with thumbnail, discount badge, category, brand, rating, price, and stock status
- Responsive grid layout (1 → 2 → 3 columns)
- Sticky header showing total product count
- Loading and error states

## Tech Stack

| Layer | Library/Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Optimization | React Compiler (Babel preset) |
| Package manager | pnpm |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

```bash
pnpm build    # type-check + production build
pnpm preview  # serve the production build locally
pnpm lint     # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Sticky header with product count
│   └── Product.tsx     # Product card
├── App.tsx             # Root component — data fetching, state, layout
├── types.d.ts          # TypeScript types (Product, ProductsData, ApiResponse)
├── main.tsx            # React entry point
└── index.css           # Tailwind import
```

## API

Data is fetched from the FreeAPI.app public endpoint:

```
GET https://api.freeapi.app/api/v1/public/randomproducts?page={page}&limit=10
```

No API key is required.
