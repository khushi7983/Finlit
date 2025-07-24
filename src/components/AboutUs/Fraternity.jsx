import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Neha Misra",
    role: "Founder & Director",
    image: require("../../assets/members/neha.png"),
    linkedin: "https://www.linkedin.com/in/neha-misra-thefinlitproject/",
  },
  {
    name: "Dr. Dinesh Chandra Misra",
    role: "Chief Mentor",
    image: require("../../assets/members/dinesh.png"),
    linkedin: "https://www.linkedin.com/in/dr-dinesh-chandra-misra-81230753/",
  },
  {
    name: "Jimmy Vishwakarma",
    role: "Tech Advisor",
    image: require("../../assets/members/jimmy.png"),
    linkedin: "https://www.linkedin.com/in/jimmy-vishwakarma/?originalSubdomain=in",
  },
];

const Fraternity = () => {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1F3E] mb-12 text-center">
        FinLit Fraternity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-[#0F1F3E]">{member.name}</h3>
            <p className="text-gray-600 mb-3">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] text-2xl inline-block"
            >
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fraternity;
