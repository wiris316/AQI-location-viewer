import React from "react";
import DetailsCard from "./DetailsCard";
import Navbar from "./Navbar";
import "../assets/Dashboard.scss";

const Dashboard = () => {
  return (
    <div id="Dashboard">
      <h1>AQI Location Viewer</h1>
      <Navbar />
      <DetailsCard />
    </div>
  )
}

export default Dashboard;