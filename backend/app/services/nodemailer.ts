import nodemailer from 'nodemailer';
import dotenv from 'dotenv';



export let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       user: process.env.MAIL_USER,
       pass: process.env.MAIL_PASSWORD 
    },
    tls: {
        rejectUnauthorized: false
    }
});



// transporter.set("oauth2_provision_cv", (user: string, renew: boolean, callback:string) => {
//     let accessToken = userTokens[user];
//     if(!accessToken) {
//         return callback(new Error("Unknown user"));
//     } else {
//         return callback(null, accessToken);
//     }

// });
