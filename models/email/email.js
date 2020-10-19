'use strict';
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
async function email(data) {
  let transporter = nodemailer.createTransport({
    host: 'ft000217.ferozo.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Partitas Music" <info@partitasmusic.com>', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.html, // html body
  });
}

module.exports = email;