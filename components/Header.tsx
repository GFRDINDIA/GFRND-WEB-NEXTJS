"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

type SectionId = 'home' | 'about' | 'services' | 'claude-ai-services' | 'industries' | 'trust-compliance' | 'contact';

interface NavItem {
  label: string;
  id: SectionId;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'AI Services', id: 'claude-ai-services' },
  { label: 'Industries', id: 'industries' },
  { label: 'Contact', id: 'contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Logo ring — gradient border that matches site theme */}
            <div className="p-[2px] rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-blue-700 shadow-lg shadow-blue-500/30">
              <div className="rounded-full overflow-hidden bg-white">
                <Image
                  src="/logo.png"
                  alt="Grace & Faith R&D Logo"
                  width={48}
                  height={48}
                  className="h-[48px] w-[48px] object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-lg font-bold leading-tight ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Grace & Faith R&D
              </h1>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-blue-600' : 'text-blue-100'
              }`}>
                Innovation Lab
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ y: -5 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
          initial={false}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 mt-4 p-6">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors border-b border-gray-100 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;