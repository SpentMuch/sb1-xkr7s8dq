export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  user_id: string;
  created_at: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduled_for?: string;
}

export interface LandingPage {
  id: string;
  name: string;
  content: string;
  user_id: string;
  created_at: string;
  type: 'landing' | 'thank-you';
  campaign_id?: string;
}

export interface EmailTracker {
  id: string;
  campaign_id: string;
  recipient_email: string;
  opened_at?: string;
  clicked_at?: string;
  link_clicked?: string;
  created_at: string;
}