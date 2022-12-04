const nodemailer = require('nodemailer');

async function sendMail(from, to, subject, text) {

    try {
        let transporter = nodemailer.createTransport({
            host: 'vweb04.nitrado.net',
            port: 25,
            secure: false,
            auth: {
               user: process.env.EMAIL_MAIL,
               pass: process.env.EMAIL_PASSWORD
            }
        });
    
        return await transporter.sendMail({
            from, to, subject, text
        });
    } catch (e) {
        console.log(e);
    }
    
}

module.exports = sendMail;