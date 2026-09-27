const express = require('express');
const { login, signup } = require('../controllers/auth_controller');
const authRoutes = express.Router();


// Define your authentication routes here
authRoutes.post('/login', login);
authRoutes.post('/signup', signup);



module.exports = authRoutes;