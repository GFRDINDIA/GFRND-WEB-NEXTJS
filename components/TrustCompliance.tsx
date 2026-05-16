"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Globe,
  Lock,
  FileText,
  Users,
  HeartPulse,
  KeyRound,
  Trash2,
  LucideIcon,
} from 'lucide-react';

interface Guarantee {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const guarantees: Guarantee[] = [
  {
    icon: ShieldCheck,
    title: 'No AI Training on Client Data',
    description: 'Anthropic API guarantee — your data is never used to train Claude models. What you send stays private.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Globe,
    title: 'Indian Data Residency',
    description: 'Deployed on GCP Mumbai (asia-south1) — all data stays within India, fully compliant with the DPDP Act.',
    color: 'from-green-600 to-teal-600',
  },
  {
    icon: Lock,
    title: 'PII Protection',
    description: "GFRD's FastAPI layer automatically scrubs personally identifiable information before any data reaches the Claude API.",
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: FileText,
    title: 'Full Audit Trail',
    description: 'Claude Enterprise Compliance API + GCP Cloud Logging deliver complete, tamper-proof audit logs for every AI interaction.',
    color: 'from-orange-600 to-amber-600',
  },
  {
    icon: Users,
    title: 'Role-Based Access Control',
    description: 'Enterprise RBAC ensures only authorised users access specific AI features, data, and capabilities.',
    color: 'from-pink-600 to-rose-600',
  },
  {
    icon: HeartPulse,
    title: 'HIPAA-Ready for Healthcare',
    description: 'Available via Anthropic Sales team — enables GFRD to serve healthcare clients with required data protection guarantees.',
    color: 'from-red-600 to-pink-600',
  },
  {
    icon: KeyRound,
    title: 'Secure Key Management',
    description: 'Anthropic API keys stored in GCP Secret Manager — never in code, environment files, or version control.',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: Trash2,
    title: 'Data Deletion on Request',
    description: 'Selective deletion via Compliance API and Firestore TTL policies — DPDP Act right-to-erasure compliant.',
    color: 'from-emerald-600 to-green-600',
  },
];

const TrustCompliance: React.FC = () => {
  return (
    <section id="trust-compliance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-5">
            <ShieldCheck className="h-3.5 w-3.5 text-green-700" />
            <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Enterprise Trust</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Trust &{' '}
            <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
              Compliance
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Enterprise and regulated-sector clients demand rigorous data governance. GFRD delivers compliance-ready
            AI built on Anthropic&apos;s platform and GCP infrastructure.
          </p>
        </motion.div>

        {/* Guarantee Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-sm`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 tracking-tight leading-snug">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">GFRD&apos;s Compliance Stack</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-teal-500 rounded-full mb-5" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Every GFRD AI deployment is built on a hardened compliance foundation — combining Anthropic&apos;s data protection guarantees, Google Cloud&apos;s enterprise security, and GFRD&apos;s custom PII scrubbing and audit layers.
              </p>
              <ul className="space-y-2">
                {[
                  'DPDP Act 2023 compliant data handling',
                  'GCP SOC 2 Type II certified infrastructure',
                  'Anthropic usage policies & safety guarantees',
                  'GFRD contractual data protection agreement',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <ShieldCheck className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Anthropic API', sub: 'No training on your data', color: 'bg-violet-50 border-violet-200 text-violet-700' },
                { label: 'GCP Mumbai', sub: 'Indian data residency', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                { label: 'DPDP Act', sub: 'India data privacy law', color: 'bg-green-50 border-green-200 text-green-700' },
                { label: 'Audit Logs', sub: 'Every action recorded', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                { label: 'PII Scrubbing', sub: 'Before Claude API call', color: 'bg-pink-50 border-pink-200 text-pink-700' },
                { label: 'RBAC', sub: 'Role-based permissions', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
              ].map((badge) => (
                <div key={badge.label} className={`p-4 rounded-xl border ${badge.color} text-center`}>
                  <div className="text-sm font-bold mb-0.5">{badge.label}</div>
                  <div className="text-xs opacity-75">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustCompliance;
