import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    minLength: [8, 'At least 8 characters'],
    maxlength: [30, 'Max length is 30 characters'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: [4, 'At least 4 characters'],
    maxlength: [30, 'Max length is 30 characters']
  },
  username: {
    type: String,
    required: true,
    minLength: [3, 'At least 3 characters'],
    maxlength: [30, 'Max length is 30 characters'],
    unique: true
  },
  city: {
    type: String,
    required: true,
    minLength: [3, 'At least 3 characters']
  },
  phone: {
    type: Number,
    required: true,
    minLength: [8, 'At least 8 characters'],
    maxlength: [10, 'Maximum 10 characters']
  },
  announcements: [{ type: mongoose.Types.ObjectId, ref: 'Announcement' }],
  description: {
    type: String
  }
});

export const User = mongoose.model('User', UserSchema);
