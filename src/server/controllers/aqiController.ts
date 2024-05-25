import { Request, Response, NextFunction } from "express";
import "dotenv/config";
const AQI_TOKEN = process.env.AQI_TOKEN;

var aqiController = {
  getMyLocation: function (req: Request, res: Response, next: NextFunction) {
    const {location} = req.params;
    fetch(`https://api.waqi.info/feed/${location}/?token=${AQI_TOKEN}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res.locals.data = data;
        return next();
      });
  },
};

export default aqiController;
