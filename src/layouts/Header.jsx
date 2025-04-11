import React from 'react'

const Header = () => {
  return (
        <nav className="flex gap-8 justify-end items-center py-2 pr-8 pl-0 w-full bg-stone-950 max-md:py-2 max-md:pr-5 max-md:pl-0 max-sm:gap-5 max-sm:py-2 max-sm:pr-4 max-sm:pl-0">
          <a
            href="#signup"
            className="text-sm font-bold leading-5 text-neutral-400 hover:text-white transition-colors"
          >
            Sign up
          </a>
          <button
            className="px-6 py-3 text-sm font-bold leading-5 text-black bg-white rounded-3xl cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => console.log("Login clicked")}
          >
            Log in
          </button>
        </nav>
      );
}

export default Header