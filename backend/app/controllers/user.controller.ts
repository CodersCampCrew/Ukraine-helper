
import User from '@database/models/user.model';
import express, { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';


const userRouter = Router();


// REGISTER - POST
userRouter.post("/register", async (req, res) => {

    //VALIDATION


    const userExist = await User.findOne({email: req.body.email}); 
    if (userExist) { return res.status(StatusCodes.CONFLICT).send("Email already exists") };

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

// USER - GET

// USER - UPDATE

// 