import React, {useState} from "react";
import DetailsCard from "./DetailsCard";
import Navbar from "./Navbar";
import "../assets/Dashboard.scss";

interface ILocationDetails {
  city: string, 
  aqi: number, 
  lastUpdated: Date,
  category: string
}

const Dashboard = () => {
  const [locationDetails, setLocationDetails] = useState<ILocationDetails>({ city: '', aqi: -Infinity, lastUpdated: new Date(), category: '' });

  return (
    <div id="Dashboard">
      <h1>AQI Location Viewer</h1>
      <Navbar locationDetails={locationDetails} setLocationDetails={setLocationDetails} />
      <DetailsCard locationDetails={locationDetails} setLocationDetails={setLocationDetails}/>
    </div>
  )
}

export default Dashboard;