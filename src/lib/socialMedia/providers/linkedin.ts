import { SocialMediaConfig, SocialPost } from '../../../types/socialMedia';

export const postToLinkedIn = async (post: SocialPost, config: SocialMediaConfig) => {
  const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author: `urn:li:person:${config.apiKey}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: { text: post.content },
          media: post.mediaUrls?.map(url => ({
            status: 'READY',
            originalUrl: url,
          })),
        },
      },
      visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
    }),
  });

  if (!response.ok) {
    throw new Error(`LinkedIn API error: ${response.statusText}`);
  }

  return await response.json();
};