import jwt from 'jsonwebtoken';
import User from '@database/models/user.interface';
import { TokenData, DataStoredInToken } from '@utils/jwt.utils';

export const generateAuthToken = (user: User):TokenData => {
    const expiresIn = 60 *60;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken:DataStoredInToken = {
        id: user._id, userName: user.firstName, userEmail: user.email
    }

    return { 
        token: jwt.sign(dataStoredInToken, secret as string, { expiresIn }),
        expiresIn, 
    };
}

export const createCookie = (tokenData:TokenData) => {
    return `Authorization=${tokenData}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
}