import React from "react";
import "../assets/AQIScaleLegend.scss";
import { IAQICNScale } from "../interfaces";

const AQIScaleLegend = ({ AQICNScale }: { AQICNScale: IAQICNScale }) => {
  return (
    <div id="legend">
      {Object.entries(AQICNScale).map(([keys, val], i) => (
        <span className="legend-info">
          <span
            className="legend-color-code"
            style={{ backgroundColor: `${val.color}` }}
          ></span>
          <p className="legend-category">{keys}</p>
        </span>
      ))}
    </div>
  );
};

export default AQIScaleLegend;
