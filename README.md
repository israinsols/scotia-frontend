# SoctioBank

A modern and responsive banking website interface built with React, TypeScript and Vite. SoctioBank presents everyday banking products, helpful services and a simple sign-in experience in a clean, user-friendly layout.

Currently, two official plugins are available:



## Features

- Responsive banking homepage
- Hero carousel for featured offers
- Product and card showcase sections
- Quick access tasks for common banking actions
- Banking advice and security sections
- Interactive calculator modal
- Sign-in modal and dedicated sign-in page
- Hash-based navigation between home and sign-in views
- Reusable React components with Lucide icons

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Oxlint

## Getting Started

### Prerequisites

Make sure you have Node.js 18 or newer and npm installed.

### Installation

```bash
git clone https://github.com/your-username/soctiobank.git
cd soctiobank
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
src/
├── components/    # Reusable UI sections and modals
├── pages/         # Home and sign-in page views
├── App.tsx        # Application routing and page state
├── App.css        # Application styles
└── index.css      # Global styles
```

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The generated files will be placed in the `dist` directory and can be deployed to services such as GitHub Pages, Netlify or Vercel.

## License

This project is intended for educational and portfolio use.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
