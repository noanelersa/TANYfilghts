const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/login");

router.post("/register", loginController.register);
router.post("/login", loginController.login);
router.get('/logout',loginController.logout);
router.get('/', loginController.renderHomePage);


module.exports = router;
