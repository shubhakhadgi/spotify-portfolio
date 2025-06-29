import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Layers,
  PenSquare,
  Briefcase,
  BarChart3
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col p-4 overflow-y-auto sticky">
      <div>
        <div className="mb-6 px-2 flex items-center">
          <img src="/logo.png" alt="Spotify" className="w-12" />
          <h1 className="text-green font-bold text-xl">
            <b>Shubha</b>
          </h1>
        </div>

        <nav className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <Layers className="w-5 h-5" />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <BarChart3 className="w-5 h-5" />
            <span>Skills</span>
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <PenSquare className="w-5 h-5" />
            <span>Blog</span>
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded cursor-pointer
              ${isActive ? "bg-zinc-800 text-green" : "hover:bg-zinc-800"}`
            }
          >
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
