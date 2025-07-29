import React from 'react';

// ✅ Importing images from src/assets/micro_courses
import img1 from '../../assets/micro_courses/Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg';
import img2 from '../../assets/micro_courses/Bond-A-Mistry-1536x864.png';
import img3 from '../../assets/micro_courses/CRYPTO-9.png';
import img4 from '../../assets/micro_courses/Decoding-Derivatives-1536x864.png';
import img5 from '../../assets/micro_courses/Decoding-Financial-Literacy_Cover-1536x864.jpg';
import img6 from '../../assets/micro_courses/FOREX-1.png';
import img7 from '../../assets/micro_courses/Fundamental-Analysis-1536x864.png';
import img8 from '../../assets/micro_courses/Insurance-Planning--1536x864.png';
import img9 from '../../assets/micro_courses/IPO-1-1536x845.png';
import img10 from '../../assets/micro_courses/Retirement-Planning-Cover-1-1536x864.png';
import img11 from '../../assets/micro_courses/Simplifying-Money-Cover-1536x864.jpg';
import img12 from '../../assets/micro_courses/Technical-Analysis-1-1536x864.png';
import img13 from '../../assets/micro_courses/Understanding-Mutual-Funds-Risks-1536x864.png';
import img14 from '../../assets/micro_courses/WhatsApp-Image-2021-11-26-at-4.24.02-PM.jpeg';

const initialImages = [img1, img2, img3, img4];
const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const MicroCourses = () => {
  const handleExplore = () => {
    window.location.href = '/all-courses';
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">FinLit Micro-courses</h2>
      <p className="text-center text-slate-300 mb-6">
        Explore our range of micro-courses designed to enhance your financial literacy.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {initialImages.map((image, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300"
          >
            <img
              src={image}
              alt={`Course-${index}`}
              className="w-full h-44 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleExplore}
          className="px-6 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-xl hover:bg-yellow-500 transition-all"
        >
          Explore All Courses
        </button>
      </div>
    </div>
  );
};

export default MicroCourses;
