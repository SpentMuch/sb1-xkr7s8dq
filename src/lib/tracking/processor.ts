import { createClient } from '@supabase/supabase-js';
import { TrackingPixel, TrackingResponse } from './types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const processTracking = async (params: TrackingPixel): Promise<TrackingResponse> => {
  try {
    const timestamp = new Date().toISOString();
    
    const { error } = await supabase
      .from('email_trackers')
      .insert({
        campaign_id: params.campaignId,
        recipient_email: params.recipientEmail,
        ...(params.type === 'open' ? { opened_at: timestamp } : {}),
        ...(params.type === 'click' ? { 
          clicked_at: timestamp,
          link_clicked: params.url 
        } : {})
      });

    if (error) throw error;

    return {
      success: true,
      timestamp
    };
  } catch (error) {
    console.error('Tracking error:', error);
    return {
      success: false,
      timestamp: new Date().toISOString()
    };
  }
};