import { SocialMediaConfig, SocialPost } from '../../../types/socialMedia';

export const postToTwitter = async (post: SocialPost, config: SocialMediaConfig) => {
  const response = await fetch('https://api.twitter.com/2/tweets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: post.content,
      media: post.mediaUrls?.map(url => ({ url })),
    }),
  });

  if (!response.ok) {
    throw new Error(`Twitter API error: ${response.statusText}`);
  }

  return await response.json();
};