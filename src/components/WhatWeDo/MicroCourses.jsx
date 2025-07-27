import React from 'react';

const MicroCourses = () => {
  const initialImages = [
    'src\\assets\\micro_courses\\Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg',
    'src\\assets\\micro_courses\\Bond-A-Mistry-1536x864.png',
    'src\\assets\\micro_courses\\CRYPTO-9.png',
    'src\\assets\\micro_courses\\Decoding-Derivatives-1536x864.png',
  ];

  const allImages = [
    ...initialImages,
    'src\\assets\\micro_courses\\Decoding-Financial-Literacy_Cover-1536x864.jpg',
    'src\\assets\\micro_courses\\FOREX-1.png',
    'src\\assets\\micro_courses\\Fundamental-Analysis-1536x864.png',
    'src\\assets\\micro_courses\\Insurance-Planning-1536x864.png',
    'src\\assets\\micro_courses\\IPO-1-1536x845.png',
    'src\\assets\\micro_courses\\Retirement-Planning-Cover-1-1536x864.png',
    'src\\assets\\micro_courses\\Simplifying-Money-Cover-1536x864.jpg',
    'src\\assets\\micro_courses\\Technical-Analysis-1-1536x864.png',
    'src\\assets\\micro_courses\\Understanding-Mutual-Funds-Risks-1536x864.png',
    'src\\assets\\micro_courses\\WhatsApp-Image-2021-11-26-at-4.24.02-PM.jpeg',
  ];

  const handleExplore = () => {
    window.location.href = '/all-courses';
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">FinLit Micro-courses</h2>
      <p className="mb-4">Explore our range of micro-courses designed to enhance your financial literacy.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {initialImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image.split('\\').pop().split('.')[0]}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
      <button
        onClick={handleExplore}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Explore All Courses
      </button>
    </div>
  );
};

export default MicroCourses;