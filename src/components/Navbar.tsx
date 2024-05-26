import React, { useCallback, useEffect, useState, SetStateAction } from "react";
import "../assets/Navbar.scss";

interface LocationDetails {
  city: string;
  aqi: number;
  lastUpdated: Date;
  category: string;
}

interface NavbarProps {
  locationDetails: LocationDetails;
  setLocationDetails: React.Dispatch<SetStateAction<LocationDetails>>;
}

const Navbar = ({ locationDetails, setLocationDetails }: NavbarProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const showLocationData = useCallback(async () => {
    try {
      const res = await fetchLocationData(selectedLocation);
      setLocationDetails({
        ...locationDetails,
        city: res.city.name,
        aqi: res.aqi,
        lastUpdated: new Date(),
      });
    } catch (error) {
      console.error(error);
    }
  }, [selectedLocation]);
  
  useEffect(() => {
    showLocationData();
  },[selectedLocation])

  async function fetchLocationData(city: string) {
    try {
      const res = await fetch(`/api/location/${city}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        if (data.status !== "error") {
          return data.data;
        } else {
          throw new Error(`Error: ${data.data}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav>
      <ul id="navbar-list">
        <li
          className="navbar-item"
          id="here"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          My Location
        </li>
        <li
          className="navbar-item"
          id="Austin"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Austin
        </li>
        <li
          className="navbar-item"
          id="Chicago"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Chicago
        </li>
        <li
          className="navbar-item"
          id="Seattle"
          onClick={(e) => setSelectedLocation(e.currentTarget.id)}
        >
          Seattle
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
