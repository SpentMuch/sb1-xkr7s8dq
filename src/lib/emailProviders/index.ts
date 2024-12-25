import { SendEmailParams, EmailProviderConfig } from '../../types/emailProviders';
import { sendWithSendGrid } from './sendgrid';
import { sendWithMailchimp } from './mailchimp';
import { sendWithAWSSES } from './aws-ses';
import { sendWithConstantContact } from './constant-contact';
import { sendWithCampaignMonitor } from './campaign-monitor';
import { sendWithGetResponse } from './getresponse';

const providers = {
  sendgrid: sendWithSendGrid,
  mailchimp: sendWithMailchimp,
  'aws-ses': sendWithAWSSES,
  'constant-contact': sendWithConstantContact,
  'campaign-monitor': sendWithCampaignMonitor,
  getresponse: sendWithGetResponse,
};

export const sendEmail = async (
  params: SendEmailParams,
  config: EmailProviderConfig
) => {
  const sendFunction = providers[config.provider as keyof typeof providers];
  if (!sendFunction) {
    throw new Error(`Unsupported email provider: ${config.provider}`);
  }
  return sendFunction(params, config);
};