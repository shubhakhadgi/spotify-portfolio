import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'

import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Player from './layouts/Player';

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Blog from './pages/Blog'
import Experience from './pages/Experience'

function App() {

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />

          <main className="flex-1 bg-gray-900 text-white p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>

          <Player/>
        </div>
      </div>
    </Router>
  )
}

export default App
