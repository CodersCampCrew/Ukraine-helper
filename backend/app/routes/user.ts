import { Router } from 'express';
import * as userController from '../controllers/user.controller';

export const userRouter = Router();

// REGISTER - POST
userRouter.post('/registerRefugee', userController.registerRefugee);
userRouter.post('/registerVolunteer', userController.registerVolunteer);
// LOGIN - POST
userRouter.post('/login', userController.login);

// USER - GET

// USER - UPDATE
