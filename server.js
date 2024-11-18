const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api/user", userRoutes)
app.listen(5000, console.log("Server Started"))