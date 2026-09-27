const express = require('express');
const app = express();


app.use(express.json()); // Middleware to parse JSON request bodies

// Import and use the authentication routes
const authRoutes = require('./routes/auth_routes');
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   )