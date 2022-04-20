import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { DataStoredInToken } from "@utils/jwt.utils";
import User from "@database/models/user.model";
import RequestWithUser from "@utils/requestwithcontext.interface";
import { StatusCodes } from "http-status-codes";
import { UnautorizedAccessError } from "@utils/errors";

export const authMiddleware = async (request: RequestWithUser, response: Response, next: NextFunction) => {
    const authCookie = request.cookies?.Authorization;
    const secret = process.env.JWT_SECRET;

    try {
        const verificationResponse = jwt.verify(authCookie, secret as string) as unknown as DataStoredInToken;
        const id = verificationResponse.id;
        const user = await User.findById(id);
    if (user) {
        request.user = user;
        next();
    } else {
        response.status(StatusCodes.UNAUTHORIZED);
    }

    } catch (error) {
        next(new UnautorizedAccessError());
    }
}