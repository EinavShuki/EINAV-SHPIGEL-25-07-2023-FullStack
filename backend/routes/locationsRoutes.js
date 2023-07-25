import express from 'express';
const router = express.Router();
import { getLocations } from '../controllers/locationsController.js';

router.route('/:query').get(getLocations);

export default router;
