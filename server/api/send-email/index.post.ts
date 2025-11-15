import { defineEventHandler, readBody } from 'h3'
import ejs from 'ejs'
import email from '../../utils/email'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
  to: string
  cc?: string[]
  bcc?: string[]
  subject: string
  template: string
  data?: Record<string, any>
  }>(event)

  const config = useRuntimeConfig()

  const fileUrl = new URL(
    `../../assets/emails/templates/${body.template}.ejs`,
    import.meta.url
  )

  const html = await ejs.renderFile(
    fileUrl.pathname,
    {
      ...body.data || {},
      base_url: config.public.APP_URL
    }
  )

  const result = await email.send({
    to: body.to,
    cc: body.cc,
    bcc: body.bcc,
    subject: body.subject,
    html,
    from: config.SMTP_EMAIL_FROM,
  })

  return {
    ok: true,
    result,
  }
})
