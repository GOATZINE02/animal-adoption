import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🐾 Vaasan Eläinsuoja
      </Link>

      <div className="nav-links">
        <Link to="/">Etusivu</Link>
        <Link to="/#animals">Eläimet</Link>
      </div>
    </nav>
  );
}
