
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//load enviroment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//use for middleware
app.use(cors());
app.use(express.json());


//sample route
app.get('/', (req, res) =>{
    res.send('Parcel server is running')
})

//start the server

app.listen(port, () =>{
    console.log(`sever is listen on the port ${port}`);
})