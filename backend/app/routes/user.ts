import { Router } from 'express';
import * as userController from '../controllers/user.controller';

export const userRouter = Router();

userRouter.post('/registerRefugee', userController.registerRefugee);

userRouter.post('/registerVolunteer', userController.registerVolunteer);

userRouter.post('/login', userController.login);
