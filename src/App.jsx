import { useState } from "react";
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

import ParticlesBackground from "./components/ParticlesBackground"; // ✅ make sure this path is correct

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* ✅ Background Particles */}
      <ParticlesBackground />

      {/* ✅ App Content */}
      <div className="flex w-full overflow-x-hidden max-h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden max-h-screen thin-scrollbar">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="flex-1 px-4 pb-32 overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
          <Player />
        </div>
      </div>
    </div>
  );
}

export default App;
