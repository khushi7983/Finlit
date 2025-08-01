import React from 'react';
import { ArrowLeft, Video, Calendar, Users, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Interview() {
  const navigate = useNavigate();

  const interviews = [
    {
      id: 1,
      title: "Financial Literacy in Digital Age",
      channel: "Business Today",
      date: "March 2024",
      views: "15K+",
      duration: "25 min",
      thumbnail: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Interview+1"
    },
    {
      id: 2,
      title: "Investment Strategies for Beginners",
      channel: "Money Matters",
      date: "February 2024",
      views: "12K+",
      duration: "30 min",
      thumbnail: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Interview+2"
    },
    {
      id: 3,
      title: "Understanding Mutual Funds",
      channel: "Finance Weekly",
      date: "January 2024",
      views: "18K+",
      duration: "28 min",
      thumbnail: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Interview+3"
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
            <Video className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Interviews & Media Appearances</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Exclusive interviews and media appearances where we share insights on financial literacy, 
            investment strategies, and the future of financial education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-600">Total Features</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Total Views</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
            <div className="text-gray-600">Media Partners</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Positive Feedback</div>
          </div>
        </div>

        {/* Interview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <div key={interview.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={interview.thumbnail} 
                  alt={interview.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{interview.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {interview.channel}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {interview.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{interview.views} views</span>
                  <span className="text-sm text-gray-500">{interview.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interview;
