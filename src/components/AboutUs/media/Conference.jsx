import React from 'react'

const Conference = () => {
  const conferences = [
    {
      id: 1,
      title: "Financial Planning & Literacy Skills for Women",
      speaker: "Neha Misra",
      role: "CEO & Co-Founder, The Fin Lit Project",
      date: "April 15, 2023",
      description: "Decoding the myths and mysteries of money management for women. This online event featured comprehensive financial planning strategies and literacy skills specifically designed for women.",
      youtubeUrl: "https://youtu.be/Di3nso7qr0I",
      embedId: "Di3nso7qr0I",
      category: "Financial Literacy",
      eventType: "Online Event",
      gradient: "from-gray-200 to-blue-100",
      icon: "👩‍💼"
    },
    {
      id: 2,
      title: "Decentralised Identity - The Next Gen Revolution",
      speaker: "Neha Misra",
      role: "CEO & Co-Founder, The Fin Lit Project",
      date: "October 8, 2020",
      description: "A conclave of Industry Thought Leaders discussing the future of decentralized identity in fintech. This conference explored the revolutionary impact of blockchain technology on identity management.",
      youtubeUrl: "https://youtu.be/C5EJ0Tv9xLQ",
      embedId: "C5EJ0Tv9xLQ",
      category: "FinTech",
      eventType: "Industry Conference",
      gradient: "from-blue-200 to-blue-300",
      icon: "🔗"
    },
    {
      id: 3,
      title: "ROPTalks - One-on-One Conversation with Neha Misra",
      speaker: "Neha Misra",
      role: "CEO, The Fin Lit Project",
      date: "2023",
      description: "An intimate conversation featuring Neha Misra discussing financial literacy, entrepreneurship, and the mission of The Fin Lit Project. Part of the ROPTalks pro bono initiative.",
      youtubeUrl: "https://youtu.be/GX3hmLayWAA",
      embedId: "GX3hmLayWAA",
      category: "Leadership",
      eventType: "Interview Series",
      gradient: "from-gray-100 to-gray-300",
      icon: "🎤"
    },
    {
      id: 4,
      title: "Enabling Financial Literacy - Women Tech Global Conference",
      speaker: "Neha Misra",
      role: "CEO & Co-Founder, The Fin Lit Project",
      date: "June 10, 2020",
      description: "Featured presentation at the Women Tech Global Conference 2020. Neha Misra discusses the importance of enabling financial literacy and the role of technology in democratizing financial education.",
      youtubeUrl: "https://youtu.be/xD05rhcdSH8",
      embedId: "xD05rhcdSH8",
      category: "Technology",
      eventType: "Global Conference",
      gradient: "from-blue-100 to-gray-200",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-blue-100 py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gray-300 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-100 opacity-20 rounded-full animate-bounce"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Conference Talks & Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Watch Neha Misra and The Fin Lit Project team share insights on financial literacy, 
            technology, and empowering communities through education.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 text-gray-900 font-medium">
              🎥 4 Featured Videos • 🌟 Global Conferences • 💡 Expert Insights
            </div>
          </div>
        </div>
      </div>

      {/* Conference Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {conferences.map((conference, index) => (
            <div 
              key={conference.id} 
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Video Section with Gradient Overlay */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${conference.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <iframe
                  className="w-full h-72 relative z-10"
                  src={`https://www.youtube.com/embed/${conference.embedId}`}
                  title={conference.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {conference.icon} {conference.eventType}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`bg-gradient-to-r ${conference.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    {conference.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    📅 {conference.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {conference.title}
                </h3>

                {/* Speaker Profile */}
                <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <div className={`w-12 h-12 bg-gradient-to-r ${conference.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                    <span className="text-white font-bold text-lg">
                      {conference.speaker.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{conference.speaker}</div>
                    <div className="text-gray-600">{conference.role}</div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {conference.description}
                </p>

                <a
                  href={conference.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600 text-lg">Our team has spoken at conferences worldwide, sharing insights on financial literacy and technology.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Insights</h3>
            <p className="text-gray-600 text-lg">Learn from industry experts and thought leaders in fintech, financial literacy, and women empowerment.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Impact</h3>
            <p className="text-gray-600 text-lg">Discover how we're making financial education accessible to communities worldwide.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-blue-100 rounded-3xl p-12 text-gray-900">
            <h2 className="text-4xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-xl mb-8 opacity-90">Join our community and stay updated with the latest insights on financial literacy and technology.</p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Subscribe to Our Channel
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Conference