const express = require('express');
const router = express.Router();
const { sendotp, verifyOtp, register } = require('../controllers/authController');

router.post('/send-otp', sendotp);
router.post('/verify-otp', verifyOtp);
router.post('/register', register);

module.exports = router;
