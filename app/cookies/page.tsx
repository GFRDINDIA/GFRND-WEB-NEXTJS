'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: 'Strictly Necessary Cookies',
      color: 'from-blue-600 to-indigo-600',
      description: 'These cookies are essential for the website to function correctly. They enable core features such as page navigation, secure areas, and form submissions. The website cannot function properly without these cookies.',
      examples: ['Session management', 'Security tokens', 'Load balancing', 'User authentication state'],
      canDisable: false,
    },
    {
      name: 'Performance & Analytics Cookies',
      color: 'from-green-600 to-teal-600',
      description: 'These cookies collect information about how visitors use our website — such as which pages are visited most often and any error messages received. All information is aggregated and anonymous.',
      examples: ['Page visit counts', 'Traffic sources', 'Time spent on pages', 'Navigation paths'],
      canDisable: true,
    },
    {
      name: 'Functionality Cookies',
      color: 'from-purple-600 to-violet-600',
      description: 'These cookies allow our website to remember choices you make (such as language preferences) and provide enhanced, personalised features. They may also be used to provide services you have requested.',
      examples: ['Language preferences', 'Region settings', 'Previously viewed content', 'User interface preferences'],
      canDisable: true,
    },
    {
      name: 'Targeting & Marketing Cookies',
      color: 'from-orange-600 to-red-600',
      description: 'These cookies record your visit to our website and the pages you have visited. We may use this information to make our website and any advertising displayed more relevant to your interests.',
      examples: ['Ad personalisation', 'Campaign tracking', 'Retargeting', 'Social media integration'],
      canDisable: true,
    },
  ];

  const sections = [
    {
      title: 'What Are Cookies?',
      content:
        'Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide information to website owners. Cookies are not harmful and do not contain personal information such as your name or bank details.',
    },
    {
      title: 'How We Use Cookies',
      content:
        'Grace and Faith Research and Development (OPC) Pvt. Ltd. uses cookies to understand how visitors interact with our website, improve our content and services, remember your preferences, and ensure the security of our platform. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).',
    },
    {
      title: 'Third-Party Cookies',
      content:
        'We may use third-party services such as Google Analytics, which set their own cookies to collect data about website usage. These services are governed by their own privacy policies. We encourage you to review the privacy policies of any third-party tools used on our site.',
    },
    {
      title: 'Managing Your Cookie Preferences',
      content:
        'You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies. Please note that blocking certain cookies may affect the functionality of our website. Instructions for managing cookies in popular browsers are available on the respective browser\'s help pages.',
    },
    {
      title: 'Your Consent',
      content:
        'By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or contacting us. We will obtain your explicit consent before placing any non-essential cookies on your device.',
    },
    {
      title: 'Updates to This Policy',
      content:
        'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with a revised date. We encourage you to review this policy periodically.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-violet-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Cookie className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-white/80 text-base">
              Last updated: April 2026 &nbsp;·&nbsp; Grace and Faith Research and Development (OPC) Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          {sections.slice(0, 2).map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{section.title}</h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed text-justify">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Types of Cookies We Use</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, i) => (
              <motion.div
                key={type.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${type.color}`}>
                    <span className="text-xs font-semibold text-white">{type.name}</span>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${type.canDisable ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {type.canDisable ? 'Optional' : 'Required'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{type.description}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-lg">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          {sections.slice(2).map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{section.title}</h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed text-justify">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm text-gray-500 mb-4">
            Questions about our use of cookies?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-purple-700 hover:to-violet-700 transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
