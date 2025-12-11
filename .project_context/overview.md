# Project Context: Ted Ahn's AI/ML Portfolio

## 1. Project Overview
**Purpose**: This project is a personal portfolio website designed to showcase Ted Ahn's advanced Artificial Intelligence and Machine Learning projects completed during the UT Austin McCombs AI/ML program.
**Core Function**: It serves as a central hub where visitors can browse project summaries, understand the complexity/skills involved, and view the actual Jupyter Notebooks (converted to HTML) in a seamless, premium interface.
**Target Audience**: Recruiters, hiring managers, and industry peers looking to verify AI/ML expertise.

## 2. Business Goals & Design Philosophy
*   **Premium Aesthetic**: The UI must not look like a basic "bootcamp" project. It utilizes a "dark mode" aesthetic with vibrant gradients, glassmorphism, and smooth animations to convey high-end design sensibility.
*   **User Engagement**: 
    *   **Modal First**: Instead of sending users away immediately, projects open in a full-screen **Modal Overlay**. This keeps the user on the portfolio site while allowing them to deep-dive into the code.
    *   **Clear Navigation**: Browser history integration allows users to use the "Back" button to close modals, mimicking native app behavior.
*   **Professional Attribution**: Explicitly credits the UT Austin program while highlighting individual creativity and implementation skills.

## 3. Tech Stack
*   **Framework**: [React](https://react.dev/) (v18+) with [Vite](https://vitejs.dev/) for fast build and local development.
*   **Styling**: [TailwindCSS](https://tailwindcss.com/) (v3.4+) using a mobile-first, utility-class approach.
    *   **Font**: 'Inter' (Google Fonts) for clean, modern typography.
    *   **Icons**: Heroicons (SVG) and custom PNG assets.
*   **Hosting**: [GitHub Pages](https://pages.github.com/).
*   **CI/CD**: GitHub Actions for automated build and deployment.

## 4. Key Implementation Details
### A. Architecture
*   **Root Directory**: Contains the project notebooks and the `.github` workflow.
*   **`portfolio-ui/`**: The React application source code.
    *   `public/projects/`: Stores the raw HTML exports of Jupyter Notebooks.
    *   `src/projects.js`: The "database" file containing metadata (title, complexity, description, image path, filenames) for all projects.
    *   `src/components/`: Reusable UI components (`ProjectCard`, `ProjectModal`, `Header`).

### B. Critical Features
1.  **Project Modal**: 
    *   Uses an `iframe` to render the separate HTML notebook files.
    *   Implements `window.history.pushState` to manage browser history (Back button closes modal).
    *   Listens for `Escape` key for accessibility.
2.  **Asset Management**:
    *   **Thumbnails**: Located in `public/project_thumbnails/`.
    *   **Favicon**: Custom `brain_icon.png` in `public/icons/`.

### C. Deployment
*   **Workflow**: `.github/workflows/deploy.yml`
*   **Function**: 
    1.  Triggers on push to `main`.
    2.  Sets working directory to `./portfolio-ui`.
    3.  Installs dependencies (`npm ci`) and builds (`npm run build`).
    4.  Deploys the `dist` folder to GitHub Pages.
*   **Configuration**: `vite.config.js` sets `base: "/tedahn-aiml-project-notebooks/"` to ensure correct asset paths on GitHub Pages.

## 5. Development Workflows
### Local Development
To run the UI locally:
```bash
cd portfolio-ui
npm run dev
```
Access at `http://localhost:5173`.

### Adding New Projects
1.  **Export**: Save Jupyter Notebook as `.html`.
2.  **Move**: Place the `.html` file in `portfolio-ui/public/projects/`.
3.  **Image**: Generate/create a thumbnail and save to `portfolio-ui/public/project_thumbnails/`.
4.  **Register**: Add a new entry object to `portfolio-ui/src/projects.js` with specific ID, title, skills, and file paths.

## 6. Known Context for Future Agents
*   **Linting**: The project uses ESLint. Ensure code complies with React hooks rules.
*   **Fonts**: If the font reverts to system default, ensure the `font-sans` class is present on the `<body>` tag in `index.html`.
*   **Deployment**: **Do not** modify the `base` path in `vite.config.js` unless the repository name changes. It is hardcoded to the repo name.
