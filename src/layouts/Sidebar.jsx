import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Layers,
  PenSquare,
  Briefcase,
  BarChart3
} from "lucide-react";
import { useEffect, useRef } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed lg:sticky top-0 left-0 h-screen w-64 
              bg-black text-white 
              dark:bg-white/50 dark:text-gray-200
              z-50 transform transition-transform duration-300 ease-in-out pt-12
              ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 p-4 overflow-hidden`}
    >
      <div className="mb-6 px-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10" />
          <h1 className="text-green font-bold text-xl">Shubha</h1>
        </div>
        <button className="lg:hidden text-white dark:text-black text-xl" onClick={onClose}>✕</button>
      </div>

      <nav className="space-y-4">
        {[
          { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
          { to: "/about", icon: <User className="w-5 h-5" />, label: "About" },
          { to: "/projects", icon: <Layers className="w-5 h-5" />, label: "Projects" },
          { to: "/skills", icon: <BarChart3 className="w-5 h-5" />, label: "Skills" },
          { to: "/blog", icon: <PenSquare className="w-5 h-5" />, label: "Blog" },
          { to: "/experience", icon: <Briefcase className="w-5 h-5" />, label: "Experience" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded transition-colors duration-200
           ${isActive ? "bg-zinc-800 text-green dark:text-light-accent dark:bg-zinc-200" : "hover:bg-zinc-800 dark:hover:bg-zinc-200"}`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>

  );
};

export default Sidebar;
