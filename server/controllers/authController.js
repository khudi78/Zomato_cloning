const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator")
const { JWT_SECRET } = process.env; // Make sure to add JWT_SECRET in your .env file
// Send OTP
 

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    
    service:"gmail",
     // e.g., 'smtp.example.com'
    port: 465, // e.g., 587
    secure:true,
    debug:true,
    secureConnection:false,
    // secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user:"krkhushi2001@gmail.com",
      pass: "kqakesyzhdqpozxx",
    },
    tls:{
        rejectUnauthorized:true
    }
  });
  
  exports.sendotp = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Generate OTP
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
  
      // Check if OTP already exists
      let result = await OTP.findOne({ otp: otp });
      while (result) {
        otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        });
        result = await OTP.findOne({ otp: otp });
      }
  
      // Save OTP to database
      const otpPayload = { email, otp };
      await OTP.create(otpPayload);
  
      // Update or create user with OTP
      await User.findOneAndUpdate(
        { email },
        { otp, otpExpires: Date.now() + 15 * 60 * 1000 }, // OTP expires in 15 minutes
        { upsert: true, new: true }
      );
  
      // Send OTP via email
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
          if (!res.headersSent) {
            return res.status(500).json({
              success: false,
              message: 'Failed to send OTP via email.',
            });
          }
        } else {
          console.log('Email sent:', info.response);
          if (!res.headersSent) {
            return res.status(200).json({
              success: true,
              message: 'OTP Sent Successfully',
            });
          }
        }
      });
    } catch (error) {
      console.log(error.message);
      if (!res.headersSent) {
        return res.status(500).json({ success: false, error: error.message });
      }
    }
  };


// Verify OTP and Login
exports.verifyOtp = async (req, res) => {
    try {
      const { email, otp } = req.body;
  
      // Find the OTP record for the email
      const otpRecord = await OTP.findOne({ email, otp });
  
      // Check if OTP exists and is valid
      if (!otpRecord) {
        return res.status(400).json({
          success: false,
          message: 'Invalid OTP or OTP has expired.',
        });
      }
  
      // Remove OTP record after successful verification
      await OTP.deleteOne({ email, otp });
  
      // Check if the user already exists, if not create a new user
      let user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ email });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: '1h', // Token expiration time
      });
  
      res.status(200).json({
        success: true,
        message: 'OTP verified successfully',
        token,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  };

// Register
exports.register = async (req, res) => {
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
    });

    await user.save();

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
