import sendMail from '../../mail/sendMail';
import messageTemplate from '../../mail/messageTemplate';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const messageDetails = messageTemplate(req.body);

    try {
      sendMail(messageDetails.subject, messageDetails.html);
      res.status(200).json({ status: 'OK' });
    } catch (err) {
      console.log(err.message);
    }
  }
}
