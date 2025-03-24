const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to databse')
    } catch (error) {
        console.log('error in connection to databse')
    }
}

module.exports = connectDB;