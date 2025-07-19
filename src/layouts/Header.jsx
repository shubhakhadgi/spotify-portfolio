import { Instagram, Linkedin, Github, FileText } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-full overflow-x-hidden py-2 px-4 bg-black text-white transition-transform duration-300 ease-in-out"
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
    <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300">
      <Instagram size={18} />
    </div>
  </a>

  <a
    href="https://linkedin.com/in/shubhakhadgi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300">
      <Linkedin size={18} />
    </div>
  </a>

  <a
    href="https://github.com/shubhakhadgi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300">
      <Github size={18} />
    </div>
  </a>

  <a
    href="https://dev.to/shubhakhadgi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Dev.to"
  >
    <div className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-green-600 text-neutral-400 hover:text-white flex items-center justify-center transition-colors duration-300">
      <FileText size={18} />
    </div>
  </a>
</div>

    </nav>
  );
};

export default Header;
