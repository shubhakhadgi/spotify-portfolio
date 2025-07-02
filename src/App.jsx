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

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-col flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 p-4 pb-32 overflow-y-auto">
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
  );
}

export default App;
