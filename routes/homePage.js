const express = require('express');
var router = express.Router();
const homeController = require('../controllers/homePage');
const airportController= require('/controllers/airport');
router.route('/')
    .get(homeController.getHomePage)

/*router.route('/:id')
    .get(homeController.getArticle)
    .put(homeController.updateArticle)
    .delete(homeController.deleteArticle);*/

router.route('test').get(airportController).get()// what here
module.exports = router;