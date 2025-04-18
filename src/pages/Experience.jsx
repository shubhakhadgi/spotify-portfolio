import React from "react";

const experiences = [
  {
    company: "Tech Corp",
    role: "Frontend Intern",
    duration: "Jan 2024 – Apr 2024",
    desc: "Worked on UI bugs, improved components, and implemented animations.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2023 – Present",
    desc: "Built landing pages and CMS sites using WordPress and React.",
  },
];

const Experience = () => {
  return (
    <main className="flex-1 bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded-lg hover:bg-green-600 transition"
          >
            <h2 className="text-xl font-bold">{exp.role}</h2>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-400 italic">{exp.duration}</p>
            <p className="mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
