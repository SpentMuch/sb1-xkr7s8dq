import { SocialMediaConfig, SocialPost } from '../../../types/socialMedia';

export const postToFacebook = async (post: SocialPost, config: SocialMediaConfig) => {
  const response = await fetch(`https://graph.facebook.com/v18.0/me/feed`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: post.content,
      scheduled_publish_time: post.scheduledFor 
        ? Math.floor(new Date(post.scheduledFor).getTime() / 1000)
        : undefined,
      ...(post.mediaUrls?.length ? { attached_media: post.mediaUrls } : {})
    }),
  });

  if (!response.ok) {
    throw new Error(`Facebook API error: ${response.statusText}`);
  }

  return await response.json();
};