const mongoose = require("mongoose")

// mongoose.connect(URI)
// const URI = "mongodb://127.0.0.1:27017/mern_admin"
const URI = process.env.MONGODB_URI

const connectDb = async ()=>{
    try {
       await mongoose.connect(URI)
       console.log("connected to database");
    } catch (error) {
        console.error("Database error")
        process.exit(0)
    }
};

module.exports = connectDb