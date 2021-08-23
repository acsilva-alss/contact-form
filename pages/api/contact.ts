import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   
    const msg = {
        to: 'alisson.cs@hotmail.com', // Change to your recipient
        from: 'alisson.cs.alss@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    try{
        await sgMail.send(msg)
        res.json({ name: 'Email has been sent' })
    }catch(error) {
        res.status(500).json({ name: 'Error sending email' + error })
    }
}
