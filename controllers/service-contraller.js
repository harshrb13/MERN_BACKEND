const Services = require("../models/service-model")


const getService = async(req,res)=>{
    try {
        const serviceData = await Services.find();
        if(!serviceData){
            res.status(405).json({message:"Data not get"})
            return
        }
        res.status(200).json({serviceData})
    } catch (error) {
        res.status(401).json({message:"data not response"})
    }
}


module.exports = {getService}