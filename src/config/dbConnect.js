import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connection", connect.connection.host, connect.connection.name);
    return connect;
  } catch (err) {
    console.log("error", err);
    process.exit(1);
  }
};
