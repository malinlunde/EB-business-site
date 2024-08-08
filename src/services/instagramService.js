import axios from 'axios';

export const fetchInstagramPosts = async () => {
  const accessToken = localStorage.getItem('instagram_access_token');
  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  try {
    const response = await axios.get('https://graph.instagram.com/me/media', {
      params: {
        fields: 'id,caption,media_type,media_url,thumbnail_url,permalink',
        access_token: accessToken,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw error;
  }
};