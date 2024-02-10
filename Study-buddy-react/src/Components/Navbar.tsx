import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img id="logo" src="/images/studybuddy-logo.png" alt="logo" />
      </Link>
    </nav>
  );
}
