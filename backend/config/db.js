import mongoose from "mongoose";

export const connectDB = async () => {
  // Direct connection with the new URI
  await mongoose
    .connect(
      "mongodb+srv://new_user_001:tayyab47khan_@firstproject.m5aij.mongodb.net/food-app-db?retryWrites=true&w=majority&appName=FirstProject"
    )
    .then(() => {
      console.log("DB connected");
    });
};
