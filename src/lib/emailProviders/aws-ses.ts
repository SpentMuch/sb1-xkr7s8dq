import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithAWSSES = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const response = await fetch(`https://email.${config.region}.amazonaws.com/v2/email/outbound-emails`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      FromEmailAddress: config.fromEmail,
      Destination: {
        ToAddresses: params.to,
      },
      Content: {
        Simple: {
          Subject: { Data: params.subject },
          Body: { Html: { Data: params.content } },
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`AWS SES API error: ${response.statusText}`);
  }

  return { success: true };
};