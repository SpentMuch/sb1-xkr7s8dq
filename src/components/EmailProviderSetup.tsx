import React, { useState } from 'react';
import { Settings, Mail, CloudLightning } from 'lucide-react';
import { EmailProvider } from '../types/emailProviders';

const providers: EmailProvider[] = [
  {
    id: 'sendgrid',
    name: 'SendGrid',
    icon: 'https://sendgrid.com/favicon.ico',
    isConfigured: false
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    icon: 'https://mailchimp.com/favicon.ico',
    isConfigured: false
  },
  {
    id: 'aws-ses',
    name: 'AWS SES',
    icon: 'https://aws.amazon.com/favicon.ico',
    isConfigured: false
  },
  {
    id: 'constant-contact',
    name: 'Constant Contact',
    icon: 'https://constantcontact.com/favicon.ico',
    isConfigured: false
  },
  {
    id: 'campaign-monitor',
    name: 'Campaign Monitor',
    icon: 'https://campaignmonitor.com/favicon.ico',
    isConfigured: false
  },
  {
    id: 'getresponse',
    name: 'GetResponse',
    icon: 'https://getresponse.com/favicon.ico',
    isConfigured: false
  }
];

// Rest of the component remains the same