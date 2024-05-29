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

interface IAllLocationDetails {
  [city: string]: ILocationDetails;
}

interface DetailsCardProps {
  locationDetails: ILocationDetails;
  allLocationDetails: IAllLocationDetails;
  selectedLocation: string;
}

const DetailsCard = ({
  locationDetails,
  allLocationDetails,
  selectedLocation,
}: DetailsCardProps) => {
  const faceIcon = {
    ["Good" as string]: (
      <FaRegFaceGrin
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
    ["Moderate" as string]: (
      <FaRegFaceSmile
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
    ["Unhealthy for Sensitive Groups" as string]: (
      <FaRegFaceMeh
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
    ["Unhealthy" as string]: (
      <FaRegFaceFrown
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
    ["Very Unhealthy" as string]: (
      <FaRegFaceGrimace
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
    ["Hazardous" as string]: (
      <FaRegFaceTired
        className="face-icon"
        style={{ color: locationDetails.color }}
      />
    ),
  };
  return (
    <div id="DetailsCard">
      {locationDetails.category ? (
        <span id="info">
          <p id="info-lastUpdated">
            Last Updated: {allLocationDetails[selectedLocation]?.lastUpdated}
          </p>
          <hr id="divider" />
          <section id="info-section">
            <span id="info-label-aqi">
              <label id="info-label">AQI:</label>
              <div
                id="info-aqi"
                style={{ color: `${locationDetails.color}` }}
              >
                <strong>
                {locationDetails.aqi}
                </strong>
              </div>
            </span>
            <span id="info-city-category">
              <h2 id="info-city">{locationDetails.city}</h2>
              <p id="info-category">
                Category: <strong>{locationDetails.category}</strong>
              </p>
            </span>
          </section>
          <hr id="divider" />
          {faceIcon[`${locationDetails.category}`]}
        </span>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default DetailsCard;
