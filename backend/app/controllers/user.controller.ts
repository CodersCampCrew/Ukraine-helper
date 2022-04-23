import User from '@database/models/user.model';
import express, { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import registerUserValidation from '@database/transferObjects/user.dto';
import { createCookie, generateAuthToken } from '@utils/jwt.utils';
import { roles } from '@configs/globals';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { transporter } from '@services/nodemailer';
import RequestWithUser from '@utils/requestwithcontext.interface';

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
    emailToken: crypto.randomBytes(24).toString('hex'),
    verifiedByEmail: req.body.verifiedByEmail=false,
    verifiedByAdmin: req.body.verifiedByAdmin=false
  });

  try {
    const savedUser = await user.save();
    savedUser.password = undefined as any;

    let mailOptions = {
      from: `UKH Admin - ${process.env.MAIL_USER}`,
      to: user.email,
      subject: 'UKH - Confirm email account',
      html: `<h2> Hi ${user.firstName}! Thanks for registering on our site </h2>
             <h4> Please verify your mail to continue...</h4>
             <a href="http://${req.headers.host}/user/verify-email?token=${user.emailToken}">Verify Your Email!</a>`
            
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
    console.log('Verification email has been sent to your email account');
  }
});

    res.status(StatusCodes.CREATED).send(savedUser).redirect('/user/login');
  } catch (err) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send(err);
  }
};

export const registerVolunteer = register('volunteer');
export const registerRefugee = register('refugee');

export const verifyEmail = async (req: Request, res: Response) => {
  try {
      const token = req.query.token;
      const user = await User.findOne({ emailToken: emailToken });
      if (user) {
        user.emailToken = null;
        user.verifiedByEmail = true;
        await user.save()
        res.redirect('/user/login');
      } else {
        res.redirect('/user/register');
        console.log('email is not verified');        
      }
    } 
    catch (err) {
      console.log(err)
}}



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
  res.cookie('Authorization', TokenData.token, {
    httpOnly: true,
    expires: TokenData.expiresIn
  });
  res.send('You are logged in');
}