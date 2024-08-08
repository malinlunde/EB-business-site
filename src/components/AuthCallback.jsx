import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async (code) => {
      try {
        const response = await axios.post('https://api.instagram.com/oauth/access_token', {
          client_id: '7804781686286136',
          client_secret: 'd121f044345602888ede684f1a143d87',
          grant_type: 'authorization_code',
          redirect_uri: 'https://ericaborjesson.se/auth/callback',
          code,
        });

        const { access_token } = response.data;
        localStorage.setItem('instagram_access_token', access_token);
        navigate('/');
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      fetchAccessToken(code);
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;