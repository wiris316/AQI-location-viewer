import React, {
  KeyboardEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import "../assets/Navbar.scss";
import { FaBars, FaLocationDot, FaPencil } from "react-icons/fa6";
import { IAllLocationDetails } from "../interfaces";

interface NavbarProps {
  setSelectedLocation: React.Dispatch<SetStateAction<string>>;
  locationUpdated: boolean;
  allLocationDetails: IAllLocationDetails;
}

const Navbar = ({
  setSelectedLocation,
  locationUpdated,
  allLocationDetails,
}: NavbarProps) => {
  const [active, setActive] = useState(-1);
  const [newCity, setNewCity] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(true);
  const editRef = useRef<number | null>(null);
  const [cityList, setCityList] = useState([
    "Malaysia",
    "Dubai",
    "Dehli",
    "Jakarta",
  ]);

  useEffect(() => {
    if (editRef.current !== null && allLocationDetails[newCity]) {
      const newCityList = [...cityList];
      newCityList[editRef.current] = newCity;
      setCityList(newCityList);
    } else {
      setNewCity("");
    }
  }, [locationUpdated]);

  const handleClick = (
    item: number,
    e: MouseEvent<HTMLDivElement | HTMLLIElement>
  ) => {
    setSelectedLocation(e.currentTarget.id);
    setActive(item);
  };

  const handleEdit = (i: number, e: MouseEvent<SVGElement>) => {
    if (newCity === "" || cityList.includes(newCity) === false) {
      e.stopPropagation();
    }
    setSelectedIndex(i);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>, city: string) => {
    if (e.key === "Enter") {
      let cityString = city.split(" ");
      cityString.forEach((ele, i) => {
        cityString[i] = ele[0].toUpperCase() + ele.substring(1);
      });
      setNewCity(cityString.join(" "));
      setSelectedLocation(cityString.join(" "));
      editRef.current = selectedIndex;
      setSelectedIndex(-1);
    }
  };

  return (
    <nav>
      {/* <FaBars className="menu-icon" onClick={() => setOpen(!open)} />
      {open && ( */}
      <ul id="navbar-list">
        <li
          className={active == -1 ? "navbar-item-active" : "navbar-item"}
          id="here"
          key="here"
          onClick={(e) => handleClick(-1, e)}
        >
          <FaLocationDot className="location-icon" />
          Local Area
        </li>
        {cityList.map((city, i) => (
          <div
            className="navbar-tab"
            id={city}
            onClick={(e) => handleClick(i, e)}
            key={`li-div-${i}`}
          >
            {selectedIndex === i ? (
              <input
                className="input-box"
                onBlur={() => setSelectedIndex(-1)}
                onKeyDown={(e) => handleSubmit(e, e.currentTarget.value)}
                placeholder="Enter city name"
                autoFocus
                key={`input-box-${i}`}
              />
            ) : (
              <li
                className={active === i ? "navbar-item-active" : "navbar-item"}
                id={city}
                key={`li-${i}`}
              >
                {city}
                <FaPencil
                  className="edit-icon"
                  onClick={(e) => handleEdit(i, e)}
                  key={`edit-icon-${i}`}
                ></FaPencil>
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
