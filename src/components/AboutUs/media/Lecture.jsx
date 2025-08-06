import React from 'react';
import { ArrowLeft, GraduationCap, Calendar, Users, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Lecture = () => {
  const navigate = useNavigate();

  const lectures = [
    {
      id: 1,
      title: "Introduction to Financial Markets",
      institution: "IIT Delhi",
      date: "March 5, 2024",
      students: "150+",
      duration: "90 min",
      thumbnail: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Lecture+1"
    },
    {
      id: 2,
      title: "Investment Portfolio Management",
      institution: "IIM Bangalore",
      date: "February 20, 2024",
      students: "200+",
      duration: "120 min",
      thumbnail: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Lecture+2"
    },
    {
      id: 3,
      title: "Digital Banking & Fintech",
      institution: "NSE Academy",
      date: "February 10, 2024",
      students: "180+",
      duration: "75 min",
      thumbnail: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Lecture+3"
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
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Lecture Series & Workshops</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Educational presentations and workshops where we share knowledge on financial literacy, 
            investment strategies, and practical financial skills.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
            <div className="text-gray-600">Total Sessions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">530+</div>
            <div className="text-gray-600">Total Students</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
            <div className="text-gray-600">Institutions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Student Rating</div>
          </div>
        </div>

        {/* Lecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={lecture.thumbnail} 
                  alt={lecture.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{lecture.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {lecture.institution}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {lecture.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{lecture.students} students</span>
                  <span className="text-sm text-gray-500">{lecture.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lecture;
