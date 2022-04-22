import Joi from '@hapi/joi';
import { JoiPassword } from 'hapi-joi-password';
import User from '@database/models/user.interface';
import { roles } from '@configs/globals';

//REGISTER VALIDATION

const registerUserValidation = (data: User) => {
  const schema = Joi.object<User>({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: JoiPassword.string().minOfLowercase(6).noWhiteSpaces(),
    phone: Joi.string()
      .length(9)
      .pattern(/^[0-9]+$/)
      .required(),
    role: Joi.string().valid('volunteer', 'admin', 'refugee').optional(),
    areaCode: Joi.string().required(),
    verifiedByEmail: Joi.boolean().optional(),
    verifiedByAdmin: Joi.boolean().optional()
  });
  return schema.validate(data, { abortEarly: false });
};

export default registerUserValidation;
