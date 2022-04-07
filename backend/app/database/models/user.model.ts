import {Schema, model} from 'mongoose';
import User from './user.interface'

const userSchema = new Schema<User>({
    userId: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    phone: { type: String, required: true},
    city: { type: String, required: true},
    userRole: { type: String, required: true},
    verifiedByEmail: { type: Boolean },
    verifiedByAdmin: { type: Boolean }
})

const User = model<User>('User', userSchema);

export default User;