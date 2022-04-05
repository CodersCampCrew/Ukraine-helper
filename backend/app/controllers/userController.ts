import { RequestHandler} from 'express';
import { User } from "../database/models/UserSchema"

export const register: RequestHandler = async (req, res) => {
    const { email, password, username, city, phone } = req.body;
    const newUser = new User({
        email,
        password,
        username,
        city,
        phone,
      });
      try {
        await newUser.save();
        res.json({ message: "User has been created" });
      } catch (e) {
        res.status(422).json({ error: e });
      }
    };
};
