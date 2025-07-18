import React, { useEffect, useRef, useState } from "react";
import brtsif from "../../assets/partners/brtsif.jpg";
import upstartup from "../../assets/partners/upstartup.jpg";
import zone from "../../assets/partners/zone.jpg";
import iitd from "../../assets/partners/iitd.jpg";
import iimb from "../../assets/partners/iimb.jpg";
import science from "../../assets/partners/science.jpg";

const logos = [
  { src: brtsif, url: "https://brtsif.com" },
  { src: upstartup, url: "https://startinup.up.gov.in" },
  { src: zone, url: "https://zone.com" },
  { src: iitd, url: "https://iitd.ac.in" },
  { src: iimb, url: "https://iimb.ac.in" },
  { src: science, url: "https://science.org" },
];

const Supporters = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prevIndex) =>
        prevIndex + 1 >= logos.length - 1 ? 1 : prevIndex + 1
      );

      if (scrollRef.current) {
        const logoWidth = 180;
        scrollRef.current.scrollTo({
          left: (centerIndex - 1) * logoWidth,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [centerIndex]);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Supporters
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-hidden space-x-8 transition-all duration-300 ease-in-out justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 transition-transform duration-300 filter grayscale hover:grayscale-0 ${
              index === centerIndex ? "scale-125" : "scale-100"
            }`}
          >
            <img
              src={logo.src}
              alt={`logo-${index}`}
              className="h-24 w-auto mx-4"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Supporters;
