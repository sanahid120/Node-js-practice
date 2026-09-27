const express = require('express');
const authRoutes = express.Router();


authRoutes.post('/login', (req, res) => {
    // Handle login logic here
    const { email, password } = req.body; // Assuming email and password are sent in the request body
    res.json({
        statusCode: 200,
        status: 'success',
        message: 'Login successful',
        email: email,
        password: password
    });
});

authRoutes.post('/signup', (req, res) => {
    // Handle registration logic here
    const { email, password } = req.body;
    res.send(`email: ${email}, password: ${password}`);
});

module.exports = authRoutes;