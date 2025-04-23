import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="nav-name">Jonathan Strickland</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/badges">Badges</Link></li>
        <li><Link to="/sudokumenu">Sudoku</Link></li>
        <li><Link to="/dodgeenemy">Dodge the Enemy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
