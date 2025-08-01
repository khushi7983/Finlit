import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate();

  // Blog data based on the uploaded images
  const blogs = [
    {
      id: 1,
      title: "Metaverse: Hype or Reality",
      author: "Neha Misra",
      role: "CEO, The Fin Lit Project",
      category: "Technology",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Exploring the potential and challenges of the metaverse in modern finance and technology.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 2,
      title: "Investing in US Markets, A Road not Taken?",
      author: "Financial Expert",
      role: "Market Analyst",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Understanding the opportunities and challenges of investing in US markets for international investors.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 3,
      title: "Learning about Finance: The Podcast Way!",
      author: "Podcast Host",
      role: "Financial Educator",
      category: "Education",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Discover how podcasts are revolutionizing financial education and making complex topics accessible.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 4,
      title: "Types of Stock Brokers you need to know",
      author: "Divya Suresh",
      role: "Stock Market Expert",
      category: "Trading",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "A comprehensive guide to understanding different types of stock brokers and their services.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 5,
      title: "Are Investors Rational or Hilarious?",
      author: "B. Rich",
      role: "HEDGEYE",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "A humorous take on investor behavior and market psychology in financial decision making.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 6,
      title: "Sustainable Finance: Learn from the Experts",
      author: "Utkarsh Majmudar",
      role: "Sustainability Expert",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Expert insights on sustainable finance and responsible business practices in the digital age.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 7,
      title: "Impact Investing : Making Sustainable Investment Choices",
      author: "Sofija Petrovic",
      role: "University of Oxford",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Guest series on impact investing and sustainable investment strategies for positive social change.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 8,
      title: "The Real Side of a Stock Market Rally",
      author: "Market Analyst",
      role: "The Fin Lit Project",
      category: "Trading",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Understanding what really drives stock market rallies and the factors behind market movements.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 9,
      title: "Sovereign Gold Bond : A bankers perspective",
      author: "Roopali Mall Vishen",
      role: "Banking Expert",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "A banker's perspective on Sovereign Gold Bonds and their role in investment portfolios.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 10,
      title: "Top 10 Financial Tips for a Startup Entrepreneur",
      author: "Startup Expert",
      role: "The Fin Lit Project",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Essential financial tips and strategies for startup entrepreneurs to build sustainable ventures.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 11,
      title: "Demystifying Mutual Funds in India",
      author: "Fund Expert",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "A comprehensive guide to understanding mutual funds as the stepping stone to retail investing in India.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 12,
      title: "Developing Competitive Jurisprudence by regulating Cartels",
      author: "Akanksha M Sharma",
      role: "The Fin Lit Project",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Exploring the need for developed competitive jurisprudence and the regulation of cartels in modern markets.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 13,
      title: "The Gold Standard",
      author: "Anrudh Bakshi",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Understanding the historical significance and modern relevance of the gold standard in global finance.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 14,
      title: "The Advent of Money",
      author: "Financial Historian",
      role: "The Fin Lit Project",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Exploring the historical evolution of money and its impact on modern financial systems.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 15,
      title: "Financial Lessons: The Pandemic Way",
      author: "Akanksha M Sharma",
      role: "The Fin Lit Project",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "It took a pandemic crisis for the world to realize the financial aesthetics of life.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 16,
      title: "Investment Landscape for Small Savings in India",
      author: "Savings Expert",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Start your investment journey with SMALL SAVINGS - the asset class in waiting.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 17,
      title: "Counter Measures to Inflation",
      author: "Economic Analyst",
      role: "The Fin Lit Project",
      category: "Economics",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Understanding inflation trends and effective strategies to counter its impact on investments.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 18,
      title: "Litigation Finance - A new asset class in waiting",
      author: "Legal Finance Expert",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Exploring litigation finance as an emerging asset class with projected returns and investment potential.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 19,
      title: "Do I really need a DeMat Account?",
      author: "Investment Advisor",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Understanding the importance and benefits of having a Demat account for modern investing.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 20,
      title: "Becoming an Investor?",
      author: "Investment Coach",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Invest wisely, invest well! A guide to becoming a smart investor with better strategies.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 21,
      title: "Understanding India's 1st Corporate Bond ETF",
      author: "ETF Expert",
      role: "The Fin Lit Project",
      category: "Investment",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "A comprehensive guide to Bharat Bond ETF and its role in India's corporate bond market.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 22,
      title: "Changing Fintech Landscape due to COVID19",
      author: "FinTech Analyst",
      role: "The Fin Lit Project",
      category: "Technology",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "How financial technology is changing in India and globally due to the COVID-19 pandemic.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 23,
      title: "Building Financial Resilience",
      author: "Financial Resilience Expert",
      role: "The Fin Lit Project",
      category: "Finance",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Strategies for building financial resilience in uncertain times and challenging economic conditions.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      id: 24,
      title: "Enabling Financial Literacy",
      author: "Neha Misra",
      role: "Co-Founder & CEO, The Fin Lit Project",
      category: "Education",
      image: "/src/assets/finlit-logo.png",
      shortDescription: "Featured at Women Tech Global Conference 2020 - Enabling financial literacy for all.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    }
  ];

  const openBlogPage = (blog) => {
    // Store blog data in localStorage for the blog page to access
    localStorage.setItem('selectedBlog', JSON.stringify(blog));
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          FinLit Blogs
        </h1>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openBlogPage(blog)}
            >
              {/* Top Section - Varied designs based on blog type */}
              <div className="h-48 relative">
                {/* Different background styles based on blog ID */}
                {blog.id <= 6 ? (
                  // First set of cards - Blue gradient with text overlay
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 relative">
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : blog.id <= 12 ? (
                  // Second set of cards - Different color schemes
                  <div className={`w-full h-full ${blog.id === 7 ? 'bg-green-600' : blog.id === 9 ? 'bg-yellow-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : blog.id <= 18 ? (
                  // Third set of cards - Different styles
                  <div className={`w-full h-full ${blog.id === 13 ? 'bg-yellow-500' : blog.id === 15 ? 'bg-teal-500' : blog.id === 18 ? 'bg-orange-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Fourth set of cards - Final styles
                  <div className={`w-full h-full ${blog.id === 24 ? 'bg-yellow-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Bottom Section - Title */}
              <div className={`p-4 ${blog.id === 1 || blog.id === 12 || blog.id === 18 || blog.id === 24 ? 'bg-orange-500' : 'bg-blue-900'}`}>
                <h4 className={`text-lg font-semibold text-center ${blog.id === 12 || blog.id === 18 ? 'text-black' : 'text-white'}`}>
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
