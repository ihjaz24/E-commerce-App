import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken"

export const registerController = async (req,res) => {
    try {
        const {name,email,password,phone,address} = req.body

        //validation
        if(!name){
            return res.send({error:'enter valid name'})
        }
        if(!email){
            return res.send({error:'enter valid mail'})
        }
        if(!password){
            return res.send({error:'enter valid password'})
        }
        if(!phone){
            return res.send({error:'enter valid phone number'})
        }
        if(!address){
            return res.send({error:'enter valid address'})
        }

        //cheching existing user or not
        const existinguser = await userModel.findOne({email})

        if(existinguser){
             return res.status(200).send({
                success:true,
                message:'already registered please login',
             })
        }

        //user registration
        const hashedPassword = await hashPassword(password)

        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Registered SUCCESSFULLY',
            user
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in registration',
            error 
        })
    }
}


//POST--LOGIN
export const loginController = async (req,res)=>{
    try {
        const {email,password} = req.body

        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"enter valid email or password"
            })
        }
        
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'email not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'invalid password'
            })
        }

        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
            expiresIn:'7d',
        })
        res.status(200).send({
            success:true,
            message:"login SUCCESS",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'login ERROR',
            error
        })
    }

}

//test controller
export const testController = (req,res)=>{
    res.send("protected route")
}




 