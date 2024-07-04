import mongoose from "mongoose";
const uri = process.env.MONGO_URI;
const localUrl = "mongodb://localhost:27017/mobosure";
const url = process.env.NODE_ENV === "production" ? uri : localUrl;
let isConnected = false;
export async function connectDB() {
  if (isConnected) {
    console.log("connected to db....");
    return;
  }
  try {
    await mongoose.connect(url);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error while connecting to the database..", error);
  }
}
