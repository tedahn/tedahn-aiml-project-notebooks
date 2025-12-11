import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects } from './projects';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event) => {
      if (!event.state?.modal) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const handleOpenProject = (project) => {
    window.history.pushState({ modal: true }, '', '');
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    if (window.history.state?.modal) {
      window.history.back();
    } else {
      setSelectedProject(null);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => handleOpenProject(project)}
            />
          ))}
        </div>
      </main>

      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
        />
      )}

      <footer className="bg-slate-900 py-8 mt-12 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ted Ahn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
