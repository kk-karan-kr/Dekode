# Dekode Official Website

Welcome to the official repository for the Dekode website. This project is a premium, high-performance web application designed to showcase Dekode's expertise in digital transformation, infrastructure, and specialized industrial solutions.

## 🚀 Overview

The Dekode website is built with a focus on immersive user experience, featuring interactive 3D visualizations, smooth motion design, and a highly responsive architecture. It serves as the primary digital touchpoint for clients across sectors such as Food Manufacturing, Primary Education, and Bridge Infrastructure.

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with modern utility patterns
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Routing**: [React Router v6](https://reactrouter.com/)

---

## 📂 Project Structure

The project follows a modular architecture designed for scalability and maintainability:

### `src/pages/`
Contains the primary route components. Each page represents a core section of the website:
- **Home**: The landing experience featuring the brand's value proposition.
- **Bridge**: Specialized section for infrastructure and engineering solutions.
- **Services**: Detailed breakdown of Dekode's offerings.
- **Case Studies**: In-depth looks at specific projects like `FoodManufacture` and `PrimarySchool`.
- **Contact**: Integrated lead generation and communication hub.

### `src/components/`
Modular UI elements used across different pages:
- **Global**: `Header.jsx`, `Footer.jsx` for consistent navigation.
- **Sections**: `HeroSection.jsx`, `PortfolioShowcase.jsx`, and `ServicesGrid.jsx` which form the building blocks of the page layouts.
- **Interactive**: `DeliveryFlow.jsx` and `AnimatedOutcomes.jsx` for data-driven storytelling.

### `src/components/ui/`
Reusable, low-level visual components including:
- **World Map**: Interactive Three.js/Globe visualization for global presence.
- **Aurora Background**: High-end decorative background effects.

### `src/lib/`
Utility functions and configuration helpers, including CSS merging logic and mathematical utilities for the 3D components.

### `src/data/`
Centralized content management. This directory stores the textual and structural data that populates the services, projects, and site-wide configurations.

---

## ⚙️ Development

### Getting Started

To run the project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vansshparikh-arch/Dekode
   cd Dekode
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

### Deployment

The project is configured for automated deployment via GitHub Pages. To deploy the latest version:
```bash
npm run deploy
```

---

## 🌐 Brand Identity

This repository is the source of truth for the Dekode web presence. Every component is crafted to reflect Dekode's commitment to precision, innovation, and aesthetic excellence.
