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
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
    connection.isConnected=db.connections[0].readyState
    console.log("DB conected Successfully")

    console.log(db.connections)
  } catch (error) {
    console.log("DB conection failed");
    process.exit(1)
  }
}

export default dbConnect;