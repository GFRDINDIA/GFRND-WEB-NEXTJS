"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Package,
  FileSearch,
  MessageSquare,
  Code2,
  Building2,
  BarChart3,
  Layers,
  LucideIcon,
} from 'lucide-react';

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  pricing: string;
  highlight: string;
  color: string;
}

const cards: ServiceCard[] = [
  {
    icon: Package,
    title: 'AI-Powered Product Development',
    slug: 'ai-powered-product-development',
    description: 'Custom AI chatbots, intelligent document processing, and full SaaS AI products built on Claude API — shipped in weeks.',
    pricing: '₹2–10L build + ₹15K–50K/month SaaS',
    highlight: 'Up to 95% AI cost savings via caching + batch',
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence Services',
    slug: 'document-intelligence-services',
    description: 'Extract, analyse, and summarise contracts, invoices, medical records, and compliance documents at scale.',
    pricing: '~₹1.55 per document',
    highlight: '10,000 docs processed for ₹15,500',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'Customer Experience Automation',
    slug: 'customer-experience-automation',
    description: 'Multilingual AI support bots, WhatsApp & SMS integration, sentiment analysis, and smart reply generation.',
    pricing: 'Managed service from ₹25K/month',
    highlight: 'Hindi, Gujarati, English + 50 languages',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Code2,
    title: 'AI-Augmented Development',
    slug: 'ai-augmented-development',
    description: 'Faster software delivery using Claude Code, automated testing, legacy modernisation, and Snowflake pipelines.',
    pricing: 'Project-based from ₹1.5L',
    highlight: '30–50% faster delivery than traditional dev',
    color: 'from-cyan-600 to-teal-600',
  },
  {
    icon: Building2,
    title: 'Enterprise AI Consulting',
    slug: 'enterprise-ai-consulting',
    description: 'Deploy Claude Enterprise for corporates — SSO, RBAC, audit logs, custom MCP integrations, and managed service.',
    pricing: '₹2–10L project + managed retainer',
    highlight: "Built on Anthropic's Claude API",
    color: 'from-teal-600 to-green-600',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics AI Services',
    slug: 'data-analytics-ai-services',
    description: 'Automated business reports, Snowflake AI data apps, customer analytics, and competitor intelligence.',
    pricing: 'Managed service from ₹30K/month',
    highlight: 'Powered by 8+ years Snowflake expertise',
    color: 'from-green-600 to-emerald-600',
  },
  {
    icon: Layers,
    title: 'Sector-Specific AI Products',
    slug: 'sector-specific-ai-products',
    description: 'Vertical AI for AgriTech, HealthTech, LegalTech, EdTech, RetailTech, and FinTech — built for India.',
    pricing: 'Varies by sector & scope',
    highlight: 'Purpose-built for Indian workflows & languages',
    color: 'from-emerald-600 to-lime-600',
  },
];

const ClaudeAIServices: React.FC = () => {
  return (
    <section id="claude-ai-services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Powered-by badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 mb-5">
            <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">Powered by Anthropic Claude API</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Claude AI{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              Business Services
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="section-subtitle">
            Seven high-value AI service lines built on Anthropic&apos;s Claude API — delivering enterprise-grade intelligence
            to businesses across India at dramatically lower cost.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: '95%', label: 'Max AI cost savings', sub: 'Caching + Batch API' },
            { value: '1M', label: 'Token context window', sub: 'Process entire codebases' },
            { value: '50+', label: 'Languages supported', sub: 'Including Hindi & Gujarati' },
            { value: '₹1.55', label: 'Per document processed', sub: 'vs ₹20+ manual cost' },
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold text-violet-700 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-0.5">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Top colour bar */}
              <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{card.description}</p>

                {/* Highlight pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-4 self-start">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                  <span className="text-xs text-violet-700 font-medium">{card.highlight}</span>
                </div>

                {/* Pricing + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500">{card.pricing}</span>
                  <Link
                    href={`/services/${card.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Ready to build with Claude AI?
          </h3>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            GFRD is a Gujarat-based Claude AI implementation specialist. Let&apos;s discuss which service line fits your business best — starting with a free 30-day pilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Pilot <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClaudeAIServices;
