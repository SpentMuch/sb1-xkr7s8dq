export interface TrackingPixel {
  campaignId: string;
  recipientEmail: string;
  type: 'open' | 'click';
  url?: string;
}

export interface TrackingResponse {
  success: boolean;
  timestamp: string;
}