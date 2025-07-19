const Header = ({ onMenuClick }) => {

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-full overflow-x-hidden py-2 px-4 bg-black text-white transition-transform duration-300 ease-in-out`}
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
        <span className="text-lg font-semibold text-green-400 hidden sm:inline-block">
          
        </span>
      </div>

      <div className="flex items-center space-x-6 min-w-0 max-w-full overflow-x-auto no-scrollbar whitespace-nowrap">
        <a
          href="mailto:shubhakhadgi.work@gmail.com"
          className="text-sm text-neutral-400 hover:text-green-500"
        >
          Contact
        </a>
        <a
          href="/"
          download
          className="text-sm text-neutral-400 hover:text-green-500"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
