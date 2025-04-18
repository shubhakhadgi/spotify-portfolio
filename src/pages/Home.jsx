import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const sections = [
  {
    title: "About Me",
    desc: "Get to know who I am, what I love, and why I code.",
    link: "/about",
    icon: <FaUser className="text-3xl mb-2 text-white" />,
  },
  {
    title: "Skills",
    desc: "Explore my tech stack, tools, and libraries I work with.",
    link: "/skills",
    icon: <FaCode className="text-3xl mb-2 text-white" />,
  },
  {
    title: "Projects",
    desc: "See what I’ve built — real apps, clones, and experiments.",
    link: "/projects",
    icon: <FaProjectDiagram className="text-3xl mb-2 text-white" />,
  },
  {
    title: "Experience",
    desc: "A timeline of my journey, internships, and freelance work.",
    link: "/experience",
    icon: <FaBriefcase className="text-3xl mb-2 text-white" />,
  },
];

const Home = () => {
  return (
    <main className="flex-1 bg-black text-white p-6 overflow-auto">
      {/* 🎧 Hero */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome, I’m Shubha 👋</h1>
        <p className="text-gray-300 max-w-lg mb-6">
          I’m a frontend developer crafting clean, interactive web experiences
          with React, Tailwind, and love for music-inspired design.
        </p>
      </section>

      {/* 🎵 Sections Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {sections.map((section, index) => (
          <Link
            to={section.link}
            key={index}
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {section.icon}
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">{section.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* 🎤 Featured Project */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🎯 Featured Project</h2>
        <div className="flex flex-col md:flex-row gap-6 bg-gray-800 p-6 rounded-xl shadow-lg">
          <img
            src="/spotify-clone.jpg"
            alt="Spotify Clone"
            className="w-full md:w-60 h-40 object-cover rounded-md"
          />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Spotify Clone</h3>
            <p className="text-gray-400 mb-4">
              Built using React, Tailwind CSS, and GSAP for smooth animations.
            </p>
            <Link to="/projects" className="text-green-500 hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 🧠 Learning Objective Section */}
      <section className="bg-gray-900 p-6 rounded-xl shadow-inner mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          💡 My Learning Philosophy
        </h2>
        <p className="text-gray-300">
          I believe in learning by building. Whether it’s cloning apps,
          experimenting with design systems, or contributing to open source — I
          stay curious and always seek new challenges.
        </p>
      </section>
    </main>
  );
};

export default Home;
