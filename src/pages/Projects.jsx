import React from "react";
import { ExternalLink, PlayCircle } from "lucide-react";
import data from '../data.json';
import { Layers } from "lucide-react";

const Projects = () => {
  const { projects, personalProjects } = data;
  return (
    <main className="flex-1 h-screen    bg-gradient-to-b from-neutral-900 to-black text-white p-6">
      <div className="flex items-center gap-3 mb-4">
        <Layers size={32} className="text-green-500" />
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800  hover:ring-1 hover:ring-green transform transition duration-300 ease-in-out rounded-lg p-4 cursor-pointer group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-3"
              />
            </div>

            <h2 className="text-base font-semibold mb-1 hover:text-green ">
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
              className="text-sm text-green-400 mt-2 inline-flex items-center gap-1 hover:text-green"
            >
              View Project <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      <section className="mt-12 p-6 bg-neutral-900 rounded-lg">
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
                className="group border-b border-gray-800 cursor-pointer transition"
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
                  <PlayCircle
  className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
  stroke="#22c55e" 
/>
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
