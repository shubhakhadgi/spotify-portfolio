import React from 'react';

const Header = ({ onMenuClick }) => {
  return (
    <nav className="flex items-center justify-between gap-4 w-full py-2 px-4 bg-black text-white">
      {/* Hamburger for mobile */}
      <button className="lg:hidden text-xl" onClick={onMenuClick}>
        ☰
      </button>

      <div className="flex gap-4 ml-auto">
        <a href="mailto:youremail@example.com" className="text-sm text-neutral-400 hover:text-white transition">Contact</a>
        <a href="/Resume.pdf" download className="text-sm text-neutral-400 hover:text-white transition">Resume</a>
      </div>
    </nav>
  );
};

export default Header;