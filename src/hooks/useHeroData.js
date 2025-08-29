import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const useHeroData = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(`${API_BASE_URL}/hero`, {
          timeout: 10000 // 10 second timeout
        });
        
        if (response.data.success) {
          setHeroData(response.data.data);
        } else {
          throw new Error('Failed to fetch hero data');
        }
      } catch (err) {
        console.error('Error fetching hero data:', err);
        setError(err.message || 'Failed to fetch hero data from database');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { 
    heroData, 
    loading, 
    error
  };
};
