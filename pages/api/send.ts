import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const { data, error } = await resend.emails.send({
      from: 'Joseph Kertz <josephkertz@lonewolfcode.com>',
      to: ['josephkertz@gmail.com'],
      subject: 'Hello world',
      html: "<!DOCTYPE html><html><head> <title>Lone Wolf Code - Your Premier Web Development Partner</title> <style> body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #ffffff76; margin: 0; padding: 0; } .container { width: 100%; max-width: 600px; margin: 0 auto; background: linear-gradient( #000000,#D92A2D); padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); } .header { text-align: center; padding: 10px 0; } .header img { max-width: 150px; } .header h1 { margin: 0; color: #ffffff76; } .content { padding: 20px; } .content h2 { color: #ffffff; text-align: center; } .content p { line-height: 1.6; } .cta { text-align: center; margin: 20px 0; } .cta a { background-color: #D92A2D; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; } .cta a:hover { background-color: #D92A2D; } .footer { text-align: center; padding: 10px 0; font-size: 0.8em; color: #ffffff76; } </style></head><body> <div class='container'> <div class='header'> <img src='https://www.lonewolfcode.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flwclogo.d8e4f8e2.webp&w=640&q=75' alt='Lone Wolf Code'> <h1>Lone Wolf Code</h1> </div> <div class='content'> <h2>Unlock Your Business Potential with Expert Web Development</h2> <p> At Lone Wolf Code, we specialize in creating dynamic and responsive websites that not only look great but also perform exceptionally well. Our services go beyond just web development; we provide comprehensive business solutions to help your company thrive online. </p> <p> Our expertise includes: </p> <ul> <li>Custom Website Development</li> <li>SEO Optimization</li> <li>Client Scheduling and Retention Applications</li> <li>Mobile Application Development</li> </ul> <p> Whether you need a new website, a mobile app, or tools to streamline your business operations, Lone Wolf Code has you covered. Our tailored solutions are designed to meet your specific needs and help you achieve your business goals. </p> <div class='cta'> <a href='https://www.lonewolfcode.com'>Visit Our Website</a> </div> </div> <div class='footer'> <p>&copy; 2024 Lone Wolf Code. All rights reserved.</p> </div> </div></body></html>"
    })

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}