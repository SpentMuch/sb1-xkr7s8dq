import { SendEmailParams } from '../../types/emailProviders';
import { generatePixelHtml, generateTrackedLink } from '../tracking/pixel';

export const addTrackingToEmail = (
  params: SendEmailParams,
  campaignId: string
): SendEmailParams => {
  let { content } = params;
  
  // Add tracking pixel for opens
  const pixelHtml = generatePixelHtml({
    campaignId,
    recipientEmail: params.to[0],
    type: 'open'
  });
  content = `${content}${pixelHtml}`;

  // Replace links with tracking links
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"([^>]*)>/gi;
  content = content.replace(linkRegex, (match, url, rest) => {
    const trackedUrl = generateTrackedLink(url, {
      campaignId,
      recipientEmail: params.to[0],
      type: 'click',
      url
    });
    return `<a href="${trackedUrl}"${rest}>`;
  });

  return {
    ...params,
    content
  };
};