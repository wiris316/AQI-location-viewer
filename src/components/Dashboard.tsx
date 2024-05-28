import React, { useCallback, useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import Navbar from "./Navbar";
import AQIScaleLegend from "./AQIScaleLegend";
import "../assets/Dashboard.scss";

interface ILocationDetails {
  city: string;
  aqi: number;
  lastUpdated: string;
  category: string;
  color: string;
}

interface IAllLocationDetails {
  [city: string]: ILocationDetails;
}

interface IAQICNScale {
  [key: string]: {
    aqi: number;
    color: string;
  };
}

const AQICNScale: IAQICNScale = {
  Good: { aqi: 50, color: "green" },
  Moderate: { aqi: 100, color: "#349e28" },
  "Unhealthy for Sensitive Groups": { aqi: 150, color: "orange" },
  Unhealthy: { aqi: 200, color: "red" },
  "Very Unhealthy": { aqi: 300, color: "purple" },
  Hazardous: { aqi: Infinity, color: "brown" },
};

const Dashboard = () => {
  const [allLocationDetails, setAllLocationDetails] = useState(
    {} as IAllLocationDetails
  );
  const [locationDetails, setLocationDetails] = useState<ILocationDetails>({
    city: "here",
    aqi: -Infinity,
    lastUpdated: new Date().toLocaleString(),
    category: "",
    color: "",
  });
  const [selectedLocation, setSelectedLocation] = useState<string>("here");
  const [refresh, setRefresh] = useState(false);
  const [locationUpdated, setLocationUpdated] = useState(false);

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
          window.alert("Please enter a valid city name");
          throw new Error(`Error: ${data.data}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const showLocationData = useCallback(async () => {
    if (allLocationDetails[selectedLocation] && !refresh) {
      setLocationDetails({
        ...locationDetails,
        city: allLocationDetails[selectedLocation].city,
        aqi: allLocationDetails[selectedLocation].aqi,
        category: allLocationDetails[selectedLocation].category,
        color: allLocationDetails[selectedLocation].color,
      });
    } else {
      try {
        const res = await fetchLocationData(selectedLocation);
        let category = "";
        let color = "";
        for (const [key, val] of Object.entries(AQICNScale)) {
          if (val.aqi >= res.aqi) {
            category = key;
            color = val.color;
            break;
          }
        }
        const data = {
          ...locationDetails,
          city: res.city.name,
          aqi: res.aqi,
          lastUpdated: new Date().toLocaleString(),
          category: category,
          color: color,
        };
        setLocationDetails(data);
        setAllLocationDetails({
          ...allLocationDetails,
          [selectedLocation]: data,
        });
        setLocationUpdated(!locationUpdated);
        setRefresh(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [selectedLocation, refresh]);

  useEffect(() => {
    showLocationData();
  }, [selectedLocation, refresh]);

  const handleRefresh = () => {
    setRefresh(true);
  };

  return (
    <div id="Dashboard">
      <h1>AQI Location Viewer</h1>
      <span id="Dasboard-content-legend">
        <section id="Dashboard-content">
          <Navbar
            setSelectedLocation={setSelectedLocation}
            locationUpdated={locationUpdated}
            allLocationDetails={allLocationDetails}
          />
          <span>
            <button id="refresh" onClick={handleRefresh}>
              Refresh
            </button>
            <DetailsCard
              locationDetails={locationDetails}
              allLocationDetails={allLocationDetails}
              selectedLocation={selectedLocation}
            />
          </span>
        </section>
        <AQIScaleLegend AQICNScale={AQICNScale} />
      </span>
    </div>
  );
};

export default Dashboard;
