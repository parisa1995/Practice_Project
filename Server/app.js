const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());  // For parsing JSON data from the request body

// Create
app.post('/add', (req, res) => {
    console.log('Test');  // Logs to console when a POST request is made to /add
    res.send('Post request received');
});

// Read
app.get('/getAll', (req, res) => {
    console.log("Test");  // Logs to console when a GET request is made to /getAll
    res.send('Get request received');
});

// Listen on the port from environment variable or 5000 if not set
app.listen(process.env.PORT || 4000, () => {
    console.log('App is running');
});