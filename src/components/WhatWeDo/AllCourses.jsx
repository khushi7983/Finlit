import React from 'react';

const AllCourses = () => {
  const allImages = [
    'src\\assets\\micro_courses\\Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg',
    'src\\assets\\micro_courses\\Bond-A-Mistry-1536x864.png',
    'src\\assets\\micro_courses\\CRYPTO-9.png',
    'src\\assets\\micro_courses\\Decoding-Derivatives-1536x864.png',
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

  const handleImageClick = () => {
    window.location.href = 'https://example.com/download'; // Replace with actual download link
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {allImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image.split('\\').pop().split('.')[0]}
            onClick={handleImageClick}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;