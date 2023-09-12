//Mongodb connection
import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/testing', {
      family: 4,
    });
    console.log('Connected to MongoDB successfully 🚀🚀🚀');
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error}`);
    process.exit(1); // Exit process with failure
  }
};
