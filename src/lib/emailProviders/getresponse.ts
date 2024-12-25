import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithGetResponse = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const response = await fetch('https://api.getresponse.com/v3/newsletters', {
    method: 'POST',
    headers: {
      'X-Auth-Token': `api-key ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: params.subject,
      content: { html: params.content },
      recipients: { emails: params.to },
      from_email: config.fromEmail,
    }),
  });

  if (!response.ok) {
    throw new Error(`GetResponse API error: ${response.statusText}`);
  }

  return { success: true };
};