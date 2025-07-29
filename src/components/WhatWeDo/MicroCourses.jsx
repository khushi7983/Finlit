import React, { useState } from 'react';

const allImages = [
  'src/assets/micro_courses/Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg',
  'src/assets/micro_courses/Bond-A-Mistry-1536x864.png',
  'src/assets/micro_courses/CRYPTO-9.png',
  'src/assets/micro_courses/Decoding-Derivatives-1536x864.png',
  'src/assets/micro_courses/Decoding-Financial-Literacy_Cover-1536x864.jpg',
  'src/assets/micro_courses/FOREX-1.png',
  'src/assets/micro_courses/Fundamental-Analysis-1536x864.png',
  'src/assets/micro_courses/Insurance-Planning--1536x864.png',
  'src/assets/micro_courses/IPO-1-1536x845.png',
  'src/assets/micro_courses/Retirement-Planning-Cover-1-1536x864.png',
  'src/assets/micro_courses/Simplifying-Money-Cover-1536x864.jpg',
  'src/assets/micro_courses/Technical-Analysis-1-1536x864.png',
  'src/assets/micro_courses/Understanding-Mutual-Funds-Risks-1536x864.png',
  'src/assets/micro_courses/WhatsApp-Image-2021-11-26-at-4.24.02-PM.jpeg',
];

const MicroCourses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  // Show only the first 9 courses
  const imagesToShow = allImages.slice(0, 9);

  const handleExplore = () => {
    window.location.href = '/all-courses';
  };

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div className="relative min-h-screen w-full px-4 py-12 flex flex-col items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* SVG Dot Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      {/* Main Content */}
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">FinLit Micro-courses</h2>
      <p className="mb-8 text-lg text-center max-w-2xl text-yellow-700/80">Explore our range of micro-courses designed to enhance your financial literacy.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {imagesToShow.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-2 flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer max-w-xs mx-auto"
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={image.split('/').pop().split('.')[0]}
              className="object-contain rounded-lg border border-gray-100 shadow-sm"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleExplore}
        className="mt-8 group bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg border border-yellow-500/20"
      >
        Explore All Courses
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
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

export default MicroCourses;