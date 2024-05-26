import React, { SetStateAction } from "react";
import "../assets/Navbar.scss";

interface NavbarProps {
  setSelectedLocation: React.Dispatch<SetStateAction<string>>
}

const Navbar = ({
  setSelectedLocation,
}: NavbarProps) => {
  return (
    <nav>
      <ul id="navbar-list">
        <li
          className="navbar-item"
          id="here"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Local Area
        </li>
        <li
          className="navbar-item"
          id="seoul"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Seoul
        </li>
        <li
          className="navbar-item"
          id="Dubai"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Dubai
        </li>
        <li
          className="navbar-item"
          id="Dehli"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Dehli
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
