import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//protected Routes tocken base
export const requireSignIn = async (req,res,next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
    }
}

//admin Access
export const isAdmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                SUCCESS:false,
                message:"Invalid admin Access"
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            SUCCESS:false,
            error,
            message:"Error occured in admin middleware"
        })
        
    }
}