import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

export let transporter = nodemailer.createTransport({
    host: 'smpt.gmail.com',
    port: 465,
    secure: false,
    auth: {
        type: '0Auth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: 
    }



})