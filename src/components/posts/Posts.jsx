import React, { useEffect, useState } from 'react';
import './posts.css';
import { fetchPageContent } from '../../services/wordpressService';
import parse from 'html-react-parser';

export const Posts = () => {
  const [instagramContent, setInstagramContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const pageContent = await fetchPageContent(31); // Fetch content for page with ID 31
        console.log('Fetched Content:', pageContent);

        // Filtrera ut endast Instagram-innehållet med data-instagram-feed
        const parser = new DOMParser();
        const doc = parser.parseFromString(pageContent, 'text/html');

        const instagramFeed = doc.querySelector('[data-instagram-feed]');
        const instagramHTML = instagramFeed ? instagramFeed.innerHTML : ''; // Använd innerHTML för att få rätt innehåll

        setInstagramContent(instagramHTML);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching page content:', error);
        setError('Error fetching page content');
        setLoading(false);
      }
    };

    getContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="posts" id="posts">
      <div className="posts-content">
        <div className='Instalink'>
          <a href="https://www.instagram.com/borjessons_/"> borjessons_</a>
        </div>
        {parse(instagramContent)} {/* Rendera endast Instagram-innehållet */}
      </div>
    </section>
  );
};

export default Posts;