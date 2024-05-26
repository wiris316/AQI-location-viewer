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
  const [locationDetails, setLocationDetails] = useState<ILocationDetails>({ city: '', aqi: 0, lastUpdated: new Date(), category: '' });
  
  return (
    <div id="Dashboard">
      <h1>AQI Location Viewer</h1>
      <Navbar locationDetails={locationDetails} setLocationDetails={setLocationDetails} />
      <DetailsCard />
    </div>
  )
}

export default Dashboard;