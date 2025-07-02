import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Layers,
  PenSquare,
  Briefcase,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed lg:static top-0 left-0 w-64 h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 p-4 overflow-y-auto`}
    >
      <div className="mb-6 px-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10" />
          <h1 className="text-green font-bold text-xl">Shubha</h1>
        </div>
        <button className="lg:hidden text-white text-xl" onClick={onClose}>✕</button>
      </div>

      <nav className="space-y-4">
        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><Home className="w-5 h-5" /><span>Home</span></NavLink>
        <NavLink to="/about" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><User className="w-5 h-5" /><span>About</span></NavLink>
        <NavLink to="/projects" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><Layers className="w-5 h-5" /><span>Projects</span></NavLink>
        <NavLink to="/skills" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><BarChart3 className="w-5 h-5" /><span>Skills</span></NavLink>
        <NavLink to="/blog" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><PenSquare className="w-5 h-5" /><span>Blog</span></NavLink>
        <NavLink to="/experience" className={({ isActive }) => `flex items-center gap-3 px-2 py-2 rounded ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`}><Briefcase className="w-5 h-5" /><span>Experience</span></NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;