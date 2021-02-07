const nodemailer = require("nodemailer");

exports.handler = (event, context, callback) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE_CONNECTION_TYPE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log(event);

  let email = JSON.parse(event.body);

  console.log(email);

  /* send me some mails */
  transporter.sendMail(
    {
      from: process.env.MAIL_FROM,
      to: process.env.EMAIL_TARGET,
      subject: process.env.MAIL_SUBJECT,
      text: event.body,
    },
    (error) => {
      if (error) {
        console.log(error);
        return {
          statusCode: 500,
          body: "fail",
        };
      } else {
        return {
          statusCode: 200,
          body: "Ok",
        };
      }
    }
  );
};
