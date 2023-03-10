const mongoose = require("mongoose")
require('dotenv').config()

const mongooseURL = process.env.MONGOOSE_URL

 const connectToMongo = () =>{
    mongoose.connect(mongooseURL)
    console.log("Mongodb")
}

module.exports = connectToMongo;