import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 587);
const secure = String(process.env.SMTP_SECURE).toLowerCase() === 'true';
const auth = {
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
};

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth,
});

export async function verifyTransporter() {
  return transporter.verify();
}

export async function send(options: {
  to: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  subject: string
  html: string
  from: string
}) {
  const { to, subject, html, from, cc, bcc } = options;

  const mailOptions = {
    from,
    to,
    subject,
    html,
    cc,
    bcc,
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
}

export default {
  send,
  verifyTransporter,
};
