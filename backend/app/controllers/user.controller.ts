import User from '@database/models/user.model';
import express, { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import registerUserValidation from '@database/transferObjects/user.dto';
import { createCookie, generateAuthToken } from '@utils/jwt.utils';
import { roles } from '@configs/globals';

export const userRouter = Router();

const register = (role: roles) => async (req: Request, res: Response) => {
  const { error } = registerUserValidation(req.body);
  if (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(error.details.map((element) => element.message.replace(`\"`, '')));
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(StatusCodes.CONFLICT).send('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    phone: req.body.phone,
    city: req.body.city,
    role,
    areaCode: req.body.areaCode,
    verifiedByEmail: req.body.verifiedByEmail,
    verifiedByAdmin: req.body.verifiedByAdmin
  });

  try {
    const savedUser = await user.save();
    savedUser.password = undefined as any;
    res.status(StatusCodes.CREATED).send(savedUser);
    
  } catch (err) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send(err);
  }
};

export const registerVolunteer = register('volunteer');
export const registerRefugee = register('refugee');

export const login = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(StatusCodes.CONFLICT).send('User not registered');
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(StatusCodes.BAD_REQUEST).send('Invalid password');
  }

  const TokenData = generateAuthToken(user);
  //res.setHeader('Set-Cookie', [createCookie(TokenData)]);
  res.cookie("Authorization",TokenData.token, {httpOnly: true, expires: TokenData.expiresIn} )
  res.send('You are logged in');
};

