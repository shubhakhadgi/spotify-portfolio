import React from "react";

const sections = [
  { title: "About", path: "/about" },
  { title: "Skills", path: "/skills" },
  { title: "Experience", path: "/experience" },
  { title: "Projects", path: "/projects" },
  { title: "Blog", path: "/blog" },
];

export const Home = () => {
  return (
    <main className="flex-1 bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to My Spotify Portfolio
      </h1>
      <p className="text-lg mb-6">
        Hi, I'm [Your Name]. This portfolio is inspired by Spotify's sleek
        design. Explore to know more about me.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.path}
            className="bg-gray-800 p-6 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-sm opacity-75">Go to {section.title} page</p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
