import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  const resend = new Resend('re_J92us723_56XA7EquVwGFVvqaFNRApxEy');

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    from: email,
    to: 'fbentiez@stratehcorp.com',
    subject: subject,
    html: `<p>Congrats on sending your <strong>first email</strong>!</p>`
  };

  console.log("contenido usado", content);

  try {
    const respuest = await resend.emails.send(content);
    console.log('-------------------',respuest)
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
