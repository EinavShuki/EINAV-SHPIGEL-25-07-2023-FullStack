import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   to avoid err
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongoDB connected`);
  } catch (err) {
    console.log(`Error:${err}`);
    process.exit(1);
  }
};
export default connectDB;
