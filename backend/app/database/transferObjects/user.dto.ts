import Joi from "joi";
import { JoiPassword } from "hapi-joi-password";
import User from "@database/models/user.interface";

//REGISTER VALIDATION

const registerUserValidation = (data: User) => {
    const schema = Joi.object<User>({
        firstName: Joi.string().min(6).required(),
        lastName: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: JoiPassword
                    .string()
                    .minOfSpecialCharacters(3)
                    .minOfLowercase(4)
                    .minOfUppercase(5)
                    .minOfNumeric(6)
                    .noWhiteSpaces(),                    
        phone: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
        role: Joi.string().valid('volunteer', 'refugee', 'admin'),
        verifiedByEmail: Joi.boolean().required(),        
        verifiedByAdmin: Joi.boolean().optional()    
    });
    return schema.validate(data, {abortEarly: false});
}