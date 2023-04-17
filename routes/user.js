const express = require("express");
const router = express.Router();

const userController  = require("../controllers/user");

router.post("/update", userController.updateUser);
router.get("/getUser", userController.getUser);
router.post("/delete", userController.deleteUser);

module.exports = router