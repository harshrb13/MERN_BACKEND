const mongoose = require('mongoose');
const URI = process.env.MONGO_URl

const mongoData = async() => {

    try {
        await mongoose.connect(URI)
        console.log("connection successfull")
    } catch (error) {
        console.log("conaction failed")
        process.exit(0)
    }  
}
module.exports = mongoData