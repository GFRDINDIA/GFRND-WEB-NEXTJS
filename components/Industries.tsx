"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getSlugForIndustry } from '@/lib/industries-data';
import { 
  Sprout, 
  Heart, 
  Factory, 
  Building2, 
  GraduationCap, 
  ArrowRight,
  Droplets,
  Bug,
  Stethoscope,
  Activity,
  Cog,
  Wrench,
  Lightbulb,
  Wifi,
  BookOpen,
  BarChart,
  MessageSquare,
  LucideIcon
} from 'lucide-react';

interface IndustrySolution {
  icon: LucideIcon;
  name: string;
  desc: string;
}

interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  solutions: IndustrySolution[];
}

const Industries: React.FC = () => {
  const industries: IndustryItem[] = [
    {
      icon: Sprout,
      title: 'Agriculture',
      description: 'Smart farming solutions for sustainable agricultural practices',
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { icon: Droplets, name: 'Smart Irrigation', desc: 'Automated water management systems' },
        { icon: BarChart, name: 'AI Crop Advisory', desc: 'Data-driven crop recommendations' },
        { icon: Bug, name: 'Pest Prediction', desc: 'Early warning systems for crop protection' }
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'AI-powered healthcare solutions for better patient outcomes',
      color: 'from-red-600 to-pink-600',
      solutions: [
        { icon: Stethoscope, name: 'AI Diagnostics', desc: 'Intelligent medical diagnosis support' },
        { icon: Activity, name: 'Patient Analytics', desc: 'Predictive healthcare insights' },
        { icon: Heart, name: 'Remote Monitoring', desc: 'Continuous patient health tracking' }
      ]
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial automation and predictive maintenance solutions',
      color: 'from-blue-600 to-indigo-600',
      solutions: [
        { icon: Cog, name: 'Process Automation', desc: 'Intelligent manufacturing workflows' },
        { icon: Wrench, name: 'Predictive Maintenance', desc: 'AI-powered equipment monitoring' },
        { icon: BarChart, name: 'Quality Control', desc: 'Automated quality assurance systems' }
      ]
    },
    {
      icon: Building2,
      title: 'Smart Cities',
      description: 'IoT and AI solutions for urban infrastructure optimization',
      color: 'from-purple-600 to-violet-600',
      solutions: [
        { icon: Lightbulb, name: 'Energy Efficiency', desc: 'Smart grid and energy optimization' },
        { icon: Wifi, name: 'IoT Integration', desc: 'Connected city infrastructure' },
        { icon: Activity, name: 'Traffic Optimization', desc: 'Intelligent traffic management' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education & Research',
      description: 'Technology solutions for enhanced learning and research capabilities',
      color: 'from-orange-600 to-yellow-600',
      solutions: [
        { icon: BookOpen, name: 'AI Learning Platforms', desc: 'Personalized educational experiences' },
        { icon: BarChart, name: 'Data Platforms', desc: 'Research data management systems' },
        { icon: Lightbulb, name: 'Innovation Tools', desc: 'Technology for academic research' }
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
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
            Industries <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Transforming diverse industries with tailored AI and automation solutions
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry: IndustryItem, index: number) => {
            const slug = getSlugForIndustry(industry.title);
            return (
              <motion.div
                key={industry.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center flex-shrink-0`}>
                      <industry.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">{industry.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                  {slug && (
                    <Link
                      href={`/industries/${slug}`}
                      className="flex-shrink-0 ml-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:gap-2 transition-all whitespace-nowrap"
                    >
                      Learn more <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {industry.solutions.map((solution: IndustrySolution, i: number) => (
                    <motion.div
                      key={solution.name}
                      className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-3`}>
                        <solution.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{solution.name}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{solution.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Potential Impact Areas</h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our solutions are designed to create meaningful impact across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Chat for Farmers',
                description: 'Multilingual AI assistants providing crop advisory services in local languages',
                icon: MessageSquare,
                slug: 'ai-chat-for-farmers'
              },
              {
                title: 'Smart IoT Edge Gateway',
                description: 'Precision agriculture solutions with real-time data processing at the edge',
                icon: Wifi,
                slug: 'smart-iot-edge-gateway'
              },
              {
                title: 'Automated Insights Platform',
                description: 'Comprehensive data analytics platform for actionable business intelligence',
                icon: BarChart,
                slug: 'automated-insights-platform'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{project.description}</p>
                <Link
                  href={`/industries/${project.slug}`}
                  className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-blue-600 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
            Don&apos;t See Your Industry?
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
            We customize solutions for various sectors. Let&apos;s discuss how we can help transform your industry.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discuss Your Needs</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;