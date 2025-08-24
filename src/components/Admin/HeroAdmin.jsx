import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const HeroAdmin = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/hero`);
      if (response.data.success) {
        setHeroData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
      setMessage('Error fetching hero data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      if (heroData._id) {
        // Update existing
        await axios.put(`${API_BASE_URL}/hero/${heroData._id}`, heroData);
        setMessage('Hero data updated successfully!');
      } else {
        // Create new
        const response = await axios.post(`${API_BASE_URL}/hero`, heroData);
        setHeroData(response.data.data);
        setMessage('Hero data created successfully!');
      }
    } catch (error) {
      console.error('Error saving hero data:', error);
      setMessage('Error saving hero data');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setHeroData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStatsChange = (index, field, value) => {
    setHeroData(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    }));
  };

  const handleAppLinksChange = (app, store, value) => {
    setHeroData(prev => ({
      ...prev,
      [app]: {
        ...prev[app],
        [store]: value
      }
    }));
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Hero Section Admin</h1>
      
      {message && (
        <div className={`p-4 mb-6 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Content */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Basic Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={heroData?.title || ''}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Master Your Money in Minutes"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <textarea
                value={heroData?.subtitle || ''}
                onChange={(e) => handleInputChange('subtitle', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Empowering You, One Financial Decision at a Time..."
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {heroData?.stats?.map((stat, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Stat {index + 1}</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Number</label>
                    <input
                      type="text"
                      value={stat.number}
                      onChange={(e) => handleStatsChange(index, 'number', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      placeholder="50K+"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => handleStatsChange(index, 'label', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      placeholder="Active Users"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Icon</label>
                    <select
                      value={stat.icon}
                      onChange={(e) => handleStatsChange(index, 'icon', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Users">Users</option>
                      <option value="BookOpen">BookOpen</option>
                      <option value="Award">Award</option>
                      <option value="TrendingUp">TrendingUp</option>
                      <option value="DollarSign">DollarSign</option>
                      <option value="Target">Target</option>
                      <option value="Star">Star</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Links */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">App Store Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FinLit Learn */}
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium mb-3">FinLit Learn</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Play Store URL</label>
                  <input
                    type="url"
                    value={heroData?.finlitLearn?.playStore || ''}
                    onChange={(e) => handleAppLinksChange('finlitLearn', 'playStore', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="https://play.google.com/store/apps/details?id=..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">App Store URL</label>
                  <input
                    type="url"
                    value={heroData?.finlitLearn?.appStore || ''}
                    onChange={(e) => handleAppLinksChange('finlitLearn', 'appStore', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="https://apps.apple.com/..."
                  />
                </div>
              </div>
            </div>

            {/* FinLit Invest */}
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium mb-3">FinLit Invest</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Play Store URL</label>
                  <input
                    type="url"
                    value={heroData?.finlitInvest?.playStore || ''}
                    onChange={(e) => handleAppLinksChange('finlitInvest', 'playStore', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="https://play.google.com/store/apps/details?id=..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">App Store URL</label>
                  <input
                    type="url"
                    value={heroData?.finlitInvest?.appStore || ''}
                    onChange={(e) => handleAppLinksChange('finlitInvest', 'appStore', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="https://apps.apple.com/..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styling */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Styling</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Background Gradient</label>
              <input
                type="text"
                value={heroData?.backgroundGradient || ''}
                onChange={(e) => handleInputChange('backgroundGradient', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="from-slate-50 via-blue-50 to-indigo-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Animation Duration (ms)</label>
              <input
                type="number"
                value={heroData?.animations?.duration || 800}
                onChange={(e) => handleInputChange('animations', { ...heroData.animations, duration: parseInt(e.target.value) })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                min="100"
                max="2000"
                step="100"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroAdmin;
