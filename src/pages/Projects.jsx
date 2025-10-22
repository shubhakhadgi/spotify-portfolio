import React from "react";
import { ExternalLink, PlayCircle, Layers } from "lucide-react";
import data from "../data.json";
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
  const { projects, personalProjects } = data;

  return (
    <main className="flex-1 w-full max-w-full  text-white px-4 sm:px-6 pb-32 overflow-x-hidden mt-12">
      {/* Header */}
      <ScrollToTop />
      <div className="flex items-center gap-3 mb-4 pt-6">
        <Layers size={32} className="text-green-500 dark:text-light-accent" />
        <h1 className="text-3xl font-bold text-white dark:text-light-accent">Projects</h1>
      </div>
      {/* Responsive Project Cards - Full width horizontal scroll on mobile, natural height */}
      <section className="px-0 sm:px-8 py-6">
        <h2 className="text-xl font-bold mb-4 px-4 sm:px-0 dark:text-gray-200">Projects I've Built</h2>
        <div className="relative group">
          <div
            className="flex sm:grid sm:grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto scrollbar-spotify scrollbar-no-arrows px-2 snap-x snap-mandatory scroll-pl-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                tabIndex={0}
                className="bg-neutral-800 dark:bg-light-accent/10 rounded-lg p-4 min-w-full max-w-full sm:min-w-0 sm:max-w-none flex-shrink-0 shadow-lg snap-start hover:ring-1 hover:ring-green transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 dark:hover:ring-light-accent"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-40 object-cover mb-3"
                />
                <h2 className="text-base font-semibold mb-1 hover:text-green dark:text-light-accent">{project.title}</h2>
                <p className="text-sm text-gray-400 dark:text-black line-clamp-3">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-light-accent/70 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 dark:text-gray-200/60 mt-2 inline-flex items-center gap-1 hover:text-green"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Table Section */}
      <section className="mt-12 w-full overflow-x-auto rounded-lg bg-neutral-900 dark:bg-light-accent/40 sm:p-6 p-4 scrollbar-spotify scrollbar-no-arrows">
        <h2 className="text-2xl font-bold mb-4 text-white ">Personal Projects Playlist</h2>

        <div className="min-w-[700px] w-full inline-block align-middle">
          <table className="w-full table-auto border-collapse text-left text-white">
            <thead className="border-b border-gray-700 dark:border-light-accent sticky top-0 bg-neutral-900 dark:bg-light-accent z-10">
              <tr>
                <th className="px-4 py-2 text-sm font-semibold">Project</th>
                <th className="px-4 py-2 text-sm font-semibold">Technologies</th>
                <th className="px-4 py-2 text-sm font-semibold">Description</th>
                <th className="px-4 py-2 text-right text-sm font-semibold">Open</th>
              </tr>
            </thead>
            <tbody>
              {personalProjects.map((project, i) => (
                <tr
                  key={i}
                  className="group border-b border-gray-800 cursor-pointer transition hover:bg-neutral-800 dark:hover:bg-light-accent/20"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <td className="px-4 py-3 font-semibold whitespace-nowrap">{project.title}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 dark:bg-light-skin/30 text-xs rounded-full px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm line-clamp-2">{project.description}</td>
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
        </div>
      </section>

    </main>
  );
};

export default Projects;
