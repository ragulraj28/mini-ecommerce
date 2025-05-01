const mongoose = require("mongoose");

const connectDB = () => {

    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log(`MongoDB connected to host:${con.connection.host}`);
    }).catch((err) => {
        console.log(err.message);        
    })

}

module.exports = connectDB;