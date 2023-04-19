const express = require('express');
const router = express.Router();
const airportController= require('../controllers/airport');

router.route('/register').post(airportController.createAirport)
router.route('/getAirport').get(airportController.getAirport)
router.route('/getAirports').get(airportController.getAirports)
router.route('/update').post(airportController.updateAirport)
router.route('/delete').post(airportController.deleteAirport)

module.exports = router;