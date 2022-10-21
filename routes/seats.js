const express = require('express')
const router = express.Router()

const {
    getSample,
    getSeat,
    createBooking,
    getSeatPricing
} = require('../controller/seats');

/** Using express router to bind controller functions to respective routes, with request methods */
router.route('/').get(getSeat).post(createBooking);
router.route('/:id').get(getSeatPricing);
router.route('/sample').get(getSample);

module.exports = router;