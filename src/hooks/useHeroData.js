import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api');

// Fallback hero data in case API fails
const fallbackHeroData = {
  title: "Financial Literacy for Everyone",
  subtitle: "Empowering individuals with essential financial knowledge and skills",
  description: "Join thousands of learners who are building their financial future with our comprehensive courses and resources.",
  primaryButtonText: "Start Learning",
  secondaryButtonText: "Explore Courses",
  backgroundImage: "/assets/finlit-story.mp4",
  backgroundGradient: "from-blue-900 via-purple-900 to-indigo-900",
  isActive: true,
  stats: [
    {
      icon: "users",
      value: "10,000+",
      label: "Students"
    },
    {
      icon: "book-open",
      value: "50+",
      label: "Courses"
    },
    {
      icon: "award",
      value: "95%",
      label: "Success Rate"
    }
  ],
  features: [
    {
      icon: "shield",
      title: "Expert-Led Courses",
      description: "Learn from industry professionals"
    },
    {
      icon: "smartphone",
      title: "Mobile Learning",
      description: "Study anywhere, anytime"
    },
    {
      icon: "award",
      title: "Certificates",
      description: "Get recognized for your skills"
    }
  ],
  finlitLearn: {
    playStore: "https://play.google.com/store/apps/details?id=com.finlit.learn",
    appStore: "https://apps.apple.com/app/finlit-learn"
  },
  finlitInvest: {
    playStore: "https://play.google.com/store/apps/details?id=com.finlit.invest",
    appStore: "https://apps.apple.com/app/finlit-invest"
  }
};

export const useHeroData = () => {
  const [heroData, setHeroData] = useState(fallbackHeroData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching hero data from:', `${API_BASE_URL}/hero`);
        
        const response = await axios.get(`${API_BASE_URL}/hero`, {
          timeout: 10000, // 10 second timeout
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        console.log('Hero API response:', response.data);
        
        if (response.data && response.data.success) {
          setHeroData(response.data.data);
          console.log('Hero data loaded successfully');
        } else {
          console.warn('API returned unsuccessful response, using fallback data');
          setHeroData(fallbackHeroData);
        }
      } catch (err) {
        console.error('Error fetching hero data:', err);
        console.log('Using fallback hero data due to API error');
        setHeroData(fallbackHeroData);
        setError('Using fallback data - API unavailable');
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
