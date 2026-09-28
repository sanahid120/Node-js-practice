
const express = require("express");
const connectDB = require("./db");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const notesRoute = require("./routes/note_routes");


app.use(express.json());
app.use("/notes", notesRoute);
   

app.listen(process.env.port,  async () => { 
  console.log(`Server is running on port ${process.env.port}`);
   await connectDB();
});  