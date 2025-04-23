import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Badges from "./pages/Badges";
import SudokuMenu from './pages/SudokuMenu';
import SudokuGame from './pages/SudokuGame';
import DodgeEnemy from "./pages/DodgeEnemy";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/sudokumenu" element={<SudokuMenu />} />
        <Route path="/sudoku/:difficulty/:level" element={<SudokuGame key={window.location.pathname} />} />
        <Route path="/dodgeenemy" element={<DodgeEnemy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
