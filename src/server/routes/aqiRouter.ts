import { Router } from 'express';
import aqiController from '../controllers/aqiController';

const aqiRouter = Router();

aqiRouter.get('/', aqiController.getMyLocation, function (_req, res) {
    console.log('res here', res);
    return res.status(200).json(res.locals.data);
});

export default aqiRouter;
