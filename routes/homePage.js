const express = require('express');
var router = express.Router();
const homeController = require('../controllers/homePage');
const airportController= require('../controllers/airport');
const clientController= require('../controllers/client');
router.route('/')
    .get(homeController.getHomePage)

/*router.route('/:id')
    .get(homeController.getArticle)
    .put(homeController.updateArticle)
    .delete(homeController.deleteArticle);*/
module.exports = router;