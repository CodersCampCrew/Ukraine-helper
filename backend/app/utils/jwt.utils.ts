import jwt from 'jsonwebtoken';
import User from '@database/models/user.interface';
import { DateTime } from 'luxon';
export interface TokenData {
  token: string;
  expiresIn: Date;
}
export interface DataStoredInToken {
  id: string;
  userName: string;
  userEmail: string;
}

export const generateAuthToken = (user: User): TokenData => {
  const expiresAt = DateTime.utc().plus({hour: 1}).toJSDate();
  const secret = process.env.JWT_SECRET;
  const dataStoredInToken: DataStoredInToken = {
    id: user._id,
    userName: user.firstName,
    userEmail: user.email
  };

  return {
    token: jwt.sign(dataStoredInToken, secret as string, { expiresIn: 60*60 }),
    expiresIn: expiresAt
  };
};

export const createCookie = (tokenData: TokenData) => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
};
