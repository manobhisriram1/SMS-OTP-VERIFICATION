const express = require('express');
const path = require('path');
const otpHandler = require('./otpHandler');

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint to send OTP
app.get('/send-otp', otpHandler.sendOTP);

// Endpoint to verify OTP
app.get('/verify-otp', otpHandler.verifyOTP);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
