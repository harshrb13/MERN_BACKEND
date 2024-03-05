const {Schema,model} = require("mongoose")

const contactSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    massage:{
        type:String,
        require:true
    }
})

const Contacts = new model('Contact',contactSchema)
module.exports = Contacts