import React from "react";
import { PlayCircle } from "lucide-react";
import data from '../data.json';
import ScrollToTop from "../components/ScrollToTop";

const Experience = () => {
  const { experience, education, courses } = data;

  return (
    <main className=" min-h-screen text-white mt-12">
      <ScrollToTop />
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center md:items-end p-6 md:p-8 gap-4 md:gap-6 bg-gradient-to-r from-green-700 to-green-500">
        <img
          src="assets/img/cover.png"
          alt="Shubha Khadgi"
          className="w-28 h-28 md:w-40 md:h-40 rounded shadow-lg border-2 hover:border-green transition"
        />

        <div className="text-center md:text-left">
          <p className="uppercase text-xs md:text-sm text-gray-300 dark:text-black/50">Portfolio</p>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-light-accent">Shubha Khadgi</h1>
          <p className="text-xs md:text-sm text-gray-100 mt-1 md:mt-2">
            React • NextJs • Typescript
          </p>
          <a
            href="/"
            download
            className="inline-block mt-3 md:mt-4 px-5 py-2 bg-green/80 text-white font-medium rounded-full text-xs md:text-sm hover:bg-green hover:shadow-md transition duration-200 ease-in-out select-none dark:bg-light-accent/80 dark:hover:bg-light-accent"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Work Experience */}
      <section className="px-4 md:px-10 py-8 md:py-10" id="experience">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 dark:text-gray-200">Work Experience</h2>
        <div className="space-y-5 md:space-y-6">
          {experience.map((exp, idx) => (
            <a
              key={idx}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex flex-row items-start gap-4 bg-gray-200 hover:bg-gray-100 dark:bg-light-accent/20  p-5 md:p-6 rounded-lg transition dark:text-black/90">
                <div className="text-green-400 font-bold text-xl w-6 md:w-8 flex-shrink-0">{idx + 1}</div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-gray-400 mt-1">
                    <span className="italic hover:text-green-400 transition-colors dark:text-black/60">{exp.org}</span>
                    <span className="text-gray-500 dark:text-black/60">•</span>
                    <span className="dark:text-black/60">{exp.time}</span>
                  </div>
                  <ul className="list-disc text-gray-400 text-xs md:text-sm mt-2 ml-4 space-y-1 text-justify dark:text-black/60">
                    {exp.notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                </div>
                <PlayCircle
                  className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  stroke="#22c55e"
                />
              </div>

            </a>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-4 md:px-10 py-8 md:py-10 bg-gray-200 dark:bg-light-skin/20" id="education">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 dark:text-light-accent">Education</h2>
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-200 dark:bg-light-accent/30 p-4 md:p-5 rounded-lg mb-4"
          >
            <h3 className="text-base md:text-lg font-semibold dark:text-black/90">{edu.degree}</h3>

            <div className="flex flex-col sm:flex-row sm:justify-between text-xs md:text-sm text-gray-400 mt-1 dark:text-black/60">
              <span className="dark:text-black/60">{edu.school}</span>
              <span className="text-gray-300 font-medium dark:text-black">CGPA: {edu.cgpa}</span>
            </div>

            <p className="text-xs md:text-sm text-gray-400 mt-1 dark:text-black/40">{edu.year}</p>
            <p className="text-xs md:text-sm text-gray-500 mt-2 dark:text-black/40">{edu.info}</p>
          </div>
        ))}
      </section>

      {/* Courses */}
      <section className="px-4 md:px-10 py-8 md:py-10" id="courses">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-light-accent">Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <a
              key={i}
              href={course.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200  hover:bg-gray-100 dark:bg-gray-100/50  hover:ring-1 hover:ring-green dark:hover:ring-light-accent duration-300 ease-in-out text-white p-4 rounded-lg transition"
            >
              <h3 className="font-semibold text-sm md:text-base">{course.name}</h3>
              <p className="text-xs md:text-sm text-gray-300">{course.platform} • {course.year}</p>
              {course.grade && (
                <p className="mt-2 inline-block bg-green-700 bg-opacity-50 text-green-200 text-xs font-semibold py-1 rounded-full tracking-wide">
                  Grade Achieved: {course.grade}
                </p>
              )}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Experience;
