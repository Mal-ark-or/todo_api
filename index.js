const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./Route/todoRoute");


// const live_url = "";

// Improved: Switched 'localhost' to '127.0.0.1' to prevent potential IPv6 resolution bugs in Node.js
const local_url = "mongodb://127.0.0.1:27017/UserDB"; 

mongoose
 .connect(local_url)
 .then(() => console.log("MongoDB connected successfully"))
 .catch((err) => console.error("Database connection error: ", err)); // Fixed: Added missing semicolon

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base API routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Mount your todo router
app.use("/todos", router);

// Server startup
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});