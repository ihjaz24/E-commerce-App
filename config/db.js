import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connection SUCCESS :${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`DB connect Error Occured:${error}`.bgRed.white);
    }
}

export default connectDB;