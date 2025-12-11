# Antigravity Agent Rules

## 1. Project Context Management (CRITICAL)
Future agents MUST treat the `.project_context` and `.workflow_context` directories as the **source of truth** and **living documentation** for this project.

### A. Context Awareness
*   **Start of Session**: Always read `.project_context/overview.md` to understand the project scope, architecture, and business goals.
*   **Task Definition**: specific tasks or project-level to-dos are found in `.workflow_context/task_definition.md` (or similar).

### B. Living Documentation Mandate
*   **Architecture Changes**: If you modify the tech stack, directory structure, or key deployment logic, you MUST update `.project_context/overview.md` immediately.
*   **Session Logs**: After completing a significant session or feature implementation, create a detailed log in `.project_context/task_context_artifacts/`.
    *   **Naming**: `YYYY-MM-DD_FeatureName.md`
    *   **Content**: "Context & Goal", "Architectural Changes", "Key Decisions", and "Operational Notes".
    *   **Purpose**: This allows future agents to "replay" the decision-making process.

## 2. Tech Stack Requirements
*   **Framework**: Use **React** (v18+) with **Vite**.
*   **Styling**: Use **TailwindCSS** (v3.4+) with a utility-first approach.
    *   **Dark Mode**: Default background is `bg-slate-900`. Texts are slate-100 to slate-400.
    *   **Glassmorphism**: Use `backdrop-blur` and semi-transparent backgrounds (e.g., `bg-slate-800/50`) for premium feel.
*   **Typography**: Always use **'Inter'** font. Ensure `font-sans` is applied to the `<body>` tag in `index.html`.
*   **Icons**: Use semantic icons (Heroicons or custom assets in `public/icons/`).

## 3. Design Philosophy ("Premium Aesthetic")
*   **Visuals**: Prioritize "vibrant colors, dark modes, glassmorphism". Use smooth gradients (e.g., Blue -> Purple -> Pink) for accents and text.
*   **UX Pattern**: Prefer **Modal Overlays** for viewing detailed content (like projects) instead of navigating away.
    *   **Navigation**: Implement `window.history` management so the "Back" button closes overlays.
    *   **Accessibility**: Ensure `Escape` key listeners are active for modals.

## 4. Deployment & Operations
*   **GitHub Pages**: The project deploys via GitHub Actions (`.github/workflows/deploy.yml`).
*   **Configuration**: 
    *   **DO NOT** modify the `base` path in `vite.config.js` unless the repository name changes. It is hardcoded to `/tedahn-aiml-project-notebooks/`.
*   **Asset Management**:
    *   Images/Thumbnails: Store in `portfolio-ui/public/`.
    *   Project Metadata: Manage in `portfolio-ui/src/projects.js`. Do not hardcode project data in React components.

## 5. Agent Behavior
*   **Proactive Maintenance**: If you notice `overview.md` is outdated (e.g., refers to old tech), fix it immediately.
*   **Context Continuity**: Before ending a session, briefly verify that your changes are reflected in the project context artifacts.
