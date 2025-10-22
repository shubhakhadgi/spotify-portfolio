import { useState, useRef, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Player from "./layouts/Player";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";

import ParticlesBackground from "./components/ParticlesBackground";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  return useCallback((...args) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [playerFullscreen, setPlayerFullscreen] = useState(false);

  const lastScrollTop = useRef(0);
  const scrollDirectionCount = useRef({ down: 0, up: 0 });

  const SCROLL_THRESHOLD = 500;
  const SCROLL_COUNT_THRESHOLD = 3;

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const delta = scrollTop - lastScrollTop.current;

    if (Math.abs(delta) < SCROLL_THRESHOLD) return;

    lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;

    if (delta > 0) {

      scrollDirectionCount.current.down += 1;
      scrollDirectionCount.current.up = 0;

      if (
        scrollDirectionCount.current.down >= SCROLL_COUNT_THRESHOLD &&
        playerFullscreen === false
      ) {
        setPlayerFullscreen(true);
      }
    } else {

      scrollDirectionCount.current.up += 1;
      scrollDirectionCount.current.down = 0;

      if (
        scrollDirectionCount.current.up >= SCROLL_COUNT_THRESHOLD &&
        playerFullscreen === true
      ) {
        setPlayerFullscreen(false);
      }
    }
  };


  const throttledHandleScroll = useThrottle(handleScroll, 100);

  return (
    <div className="relative min-h-screen text-white overflow-hidden select-none">
      <ParticlesBackground />
      <div
        className="
    absolute inset-0 z-[-1] bg-black 
    dark:bg-gradient-to-r dark:from-light-skin dark:to-light-light-blue
  "
      />

      <div className="flex w-full overflow-x-hidden max-h-screen relative z-10">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <div className="flex flex-col flex-1 overflow-hidden max-h-screen thin-scrollbar">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

          <main
            className="flex-1 px-4 pb-32 overflow-y-auto overflow-x-hidden"
            onScroll={throttledHandleScroll}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>

          <Player fullscreen={playerFullscreen} setFullscreen={setPlayerFullscreen} />
        </div>
      </div>
    </div>
  );
}

export default App;
