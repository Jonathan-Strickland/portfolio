import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="nav-name">Jonathan Strickland</h1>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/badges" onClick={() => setMenuOpen(false)}>Badges</Link></li>
        <li><Link to="/sudokumenu" onClick={() => setMenuOpen(false)}>Sudoku</Link></li>
        <li><Link to="/dodgeenemy" onClick={() => setMenuOpen(false)}>Dodge the Enemy</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
