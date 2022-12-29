import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user", router) 
mongoose.connect(
    "mongodb+srv://admin:3G5AVsAFCoQCTGQk@cluster0.8kp0rby.mongodb.net/Blog?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and Listening to Localhost 5000"))
.catch((err)=> console.log(err)); 



//Password: 3G5AVsAFCoQCTGQk 