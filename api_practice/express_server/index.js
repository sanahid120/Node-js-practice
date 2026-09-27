// run command npm install express --save first

const express = require('express');
const authRoutes = require('./routes/auth_routes');
const profileRoutes = require('./routes/profile_routes');
const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
