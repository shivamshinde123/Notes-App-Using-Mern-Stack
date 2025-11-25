import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected successfully!')
    }
    catch (error){
        console.error("Error connecting to mongo db", error)
        process.exit(1) // process code 1 -> exit with failure
    }
}

export default connectDB