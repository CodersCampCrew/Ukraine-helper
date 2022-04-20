import { Request } from 'express';
import User from "@database/models/user.interface";

interface RequestWithUser extends Request {
    user : User;
}

export default RequestWithUser;