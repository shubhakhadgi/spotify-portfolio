import data from '../data.json';
const blogs = data.blogs;

const Blog = () => {
  return (
    <div className=" min-h-screen px-6 py-8 text-white font-sans mt-12">

      <h1 className="text-4xl font-bold mb-8">My Blogs</h1>
      
      {Object.entries(blogs).map(([category, posts]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
  {category}
</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{posts.map(({ title, url, date, img }) => (
  <a
    key={title}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-xl overflow-hidden hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
  >
    {img && (
<div className="relative">
  <img
    src={img}
    alt={title}
    className="w-full h-40 object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none rounded-xl" />
</div>

    )}
    <div className="p-5 relative z-10">
      <h3 className="text-lg font-semibold text-white hover:text-green transition-colors mb-2">
        {title}
      </h3>
      <p className="text-white/60 text-sm">{date}</p>
    </div>
  </a>
))}



          </div>
        </section>
      ))}
    </div>
  );
};

export default Blog;
