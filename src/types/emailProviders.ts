export interface EmailProvider {
  id: string;
  name: string;
  icon: string;
  isConfigured: boolean;
}

export interface EmailProviderConfig {
  apiKey: string;
  region?: string;
  fromEmail: string;
  provider: string;
}

export interface SendEmailParams {
  to: string[];
  subject: string;
  content: string;
  templateId?: string;
}