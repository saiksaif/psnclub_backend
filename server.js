const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./routes/psnClub_Route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected');
}).catch((err)=>console.log(err)); 

app.get('/', (req, res)=>{
    res.send('<h2>Please go to /api to use api features...</h2>')
})
app.use('/api', routes);

app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
});
