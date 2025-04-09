import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Design from './pages/Design'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
import Marketing from './pages/Marketing'
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </Router>
  )
}

export default App
