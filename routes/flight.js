const express = require('express');
const router = express.Router();
const flightController= require('../controllers/flights');

router.route('/getBestDes').get(flightController.getPopularDes)
router.route('/allFlights')
    .get(flightController.getFlights)

router.route('/create')
    .post(flightController.createFlight)

router.route('/delete')
    .post(flightController.deleteFlight)

router.route('/update')
    .post(flightController.updateFlight)

router.route('/searchSpesicFlight')
    .get(flightController.searchSpesicFlight)

router.route('/searchMoreSpecificFlight')
    .get(flightController.searchMoreSpecificFlight)

router.route('/:id')
    .get(flightController.getFlightById)


module.exports = router;