import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import brtsif from "../../assets/partners/brtsif.jpg";
import upstartup from "../../assets/partners/upstartup.jpg";
import zone from "../../assets/partners/zone.jpg";
import iitd from "../../assets/partners/iitd.jpg";
import iimb from "../../assets/partners/iimb.jpg";
import science from "../../assets/partners/science.jpg";

// Fallback logos in case API fails
const fallbackLogos = [
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
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Prefer env override if provided; falls back to localhost
  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/supporters`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          // Transform API data to match the expected format
          const transformedData = Array.isArray(data) ? data.map(supporter => ({
            src: supporter.imageUrl,
            url: supporter.url,
            alt: supporter.alt || supporter.name
          })) : fallbackLogos;
          setLogos(transformedData);
        }
      } catch (err) {
        console.error("Error fetching supporters:", err);
        if (isMounted) {
          setError("Unable to load supporters right now.");
          setLogos(fallbackLogos);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  useEffect(() => {
    if (isHovered || logos.length === 0) return;

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
  }, [isHovered, logos.length]);

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
            {/* <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-yellow-400">Partners</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
              Our Supporters
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              We proudly collaborate with industry-leading incubators and institutions to support innovation and entrepreneurship.
            </p>
          </motion.div>

          {isLoading && (
            <div className="flex overflow-hidden space-x-12 justify-center">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className="flex-shrink-0 animate-pulse">
                  <div className="h-32 sm:h-24 md:h-28 w-48 mx-4 rounded-lg bg-slate-200"></div>
                </div>
              ))}
            </div>
          )}
          
          {!isLoading && logos.length > 0 && (
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
          )}
          
          {!isLoading && logos.length === 0 && !error && (
            <div className="text-center py-12 text-slate-500">
              <p>No supporters available right now.</p>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Supporters;
