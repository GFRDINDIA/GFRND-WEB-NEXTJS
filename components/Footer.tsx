"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, X, PlaySquare, Code2, Sparkles, LucideIcon } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink extends NavLink {
  icon: LucideIcon;
}

type SectionId = 'home' | 'about' | 'services' | 'industries' | 'contact';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI Services', href: '#claude-ai-services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Trust & Compliance', href: '#trust-compliance' },
    { name: 'Contact', href: '#contact' },
  ];

  const services: NavLink[] = [
    { name: 'AI & Data Solutions', href: '#service-ai-data' },
    { name: 'Automation', href: '#service-automation' },
    { name: 'Edge AI', href: '#service-edge-ai' },
    { name: 'Research & Development', href: '#service-research' }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: X, href: '#', name: 'X' },
    { icon: PlaySquare, href: '#', name: 'YouTube' },
    { icon: Code2, href: '#', name: 'GitHub' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', '') as SectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-[2px] rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-blue-700 shadow-lg">
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
              <div>
                <h3 className="text-base font-bold tracking-tight">Grace & Faith R&D</h3>
                <p className="text-blue-400 text-xs tracking-wide">Innovation Lab</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Driving innovation at the intersection of AI, Automation, and Edge Intelligence 
              to create intelligent, scalable, and sustainable solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social: SocialLink, index: number) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link: NavLink, index: number) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service: NavLink, index: number) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {service.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:contact@gfrnd.com" className="text-white hover:text-blue-400 transition-colors">
                    contact@gfrnd.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+919372348876" className="text-white hover:text-green-400 transition-colors">
                    +91-9372348876
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Innovation Hub, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Grace and Faith Research and Development (OPC) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>

        {/* Innovation Badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-green-500/20 border border-blue-500/30 rounded-full">
            <div className="p-[2px] rounded-full bg-gradient-to-br from-blue-500 via-green-400 to-blue-700">
              <div className="rounded-full overflow-hidden bg-white">
                <Image
                  src="/logo.png"
                  alt="Grace & Faith R&D"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Grace & Faith R&D — Powered by Innovation & Research
            </span>
            <Sparkles className="h-4 w-4 text-green-400 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;