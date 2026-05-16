'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'Personal identification information (name, email address, phone number) provided voluntarily through contact forms or service enquiries.',
        'Technical data such as IP address, browser type, operating system, and pages visited — collected automatically via analytics tools.',
        'Business information shared during project discussions, proposals, or partnership engagements.',
        'Communication records including emails, messages, and meeting notes related to service delivery.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'To respond to enquiries, provide requested services, and manage ongoing project engagements.',
        'To send relevant updates, newsletters, or service announcements — only with your consent.',
        'To improve our website, services, and user experience through aggregated analytics.',
        'To comply with applicable legal obligations and regulatory requirements under Indian law.',
        'To protect the rights, property, and safety of Grace & Faith R&D and its stakeholders.',
      ],
    },
    {
      title: '3. Data Sharing and Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share data with trusted service providers (e.g., cloud hosting, email delivery) strictly for operational purposes, bound by confidentiality agreements.',
        'We may disclose information if required by law, court order, or government authority under applicable Indian legislation.',
        'In the event of a merger, acquisition, or restructuring, data may be transferred subject to equivalent privacy protections.',
      ],
    },
    {
      title: '4. Data Security',
      content: [
        'We implement industry-standard security measures including encryption, access controls, and secure servers to protect your data.',
        'Access to personal information is restricted to authorised personnel on a need-to-know basis.',
        'While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to contact us immediately if you suspect any breach.',
      ],
    },
    {
      title: '5. Data Retention',
      content: [
        'We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.',
        'Project-related data may be retained for up to 5 years for audit, legal, and reference purposes.',
        'You may request deletion of your personal data at any time by contacting us at gfrdindia@gmail.com.',
      ],
    },
    {
      title: '6. Your Rights',
      content: [
        'Right to access: You may request a copy of the personal data we hold about you.',
        'Right to correction: You may request correction of inaccurate or incomplete data.',
        'Right to deletion: You may request erasure of your personal data, subject to legal retention requirements.',
        'Right to withdraw consent: Where processing is based on consent, you may withdraw it at any time.',
        'To exercise any of these rights, contact us at gfrdindia@gmail.com.',
      ],
    },
    {
      title: '7. Cookies',
      content: [
        'Our website uses cookies to enhance your browsing experience. For detailed information, please refer to our Cookie Policy.',
        'You can control cookie preferences through your browser settings at any time.',
      ],
    },
    {
      title: '8. Third-Party Links',
      content: [
        'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.',
        'We encourage you to review the privacy policies of any third-party sites you visit.',
      ],
    },
    {
      title: '9. Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.',
        'We will notify you of significant changes by updating the "Last Updated" date on this page.',
        'Continued use of our website after changes constitutes acceptance of the revised policy.',
      ],
    },
    {
      title: '10. Contact Us',
      content: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:',
        'Email: gfrdindia@gmail.com',
        'Phone: +91-9372348876',
        'Grace and Faith Research and Development (OPC) Pvt. Ltd., Innovation Hub, India',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
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
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Privacy Policy
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
            Grace and Faith Research and Development (OPC) Pvt. Ltd. (&quot;GFRD&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed
            to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your
            personal information when you visit our website or engage with our services. By using our website,
            you consent to the practices described in this policy.
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
              <div className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-4" />
              <ul className="space-y-2">
                {section.content.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
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
            Have questions about our privacy practices?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-blue-700 hover:to-green-600 transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
