import React from 'react';

const blogs = {
  "Web Development": [
    {
      title: "Mastering React Hooks",
      url: "https://dev.to/yourprofile/mastering-react-hooks",
      date: "June 2025",
    },
    {
      title: "Building Responsive UI",
      url: "https://dev.to/yourprofile/building-responsive-ui",
      date: "May 2025",
    },
    {
      title: "Mastering React Hooks",
      url: "https://dev.to/yourprofile/mastering-react-hooks",
      date: "June 2025",
    },
    {
      title: "Building Responsive UI",
      url: "https://dev.to/yourprofile/building-responsive-ui",
      date: "May 2025",
    },
  ],
  "JavaScript": [
    {
      title: "Understanding Closures",
      url: "https://dev.to/yourprofile/understanding-closures",
      date: "April 2025",
    },
    {
      title: "Async/Await Made Simple",
      url: "https://dev.to/yourprofile/async-await-made-simple",
      date: "March 2025",
    },
  ],
};

const Blog = () => {
  return (
    <div className="bg-black min-h-screen px-6 py-8 text-white font-sans">

      <h1 className="text-4xl font-bold mb-8">My Blogs</h1>
      
      {Object.entries(blogs).map(([category, posts]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
  {category}
</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map(({ title, url, date }) => (
              <a
  key={title}
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-xl p-5 block hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
>
  <h3 className="text-lg font-semibold text-white hover:text-green transition-colors mb-2">
    {title}
  </h3>
  <p className="text-white/60 text-sm">{date}</p>
</a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blog;
