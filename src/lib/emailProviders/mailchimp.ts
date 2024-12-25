import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithMailchimp = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const datacenter = config.apiKey.split('-')[1];
  const response = await fetch(`https://${datacenter}.api.mailchimp.com/3.0/messages/send`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipients: params.to,
      subject: params.subject,
      html: params.content,
      from_email: config.fromEmail,
    }),
  });

  if (!response.ok) {
    throw new Error(`Mailchimp API error: ${response.statusText}`);
  }

  return { success: true };
};