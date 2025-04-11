import React from 'react';
import { Home, Search, Library, Plus, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col justify-between p-4">
      {/* Logo + Nav */}
      <div>
        {/* Logo */}
        <div className="mb-6 px-2">
          <img src="/spotify-logo.svg" alt="Spotify" className="w-32" />
        </div>

        {/* Nav Items */}
        <nav className="space-y-4">
          <Link to="/" className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/projects" className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer">
            <Search className="w-5 h-5" />
            <span>Projects</span>
          </Link>
          <Link to="/library" className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer">
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </Link>
          <Link to="/create-playlist" className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer">
            <Plus className="w-5 h-5" />
            <span>Create Playlist</span>
          </Link>
          <Link to="/liked-songs" className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer">
            <Heart className="w-5 h-5 text-purple-500" />
            <span>Liked Songs</span>
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-x-4 text-xs text-zinc-400">
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About</a>
          <a href="#">Ads</a>
        </div>

        {/* Language Selector */}
        <div className="border border-zinc-500 rounded-full px-4 py-1 flex items-center gap-2 text-sm w-fit cursor-pointer hover:border-white">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
