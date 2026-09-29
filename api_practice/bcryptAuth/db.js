const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("node:dns");
dns.setServers(["8.8.8.8"]);
dotenv.config();
async function connectDB() {
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully")

  }   
  catch(err){ 
    console.error("MongoDB connection failed:", err.message);
  }
}
module.exports = connectDB; 