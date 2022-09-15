import mailer from '../../mail/mailer';
import htmlTemplate from '../../mail/htmlTemplate';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const messageDetails = htmlTemplate(req.body);

    try {
      mailer(messageDetails.subject, messageDetails.html);
      res.status(200).json({ status: 'OK' });
    } catch (err) {
      console.log(err.message);
    }
  }
}
