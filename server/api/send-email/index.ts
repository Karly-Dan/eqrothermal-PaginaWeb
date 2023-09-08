import email from '../../sendgrid'
import ejs from 'ejs'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  await email.send({
    to: body.to,
    from: config.SENDGRID_EMAIL_FROM,
    subject: body.subject,
    html: await ejs.renderFile( new URL (`../../assets/emails/templates/${body.template}.ejs`, import.meta.url).pathname, { ...body, base_url: config.APP_URL}),
  })

  return { body }
})
