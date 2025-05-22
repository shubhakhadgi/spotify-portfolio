import React from "react";

const currentlyBuilding = {
  title: "Hospital Dashboard",
  description: "React + Redux + TypeScript + Cypress",
  img: "/path-to-thumbnail.jpg",
  progressPercent: 75,
};

const uiDiscography = [
  {
    title: "Toast Notification",
    tech: "React · Tailwind · Hooks",
    img: "https://images.unsplash.com/photo-1525186402429-0c11fa2acb90?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Spotify Clone",
    tech: "React · Tailwind · Firebase",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Framer Motion Gallery",
    tech: "React · Framer Motion",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
  },
];

const dailyTools = [
  { name: "VSCode", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Zustand", img: "https://avatars.githubusercontent.com/u/8022770?s=200&v=4" },
  { name: "Framer Motion", img: "https://framerusercontent.com/images/Framer.svg" },
];

const tourDates = [
  "2021 — Wrote my first HTML tag.",
  "2022 — Deployed a full-stack React app.",
  "2023 — Mastered Tailwind, Vite, and component design.",
  "2024 — Launched this Spotify-style portfolio.",
];

const fansAlsoLike = [
  {
    name: "Kent C. Dodds",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80",
  },
  {
    name: "Theo",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=64&q=80",
  },
  {
    name: "Lee Robinson",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=64&q=80",
  },
  {
    name: "Sarah Drasner",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80",
  },
  {
    name: "Wes Bos",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80",
  },
  {
    name: "Adrian Twarog",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80",
  },
];

const About = () => {
  return (
    <main className="flex-1 bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex items-center gap-6 p-8 max-w-6xl">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=128&q=80"
          alt="Shubha"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-green-500 object-cover"
        />
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400">Frontend Developer</p>
          <h1 className="text-5xl font-bold mt-1">Shubha</h1>
          <p className="text-gray-400 mt-2 max-w-md">
            Kathmandu-based. Design-focused. Code-driven.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-6xl px-8 py-6">
        <p className="text-lg leading-relaxed max-w-3xl">
          I craft performant, accessible interfaces with modern React tooling and a design-first mindset. My workflow emphasizes scalability, clean abstractions, and elegant UI patterns.
        </p>
        <p className="text-gray-500 mt-4 max-w-3xl">
          Outside code, I’m curating soundtracks, dissecting motion libraries, or shipping passion projects for fun and learning.
        </p>
      </section>

      {/* Currently Building */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Currently Building</h2>
        <div className="flex items-center bg-gray-900 rounded-lg p-4 max-w-md shadow-md space-x-4">
          <img
            src={currentlyBuilding.img}
            alt={currentlyBuilding.title}
            className="w-20 h-20 rounded object-cover"
          />
          <div className="flex flex-col flex-1">
            <p className="font-semibold">{currentlyBuilding.title}</p>
            <p className="text-gray-400 text-sm mb-2">{currentlyBuilding.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded-full transition-width duration-300"
                style={{ width: `${currentlyBuilding.progressPercent}%` }}
              />
            </div>
            <span className="text-gray-400 text-xs mt-1">{currentlyBuilding.progressPercent}% Complete</span>
          </div>
        </div>
      </section>

      {/* UI Discography - Horizontal Scroll */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">UI Discography</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
          {uiDiscography.map(({ title, tech, img }) => (
            <div
              key={title}
              tabIndex={0}
              className="relative min-w-[200px] rounded-lg shadow-lg cursor-pointer overflow-hidden flex-shrink-0
                hover:scale-105 hover:shadow-xl hover:ring-1 hover:ring-green transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent p-4">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-300 text-xs mt-1">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Tools - Horizontal icons */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Daily Tools</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
          {dailyTools.map(({ name, img }) => (
            <div
              key={name}
              tabIndex={0}
              className="flex flex-col items-center cursor-pointer min-w-[80px]
                transform transition duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <img src={img} alt={name} className="w-12 h-12 mb-2 object-contain" />
              <p className="text-white text-sm whitespace-nowrap">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Dates */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Tour Dates</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-500 text-lg max-w-xl">
          {tourDates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
      </section>

      {/* Code Philosophy */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Code Philosophy</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            I believe in composability, declarative logic, and meaningful abstraction.
            Code should be expressive, testable, and accessible. I optimize for
            readability, not cleverness. Hooks are not a trick — they're a paradigm.
          </p>
        </div>
      </section>

      {/* Fans Also Like - Horizontal Scroll */}
      <section className="max-w-6xl px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Fans Also Like</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
          {fansAlsoLike.map(({ name, img }) => (
            <div
              key={name}
              tabIndex={0}
              className="flex flex-col items-center cursor-pointer min-w-[100px] rounded-lg p-2
                hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="text-white text-sm text-center whitespace-nowrap">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
