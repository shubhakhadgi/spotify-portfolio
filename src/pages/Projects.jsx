import React from "react";
import { PlayCircle } from "lucide-react"; // Replace with an icon lib you're using

const projects = [
  {
    title: "Spotify Clone",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjY1OXwwfDF8c2VhY2h8M3x8c3BvdGlmeXxlbnwwfHx8fDE2NTg1NjQ0NzM&ixlib=rb-1.2.1&q=80&w=1080",
    tech: "React + Tailwind + Zustand",
  },
  {
    title: "Blog CMS",
    image:
      "https://images.unsplash.com/photo-1620287341639-d141a3a15cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: "WordPress + Custom Theme",
  },
  {
    title: "Portfolio v2",
    image:
      "https://images.unsplash.com/photo-1569322977266-acff659212fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: "Vite + Tailwind + Framer Motion",
  },
  {
    title: "Kanban Task Manager",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjY1OXwwfDF8c2VhY2h8MXx8a2FubmFufGVufDB8fHx8fDE2NTg1NjQ0NzM&ixlib=rb-1.2.1&q=80&w=1080",
    tech: "React + Drag-and-Drop + Zustand",
  },
];

const Projects = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-black to-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-green-500 hover:scale-110 transition-transform" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
