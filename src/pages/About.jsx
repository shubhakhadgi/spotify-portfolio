import React from "react";

const About = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-green-700 via-gray-900 to-black text-white p-0">
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
      <div className="px-8 py-4 max-w-4xl">
        <p className="text-lg mb-4">
          I craft sleek, user-friendly interfaces with a focus on accessibility
          and clean code. I'm passionate about React, Tailwind, and intuitive
          design systems.
        </p>
        <p className="text-gray-300">
          When not coding, I’m likely curating playlists, learning animations,
          or building side projects for fun!
        </p>
      </div>
    </main>
  );
};

export default About;
