import React, { useEffect, SetStateAction } from "react";
import "../assets/DetailsCard.scss"

interface ILocationDetails {
  city: string, 
  aqi: number, 
  lastUpdated: Date,
  category: string
}

interface DetailsCardProps {
  locationDetails: ILocationDetails,
  setLocationDetails: React.Dispatch<SetStateAction<ILocationDetails>>,
}

const DetailsCard = ({ locationDetails, setLocationDetails }: DetailsCardProps) => {

  return (
    <div id="DetailsCard">
      {locationDetails.city ?
        <span>
          <p>{(locationDetails.lastUpdated).toString()}</p>
          <h2>{locationDetails.city}</h2>
          <p>{locationDetails.aqi}</p>
          <p>{locationDetails.category}</p>
        
        </span>
        : 'Loading...'
      }
    </div>
  )
}

export default DetailsCard;