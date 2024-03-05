const adminMiddleware = (req,res,next)=>{
    try {
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            res.status(401).json({message:"Access diened , user is not admin",admin:false})
            return
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware