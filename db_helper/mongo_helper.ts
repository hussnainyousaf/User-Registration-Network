import { connect, ConnectOptions } from "mongoose";
const {
    // Attempts to connect to MongoDB and then tries to connect locally:)
    MONGO_URI = "mongodb+srv://hussnain:mongodb12345@devconnector.zdcw8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
} = process.env

console.log(MONGO_URI)

const options: ConnectOptions = {}

export const connectToDatabase = () => connect(MONGO_URI, options)
