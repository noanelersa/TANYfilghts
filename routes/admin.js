const express = require('express');
const router = express.Router();
const adminController= require('../controllers/admin');

router.route('/getadmin').get(adminController.getAdminByUsername)
router.route('/update').post(adminController.updateAdmin)
router.route('/create').post(adminController.createAdmin)

module.exports = router;