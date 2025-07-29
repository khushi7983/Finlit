import React, { useState } from 'react';

const allImages = [
  'src/assets/micro_courses/Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg',
  'src/assets/micro_courses/Bond-A-Mistry-1536x864.png',
  'src/assets/micro_courses/CRYPTO-9.png',
  'src/assets/micro_courses/Decoding-Derivatives-1536x864.png',
  'src/assets/micro_courses/Decoding-Financial-Literacy_Cover-1536x864.jpg',
  'src/assets/micro_courses/FOREX-1.png',
  'src/assets/micro_courses/Fundamental-Analysis-1536x864.png',
  'src/assets/micro_courses/Insurance-Planning--1536x864.png', // fixed double dash
  'src/assets/micro_courses/IPO-1-1536x845.png',
  'src/assets/micro_courses/Retirement-Planning-Cover-1-1536x864.png',
  'src/assets/micro_courses/Simplifying-Money-Cover-1536x864.jpg',
  'src/assets/micro_courses/Technical-Analysis-1-1536x864.png',
  'src/assets/micro_courses/Understanding-Mutual-Funds-Risks-1536x864.png',
  'src/assets/micro_courses/WhatsApp-Image-2021-11-26-at-4.24.02-PM.jpeg',
];

// Only use these relevant filter keywords
const filterKeywords = [
  "Stock", "Bond", "Crypto", "Derivatives", "Insurance", "Mutual Funds", "Retirement", "IPO", "Analysis", "Money", "Forex"
];

const getCourseName = (path) => {
  const file = path.split('/').pop();
  return file
    .replace(/[-_]/g, ' ')
    .replace(/\.(jpg|jpeg|png)$/i, '')
    .replace(/\d{3,4}x\d{3,4}/, '')
    .replace(/cover image|cover/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const AllCourses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const [showAll, setShowAll] = useState(false); // showAll is now unused
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter images based on selected keyword
  const filteredImages = selectedFilter === 'All'
    ? allImages
    : allImages.filter((img) => {
        const name = getCourseName(img).toLowerCase();
        if (selectedFilter === 'Mutual Funds') {
          return name.includes('mutual') && name.includes('fund');
        }
        return name.includes(selectedFilter.toLowerCase());
      });

  // Always show all filtered images
  const imagesToShow = filteredImages;

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div className="relative container mx-auto p-4 min-h-screen pt-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* SVG Dot Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      {/* Filter Bar */}
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center">All Courses</h2>
      {/* <p className="mb-4 text-base text-center max-w-2xl text-slate-600">Browse our complete collection of micro-courses designed to boost your financial literacy.</p> */}
      <div className="mb-8 flex flex-wrap gap-3 items-center justify-center">
        <span className="font-semibold mr-2">Filter:</span>
        <button
          className={`px-4 py-1 rounded-full border transition-all duration-200 shadow-sm ${selectedFilter === 'All' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-100'}`}
          onClick={() => setSelectedFilter('All')}
        >
          All
        </button>
        {filterKeywords.map((keyword) => (
          <button
            key={keyword}
            className={`px-4 py-1 rounded-full border transition-all duration-200 shadow-sm ${selectedFilter === keyword ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-100'}`}
            onClick={() => setSelectedFilter(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
      {/* Download Buttons */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Download</h2>
        <button
          className="mt-2 mr-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
        >
          Download Android App
        </button>
        <button
          className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
        >
          Download iOS App
        </button>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {imagesToShow.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl max-w-xs mx-auto cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={getCourseName(image)}
              className="object-contain rounded-lg border border-gray-100 shadow-sm"
            />
          </div>
        ))}
      </div>
      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt="Full Course Preview"
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCourses;