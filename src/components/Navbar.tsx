import React from "react";
import '../assets/Navbar.scss';

const Navbar = () => {
  return (
    <nav >
      <ul id="navbar-list">
        <li className="navbar-item">My Location</li>
        <li className="navbar-item">Location 1</li>
        <li className="navbar-item">Location 2</li>
        <li className="navbar-item">Location 3</li>
      </ul>
    </nav>
  )
}

export default Navbar;