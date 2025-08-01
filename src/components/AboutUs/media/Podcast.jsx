import React from 'react';
import { ArrowLeft, Mic, Calendar, Headphones, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Podcast = () => {
  const navigate = useNavigate();

  const podcasts = [
    {
      id: 1,
      title: "Investment Basics for Beginners",
      host: "Financial Freedom Podcast",
      date: "March 10, 2024",
      duration: "45 min",
      listeners: "25K+",
      thumbnail: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Podcast+1"
    },
    {
      id: 2,
      title: "Understanding Stock Markets",
      host: "Money Matters Show",
      date: "February 25, 2024",
      duration: "52 min",
      listeners: "18K+",
      thumbnail: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Podcast+2"
    },
    {
      id: 3,
      title: "Digital Banking Revolution",
      host: "Tech Finance Weekly",
      date: "February 15, 2024",
      duration: "38 min",
      listeners: "22K+",
      thumbnail: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Podcast+3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/about-us')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to About Us
          </button>
          
          <div className="flex items-center mb-6">
            <Mic className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Podcast Appearances</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Audio conversations and thought leadership discussions where we share insights on financial literacy, 
            investment strategies, and the future of financial education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Total Episodes</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">65K+</div>
            <div className="text-gray-600">Total Listeners</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
            <div className="text-gray-600">Podcast Shows</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={podcast.thumbnail} 
                  alt={podcast.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{podcast.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Headphones className="w-4 h-4 mr-2" />
                    {podcast.host}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {podcast.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{podcast.listeners} listeners</span>
                  <span className="text-sm text-gray-500">{podcast.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
