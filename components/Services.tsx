"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Eye, MessageSquare, BarChart3, Settings, Workflow, Bot, Network, Cpu, Clock, FlaskRound as Flask, Users, Headphones, ArrowRight, LucideIcon } from 'lucide-react';
import { getSlugForService } from '@/lib/services-data';

interface ServiceItem {
  icon: LucideIcon;
  name: string;
  desc: string;
}

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  id: string;
  services: ServiceItem[];
}

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      icon: Brain,
      title: 'AI & Data Solutions',
      description: 'Advanced artificial intelligence and data analytics solutions',
      color: 'from-blue-600 to-indigo-600',
      id: 'service-ai-data',
      services: [
        { 
          icon: Brain, 
          name: 'AI Strategy & Consulting', 
          desc: 'Identify AI opportunities, design transformation roadmaps, and build scalable solutions'
        },
        { 
          icon: BarChart3, 
          name: 'Machine Learning & Predictive Analytics', 
          desc: 'Demand forecasting, customer behavior prediction, and risk & fraud detection'
        },
        { 
          icon: Network, 
          name: 'Data Engineering & Big Data Solutions', 
          desc: 'Data pipeline development, cloud architecture (AWS, Azure, GCP), real-time processing'
        },
        { 
          icon: MessageSquare, 
          name: 'Natural Language Processing (NLP)', 
          desc: 'Chatbots, virtual assistants, sentiment analysis, and multilingual AI solutions'
        },
        { 
          icon: Eye, 
          name: 'Computer Vision', 
          desc: 'Image recognition, object detection & tracking, AI-powered quality control'
        },
        { 
          icon: Settings, 
          name: 'AI for Business Automation', 
          desc: 'Process optimization, smart recommendation engines, intelligent decision support'
        }
      ]
    },
    {
      icon: Workflow,
      title: 'Automation',
      description: 'Streamline operations with intelligent automation systems',
      color: 'from-green-600 to-teal-600',
      id: 'service-automation',
      services: [
        { 
          icon: Settings, 
          name: 'Business Process Automation', 
          desc: 'Optimize workflows and reduce manual processes'
        },
        { 
          icon: Bot, 
          name: 'Robotic Process Automation (RPA)', 
          desc: 'Automate repetitive tasks with software robots'
        },
        { 
          icon: Workflow, 
          name: 'Smart Workflow Design', 
          desc: 'Intelligent workflow optimization and management'
        }
      ]
    },
    {
      icon: Cpu,
      title: 'Edge AI',
      description: 'Real-time intelligence at the edge of networks',
      color: 'from-purple-600 to-pink-600',
      id: 'service-edge-ai',
      services: [
        { 
          icon: Network, 
          name: 'IoT & Sensor Integration', 
          desc: 'Connect and manage IoT devices with intelligent analytics'
        },
        { 
          icon: Cpu, 
          name: 'Edge Data Processing', 
          desc: 'Process data locally for faster, more secure operations'
        },
        { 
          icon: Clock, 
          name: 'Real-time Decision Systems', 
          desc: 'Instant intelligent responses at the point of data generation'
        }
      ]
    },
    {
      icon: Flask,
      title: 'Research & Development',
      description: 'Collaborative innovation and technology advancement',
      color: 'from-orange-600 to-red-600',
      id: 'service-research',
      services: [
        { 
          icon: Users, 
          name: 'Collaborative R&D Projects', 
          desc: 'Partnership-driven research and development initiatives'
        },
        { 
          icon: Flask, 
          name: 'Proof of Concept & Prototyping', 
          desc: 'Validate ideas with rapid prototyping and testing'
        },
        { 
          icon: Headphones, 
          name: 'Technology Consulting', 
          desc: 'Expert guidance on technology strategy and implementation'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Comprehensive technology solutions spanning AI, automation, edge computing, and research development
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category: ServiceCategory, index: number) => (
            <motion.div
              key={category.title}
              id={category.id}
              className="bg-gray-50 rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <div className={`inline-block w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{category.title}</h3>
                <p className="text-base text-gray-600 max-w-xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service: ServiceItem, i: number) => {
                  const slug = getSlugForService(service.name);
                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Link
                        href={slug ? `/services/${slug}` : '#'}
                        className="group block bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full"
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.name}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base mb-8 text-blue-100 max-w-2xl mx-auto">
              Let&apos;s discuss how our innovative solutions can drive your organization forward
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;