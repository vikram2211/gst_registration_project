
const express = require('express');
const router = express.Router();

const userController = require("../controller/userController");
const serviceController = require('../controller/serviceController');



//When user try to log-in

router.post('/register',userController.userRegister);
router.post('/login',userController.userLogin);


//When user selects services

router.post('/services',serviceController.serviceData);
router.get('/getDetails',serviceController.getData);



module.exports = router;