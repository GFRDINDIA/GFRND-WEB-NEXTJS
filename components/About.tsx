"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Award, LucideIcon } from 'lucide-react';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const About: React.FC = () => {
  const values: ValueItem[] = [
    {
      icon: Lightbulb,
      title: 'Innovation with Integrity',
      description: 'Pushing boundaries while maintaining ethical standards in all our research and development.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Research for Impact',
      description: 'Conducting meaningful research that translates into real-world solutions and positive change.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Technology for Good',
      description: 'Leveraging technology to solve critical challenges and improve lives across communities.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Excellence & Collaboration',
      description: 'Striving for excellence through collaborative partnerships and continuous learning.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Our Journey</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Grace and Faith Research and Development (OPC) Pvt. Ltd. is a technology-driven R&D company
            dedicated to advancing innovation in Artificial Intelligence, Automation, Data, and Edge Computing.
          </p>
        </motion.div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-5">Who We Are</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-6" />
            <p className="text-base text-gray-600 mb-5 leading-relaxed text-justify">
              We bridge the gap between research and real-world applications by building intelligent,
              scalable, and sustainable solutions. Our team of experts combines cutting-edge research
              with practical implementation to drive meaningful innovation.
            </p>
            <p className="text-base text-gray-600 leading-relaxed text-justify">
              From AI-powered solutions to edge computing innovations, we&apos;re committed to creating
              technology that makes a positive impact on businesses, communities, and society as a whole.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-2xl text-white shadow-lg">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-1">Expert Team</h4>
              <p className="text-blue-100 text-sm leading-relaxed">Multidisciplinary researchers and engineers</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 rounded-2xl text-white shadow-lg">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-1">Innovation</h4>
              <p className="text-green-100 text-sm leading-relaxed">Cutting-edge solutions for tomorrow&apos;s challenges</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-5 rounded-2xl text-white shadow-lg">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-1">Impact Driven</h4>
              <p className="text-purple-100 text-sm leading-relaxed">Solutions that create meaningful real-world change</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-5 rounded-2xl text-white shadow-lg">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-1">Excellence</h4>
              <p className="text-orange-100 text-sm leading-relaxed">Committed to quality in every project we deliver</p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-5">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To empower businesses, communities, and industries with cutting-edge AI and automation
              technologies for a smarter, sustainable future.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-5">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Our Mission</h3>
            <ul className="text-gray-600 text-base space-y-3">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Drive R&D in next-generation technologies
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Create AI and automation solutions tailored to local and global needs
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                Collaborate with academia, startups, and industries for impactful innovation
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10 tracking-tight">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: ValueItem, index: number) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;