import { Router } from 'express';
import * as userController from '../controllers/user.controller';

export const userRouter = Router();

// REGISTER - POST
userRouter.post('/register', userController.register);

// LOGIN - POST
userRouter.post('/login', userController.login);

// USER - GET

// USER - UPDATE
