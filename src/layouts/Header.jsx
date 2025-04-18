import React from 'react'

const Header = () => {
  return (
<nav className="flex items-center justify-end gap-4 w-full py-2 px-8 bg-black">
  <a
    href="mailto:youremail@example.com"
    className="text-sm text-neutral-400 hover:text-white transition"
  >
    Contact
  </a>

  <a
    href="/Resume.pdf"
    download
    className="text-sm text-neutral-400 hover:text-white transition"
  >
    Resume
  </a>

</nav>


      );
}

export default Header