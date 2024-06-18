import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const { data, error } = await resend.emails.send({
      from: 'josephkertz@lonewolfcode.com',
      to: ['josephkertz@gmail.com'],
      subject: 'Hello world',
      text: "hello worlddddd"
    })

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}