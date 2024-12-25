import { SocialMediaConfig, SocialPost } from '../../types/socialMedia';
import { postToFacebook } from './providers/facebook';
import { postToTwitter } from './providers/twitter';
import { postToLinkedIn } from './providers/linkedin';
import { postToInstagram } from './providers/instagram';

const providers = {
  facebook: postToFacebook,
  twitter: postToTwitter,
  linkedin: postToLinkedIn,
  instagram: postToInstagram,
};

export const publishSocialPost = async (
  post: SocialPost,
  configs: Record<string, SocialMediaConfig>
) => {
  const results = await Promise.allSettled(
    post.platforms.map(platform => {
      const config = configs[platform];
      if (!config) {
        throw new Error(`No configuration found for platform: ${platform}`);
      }
      const postFunction = providers[platform as keyof typeof providers];
      return postFunction(post, config);
    })
  );

  return results.map((result, index) => ({
    platform: post.platforms[index],
    success: result.status === 'fulfilled',
    error: result.status === 'rejected' ? result.reason : null,
  }));
};