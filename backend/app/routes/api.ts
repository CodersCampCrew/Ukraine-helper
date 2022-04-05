import { Router } from 'express';
import authRouter from './auth/auth';

//* import sampleRouter from './sampleRouter';

// Export the base-router
const baseRouter = Router();

// Setup routers
//* baseRouter.use('/sample', sampleRouter);
baseRouter.use('/auth', authRouter);

// Export default.
export default baseRouter;
