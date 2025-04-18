import React from "react";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "JavaScript", icon: "📜" },
  { name: "GSAP", icon: "🎞️" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "GitHub", icon: "🐙" },
];

const Skills = () => {
  return (
    <main className="flex-1 bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">My Stack Library</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 hover:bg-green-600 transition duration-300 rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
