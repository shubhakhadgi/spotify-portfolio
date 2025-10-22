import { Instagram, Linkedin, Github, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full max-w-full overflow-x-hidden py-2 px-4  transition-transform duration-300 ease-in-out dark:bg-gradient-to-r dark:from-light-skin dark:to-light-light-blue dark:text-black "
      aria-label="Primary navigation"
    >
      <button
        className="lg:hidden text-2xl text-green-500 hover:text-green-400 transition-colors duration-200 flex-shrink-0"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>

      <div className="flex-1 flex justify-center lg:justify-start">
        <span className="text-lg font-semibold text-green-400 hidden sm:inline-block"></span>
      </div>

      <div className="flex items-center space-x-4 min-w-0 max-w-full overflow-x-auto no-scrollbar whitespace-nowrap">
        <a
          href="https://www.instagram.com/strokes_byshubha/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300 dark:bg-neutral-200 dark:text-black dark:hover:bg-green-500">
            <Instagram size={18} />
          </div>
        </a>

        <a
          href="https://linkedin.com/in/shubhakhadgi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300 dark:bg-neutral-200 dark:text-black dark:hover:bg-green-500">
            <Linkedin size={18} />
          </div>
        </a>

        <a
          href="https://github.com/shubhakhadgi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300 dark:bg-neutral-200 dark:text-black dark:hover:bg-green-500">
            <Github size={18} />
          </div>
        </a>

        <a
          href="https://dev.to/shubhakhadgi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dev.to"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300 dark:bg-neutral-200 dark:text-black dark:hover:bg-green-500">
            <FileText size={18} />
          </div>
        </a>

        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300 dark:bg-neutral-200 dark:text-black dark:hover:bg-green-500"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
