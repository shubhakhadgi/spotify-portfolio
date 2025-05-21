import React from "react";

const About = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-green-700 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <div className="flex items-center p-8 max-w-5xl mx-auto space-x-6">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=128&q=80"
          alt="Shubha"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-green-500 object-cover"
        />
        <div>
          <p className="uppercase text-sm text-gray-300">Frontend Developer</p>
          <h1 className="text-5xl font-bold">Shubha</h1>
          <p className="text-gray-400 mt-2">Based in Kathmandu | Love music & design</p>
        </div>
      </div>

      {/* Bio */}
      <section className="px-8 py-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          I craft sleek, user-friendly interfaces with a focus on accessibility and clean code. I'm passionate about React, Tailwind, and design systems that just <em>*make sense*</em>.
        </p>
        <p className="text-gray-300 mt-4">
          When not coding, I’m curating playlists, exploring animation libraries, or building side projects for fun.
        </p>
      </section>

      {/* Now Playing with progress bar */}
      <section className="px-8 py-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Now Playing</h2>
        <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md max-w-md">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=150&q=80"
            alt="album art"
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex flex-col flex-1">
            <p className="text-white font-semibold">Coldplay — Sparks</p>
            <p className="text-gray-400 text-sm mb-2">Curated for late-night coding.</p>

            {/* Progress bar container */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <span className="text-gray-400 text-xs mt-1">65%</span>
          </div>
        </div>
      </section>

      {/* UI Discography - Spotify style cards */}
      <section className="px-8 py-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6">UI Discography</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
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
          ].map(({ title, tech, img }) => (
            <div
              key={title}
              className="bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer overflow-hidden"
            >
              <img src={img} alt={title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Tools - Spotify style icons */}
      <section className="px-8 py-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Daily Tools</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
          {[
            { name: "VSCode", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "Zustand", img: "https://avatars.githubusercontent.com/u/8022770?s=200&v=4" },
            { name: "Framer Motion", img: "https://framerusercontent.com/images/Framer.svg" },
          ].map(({ name, img }) => (
            <div
              key={name}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 cursor-pointer"
            >
              <img src={img} alt={name} className="w-12 h-12 mb-2 object-contain" />
              <p className="text-white text-sm">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Dates - plain text list, no cards */}
      <section className="px-8 py-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Tour Dates</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg leading-relaxed">
          <li>2021 — Started learning HTML & CSS</li>
          <li>2022 — Built my first React app</li>
          <li>2023 — Mastered Tailwind & Vite</li>
          <li>2024 — Designed Spotify-inspired portfolio</li>
        </ul>
      </section>

      {/* Code Philosophy - plain text, centered */}
      <section className="px-8 py-6 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-6">Code Philosophy</h2>
        <p className="text-gray-300 text-sm italic leading-relaxed">
          Simplicity scales. I believe in writing declarative, testable, and accessible UIs. State should live where it's needed. Hooks are not just a feature — they’re a mindset. I build with empathy, and I ship fast but clean.
        </p>
      </section>

      {/* Fans Also Like - Spotify style cards */}
      <section className="px-8 py-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Fans Also Like</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {[
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
          ].map(({ name, img }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer hover:bg-gray-700 rounded-lg p-4"
            >
              <img
                src={img}
                alt={name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="text-white text-sm text-center">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
