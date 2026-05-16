'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using the website and services of Grace and Faith Research and Development (OPC) Pvt. Ltd. ("GFRD", "we", "us"), you agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please discontinue use of our website and services immediately.',
        'These terms apply to all visitors, clients, partners, and others who access our services.',
      ],
    },
    {
      title: '2. Description of Services',
      content: [
        'GFRD provides research, development, and consulting services in Artificial Intelligence, Automation, Edge Computing, and Data Analytics.',
        'Services are delivered subject to individual project agreements, scope of work documents, and mutual terms agreed upon in writing.',
        'We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.',
      ],
    },
    {
      title: '3. Intellectual Property',
      content: [
        'All content on this website — including text, graphics, logos, images, and software — is the property of GFRD and is protected under applicable Indian intellectual property laws.',
        'Custom deliverables developed for clients are governed by the intellectual property clauses in the respective project agreement.',
        'You may not reproduce, distribute, or create derivative works from our website content without prior written permission.',
        'Trademarks, service marks, and trade names of GFRD may not be used without express written consent.',
      ],
    },
    {
      title: '4. Client Responsibilities',
      content: [
        'Clients agree to provide accurate, complete, and timely information required for service delivery.',
        'Clients are responsible for maintaining the confidentiality of any credentials or access provided as part of service engagement.',
        'Clients shall not use our services for any unlawful, unethical, or harmful purpose.',
        'Clients must comply with all applicable laws and regulations when using GFRD deliverables.',
      ],
    },
    {
      title: '5. Confidentiality',
      content: [
        'Both parties agree to maintain the confidentiality of proprietary information shared during the course of engagement.',
        'Confidential information shall not be disclosed to third parties without prior written consent, except as required by law.',
        'This obligation of confidentiality shall survive the termination of any service agreement.',
      ],
    },
    {
      title: '6. Limitation of Liability',
      content: [
        'GFRD shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website.',
        'Our total liability in connection with any service shall not exceed the amount paid by the client for that specific service.',
        'We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.',
      ],
    },
    {
      title: '7. Disclaimers',
      content: [
        'Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
        'We do not guarantee specific outcomes or results from our research and development services.',
        'Any projections, estimates, or forecasts provided are for informational purposes only and are not guarantees of performance.',
      ],
    },
    {
      title: '8. Payment Terms',
      content: [
        'Payment terms for engagements are governed by the individual project or service agreement.',
        'All fees are non-refundable unless otherwise specified in the project agreement.',
        'Late payments may attract interest as per the applicable provisions of the Indian Interest Act.',
      ],
    },
    {
      title: '9. Termination',
      content: [
        'Either party may terminate a service engagement in accordance with the terms specified in the project agreement.',
        'GFRD reserves the right to terminate access to services immediately if these Terms of Service are violated.',
        'Upon termination, confidentiality obligations and intellectual property rights shall continue to apply.',
      ],
    },
    {
      title: '10. Governing Law and Dispute Resolution',
      content: [
        'These Terms of Service shall be governed by and construed in accordance with the laws of India.',
        'Any disputes arising from these terms or our services shall first be resolved through mutual negotiation.',
        'If negotiation fails, disputes shall be subject to arbitration under the Arbitration and Conciliation Act, 1996.',
        'The jurisdiction for any legal proceedings shall be the courts of India.',
      ],
    },
    {
      title: '11. Amendments',
      content: [
        'GFRD reserves the right to modify these Terms of Service at any time.',
        'Changes will be effective upon posting to this page with an updated revision date.',
        'Continued use of our services after changes constitutes acceptance of the revised terms.',
      ],
    },
    {
      title: '12. Contact Us',
      content: [
        'For questions or concerns regarding these Terms of Service, please reach out to us:',
        'Email: gfrdindia@gmail.com',
        'Phone: +91-9372348876',
        'Grace and Faith Research and Development (OPC) Pvt. Ltd., Innovation Hub, India',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 relative overflow-hidden">
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
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Terms of Service
            </h1>
            <p className="text-white/80 text-base">
              Last updated: April 2026 &nbsp;·&nbsp; Grace and Faith Research and Development (OPC) Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.p
            className="text-base md:text-lg text-gray-600 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Please read these Terms of Service carefully before engaging with Grace and Faith Research and
            Development (OPC) Pvt. Ltd. These terms govern your use of our website and services, establishing
            the rights and obligations of both parties. Engaging with our services implies your agreement to
            these terms in their entirety.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{section.title}</h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mb-4" />
              <ul className="space-y-2">
                {section.content.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm text-gray-500 mb-4">
            Questions about our terms or services?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-green-700 hover:to-teal-600 transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
