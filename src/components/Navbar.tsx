import React from "react";
import "../assets/Navbar.scss";
import { fetchLocationData } from "../server/api";

const Navbar = () => {
  const showLocation = async (location: string) => {
    try {
      const res = await fetchLocationData(location);
      console.log('res',res)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <nav>
      <ul id="navbar-list">
        <li className="navbar-item" onClick={() => showLocation("here")}>
          My Location
        </li>
        <li className="navbar-item">Location 1</li>
        <li className="navbar-item">Location 2</li>
        <li className="navbar-item">Location 3</li>
      </ul>
    </nav>
  );
};

export default Navbar;
