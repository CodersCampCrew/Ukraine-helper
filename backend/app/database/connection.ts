import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
