import React from 'react';
import { ArrowLeft, Users, Calendar, MapPin, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Confrence = () => {
  const navigate = useNavigate();

  const conferences = [
    {
      id: 1,
      title: "Financial Literacy Summit 2024",
      location: "Mumbai, India",
      date: "March 15-16, 2024",
      attendees: "500+",
      duration: "2 Days",
      thumbnail: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Conference+1"
    },
    {
      id: 2,
      title: "Investment Education Workshop",
      location: "Delhi, India",
      date: "February 28, 2024",
      attendees: "200+",
      duration: "1 Day",
      thumbnail: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Conference+2"
    },
    {
      id: 3,
      title: "Digital Finance Conference",
      location: "Bangalore, India",
      date: "January 20, 2024",
      attendees: "300+",
      duration: "1 Day",
      thumbnail: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Conference+3"
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
            <Users className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Conference & Speaking Engagements</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Speaking engagements and panel discussions where we share expertise on financial literacy, 
            investment strategies, and educational innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">1K+</div>
            <div className="text-gray-600">Total Attendees</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferences.map((conference) => (
            <div key={conference.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={conference.thumbnail} 
                  alt={conference.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{conference.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {conference.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {conference.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{conference.attendees} attendees</span>
                  <span className="text-sm text-gray-500">{conference.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Confrence;
