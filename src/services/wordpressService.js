import axios from 'axios';

const WORDPRESS_API_URL = 'https://ericaborjesson.se/wp-json/wp/v2'; // Replace with your WordPress site URL

export const fetchPageContent = async (pageId) => {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}/pages/${pageId}`); // Use page ID here

    console.log('Full API Response:', response);
    console.log('Response Data:', response.data);

    if (!response.data) {
      throw new Error('Page not found');
    }

    return response.data.content.rendered; // Directly access content property
  } catch (error) {
    console.error('Error fetching page content:', error);
    throw error;
  }
};