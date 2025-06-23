# Rapunzel Unravel

A modern React application with Vite, designed for high performance and maintainability.

## Project Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
npm install
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality using ESLint:

```bash
npm run lint
```

---

## Project Structure

```
public/                # Static assets and sample data
  sampleData/
    sampleData.json
src/
  api/                 # API utilities (e.g., fetchRoomData.jsx)
  assets/              # Static assets (e.g., images, SVGs)
  components/          # React components
    common/            # Shared/common components
      Loading/         # Loading spinner and styles
      Variants/        # UI variants
    Layout/            # Layout and navigation
    Room/              # Room-related UI
    RoomsContainer/    # Container for room lists
  context/             # React context (currently empty)
  App.jsx              # Main app component
  main.jsx             # Entry point
  App.css, index.css   # Global styles
eslint.config.js       # ESLint configuration
vite.config.js         # Vite configuration
index.html             # HTML template
```

---

## Architecture

- **React 19**: Functional components and hooks for state management and side effects.
- **Component-based**: UI is split into reusable, isolated components for maintainability.
- **Vite**: Fast development server and optimized production builds.
- **ESLint**: Enforces code quality and consistency.
- **Public/sampleData**: Used for local development and testing with mock data.

---

## Performance Optimization Strategies

- **Vite**: Ultra-fast hot module replacement and optimized builds.
- **Code Splitting**: Vite and React automatically split code for faster load times.
- **Component Memoization**: Use of `React.memo` and hooks to prevent unnecessary re-renders (apply as needed).
- **Static Assets**: Served from the `public` directory for efficient caching.
- **Efficient Data Fetching**: API utilities are separated for easier optimization and caching.
- **CSS Optimization**: Scoped and modular CSS to reduce style recalculation and improve maintainability.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---
