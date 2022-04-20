import jwt from 'jsonwebtoken';
import User from '@database/models/user.interface';
import { TokenData, DataStoredInToken } from '@utils/jwt.utils';

const createToken = (user: User):TokenData => {
    const expiresIn = 60 *60;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken:DataStoredInToken = {
        _id: user._id
    }

    return { expiresIn, token: jwy.sign(dataStoredInToken, secret, { expiresIn }),
};
}