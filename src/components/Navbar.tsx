import React, {
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import "../assets/Navbar.scss";
import { FaBars } from "react-icons/fa6";

interface NavbarProps {
  setSelectedLocation: React.Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setSelectedLocation }: NavbarProps) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(-1);
  const [cityList, setCityList] = useState([
    "Malaysia",
    "Dubai",
    "Dehli",
    "Jakarta",
  ]);

  const handleClick = (item: number, e: MouseEvent<HTMLLIElement>) => {
    setSelectedLocation(e.currentTarget.id);
    setActive(item);
  };

  const handleEdit = (i: number) => {
    setEdit(i);
  };

  const handleSubmit = (
    e: KeyboardEvent<HTMLInputElement>,
    city: string,
    i: number
  ) => {
    if (e.key === "Enter") {
      console.log("user pressed Enter");
      setSelectedLocation(city);
      const newCityList = [...cityList];
      newCityList[i] = city;
      setCityList(newCityList);
      setEdit(-1);
    }
  };

  return (
    <nav>
      {/* <FaBars className="menu-icon" onClick={() => setOpen(!open)} />
      {open && ( */}
      <ul id="navbar-list">
        <li
          className={active === -1 ? "navbar-item-active" : "navbar-item"}
          id="here"
          onClick={(e) => handleClick(-1, e)}
        >
          Local Area
        </li>
        {cityList.map((city, i) => (
          <div>
            {edit === i ? (
              <input
                onBlur={() => setEdit(-1)}
                onKeyDown={(e) => handleSubmit(e, e.currentTarget.value, i)}
                autoFocus
              />
            ) : (
              <li
                className={active === i ? "navbar-item-active" : "navbar-item"}
                id={city}
                onClick={(e) => handleClick(i, e)}
              >
                {city}
                <button onClick={() => handleEdit(i)}>-</button>
              </li>
            )}
          </div>
        ))}
      </ul>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
