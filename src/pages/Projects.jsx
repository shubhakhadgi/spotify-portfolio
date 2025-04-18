import React from "react";

const projects = [
  {
    title: "Spotify Clone",
    image: "/spotify-clone.jpg",
    tech: "React + Tailwind",
  },
  {
    title: "Blog CMS",
    image: "/blog-cms.jpg",
    tech: "WordPress + Custom Theme",
  },
];

const Projects = () => {
  return (
    <main className="flex-1 bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-400">{project.tech}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
