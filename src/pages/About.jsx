import React from "react";

const About = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-green-700 via-gray-900 to-black text-white p-0">
      {/* Hero Section */}
      <div className="flex items-center p-8 space-x-6">
        <img
          src="/avatar.png"
          alt="Shubha"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-green-500"
        />
        <div>
          <p className="uppercase text-sm text-gray-300">Frontend Developer</p>
          <h1 className="text-5xl font-bold">Shubha</h1>
          <p className="text-gray-400 mt-2">
            Based in Kathmandu | Love music & design
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="px-8 py-4 max-w-4xl">
        <p className="text-lg mb-4">
          I craft sleek, user-friendly interfaces with a focus on accessibility
          and clean code. I'm passionate about React, Tailwind, and design
          systems that just *make sense*.
        </p>
        <p className="text-gray-300">
          When not coding, I’m curating playlists, exploring animation
          libraries, or building side projects for fun.
        </p>
      </div>

      {/* Now Playing */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Now Playing</h2>
        <div className="flex items-center space-x-4">
          <img
            src="https://source.unsplash.com/album-cover"
            alt="album art"
            className="w-16 h-16 rounded"
          />
          <div>
            <p className="text-white font-semibold">Coldplay — Sparks</p>
            <p className="text-gray-400 text-sm">
              Curated for late-night coding.
            </p>
          </div>
        </div>
      </section>

      {/* UI Discography */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">UI Discography</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Toast Notification", "Spotify Clone", "Framer Motion Gallery"].map(
            (title) => (
              <div
                key={title}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
              >
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  React · Tailwind · Hooks
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Daily Tools */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Daily Tools</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {["VSCode", "Figma", "Postman", "Zustand", "Framer Motion"].map(
            (tool) => (
              <div
                key={tool}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-white whitespace-nowrap"
              >
                {tool}
              </div>
            )
          )}
        </div>
      </section>

      {/* Tour Dates */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Tour Dates</h2>
        <ul className="text-sm space-y-2 text-gray-300">
          <li>2021 — Started learning HTML & CSS</li>
          <li>2022 — Built my first React app</li>
          <li>2023 — Mastered Tailwind & Vite</li>
          <li>2024 — Designed Spotify-inspired portfolio</li>
        </ul>
      </section>

      {/* Code Philosophy */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Code Philosophy</h2>
        <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
          Simplicity scales. I believe in writing declarative, testable, and
          accessible UIs. State should live where it's needed. Hooks are not
          just a feature — they’re a mindset. I build with empathy, and I ship
          fast but clean.
        </p>
      </section>

      {/* Fans Also Like */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Fans Also Like</h2>
        <div className="flex space-x-4">
          {[
            {
              name: "Kent C. Dodds",
              img: "https://avatars.githubusercontent.com/u/1500684",
            },
            {
              name: "Theo",
              img: "https://avatars.githubusercontent.com/u/6751787",
            },
            {
              name: "Lee Robinson",
              img: "https://avatars.githubusercontent.com/u/23662329",
            },
          ].map((dev) => (
            <div key={dev.name} className="flex flex-col items-center">
              <img
                src={dev.img}
                alt={dev.name}
                className="w-16 h-16 rounded-full"
              />
              <p className="text-sm mt-2 text-gray-300">{dev.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
