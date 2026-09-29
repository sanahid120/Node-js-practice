
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db');
 
const authRoutes = require('./routes/auth_routes');
const profileRoutes = require('./routes/profile_routes');
app.use(express.json());

app.use('/auth', authRoutes);
 
app.use('/profile',profileRoutes);


app.listen(process.env.port, () => { 
  console.log(`Server is running on port ${process.env.port}`);
  connectDB();
});