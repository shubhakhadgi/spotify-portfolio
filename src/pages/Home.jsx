import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

const sections = [
  {
    title: "About Me",
    desc: "Get to know who I am, what I love, and why I code.",
    link: "/about",
    color: "from-purple-500 to-pink-500",
    icon: <FaUser className="text-3xl mb-2" />,
  },
  {
    title: "Skills",
    desc: "Explore my tech stack, tools, and libraries I work with.",
    link: "/skills",
    color: "from-green-500 to-emerald-700",
    icon: <FaCode className="text-3xl mb-2" />,
  },
  {
    title: "Projects",
    desc: "See what I’ve built — real apps, clones, and experiments.",
    link: "/projects",
    color: "from-blue-500 to-cyan-600",
    icon: <FaProjectDiagram className="text-3xl mb-2" />,
  },
  {
    title: "Experience",
    desc: "A timeline of my journey, internships, and freelance work.",
    link: "/experience",
    color: "from-yellow-500 to-orange-600",
    icon: <FaBriefcase className="text-3xl mb-2" />,
  },
];

const Home = () => {
  return (
    <main className="flex-1 bg-black text-white p-6">
      {/* 🎧 Hero */}
      <section className="mb-10">
        <h1 className="text-5xl font-bold mb-2">Welcome, I’m Shubha 👋</h1>
        <p className="text-gray-400 max-w-xl">
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
            className={`p-6 rounded-xl bg-gradient-to-br ${section.color} hover:scale-105 transition-transform shadow-lg`}
          >
            <div className="flex flex-col items-center">
              {section.icon}
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-white/90 mt-2">{section.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* 🎤 Featured Project */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🎯 Featured Project</h2>
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 hover:bg-green-600 transition">
          <img
            src="/spotify-clone.jpg"
            alt="Spotify Clone"
            className="w-full md:w-60 h-40 object-cover rounded-md shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">Spotify Clone</h3>
            <p className="text-gray-300 mb-2">
              Built using React, Tailwind CSS, and GSAP for smooth animations.
            </p>
            <Link
              to="/projects"
              className="text-green-300 underline hover:text-white"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 🧠 Tip Section */}
      <section className="bg-gradient-to-r from-gray-700 to-black rounded-xl p-6 shadow-inner">
        <h2 className="text-2xl font-bold mb-2">💡 My Learning Philosophy</h2>
        <p className="text-gray-300">
          I believe in learning by building. Whether it’s cloning apps,
          experimenting with design systems, or contributing to open source — I
          stay curious.
        </p>
      </section>
    </main>
  );
};

export default Home;
