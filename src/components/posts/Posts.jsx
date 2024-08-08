import React, { useEffect, useState } from 'react';
import './posts.css';
import { fetchPageContent } from '../../services/wordpressService';

export const Posts = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const pageContent = await fetchPageContent('https://ericaborjesson.se/instagram/'); // Replace 'instagram-feed' with your page slug
        setContent(pageContent);
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
    <section className="posts">
      <div className="posts-content">
        <h1>Mitt Instagram</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
};

export default Posts;