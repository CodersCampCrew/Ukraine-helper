import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

<<<<<<< HEAD
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
=======
mongoose
  .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)
  .catch((error) => {
    console.log(error);
  });
>>>>>>> main
