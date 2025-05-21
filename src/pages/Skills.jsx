import { BarChart3, Star } from "lucide-react";

const skills = [
  { name: "React", level: 90, description: "Component-driven UI with hooks" },
  { name: "TypeScript", level: 85, description: "Strict typing & safer code" },
  { name: "TailwindCSS", level: 90, description: "Utility-first design" },
  { name: "Redux Toolkit", level: 80, description: "State management simplified" },
];

const tools = [
  { name: "VS Code", image: "https://picsum.photos/100?1" },
  { name: "GitHub", image: "https://picsum.photos/100?2" },
  { name: "Figma", image: "https://picsum.photos/100?3" },
  { name: "Vite", image: "https://picsum.photos/100?4" },
];

const featured = [
  { title: "Dashboard App", image: "https://picsum.photos/300/160?1", description: "React + RTK + Tailwind" },
  { title: "Weather App", image: "https://picsum.photos/300/160?2", description: "Live weather data" },
  { title: "Portfolio Site", image: "https://picsum.photos/300/160?3", description: "Interactive personal site" },
];

export default function SkillsPage() {
  return (
    <main className="px-6 py-8 text-white space-y-12">
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
            <div key={idx} className="bg-white/5 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-white/60 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded">
                <div
  className="h-2 rounded"
  style={{
    width: `${skill.level}%`,
    backgroundColor: "#22c55e" // or use Tailwind class: bg-green-500
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
              className="flex flex-col items-center bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
            >
              <img src={tool.image} alt={tool.name} className="w-16 h-16 object-cover rounded mb-2" />
              <p className="text-white text-sm text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-yellow-400" />
          <h2 className="text-2xl font-semibold">Featured Work</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-2">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[260px] bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition"
            >
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
