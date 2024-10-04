const express = require("express");
const app = express();
const dotenv = require('dotenv');
const path =require('path');
const connectDB = require("./config/connectDB");
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})
const PORT = process.env.PORT;
const cors = require("cors");

const product = require("./routes/product");
const orders = require("./routes/order");

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1/', product);
app.use('/api/v1/', orders);

app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT} in ${process.env.NODE_ENV}`);
    
})