import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Empty array - testimonials will be fetched from API
const fallbackTestimonials = [];

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

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const carouselRef = useRef(null);

  // Prefer env override if provided; falls back to localhost
  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/testimonials`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) setTestimonials(Array.isArray(data) ? data : fallbackTestimonials);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        if (isMounted) {
          setError("Unable to load testimonials right now.");
          setTestimonials(fallbackTestimonials);
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
    const carousel = carouselRef.current;
    if (!carousel || testimonials.length === 0) return;

    let animationId;
    const scrollSpeed = 0.5; // Slower speed for better readability

    const duplicatedTestimonials = [...testimonials, ...testimonials];
    const totalWidth = duplicatedTestimonials.length * (320 + 24); // card width + gap

    carousel.style.width = `${totalWidth}px`;
    let scrollAmount = 0;

    const animate = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= totalWidth / 2) {
        scrollAmount = 0;
      }
      carousel.style.transform = `translateX(-${scrollAmount}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [testimonials]);
  console.log("Testimonials:", testimonials);

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
              <Quote className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400">Testimonials</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
              What People Say
            </h2>
          </motion.div>
          <div className="relative w-full overflow-hidden group">
            {isLoading && (
              <div className="flex items-start gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="flex-none bg-white rounded-2xl p-6 shadow-lg border border-slate-200 w-80 min-h-[192px] animate-pulse">
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2 w-3/4"></div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="h-4 bg-slate-200 rounded mb-1"></div>
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {!isLoading && testimonials.length > 0 && (
              <motion.div
                ref={carouselRef}
                className="flex items-start gap-6 group-hover:[animation-play-state:paused]"
                variants={containerVariant}
                style={{ willChange: "transform" }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-none bg-white rounded-2xl p-6 shadow-lg border border-slate-200 w-80 min-h-[192px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    variants={itemVariant}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-sm text-slate-600 italic leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <div className="font-semibold text-sm text-slate-800 truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {testimonial.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {!isLoading && testimonials.length === 0 && !error && (
              <div className="text-center py-12 text-slate-500">
                <Quote className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                <p>No testimonials available right now.</p>
              </div>
            )}
            
            {error && (
              <div className="text-center py-12 text-red-500">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;