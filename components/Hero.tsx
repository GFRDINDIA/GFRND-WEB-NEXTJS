"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Zap,
  Database,
  Network,
  LucideIcon,
} from "lucide-react";

// Fixed particle positions to avoid SSR/client hydration mismatch
const PARTICLES = [
  { left: 63.5, top: 58.2, duration: 3.8, delay: 1.2 },
  { left: 51.6, top: 92.3, duration: 4.2, delay: 0.4 },
  { left: 75.8, top: 13.2, duration: 3.2, delay: 1.8 },
  { left: 45.4, top: 6.2,  duration: 4.6, delay: 0.7 },
  { left: 91.5, top: 11.1, duration: 3.5, delay: 1.5 },
  { left: 4.8,  top: 20.7, duration: 4.0, delay: 0.2 },
  { left: 39.6, top: 14.2, duration: 3.7, delay: 1.0 },
  { left: 21.6, top: 41.6, duration: 4.4, delay: 0.9 },
  { left: 8.0,  top: 69.8, duration: 3.1, delay: 1.7 },
  { left: 62.9, top: 4.6,  duration: 4.8, delay: 0.3 },
  { left: 30.6, top: 76.2, duration: 3.6, delay: 1.3 },
  { left: 83.1, top: 32.9, duration: 4.1, delay: 0.6 },
  { left: 99.1, top: 40.0, duration: 3.3, delay: 1.9 },
  { left: 37.9, top: 70.2, duration: 4.5, delay: 0.1 },
  { left: 42.5, top: 25.5, duration: 3.9, delay: 1.4 },
  { left: 19.3, top: 81.3, duration: 4.3, delay: 0.8 },
  { left: 54.6, top: 78.2, duration: 3.4, delay: 1.6 },
  { left: 85.1, top: 16.0, duration: 4.7, delay: 0.5 },
  { left: 90.8, top: 7.8,  duration: 3.0, delay: 1.1 },
  { left: 48.9, top: 37.3, duration: 4.9, delay: 0.0 },
];

interface FeatureItem {
  icon: LucideIcon;
  label: string;
  color: string;
  sectionId: string;
}

type SectionId = "home" | "about" | "services" | "industries" | "contact";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features: FeatureItem[] = [
    {
      icon: Brain,
      label: "AI & Data Science",
      color: "from-blue-500 to-purple-500",
      sectionId: "service-ai-data",
    },
    {
      icon: Zap,
      label: "Automation & Edge AI",
      color: "from-green-500 to-teal-500",
      sectionId: "service-automation",
    },
    {
      icon: Database,
      label: "Research & Development",
      color: "from-orange-500 to-red-500",
      sectionId: "service-research",
    },
    {
      icon: Network,
      label: "Industry Applications",
      color: "from-indigo-500 to-blue-500",
      sectionId: "industries",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20" />
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Driving Innovation at the
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Intersection of AI
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 font-semibold text-blue-100 tracking-normal">
                Automation & Edge Intelligence
              </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We bridge the gap between research and real-world applications by
              building intelligent, scalable, and sustainable solutions for a
              smarter future.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner with Us
            </motion.button>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature: FeatureItem, index: number) => (
              <motion.div
                key={feature.label}
                onClick={() => scrollToSection(feature.sectionId)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.label}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
