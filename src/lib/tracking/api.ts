import { TrackingPixel, TrackingResponse } from './types';
import { processTracking } from './processor';

export const handleTrackingRequest = async (
  request: Request
): Promise<TrackingResponse> => {
  const url = new URL(request.url);
  const params: TrackingPixel = {
    campaignId: url.searchParams.get('c') || '',
    recipientEmail: url.searchParams.get('e') || '',
    type: (url.searchParams.get('t') as 'open' | 'click') || 'open',
    url: url.searchParams.get('u') || undefined
  };

  return processTracking(params);
};