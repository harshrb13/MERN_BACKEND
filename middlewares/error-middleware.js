const errorMiddleware = (err,req,res,next)=>{
    
    const status = err.status || 500;
    const message = err.message || "SERVER ERROR"
    // const extraDetails = err.extraDetails || "NETWORK ERROR"
    
    return res.status(status).json({message})
    
    
}

module.exports = errorMiddleware