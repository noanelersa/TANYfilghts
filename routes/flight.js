const express = require('express');
const router = express.Router();
const flightController= require('../controllers/flights');

router.route('/allFlights')
    .get(flightController.getFlights)

router.route('/create')
    .get(flightController.getCreatePage)
    .post(flightController.createFlight)

router.route('/delete')
    .get(flightController.getDeletePage)

router.route('/update')
    .get(flightController.getUpdatePage)
    .post(flightController.updateFlight)

router.route('/:id')
    .get(flightController.getFlightById)

module.exports = router;