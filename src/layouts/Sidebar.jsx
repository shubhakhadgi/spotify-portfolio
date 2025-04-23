import React from 'react';
import {
  Home,
  User,
  FolderKanban,
  BadgeCheck,
  PenSquare,
  Briefcase,
  Globe
} from "lucide-react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col p-4 overflow-y-auto">
      <div>
        <div className="mb-6 px-2 flex items-center">
          <img src="/logo.png" alt="Spotify" className="w-12" />
          <h1 className="text-green font-bold text-xl">
            <b>Shubha</b>
          </h1>
        </div>

        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <FolderKanban className="w-5 h-5" />
            <span>Projects</span>
          </Link>
          <Link
            to="/skills"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <BadgeCheck className="w-5 h-5" />
            <span>Skills</span>
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <PenSquare className="w-5 h-5" />
            <span>Blog</span>
          </Link>
          <Link
            to="/experience"
            className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-800 rounded cursor-pointer"
          >
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
