const userData = require('../models/user-model')
const contactData = require('../models/contact-model')
const Services = require('../models/service-model')

const getAllUsers = async(req,res,next)=>{
    try {
        const users = await userData.find({},{password:0});
        if (!users) {
            res.status(401).json({message:"users not found"})
            return
        }
        res.status(200).json({users})

    } catch (error) {
        next(error)
    }
}

const getAllContacts = async(req,res,next)=>{
    try {
        const contacts = await contactData.find();
        if (!contacts) {
            res.status(401).json({message:"contacts not found"})
            return
        }
        res.status(200).json({contacts})

    } catch (error) {
        next(error)
    }
}

const deleteUser = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const user = await userData.findByIdAndDelete({_id:id}) 
        if (!user) {
            res.status(403).json({message:"user not exist"})
            return
        }
        res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        next(error)
    }
}

const getUserById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const user = await userData.findOne({_id:id}) 
        if (!user) {
            res.status(403).json({message:"user not exist"})
            return
        }
        res.status(200).json({user})
    } catch (error) {
        next(error)
    }
}

const updateUserById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        
        const updatedUserData = req.body;
        
        const updateUser = await userData.updateOne({_id:id.toString()},{
            $set:updatedUserData
        })
        
        return res.status(200).json({updateUser})

    } catch (error) {
        next(error)
    }
}

const deleteContactsById = async(req,res,next)=>{
    try {
        const id = req.params.id

        const deleteContact = await contactData.findByIdAndDelete({_id:id})
        
        if (!deleteContact) {
            res.status(403).json({message:"contact not exist"})
            return
        }

        return res.status(200).json({message:"message deleted successfully"})

    } catch (error) {
        next(error)
    }
}

const deleteServiceById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        
        const data = await Services.findByIdAndDelete({_id:id});

        if (!data) {
            res.status(403).json({message:"service not exist"})
            return
        }
        return res.status(200).json({message:"service deleted successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUser,getUserById,updateUserById,deleteContactsById,deleteServiceById}