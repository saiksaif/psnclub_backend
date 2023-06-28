const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Req recieved');
    res.send('Main of Project Backend!');
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
});
