import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';

export const sendWithCampaignMonitor = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const response = await fetch('https://api.createsend.com/api/v3.3/transactional/send', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(config.apiKey)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipients: params.to.map(email => ({ address: email })),
      subject: params.subject,
      html_content: params.content,
      from_email: config.fromEmail,
    }),
  });

  if (!response.ok) {
    throw new Error(`Campaign Monitor API error: ${response.statusText}`);
  }

  return { success: true };
};