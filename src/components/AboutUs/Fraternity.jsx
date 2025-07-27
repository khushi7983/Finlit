import React, { useEffect, useRef } from 'react';
import neha from '../../assets/members/neha.png';
import dcmishra from '../../assets/members/dcmishra.png';
import archana from '../../assets/members/archanah.png';
import jimmy from '../../assets/members/jimmy.png';

const fraternityImages = [
  { src: neha, name: 'Neha', role: 'Lead Developer' },
  { src: dcmishra, name: 'DC Mishra', role: 'UI/UX Designer' },
  { src: archana, name: 'Archana', role: 'Backend Engineer' },
  { src: jimmy, name: 'Jimmy', role: 'Frontend Developer' },
];

const Fraternity = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add('animate-fade-in');
    return () => section.classList.remove('animate-fade-in');
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto bg-gradient-to-br from-white via-gray-100 to-[#FACF07] rounded-xl py-12 px-8 shadow-2xl mt-12"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/3 pr-8 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-5xl font-extrabold text-[#FACF07] mb-6 drop-shadow-lg">
            Our Fraternity
          </h2>
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Pillars</h3>
            <ul className="text-lg text-gray-800 space-y-3">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#FACF07] rounded-full mr-3 animate-pulse"></span>
                Collaboration
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#FACF07] rounded-full mr-3 animate-pulse"></span>
                Innovation
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#FACF07] rounded-full mr-3 animate-pulse"></span>
                Excellence
              </li>
            </ul>
          </div>
          <p className="text-2xl font-semibold text-gray-800 italic animate-slide-up">
            "Building the Future, One Code at a Time!"
          </p>
        </div>

        {/* Pyramid Layout for Members */}
        <div className="md:w-2/3 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 place-items-center">
            {/* Top single image */}
            <div className="col-span-2 flex flex-col items-center">
              <img
                src={fraternityImages[0].src}
                alt={fraternityImages[0].name}
                className="w-24 h-24 object-cover rounded-full border-4 border-[#FACF07] shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <p className="text-center mt-2 font-semibold text-gray-800">{fraternityImages[0].name}</p>
              <p className="text-xs text-gray-600">{fraternityImages[0].role}</p>
            </div>

            {/* Two images in middle row */}
            {fraternityImages.slice(1, 3).map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-[#FACF07] shadow-xl hover:scale-110 transition-transform duration-300"
                />
                <p className="text-center mt-2 font-semibold text-gray-800">{member.name}</p>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            ))}

            {/* Bottom single image */}
            <div className="col-span-2 flex flex-col items-center">
              <img
                src={fraternityImages[3].src}
                alt={fraternityImages[3].name}
                className="w-24 h-24 object-cover rounded-full border-4 border-[#FACF07] shadow-xl hover:scale-110 transition-transform duration-300"
              />
              <p className="text-center mt-2 font-semibold text-gray-800">{fraternityImages[3].name}</p>
              <p className="text-xs text-gray-600">{fraternityImages[3].role}</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.5s ease-out forwards;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out forwards 0.5s;
          }
        `}
      </style>
    </div>
  );
};

export default Fraternity;
