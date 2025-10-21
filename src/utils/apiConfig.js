// API Configuration utility
export const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || '';
};

export const getApiUrl = () => {
  return import.meta.env.VITE_API_URL || '/api';
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint) => {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};
