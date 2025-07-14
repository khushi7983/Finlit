// import { FaLeaf, FaPiggyBank } from 'react-icons/fa';

// const AppShowcase = () => (
//   <section id="learn-invest" className="py-20 bg-gradient-to-b from-[#f0f4f8] to-white">
//     <div className="container mx-auto px-6">
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
//         Learn & Invest
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Financial Literacy App */}
//         <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-2xl">
//               <FaPiggyBank />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
//               Financial Literacy App
//             </h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             Bite-sized courses to master money management, designed for beginners.
//           </p>
//         </div>

//         {/* ESG Investment App */}
//         <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="p-3 bg-green-100 rounded-full text-green-600 text-2xl">
//               <FaLeaf />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition duration-300">
//               ESG Investment App
//             </h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             Discover sustainable investments with our ESG screening tools.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default AppShowcase;
import React from 'react';

const AppShowcase = () => (
  <section id="learn-invest" className="py-16 md:py-24 min-h-screen">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12 animate-fade-in-up">
        Learn & Invest
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Financial Literacy App</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bite-sized courses to master money management, designed for beginners.
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-400">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">ESG Investment App</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover sustainable investments with our ESG screening tools.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AppShowcase;
