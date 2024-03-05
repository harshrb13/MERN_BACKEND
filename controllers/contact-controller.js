//contact contraller
const userContact = require('../models/contact-model')
const contact = async(req,res,next)=>{
    try {
        const {username,email,massage} = req.body;
        const createMassage = await userContact.create({
            username,
            email,
            massage
        })
        if (!createMassage) {
            res.status(403).json({message:"massage not sent"})
        }
        return res.status(200).json({
            createMassage
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {contact}