import mongoose from "mongoose";
import dotenv from "dotenv";
// dotenv.config();
// dotenv.config({
//   path:'./src/.env'
// })
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
    const db = await mongoose.connect(
      `mongodb+srv://user:user@cluster0.vca6enf.mongodb.net/mystery-message` ||
        "",
      {}
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected Successfully");

    console.log(db.connections);
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
