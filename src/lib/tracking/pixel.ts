import { createClient } from '@supabase/supabase-js';
import { TrackingPixel, TrackingResponse } from './types';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const generateTrackingPixel = (params: TrackingPixel): string => {
  const queryParams = new URLSearchParams({
    c: params.campaignId,
    e: params.recipientEmail,
    t: params.type,
    ...(params.url ? { u: params.url } : {}),
  });

  return `${window.location.origin}/api/track?${queryParams.toString()}`;
};

export const generatePixelHtml = (params: TrackingPixel): string => {
  const pixelUrl = generateTrackingPixel(params);
  return `<img src="${pixelUrl}" width="1" height="1" style="display:none" alt="" />`;
};

export const generateTrackedLink = (url: string, params: TrackingPixel): string => {
  const trackingUrl = generateTrackingPixel({ ...params, type: 'click', url });
  return trackingUrl;
};