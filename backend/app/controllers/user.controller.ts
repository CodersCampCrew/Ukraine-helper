
import User from '@database/models/user.model';
import express, { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import registerUserValidation from '@database/transferObjects/user.dto';

const userRouter = Router();

// REGISTER - POST
userRouter.post("/register", async (req, res) => {

    //VALIDATION
    const {error} = registerUserValidation(req.body);
    if (error) { return res.status(StatusCodes.BAD_REQUEST).send(error.details.map((element) => element.message.replace(`\"`,'')))};

    const userExist = await User.findOne({email: req.body.email}); 
    if (userExist) { return res.status(StatusCodes.CONFLICT).send("Email already exists") };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email, 
        password: req.body.password,
        phone: req.body.phone, 
        city: req.body.city, 
        role: req.body.role, 
        verifiedByEmail: req.body.verifiedByEmail, 
        verifiedByAdmin: req.body.verifiedByAdmin 
    })

try {
    const savedUser = await user.save();
    res.status(StatusCodes.CREATED).send(savedUser);    
} catch (err) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send(err);
}

});


// LOGIN - POST
userRouter.post('/login', async (req, res) => {
    
})


// USER - GET

// USER - UPDATE

// 