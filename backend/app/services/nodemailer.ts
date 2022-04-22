import nodemailer from 'nodemailer';
import dotenv from 'dotenv';



export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USER,
        
    },
});

transporter.set("oauth2_provision_cv", (user: string, renew: boolean, callback:string) => {
    let accessToken = userTokens[user];
    if(!accessToken) {
        return callback(new Error("Unknown user"));
    } else {
        return callback(null, accessToken);
    }

});
