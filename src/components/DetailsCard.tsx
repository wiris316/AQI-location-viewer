import React, { useEffect, SetStateAction } from "react";
import "../assets/DetailsCard.scss";

interface ILocationDetails {
  city: string;
  aqi: number;
  lastUpdated: string;
  category: string;
}

interface DetailsCardProps {
  locationDetails: ILocationDetails;
}

const DetailsCard = ({ locationDetails }: DetailsCardProps) => {
  return (
    <div id="DetailsCard">
      {locationDetails.city ? (
        <span id="info">
          <p id="info-lastUpdated">
            Last Updated: {locationDetails.lastUpdated.toString()}
          </p>
          <h2 id="info-city">{locationDetails.city}</h2>
          <p id="info-category">
            Category: <strong>{locationDetails.category}</strong>
          </p>
          <p id="info-aqi">Air Quality Index: {locationDetails.aqi}</p>
        </span>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default DetailsCard;
