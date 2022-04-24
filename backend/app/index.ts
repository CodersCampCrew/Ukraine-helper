import 'dotenv/config';
import logger from 'jet-logger';
import morgan from 'morgan';
import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
import cors from 'cors';

import apiRouter from '@routes/api';
import { CustomError } from '@utils/errors';
import { port, serverStartMsg } from '@configs/server';
import cookieParser from 'cookie-parser';
import './database/connection';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

const app = express();

// **** Middlewares **** //

app.use(cors());

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console
app.use(morgan('dev'));

// **** API routes and error handling **** //

// Add api router
app.use('/api', apiRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Error handling
app.use(
  (err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    return res.status(status).json({
      error: err.message
    });
  }
);

// **** Start server **** //

app.listen(port, () => {
  logger.info(serverStartMsg + port);
});
