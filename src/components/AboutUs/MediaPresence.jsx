import React from 'react';
import { Video, Users, Mic, GraduationCap, Play, ExternalLink } from 'lucide-react';

const MediaPresence = () => {
  const mediaTypes = [
    {
      id: 1,
      title: "Interview",
      icon: <Video className="w-8 h-8" />,
      description: "Exclusive interviews and media appearances",
      count: "12+ Features",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Conference",
      icon: <Users className="w-8 h-8" />,
      description: "Speaking engagements and panel discussions",
      count: "8+ Events",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "Podcast",
      icon: <Mic className="w-8 h-8" />,
      description: "Audio conversations and thought leadership",
      count: "15+ Episodes",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 4,
      title: "Lecture Series",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Educational presentations and workshops",
      count: "6+ Sessions",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Media Presence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse media engagements across interviews, conferences, podcasts, and educational series
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaTypes.map((media) => (
            <div
              key={media.id}
              className={`group relative overflow-hidden rounded-2xl ${media.bgColor} border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer`}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${media.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`${media.iconColor} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  {media.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {media.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {media.description}
                </p>

                {/* Count */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${media.iconColor} bg-white bg-opacity-80`}>
                    {media.count}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                </div>

                {/* Hover Effect Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className={`p-2 rounded-full bg-gradient-to-r ${media.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent opacity-20 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-200 to-transparent opacity-30 rounded-tr-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                40+
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Total Appearances</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Total Views</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Media Partners</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Positive Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPresence;
