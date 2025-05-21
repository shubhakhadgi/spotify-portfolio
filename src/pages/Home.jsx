import { Play } from "lucide-react";

const projects = [
  { title: "Hotel Thrive", image: "https://picsum.photos/300?1" },
  { title: "Bonum Cha", image: "https://picsum.photos/300?2" },
  { title: "Vivid Interiors", image: "https://picsum.photos/300?3" },
  { title: "Oral & Dental Care", image: "https://picsum.photos/300?4" },
];

const blogPosts = [
  { title: "Mastering useEffect", subtitle: "React Essentials", image: "https://picsum.photos/400?5" },
  { title: "Understanding Redux", subtitle: "State Management", image: "https://picsum.photos/400?6" },
  { title: "TailwindCSS Tips", subtitle: "Style Efficiently", image: "https://picsum.photos/400?7" },
];

const skills = [
  { title: "React", image: "https://picsum.photos/400?8" },
  { title: "TypeScript", image: "https://picsum.photos/400?9" },
  { title: "TailwindCSS", image: "https://picsum.photos/400?10" },
  { title: "Redux Toolkit", image: "https://picsum.photos/400?11" },
];

const tools = [
  { name: "Figma", image: "https://picsum.photos/300?12" },
  { name: "VS Code", image: "https://picsum.photos/300?13" },
  { name: "GitHub", image: "https://picsum.photos/300?14" },
  { name: "Vite", image: "https://picsum.photos/300?15" },
];

const featured = {
  title: "Dashboard App",
  artist: "Built with React + RTK + TailwindCSS",
  image: "https://picsum.photos/1600/400?16",
};

const sideProjects = [
  { title: "To-do App", image: "https://picsum.photos/300?17" },
  { title: "Weather App", image: "https://picsum.photos/300?18" },
  { title: "Portfolio Site", image: "https://picsum.photos/300?19" },
];

const categories = [
  { title: "💻 Projects", image: "https://picsum.photos/300?20" },
  { title: "🧠 Blogs", image: "https://picsum.photos/300?21" },
  { title: "🎨 Design", image: "https://picsum.photos/300?22" },
];

const Home = () => {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <main className="flex flex-col gap-12 px-6 py-8 overflow-y-auto">
      <section className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl text-white font-bold">{greeting}, I'm Shubha!</h1>
            <p className="text-white/80 mt-2 text-lg max-w-2xl">
              Frontend Developer crafting interactive dashboards, elegant UIs,
              and seamless web experiences. Explore my latest work, articles,
              and projects that blend creativity with logic.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/200?23" // Replace with your profile photo
              alt="Shubha"
              className="w-36 h-36 object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {projects.map((item, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4">
              <img src={item.image} className="w-full h-36 object-cover rounded mb-4" alt={item.title} />
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4">
              <img src={post.image} className="w-full h-36 object-cover rounded mb-4" alt={post.title} />
              <p className="text-white font-semibold">{post.title}</p>
              <p className="text-white/60">{post.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/5 rounded-xl p-6">
  <h2 className="text-3xl font-bold text-gradient-to-r from-yellow-400 to-red-500 mb-4">Skills & Tools</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {skills.map((skill, idx) => (
      <div key={idx} className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 transition duration-300">
        <div className="relative w-full h-36 mb-4 rounded-lg overflow-hidden">
          <img
            src={skill.image}
            alt={skill.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-white font-semibold text-lg">{skill.title}</div>
        <p className="text-white/60 text-sm">{skill.description}</p>
      </div>
    ))}
  </div>
</section>


      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Tools I Use</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 transition p-4 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={tool.image} className="w-full h-full object-cover" alt={tool.name} />
              </div>
              <p className="text-white text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="relative bg-white/5 hover:bg-white/10 rounded-xl p-6">
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
          />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl text-white font-bold">{featured.title}</h2>
            <p className="text-white/60 text-lg">{featured.artist}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Side Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sideProjects.map((proj, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4">
              <img src={proj.image} className="w-full h-36 object-cover rounded mb-4" alt={proj.title} />
              <p className="text-white font-semibold">{proj.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Browse By Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 transition rounded-xl p-4">
              <img src={cat.image} className="w-full h-36 object-cover rounded mb-4" alt={cat.title} />
              <p className="text-white text-center">{cat.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
