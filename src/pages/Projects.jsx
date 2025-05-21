import React from "react";
import { ExternalLink, PlayCircle } from "lucide-react";

const projects = [
  {
    title: "Spotify Clone",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjY1OXwwfDF8c2VhY2h8M3x8c3BvdGlmeXxlbnwwfHx8fDE2NTg1NjQ0NzM&ixlib=rb-1.2.1&q=80&w=1080",
    tech: ["React", "Tailwind", "Zustand"],
    description: "Spotify-inspired music streaming UI using Zustand and TailwindCSS.",
    link: "https://your-live-demo.com",
  },
  {
    title: "Blog CMS",
    image:
      "https://images.unsplash.com/photo-1620287341639-d141a3a15cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["WordPress", "PHP", "Custom Theme"],
    description: "Content management system for blogging with a fully custom theme.",
    link: "https://your-live-demo.com",
  },
  {
    title: "Portfolio v2",
    image:
      "https://images.unsplash.com/photo-1569322977266-acff659212fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Vite", "Tailwind"],
    description: "Revamped developer portfolio built using Vite and TailwindCSS.",
    link: "https://your-live-demo.com",
  },
  {
    title: "Kanban Task Manager",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjY1OXwwfDF8c2VhY2h8MXx8a2FubmFufGVufDB8fHx8fDE2NTg1NjQ0NzM&ixlib=rb-1.2.1&q=80&w=1080",
    tech: ["React", "Drag-and-Drop", "Zustand"],
    description: "Trello-style task board with drag & drop and local state management.",
    link: "https://your-live-demo.com",
  },
];

const personalProjects = [
  {
    title: "Virtual Instrument Player",
    tech: ["React", "Tone.js"],
    description: "Play musical instruments with your keyboard.",
    link: "https://your-personal-demo.com/instrument",
  },
  {
    title: "Weather App",
    tech: ["React", "OpenWeatherMap API"],
    description: "Current weather info and forecasts.",
    link: "https://your-personal-demo.com/weather",
  },
  {
    title: "To-Do App",
    tech: ["React", "LocalStorage"],
    description: "Simple task manager with persistent storage.",
    link: "https://your-personal-demo.com/todo",
  },
];


const Projects = () => {
  return (
    <main className="flex-1 h-screen overflow-y-auto bg-gradient-to-b from-neutral-900 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 rounded-lg p-4 cursor-pointer group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-3"
              />
            </div>

            <h2 className="text-base font-semibold mb-1 group-hover:underline">
              {project.title}
            </h2>

            <p className="text-sm text-gray-400 line-clamp-2">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-1">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-400 mt-2 inline-flex items-center gap-1 hover:underline"
            >
              View Project <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      <section className="mt-12 p-6 bg-neutral-900 rounded-lg max-h-[400px] overflow-y-auto">
  <h2 className="text-2xl font-bold mb-4">Personal Projects Playlist</h2>
  <table className="w-full table-auto border-collapse text-left text-white">
    <thead className="border-b border-gray-700 sticky top-0 bg-neutral-900">
      <tr>
        <th className="px-4 py-2">Project</th>
        <th className="px-4 py-2">Technologies</th>
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2 text-right">Open</th>
      </tr>
    </thead>
    <tbody>
      {personalProjects.map((project, i) => (
        <tr
          key={i}
          className="group border-b border-gray-800 hover:bg-gray-800 cursor-pointer transition"
          onClick={() => window.open(project.link, "_blank")}
        >
          <td className="px-4 py-3 font-semibold">{project.title}</td>
          <td className="px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white/20 text-xs rounded-full px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </td>
          <td className="px-4 py-3 line-clamp-2">{project.description}</td>
          <td className="px-4 py-3 text-right">
            <PlayCircle className="w-6 h-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

    </main>
  );
};

export default Projects;
