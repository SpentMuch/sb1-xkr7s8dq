import { SocialMediaConfig, SocialPost } from '../../../types/socialMedia';

export const postToInstagram = async (post: SocialPost, config: SocialMediaConfig) => {
  const response = await fetch('https://graph.instagram.com/me/media', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      caption: post.content,
      media_type: post.mediaUrls?.length ? 'IMAGE' : 'CAROUSEL',
      media_url: post.mediaUrls?.[0],
      children: post.mediaUrls,
    }),
  });

  if (!response.ok) {
    throw new Error(`Instagram API error: ${response.statusText}`);
  }

  return await response.json();
};