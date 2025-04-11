import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Library from './pages/Library';
import CreatePlaylist from './pages/CreatePlaylist';
import LikedSongs from './pages/LikedSongs';

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
              <Route path="/projects" element={<Projects />} />
              <Route path="/library" element={<Library />} />
              <Route path="/create-playlist" element={<CreatePlaylist />} />
              <Route path="/liked-songs" element={<LikedSongs />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
