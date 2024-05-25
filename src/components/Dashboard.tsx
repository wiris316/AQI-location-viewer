import React from "react";
import DetailsCard from "./DetailsCard";
import Navbar from "./Navbar";
import "../assets/Dashboard.scss";

const Dashboard = () => {
  return (
    <div id="Dashboard">
      <h2>AQI Location Viewer</h2>
      <Navbar />
      <DetailsCard />
    </div>
  )
}

export default Dashboard;