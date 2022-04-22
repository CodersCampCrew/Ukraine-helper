import { Router } from 'express';
import { userRouter } from './user';
import { adRouter } from './ad';
//* import sampleRouter from './sampleRouter';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/user', userRouter);
baseRouter.use('/ad', adRouter);
//* baseRouter.use('/sample', sampleRouter);

// Export default.
export default baseRouter;
