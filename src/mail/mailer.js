const nodemailer = require('nodemailer');

export default async function sendMail(subject, htmlTemplate) {
  let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@loremitours.com',
      pass: '2018travels',
    },
  });
  let mailOptions = {
    from: '"WAA Website" <info@loremitours.com>',
    to: 'georgeomara8@gmail.com',
    // to: ['Airlinewaacompany@gmail.com', 'Airlinewaa@gmail.com'],
    subject: subject,
    html: htmlTemplate,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Mail sent!');
  } catch (error) {
    console.log(error);
  }
}
