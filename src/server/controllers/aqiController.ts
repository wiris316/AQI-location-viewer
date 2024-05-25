import { Request, Response, NextFunction } from "express";
var aqiController = {
    getMyLocation: function (_req: Request, res: Response, next: NextFunction) {
        fetch('https://api.waqi.info/feed/{city}/?token={token}')
            .then(function (data) {
            return data.json();
        })
            .then(function (newData) {
            res.locals.data = newData;
            return next();
        });
    }
};

export default aqiController;
