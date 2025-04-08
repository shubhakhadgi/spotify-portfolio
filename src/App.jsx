import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Design from './pages/Design'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
    </Router>
  )
}

export default App
