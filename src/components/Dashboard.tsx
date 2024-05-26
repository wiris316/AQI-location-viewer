import React, { useCallback, useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import Navbar from "./Navbar";
import "../assets/Dashboard.scss";

interface ILocationDetails {
  city: string;
  aqi: number;
  lastUpdated: string;
  category: string;
}

const AQICNscale = {
  Good: { aqi: 50, color: "green" },
  Moderate: { aqi: 100, color: "yellow" },
  "Unhealthy for Sensitive Groups": { aqi: 150, color: "orange" },
  Unhealthy: { aqi: 200, color: "red" },
  "Very Unhealthy": { aqi: 300, color: "purple" },
  Hazardous: { aqi: Infinity, color: "brown" },
};

const Dashboard = () => {
  const [locationDetails, setLocationDetails] = useState<ILocationDetails>({
    city: "",
    aqi: -Infinity,
    lastUpdated: new Date().toLocaleString(),
    category: "",
  });
  const [selectedLocation, setSelectedLocation] = useState("");
  const [refresh, setRefresh] = useState(false);

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

  const showLocationData = useCallback(async () => {
    try {
      const res = await fetchLocationData(
        selectedLocation ? selectedLocation : "here"
      );
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
        lastUpdated: new Date().toLocaleString(),
        category: category,
      });
    } catch (error) {
      console.error(error);
    }
  }, [selectedLocation]);

  useEffect(() => {
    showLocationData();
  }, [selectedLocation, refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div id="Dashboard">
      <h1>AQI Location Viewer</h1>
      <Navbar setSelectedLocation={setSelectedLocation} />
      <button onClick={handleRefresh}>Refresh</button>
      <DetailsCard
        locationDetails={locationDetails}
        setLocationDetails={setLocationDetails}
      />
    </div>
  );
};

export default Dashboard;
