import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message } = JSON.parse(req.body);
    const transporter = nodemailer.createTransport({
      service:'Gmail',
      port: 465,
      secure: true,
      host: 'smtp.gmail.com',
      auth:{
          user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
          pass: process.env.NEXT_EMAIL_PASSWORD,
      }
    })
    try{
      const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL; 
     const { data, error} = await transporter.sendMail({
          from: myEmail,
          to:myEmail,
          subject: 'LONEWOLFCODE.COM FORM',
          text: `Hello, my name is ${name}, and my email is ${email}. Here is my request ${message}`
      })
      if(error) res.status(400).json(error);
      res.status(200).json({ message: 'Email Sent'})
    } catch(error){
      res.status(400).json({error});
    }
  }