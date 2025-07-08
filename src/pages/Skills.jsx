import { BarChart3 } from "lucide-react";
import data from '../data.json';


export default function SkillsPage() {
   const { skills, tools, featured } = data;
  return (
    <main className="px-6 py-8 text-white space-y-12 mt-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 size={32} className="text-green-500" />
          <h1 className="text-3xl font-bold">My Skills</h1>
        </div>
        <p className="text-white/70 text-lg max-w-xl">
          Explore the technologies and tools I use to build performant, accessible, and user-friendly interfaces.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
<div key={idx} className="bg-gray-200  rounded-xl p-4 hover:shadow-spotify ">
  <div className="flex justify-between items-center mb-2">
    <div className="flex items-center gap-2">
      <h3 className="text-white font-semibold">{skill.title}</h3>
    </div>
    <span className="text-white/60 text-sm">{skill.level}%</span>
  </div>
  <div className="w-full bg-gray-100  h-2 rounded">
    <div
      className="h-2 rounded"
      style={{
        width: `${skill.level}%`,
        backgroundColor: "#22c55e",
        transition: 'width 0.5s ease-in-out',
      }}
    />
  </div>
  <p className="text-white/60 text-sm mt-2">{skill.description}</p>
</div>

))}

        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tools I Use</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {tools.map((tool, idx) => (
            <div
  key={idx}
  className="group bg-gray-200  transition-all duration-300 ease-in-out p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-gray-100  hover:shadow-spotify cursor-pointer"
>
  <div className="w-16 h-16 mb-3 transition-transform group-hover:scale-105">
    <img
      src={tool.iconUrl}
      alt={`${tool.name} logo`}
      className="w-full h-full object-contain filter invert"
    />
  </div>
  <p className="text-white text-sm font-medium  transition-colors">
    {tool.name}
  </p>
</div>

          ))}
        </div>
      </section>

<section>
  <div className="flex items-center gap-2 mb-4">
    <h2 className="text-2xl font-semibold">Featured Work</h2>
  </div>
  
  <div className="flex  gap-4 pb-2 ">
    <div className=" bg-gray-200  rounded-xl  shadow-lg hover:ring-1 hover:ring-green transform  duration-300 ease-in-out transition">
      <img
        src={featured.image}
        alt={featured.title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold text-white text-lg mb-1 hover:text-green ">{featured.title}</h3>
        <p className="text-white/70 text-sm mb-2">{featured.artist}</p>
        <p className="text-white/60 text-sm mb-4">{featured.description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Redux Toolkit", "TailwindCSS"].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100  text-white/80 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Call-to-action */}
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium transition hover:text-green "
        >
          View Project →
        </a>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
