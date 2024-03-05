const jwt = require('jsonwebtoken')
const userModel = require("../models/user-model")

const userAuthantication = async(req,res,next)=>{
    const token = req.header("Authorization")
    if (!token) {
        res.status(403).json({massage:"token not set"})
        return
    }
    const jwtToken = token.replace("Bearer","").trim()
    // console.log(jwtToken)
    try {
        const isVerifyed = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

        const userData = await userModel.findOne({email:isVerifyed.email}).select({password:0})

        req.user = userData;
        req.token = token;
        req.userId = userData._id
        next()
    } catch (error) {
        res.status(401).json({message:"token not found"})
    }
}

module.exports = userAuthantication