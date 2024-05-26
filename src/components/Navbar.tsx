import React, {
  useCallback,
  useEffect,
  useState,
  SetStateAction,
} from "react";
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

const AQICNscale = {
  Good: { aqi: 50, color: "green" },
  Moderate: { aqi: 100, color: "yellow" },
  "Unhealthy for Sensitive Groups": { aqi: 150, color: "orange" },
  Unhealthy: { aqi: 200, color: "red" },
  "Very Unhealthy": { aqi: 300, color: "purple" },
  Hazardous: { aqi: Infinity, color: "brown" },
};

const Navbar = ({ locationDetails, setLocationDetails }: NavbarProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const showLocationData = useCallback(async () => {
    try {
      const res = await fetchLocationData(selectedLocation);
      let category = "";
      for (const [key, val] of Object.entries(AQICNscale)) {
        if (val.aqi >= res.aqi) {
          category = key;
          break;
        }
      }

      setLocationDetails({
        ...locationDetails,
        city: res.city.name,
        aqi: res.aqi,
        lastUpdated: new Date(),
        category: category,
      });
    } catch (error) {
      console.error(error);
    }
  }, [selectedLocation]);

  useEffect(() => {
    showLocationData();
  }, [selectedLocation]);

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
        <li className="navbar-item" id="here" onClick={(e) => setSelectedLocation(e.currentTarget.id)}>
          Local Area
        </li>
        <li className="navbar-item" id="seoul" onClick={(e) => setSelectedLocation(e.currentTarget.id)}>
          Seoul
        </li>
        <li className="navbar-item" id="Dubai" onClick={(e) => setSelectedLocation(e.currentTarget.id)}>
          Dubai
        </li>
        <li className="navbar-item" id="Dehli" onClick={(e) => setSelectedLocation(e.currentTarget.id)}>
          Dehli
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
