import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles.scss";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar pad">
      <div className="header">
        <Link to="/">Sanket</Link>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === "/work" ? "active-link" : ""}>
            <Link to="/work">Work</Link>
          </li>
          <li className={location.pathname === "/about" ? "active-link" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/blog" ? "active-link" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
