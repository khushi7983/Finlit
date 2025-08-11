import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import brtsif from "../../assets/partners/brtsif.jpg";
import upstartup from "../../assets/partners/upstartup.jpg";
import zone from "../../assets/partners/zone.jpg";
import iitd from "../../assets/partners/iitd.jpg";
import iimb from "../../assets/partners/iimb.jpg";
import science from "../../assets/partners/science.jpg";

const logos = [
  { src: brtsif, url: "https://brtsif.com", alt: "BRTSIF" },
  { src: upstartup, url: "https://startinup.up.gov.in", alt: "UP Startup" },
  { src: zone, url: "https://zone.com", alt: "ZONE" },
  { src: iitd, url: "https://iitd.ac.in", alt: "IIT Delhi" },
  { src: iimb, url: "https://iimb.ac.in", alt: "IIM Bangalore" },
  { src: science, url: "https://science.org", alt: "Science Organization" },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Supporters = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCenterIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 >= logos.length - 1 ? 1 : prevIndex + 1;

        if (scrollRef.current) {
          const logoWidth = 240;
          scrollRef.current.scrollTo({
            left: (nextIndex - 1) * logoWidth,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.section
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariant}>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-yellow-400">Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
              Our Supporters
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              We proudly collaborate with industry-leading incubators and institutions to support innovation and entrepreneurship.
            </p>
          </motion.div>

          <motion.div
            ref={scrollRef}
            className="flex overflow-hidden space-x-12 justify-center"
            variants={containerVariant}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`flex-shrink-0 transition-all duration-300 ${
                  index === centerIndex ? "scale-110" : "scale-90 opacity-70"
                } hover:scale-110 hover:opacity-100`}
                variants={itemVariant}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.05 }}
              >
                <img
                  loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  className="h-32 sm:h-24 md:h-28 w-auto mx-4 rounded-lg shadow-md"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Supporters;
