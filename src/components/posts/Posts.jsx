import React, { useEffect, useState } from 'react';
import './posts.css';
import { fetchPageContent } from '../../services/wordpressService';
import parse from 'html-react-parser';


export const Posts = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getContent = async () => {
      try {
        const pageContent = await fetchPageContent(31); // Replace 'instagram-feed' with your page slug
        console.log('Fetched Content:', pageContent);
        const parser = new DOMParser();
        const doc = parser.parseFromString(pageContent, 'text/html');
        const images = doc.querySelectorAll('.sbi_photo_wrap');

        const limitedImages = Array.from(images).slice(0, 6);

      // Create a temporary container to hold the selected images
      const tempContainer = document.createElement('div');
      limitedImages.forEach(imgWrap => {
        const img = imgWrap.querySelector('img');
        if (img) {
          const fullRes = imgWrap.querySelector('a').getAttribute('data-full-res');
          if (fullRes) {
            img.src = fullRes; // Replace placeholder src with full resolution image src
          }

          const captionText = img.getAttribute('alt');
          if (captionText) {
            const captionElement = document.createElement('div');
            captionElement.className = 'sbi-caption';
            captionElement.innerText = captionText;

            imgWrap.appendChild(captionElement); // Append the caption to the image wrapper
          }

          tempContainer.appendChild(imgWrap);
        }
      });

      setContent(tempContainer.innerHTML);
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
        {parse(content)}
      </div>
    </section>
  );
};

export default Posts;