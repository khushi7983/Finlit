import React from 'react';
import { ArrowLeft, Play, ExternalLink, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Interview = () => {
  const navigate = useNavigate();

  const interviews = [
    {
      id: 1,
      title: "What is Your Superpower? | Ulyana Zilbermints",
      subtitle: "Extraordinary Women GLOBAL CONFERENCE",
      description: "What is Your Superpower? | Ulyana Zilbermints | Inspire & Be Inspired",
      youtubeUrl: "https://www.youtube.com/watch?v=MNh_eECEmpk",
      thumbnail: "https://img.youtube.com/vi/MNh_eECEmpk/maxresdefault.jpg",
      date: "March 2024",
      views: "15K+",
      duration: "25 min"
    },
    {
      id: 2,
      title: "N Neha Misra, co-founder The Fin Lit Proje",
      subtitle: "HDFC BANK",
      description: "Neha Misra speaking at HDFC 27th AGM",
      youtubeUrl: "https://www.youtube.com/watch?v=JbH5fnJgie8&t=1s",
      thumbnail: "https://img.youtube.com/vi/JbH5fnJgie8/maxresdefault.jpg",
      date: "February 2024",
      views: "12K+",
      duration: "30 min"
    },
    {
      id: 3,
      title: "Financial Literacy & Investment Strategies",
      subtitle: "The FinLit Project",
      description: "Expert insights on financial literacy and investment strategies for beginners",
      youtubeUrl: "https://www.youtube.com/watch?v=rcacz5NJ0SA",
      thumbnail: "https://img.youtube.com/vi/rcacz5NJ0SA/maxresdefault.jpg",
      date: "January 2024",
      views: "18K+",
      duration: "35 min"
    },
    {
      id: 4,
      title: "Digital Banking & Financial Technology",
      subtitle: "FinTech Innovation",
      description: "Exploring the future of digital banking and financial technology",
      youtubeUrl: "https://youtu.be/FD8Bz1wb4KI?si=-z7l7lx23Q4QpU0A",
      thumbnail: "https://img.youtube.com/vi/FD8Bz1wb4KI/maxresdefault.jpg",
      date: "December 2023",
      views: "22K+",
      duration: "28 min"
    },
    
  ];

  const handleWatchOnYouTube = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 mt-14">
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
            <Play className="w-8 h-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Interviews & Media Appearances</h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            Exclusive interviews and media appearances where we share insights on financial literacy, 
            investment strategies, and the future of financial education.
          </p>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
            <div className="text-gray-600">Total Features</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Total Views</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-600">Media Partners</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Positive Feedback</div>
          </div>
        </div> */}

        {/* Interview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <div key={interview.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={interview.thumbnail} 
                  alt={interview.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </div>
                {/* YouTube Play Button Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    YouTube
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{interview.title}</h3>
                <p className="text-sm text-gray-600 mb-3 font-medium">{interview.subtitle}</p>
                <p className="text-gray-700 mb-4">{interview.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {interview.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {interview.views} views • {interview.duration}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleWatchOnYouTube(interview.youtubeUrl)}
                    className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      Watch later
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our Media Presence</h3>
          <p className="text-gray-600 leading-relaxed">
            Our team regularly appears in interviews, conferences, and media events to share insights on financial literacy, 
            investment strategies, and the importance of financial education. These appearances help us reach a wider audience 
            and contribute to the global conversation about financial empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interview;
