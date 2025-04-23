import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";

// Sections array (adjust as needed)
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
    <main className="flex-1 bg-black text-white overflow-hidden">
      {/* 🎧 Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/spotify-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome, I’m Shubha 🎶</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I’m a frontend developer crafting clean, interactive web experiences
            with React, Tailwind, and a love for music-inspired design.
          </p>
          <Link
            to="/projects"
            className="bg-green-500 text-black py-3 px-6 rounded-full text-xl font-semibold hover:bg-green-400 transition"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* 🎵 Sections Carousel */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-white">
          Explore My World
        </h2>
        <div className="flex overflow-x-auto space-x-6">
          {sections.map((section, index) => (
            <Link
              to={section.link}
              key={index}
              className="flex-none w-64 bg-gray-800 rounded-xl p-6 transition-transform transform hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                {section.icon}
                <h3 className="text-2xl font-semibold text-white mt-4">
                  {section.title}
                </h3>
                <p className="text-gray-400 mt-2">{section.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🎶 Featured Project */}
      <section className="px-6 py-12 bg-gray-800 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-white">
          🎯 Featured Project
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/spotify-clone.jpg"
            alt="Spotify Clone"
            className="w-full md:w-60 h-60 object-cover rounded-lg transition-transform transform hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Spotify Clone
            </h3>
            <p className="text-gray-400 mb-4">
              Built using React, Tailwind CSS, and GSAP for smooth animations,
              this project showcases the Spotify layout and functionality.
            </p>
            <Link to="/projects" className="text-green-500 hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* 🎤 Learning Philosophy Section */}
      <section className="px-6 py-12 bg-gray-900 rounded-xl shadow-inner mt-12">
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
