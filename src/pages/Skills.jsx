import React from "react";

const skillsByCategory = [
  {
    title: "🔥 Top Skills",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🌬️" },
      { name: "JavaScript", icon: "📜" },
    ],
  },
  {
    title: "🧰 Tools I Use",
    items: [
      { name: "TypeScript", icon: "💻" },
      { name: "GitHub", icon: "🐙" },
      { name: "Node.js", icon: "🔨" },
    ],
  },
];

const Skills = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-12">
          Your Dev Library
        </h1>

        {skillsByCategory.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              {section.title}
            </h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-green-400/50">
              {section.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-neutral-800 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-md transition duration-300 whitespace-nowrap"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
