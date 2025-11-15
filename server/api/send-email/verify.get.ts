import { defineEventHandler } from 'h3';
import email from '../../utils/email';

export default defineEventHandler(async () => {
  await email.verifyTransporter();

  return {
    ok: true,
    message: 'Email transporter is configured correctly.',
  };
});
