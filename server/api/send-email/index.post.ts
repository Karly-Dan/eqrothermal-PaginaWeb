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

  // Lee el template empaquetado por Nitro (ver nuxt.config.ts → nitro.serverAssets)
  const templateFile = `emails/${body.template}.ejs`
  const buf = await useStorage('assets:server').getItem(templateFile)

  if (!buf) {
    throw createError({
      statusCode: 500,
      statusMessage: `Email template not found: ${templateFile}`
    })
  }

  const templateStr = Buffer.isBuffer(buf) ? buf.toString('utf8') : String(buf)

  const html = ejs.render(templateStr, {
    ...(body.data || {}),
    base_url: config.public.APP_URL
  })

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
