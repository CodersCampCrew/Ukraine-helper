import { Router } from 'express';
import { userRouter} from '../controllers/user.controller'
//* import sampleRouter from './sampleRouter';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/user', userRouter)
//* baseRouter.use('/sample', sampleRouter);

// Export default.
export default baseRouter;
