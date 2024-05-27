import React from "react";
import "../assets/DetailsCard.scss";
import {
  FaRegFaceGrin,
  FaRegFaceSmile,
  FaRegFaceMeh,
  FaRegFaceFrown,
  FaRegFaceGrimace,
  FaRegFaceTired,
} from "react-icons/fa6";

interface ILocationDetails {
  city: string;
  aqi: number;
  lastUpdated: string;
  category: string;
  color: string;
}

interface DetailsCardProps {
  locationDetails: ILocationDetails;
}

const DetailsCard = ({ locationDetails }: DetailsCardProps) => {
  const faceIcon = {
    ["Good" as string]: (
      <FaRegFaceGrin className="face-icon" style={{ color: locationDetails.color }} />
    ),
    ["Moderate" as string]: (
      <FaRegFaceSmile className="face-icon" style={{ color: locationDetails.color }} />
    ),
    ["Unhealthy for Sensitive Groups" as string]: (
      <FaRegFaceMeh className="face-icon" style={{ color: locationDetails.color }} />
    ),
    ["Unhealthy" as string]: (
      <FaRegFaceFrown className="face-icon" style={{ color: locationDetails.color }} />
    ),
    ["Very Unhealthy" as string]: (
      <FaRegFaceGrimace className="face-icon" style={{ color: locationDetails.color }} />
    ),
    ["Hazardous" as string]: (
      <FaRegFaceTired className="face-icon" style={{ color: locationDetails.color }} />
    ),
  };
  return (
    <div id="DetailsCard">
      {locationDetails.city ? (
        <span id="info">
            <p id="info-lastUpdated">
              Last Updated: {locationDetails.lastUpdated.toString()}
            </p>
          <section id="info-section">
            <h2 id="info-city">{locationDetails.city}</h2>
            <p id="info-category">
              Category: <strong>{locationDetails.category}</strong>
            </p>
            <p id="info-aqi">Air Quality Index: {locationDetails.aqi}</p>
          {faceIcon[`${locationDetails.category}`]}
          </section>
        </span>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default DetailsCard;
