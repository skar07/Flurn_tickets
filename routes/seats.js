const express = require('express')
const router = express.Router()

const {
    getSeat,
    getSeatPricing,
    createBooking
} = require('../controller/seats');

router.route('/').get(getSeat).post(createBooking);
router.route('/:id').get(getSeatPricing);

module.exports = router;