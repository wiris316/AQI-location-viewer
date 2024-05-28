import React, { MouseEvent, SetStateAction, useState } from "react";
import "../assets/Navbar.scss";
import { FaBars } from "react-icons/fa6";

interface NavbarProps {
  setSelectedLocation: React.Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setSelectedLocation }: NavbarProps) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(true);

  const handleClick = (item: number, e: MouseEvent<HTMLLIElement>) => {
    setSelectedLocation(e.currentTarget.id);
    setActive(item);
  };
  return (
    <nav>
      {/* <FaBars className="menu-icon" onClick={() => setOpen(!open)} />
      {open && ( */}
        <ul id="navbar-list">
          <li
            className={active === 0 ? "navbar-item-active" : "navbar-item"}
            id="here"
            onClick={(e) => handleClick(0, e)}
          >
            Local Area
          </li>
          <li
            className={active === 1 ? "navbar-item-active" : "navbar-item"}
            id="malaysia"
            onClick={(e) => handleClick(1, e)}
          >
            Malaysia
          </li>
          <li
            className={active === 2 ? "navbar-item-active" : "navbar-item"}
            id="Dubai"
            onClick={(e) => handleClick(2, e)}
          >
            Dubai
          </li>
          <li
            className={active === 3 ? "navbar-item-active" : "navbar-item"}
            id="Dehli"
            onClick={(e) => handleClick(3, e)}
          >
            Dehli
          </li>
          <li
            className={active === 4 ? "navbar-item-active" : "navbar-item"}
            id="jakarta"
            onClick={(e) => handleClick(4, e)}
          >
            Jakarta
          </li>
        </ul>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
