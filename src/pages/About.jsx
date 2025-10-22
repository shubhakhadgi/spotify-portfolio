import React from "react";
import data from '../data.json';
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  const { currentlyBuilding, industries, nations, testimonials } = data;

  return (
    <main className="flex-1 text-white font-sans overflow-x-hidden mt-12">
      <ScrollToTop />
      <div className="w-full max-w-screen mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col sm:flex-row items-start gap-6 px-4 sm:px-8 py-6">
          <div className="flex-shrink-0 self-start">
            <img
              src="assets/img/profile-pic.png"
              alt="Shubha"
              className="w-32 h-32 object-cover rounded-full border-4 border-green dark:border-light-accent/60"
            />
          </div>
          <div className="text-left">
            <p className="uppercase tracking-widest text-xs sm:text-sm md:text-base text-gray-400">
              Frontend Developer
            </p>
            <h1 className="text-5xl font-bold mt-1 text-white dark:text-light-accent">
              Shubha
            </h1>
            <p className="text-gray-400 dark:text-gray-200 mt-2 max-w-md text-sm sm:text-base md:text-lg">
              I build clean, fast, and responsive UIs with a design-first mindset.
            </p>
          </div>
        </section>



        {/* Bio */}
        <section className="px-4 sm:px-8 py-6">
          <p className="text-gray-400 dark:text-gray-200 text-md md:text-lg mt-2">
            I design and build responsive, user-friendly interfaces using React, Tailwind, and modern web tools. I care about clean code, meaningful UX, and bringing ideas to life with intention.
          </p>

          <p className="text-gray-500 mt-4 max-w-4xl">
            Away from the screen, I’m usually sketching, painting, growing plants, or playing music. Creativity keeps me going — on and off the code.
          </p>
        </section>

        {/* Currently Building */}
        <section className="px-4 sm:px-8 py-6">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">Current Project</h2>
          <div className="flex items-start bg-gray-900 dark:bg-light-skin/30 rounded-lg p-4 max-w-md shadow-md space-x-4">
            <img
              src={currentlyBuilding.img}
              alt={currentlyBuilding.title}
              className="w-20 h-20 rounded object-cover"
            />
            <div className="flex flex-col flex-1 text-left">
              <p className="font-semibold text-white dark:text-light-accent">{currentlyBuilding.title}</p>
              <p className="text-gray-400 dark:text-black/90 text-sm mb-2">{currentlyBuilding.description}</p>
              <div className="w-full min-w-[150px] bg-gray-700 dark:bg-gray-200/20 rounded-full h-2 overflow-hidden relative">
                <div
                  className="bg-green dark:bg-light-accent h-full rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${currentlyBuilding.progressPercent || 0}%` }}
                />
              </div>
              <span className="text-gray-400 text-xs mt-1">{currentlyBuilding.progressPercent}% Complete</span>
            </div>
          </div>

        </section>


        {/* Industries */}
        <section className="px-4 sm:px-8 py-6">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">Industries I've Collaborated With</h2>
          <div className="relative group">
            <div className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-spotify scrollbar-no-arrows py-2 pl-4 pr-4">
              {industries.map(({ title, img }) => (
                <div
                  key={title}
                  tabIndex={0}
                  className="relative min-w-[200px] p-2 rounded-lg shadow-lg cursor-pointer overflow-hidden  hover:shadow-xl hover:ring-1 hover:ring-green dark:hover:ring-light-accent transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <img src={img} alt={title} className="w-full h-40 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nations */}
        <section className="px-4 sm:px-8 py-6">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">Worked With Teams Across</h2>
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide py-2 pl-4 pr-4">
            {nations.map(({ name, flag }) => (
              <div
                key={name}
                tabIndex={0}
                className="flex flex-col items-center min-w-[80px]"
              >
                <img
                  src={flag}
                  alt={name}
                  className="w-12 h-12 mb-2 object-cover rounded-full border-2 border-green-500"
                />
                <p className="text-white dark:text-black text-sm whitespace-nowrap">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="px-4 sm:px-8 py-6">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">Best Practices I Follow</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-base sm:text-lg max-w-xl">
            {[
              { href: "https://web.dev/lighthouse-best-practices/", text: "Use Lighthouse for audits" },
              { href: "https://kentcdodds.com/blog/write-fewer-tests", text: "Write fewer, meaningful tests" },
              { href: "https://testing-library.com/docs/guiding-principles", text: "Test user behavior, not implementation" },
              { href: "https://playwright.dev/docs/best-practices", text: "Automate flows with Playwright" },
              { href: "https://css-tricks.com/critical-css/", text: "Extract and use critical CSS" },
              { href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility", text: "Add accessibility checks in CI" }
            ].map(({ href, text }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Code Philosophy */}
        <section className="px-4 sm:px-8 py-6">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">Quote I Live By</h2>
          <div className="bg-gray-900 dark:bg-light-accent/10 p-6 rounded-lg shadow-md max-w-3xl">
            <p className="text-gray-400 dark:text-gray-200 text-sm italic leading-relaxed">
              "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
              <br />
              <span className="text-gray-500 mt-2 block">— Martin Fowler</span>
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 sm:px-8 py-6 mb-8 ">
          <h2 className="text-xl font-bold mb-4 text-white dark:text-light-accent">What Colleagues Say</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-spotify scrollbar-no-arrows py-2 pl-4 pr-4">
            {testimonials.map(({ name, feedback, img }, index) => (
              <div
                key={index}
                tabIndex={0}
                className="flex-shrink-0 my-2 w-64 sm:w-72 h-64 sm:h-72 flex flex-col justify-center items-center bg-gray-900 dark:bg-light-accent/40 rounded-xl p-6 cursor-pointer"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <p className="text-white text-sm text-center italic flex-1">
                  "{feedback}"
                </p>
                <p className="text-green-500 mt-3 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
