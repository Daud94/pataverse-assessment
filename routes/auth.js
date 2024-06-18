const express = require('express');
const {signup, verifyOtp, signin, resendOtp} = require("../controllers/auth.controller");
const router = express.Router();

router.post ('/signup', signup)
router.post ('/signin', signin)
router.put('/verifyOtp', verifyOtp)
router.post('/resendOtp', resendOtp)

module.exports = router