export interface SocialMediaConfig {
  provider: string;
  accessToken: string;
  apiKey?: string;
  apiSecret?: string;
}

export interface SocialPost {
  content: string;
  mediaUrls?: string[];
  scheduledFor?: string;
  platforms: string[];
  campaignId: string;
}

export interface SocialCampaign {
  id: string;
  name: string;
  posts: SocialPost[];
  status: 'draft' | 'scheduled' | 'published';
  userId: string;
  createdAt: string;
}