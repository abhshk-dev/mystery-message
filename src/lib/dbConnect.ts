import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Connected to database");
    return;
  }

  try {
    const db = await mongoose.connect("mongodb+srv://abhishekagarwal151:abhi123@cluster0.vca6enf.mongodb.net/mystery-message" || "", {})
    connection.isConnected=db.connections[0].readyState
    console.log("DB connected Successfully")

    console.log(db.connections)
  } catch (error) {
    console.log("DB conection failed");
    process.exit(1)
  }
}

export default dbConnect;