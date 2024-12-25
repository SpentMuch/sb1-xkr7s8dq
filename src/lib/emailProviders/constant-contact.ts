import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithConstantContact = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const response = await fetch('https://api.constantcontact.com/v2/emailmarketing/campaigns', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: params.subject,
      subject: params.subject,
      from_email: config.fromEmail,
      message_content: params.content,
      email_content: params.content,
      to_emails: params.to,
    }),
  });

  if (!response.ok) {
    throw new Error(`Constant Contact API error: ${response.statusText}`);
  }

  return { success: true };
};