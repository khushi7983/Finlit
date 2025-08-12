import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Motion variants for smooth reveal animations
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeInOut" } },
};

const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

function getGradientClasses(gradient) {
  // Accept gradients like "from-green-500 to-emerald-500" from DB
  const sanitized = typeof gradient === "string" && gradient.trim().length > 0 ? gradient.trim() : "from-slate-700 to-slate-900";
  return `bg-gradient-to-r ${sanitized}`;
}

const SkeletonCard = () => (
  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-h-[280px] animate-pulse">
    <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-slate-700 to-slate-900 mb-4" />
    <div className="h-6 w-3/4 bg-white/10 rounded mb-3" />
    <div className="h-4 w-full bg-white/10 rounded mb-2" />
    <div className="h-4 w-5/6 bg-white/10 rounded mb-8" />
    <div className="h-5 w-40 bg-white/10 rounded" />
  </div>
);

const Offerings = () => {
  const [offerings, setOfferings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Prefer env override if provided; falls back to localhost
  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/offerings`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) setOfferings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching offerings:", err);
        if (isMounted) setError("Unable to load offerings right now.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  return (
    <motion.section
      id="offerings"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      {/* subtle background motif */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40l15-15v30l-15-15z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariant}>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-yellow-400">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our Offerings</h2>
          </motion.div>

          {/* Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariant}>
            {isLoading && Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={`s-${idx}`} />)}

            {!isLoading && offerings.map((offering, index) => (
              <motion.div
                key={offering?._id || `${offering?.title || "offering"}-${index}`}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 p-6 flex flex-col justify-between min-h-[280px] hover:shadow-xl transition-all duration-300"
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Accent gradient bar using DB-provided gradient */}
                <div className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl ${getGradientClasses(offering?.gradient)}`} />

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{offering?.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-4">{offering?.description}</p>
                </div>

                <a
                  href={offering?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 text-yellow-400 font-semibold text-base hover:text-yellow-500 transition-colors"
                >
                  {offering?.cta || "Learn more"}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty/error states */}
          {!isLoading && offerings.length === 0 && !error && (
            <motion.div
              className="text-center mt-12 text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p variants={pulseVariant} animate="animate">No offerings available right now. Please check back soon.</motion.p>
            </motion.div>
          )}

          {error && (
            <div className="text-center mt-12 text-red-300">{error}</div>
          )}

          {/* CTA footer */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-base text-slate-300 mb-6" variants={pulseVariant} animate="animate">
              Ready to transform your financial future?
            </motion.p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Offerings;
