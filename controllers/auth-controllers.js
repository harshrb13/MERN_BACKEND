const User = require('../models/user-model')
// const bcrypt = require('bcrypt')

//home controller

const home = async(req,res,next)=>{
    try {
        res.status(200)
        .send("home page sucess")
    } catch (error) {
        next(error)
    }
}

//register controller

const register = async(req,res,next)=>{
    try {
        const {username,email,phone,password} = req.body;

        const userExist = await User.findOne({email});
        if (userExist) {
            res.status(402).json({message:"user already exist"})
            return
        }

        const createdUser = await User.create({
            username,
            email,
            phone,
            password
        })

        res.status(200)
        .json({
            "success":"Register Successfull",
            token:await createdUser.getUserToken()
        })
    } catch (error) {
        next(error)
    }
}

//login controller

const login = async (req,res,next)=>{
    try {
        const {email,password}  = req.body;

        const userExist = await User.findOne({email})

        if (!userExist) {
            res.status(400)
            .json({warning:"Invalid cradtials"})
            return
        }

        const passwordMatch = await userExist.comparePassword(password)

        if (passwordMatch) {
            res.status(200)
            .json({
            "success":"login success",
            token:await userExist.getUserToken(),
            userid:userExist._id
        })
        }else{
            res.status(500)
            .json({message:"Invalid detail"})
        }

    } catch (error) {
       next(error)
    }
}
const user = async(req,res)=>{
    try {
        const userData=req.user;
        // console.log(userData)
        res.status(200).json({"userData":userData})
    } catch (error) {
        res.status(401).json({message:error})
    }
}

module.exports = {home,register,login,user}