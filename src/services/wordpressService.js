import axios from 'axios';

const WORDPRESS_API_URL = 'https://ericaborjesson.se/wp-json/wp/v2'; // Replace with your WordPress site URL

export const fetchPageContent = async (pageSlug) => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}/pages`, {
      params: {
        slug: pageSlug,
      },
    });

    // Log the full response and its data for debugging purposes
    console.log('Full API Response:', response);
    console.log('Response Data:', response.data);

    if (!response.data || response.data.length === 0) {
      throw new Error('Page not found');
    }

    return response.data[0].content.rendered; // Assuming the slug is unique and returns a single page
  } catch (error) {
    console.error('Error fetching page content:', error);
    throw error;
  }
};