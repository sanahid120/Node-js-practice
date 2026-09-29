const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profile_controllers');
const authMiddlewear = require('../middlewear/authmiddlewear');
const profileRoutes = express.Router()


profileRoutes.get('/',authMiddlewear,getProfile)

profileRoutes.put('/update',authMiddlewear,updateProfile)

module.exports  = profileRoutes