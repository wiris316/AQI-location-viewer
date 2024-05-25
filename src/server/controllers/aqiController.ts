import { Request, Response, NextFunction } from "express";
import 'dotenv/config';
const AQI_TOKEN = process.env.AQI_TOKEN

var aqiController = {
    getMyLocation: function (_req: Request, res: Response, next: NextFunction) {
        fetch(`https://api.waqi.info/feed/here/?token=${AQI_TOKEN}`)
            .then((response)=> {
            return response.json();
        })
            .then((data)=> {
            res.locals.data = data;
            return next();
        });
    }
};

export default aqiController;
