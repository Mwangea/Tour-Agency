import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
const router = express.Router()

router.post('/:tourId', verifyUser, createBooking);
router.get('/:Id', verifyUser, getBooking);
router.get('/', verifyAdmin, getAllBooking);


export default router;