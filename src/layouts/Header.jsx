import React, { useState, useEffect, useRef } from "react";

const Header = ({ onMenuClick }) => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 0) {
            // Prevent negative scroll values on some devices
            lastScrollY.current = 0;
            setVisible(true);
            ticking.current = false;
            return;
          }

          if (currentScrollY <= 0) {
            // At top of page, always show header
            setVisible(true);
          } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down - hide header
            setVisible(false);
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up - show header
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-full overflow-x-hidden py-2 px-4 bg-black text-white transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="Primary navigation"
    >
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden text-2xl text-green-500 hover:text-green-400 transition-colors duration-200 flex-shrink-0"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Optional logo or brand name */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <span className="text-lg font-semibold text-green-400 hidden sm:inline-block">
          
        </span>
      </div>

      {/* Right-side links */}
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
