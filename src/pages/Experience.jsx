import React from "react";
import { PlayCircle } from "lucide-react"; 
import data from '../data.json';

const Experience = () => {
  const { experience, education, courses } = data;
  return (
    <main className="bg-gradient-to-b from-[#121212] to-black min-h-screen text-white">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-end md:items-center p-8 gap-6 bg-gradient-to-r from-green-700 to-green-500">
        <img
          src="assets/img/cover.png"
          alt="Shubha Khadgi"
          className="w-40 h-40 rounded shadow-lg border-2 hover:border-green"
        />

        <div>
          <p className="uppercase text-sm text-gray-300">Portfolio</p>
          <h1 className="text-5xl font-bold">Shubha Khadgi</h1>
          <p className="text-sm text-gray-100 mt-2">
            React • NextJs • Typescript
          </p>
<a
  href="/resume.pdf"
  download
  className="inline-block mt-4 px-6 py-2 bg-[#1DB954]/80 text-white font-medium rounded-full text-sm hover:bg-[#1DB954] hover:shadow-md transition duration-200 ease-in-out select-none"
>
  Download Resume
</a>


        </div>
      </section>

      {/* Work Experience */}
<section className="px-6 md:px-10 py-10" id="experience">
  <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
  <div className="space-y-6">
    {experience.map((exp, idx) => (
      <a
        key={idx}
        href={exp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="flex items-start gap-6 bg-[#181818] hover:bg-[#252525] p-6 rounded-lg transition">
          <div className="text-green-400 font-bold text-xl w-8">{idx + 1}</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 mt-1">
              <span className="italic hover:text-green-400 transition-colors">
                {exp.org}
              </span>
              <span className="text-gray-500">•</span>
              <span>{exp.time}</span>
            </div>
            <ul className="list-disc text-gray-400 text-sm mt-2 ml-4 space-y-1">
              {exp.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
          <PlayCircle
            className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
            stroke="#22c55e"
          />
        </div>
      </a>
    ))}
  </div>
</section>


      {/* Education */}
<section className="px-6 md:px-10 py-10 bg-[#0f0f0f]" id="education">
  <h2 className="text-3xl font-bold mb-6">Education</h2>
  {education.map((edu, idx) => (
    <div
      key={idx}
      className="bg-[#181818] p-5 rounded-lg mb-4"
    >
      <h3 className="text-lg font-semibold">{edu.degree}</h3>
      
      {/* Flex row for school and CGPA */}
      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400 mt-1">
        <span>{edu.school}</span>
        <span className="text-gray-300 font-medium">CGPA: {edu.cgpa}</span>
      </div>

      <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
      <p className="text-sm text-gray-500 mt-2">{edu.info}</p>
    </div>
  ))}
</section>


      {/* Skills */}
<section className="px-6 md:px-10 py-10" id="courses">
  <h2 className="text-3xl font-bold mb-6">Courses</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {courses.map((course, i) => (
      (
        <a
          key={i}
          href={course.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="block  bg-white/5 hover:bg-white/10 hover:ring-1 hover:ring-green duration-300 ease-in-out  text-white p-4 rounded-lg transition"
        >
          <h3 className="font-semibold text-base ">{course.name}</h3>
          <p className="text-sm text-gray-300">{course.platform} • {course.year}</p>
          {course.grade && (
            <p className="mt-2 inline-block bg-green-700 bg-opacity-50 text-green-200 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
              Grade Achieved: {course.grade}
            </p>
          )}
        </a>
      )
    ))}
  </div>
</section>

    </main>
  );
};

export default Experience;
