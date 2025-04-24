import React from "react";
import { Play } from "lucide-react"; // npm install lucide-react

const experiences = [
  {
    title: "Frontend Intern",
    org: "Tech Corp",
    time: "Jan 2024 – Apr 2024",
    notes: [
      "Fixed UI bugs across 3 modules",
      "Implemented page transitions with Framer Motion",
    ],
  },
  {
    title: "Web Developer",
    org: "Freelance",
    time: "2023 – Present",
    notes: [
      "Developed 10+ landing pages",
      "Built dynamic CMS with React & WordPress",
    ],
  },
  {
    title: "Frontend Developer Trainee",
    org: "CodeBase Academy",
    time: "Jul 2023 – Dec 2023",
    notes: [
      "Completed real-world projects in a team setting",
      "Worked with Git workflows and component architecture",
    ],
  },
  {
    title: "Open Source Contributor",
    org: "React Projects",
    time: "2024",
    notes: [
      "Contributed to UI libraries and issue resolutions",
      "Refactored components using Hooks and Context API",
    ],
  },
];

const education = [
  {
    degree: "BSc in Computer Science",
    school: "ABC University",
    year: "2023",
    info: "Specialized in frontend engineering and UI design",
  },
];

const courses = [
  { name: "React Front to Back", platform: "Udemy", year: "2023" },
  { name: "Tailwind Mastery", platform: "Scrimba", year: "2024" },
  { name: "Frontend Career Path", platform: "Frontend Masters", year: "2024" },
];

const Experience = () => {
  return (
    <main className="bg-gradient-to-b from-[#121212] to-black min-h-screen text-white">
      {/* Album Header */}
      <section className="flex flex-col md:flex-row items-end md:items-center p-8 gap-6 bg-gradient-to-r from-green-700 to-green-500">
        <img
          src="https://images.unsplash.com/photo-1743890286640-b110f4e932e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Album Art"
          className="w-40 h-40 rounded shadow-lg border-4 border-green-300"
        />

        <div>
          <p className="uppercase text-sm text-gray-300">Playlist</p>
          <h1 className="text-5xl font-bold">Shubha’s Career Album</h1>
          <p className="text-sm text-gray-100 mt-2">
            React Developer • Kathmandu • Since 2023
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-black text-green-400 border border-green-400 rounded-full text-sm hover:bg-green-600 hover:text-black transition"
          >
            ⬇ Download Resume
          </a>
        </div>
      </section>

      {/* Experience / Tracklist */}
      <section className="px-6 md:px-10 py-10" id="experience">
        <h2 className="text-3xl font-bold mb-6">Tracks</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 bg-[#181818] hover:bg-[#252525] p-6 rounded-lg transition"
            >
              <div className="text-green-400 font-bold text-xl w-8">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-400">
                  {exp.org} • {exp.time}
                </p>
                <ul className="list-disc text-gray-400 text-sm mt-2 ml-4">
                  {exp.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
              <Play className="text-green-500 w-5 h-5 mt-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Education EP */}
      <section className="px-6 md:px-10 py-10 bg-[#0f0f0f]" id="education">
        <h2 className="text-3xl font-bold mb-6">Education EP</h2>
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-[#181818] p-5 rounded-lg hover:bg-[#252525] transition mb-4"
          >
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-400">
              {edu.school} • {edu.year}
            </p>
            <p className="text-sm text-gray-500 mt-1">{edu.info}</p>
          </div>
        ))}
      </section>

      {/* Skill Singles */}
      <section className="px-6 md:px-10 py-10" id="courses">
        <h2 className="text-3xl font-bold mb-6">Skill Singles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-[#1db954]/10 border border-[#1db954]/40 text-white p-4 rounded-lg hover:bg-[#1db954]/20 transition"
            >
              <h3 className="font-semibold text-base text-[#1db954]">
                {course.name}
              </h3>
              <p className="text-sm text-gray-300">
                {course.platform} • {course.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Experience;
