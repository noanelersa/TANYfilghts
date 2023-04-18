const express = require('express');
const router = express.Router();
const airportController= require('../controllers/airport');

router.route('/register')
    .post(airportController.createAirport)

router.route('/getAirports').get(airportController.getAirports)

module.exports = router;