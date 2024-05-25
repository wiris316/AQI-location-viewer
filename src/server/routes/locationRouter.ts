import { Router } from 'express';
import aqiController from '../controllers/aqiController';

const locationRouter = Router();

locationRouter.get('/:location', aqiController.getMyLocation, function (_req, res) {
  return res.status(200).json(res.locals.data);
});

export default locationRouter;
