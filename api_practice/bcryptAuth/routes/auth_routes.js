
const express = require('express');
const { login,register } = require('../controllers/auth_controllers');
const middlewear1 = require ('../middlewear/middlewear');
const authRoutes = express.Router();



authRoutes.post('/login',middlewear1, login);
authRoutes.post('/register', register);


module.exports = authRoutes;