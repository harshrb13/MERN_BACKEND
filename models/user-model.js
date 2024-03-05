const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.pre("save",async function(next){
    const user = this;
    if (!user.isModified("password")) {
        next()
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password,salt)
        this.password = hashPassword
    } catch (error) {
        next(error)
    }
})
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password,this.password)
}

userSchema.methods.getUserToken = async function(){
    try {
        // console.log(this)
        return jwt.sign({
            userId:this._id,
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"
        })
    } catch (error) {
        next(error)
    }
}

const User = new mongoose.model("User",userSchema)

module.exports = User;