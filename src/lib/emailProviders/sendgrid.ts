import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithSendGrid = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: params.to.map(email => ({ email })),
      }],
      from: { email: config.fromEmail },
      subject: params.subject,
      content: [{ type: 'text/html', value: params.content }],
    }),
  });

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`);
  }

  return { success: true };
};