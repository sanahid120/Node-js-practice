const express = require('express');
const profileRoutes = express.Router();

profileRoutes.get('/', (req, res) => {
    // Handle fetching user profile logic here
    res.send('User profile data');
});

profileRoutes.put('/update', (req, res) => {
    // Handle updating user profile logic here
    res.send('User profile updated');
    res.send('User profile updated successfully!');
});

module.exports = profileRoutes;