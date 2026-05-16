'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { getIndustryBySlug } from '@/lib/industries-data';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${industry.color} relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Industries
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full tracking-wide uppercase mb-4">
              Industry Focus
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight max-w-3xl">
              {industry.name}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
              {industry.tagline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Overview ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Overview</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
              {industry.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Challenges ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Key Challenges</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-8" />
            <div className="space-y-4">
              {industry.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Solutions ────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Solutions</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industry.solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4`}>
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 tracking-tight">{solution.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Real-World Impact</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${industry.color} mb-4`}>
                  <span className="text-xs font-bold text-white">Case Study</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Key Benefits</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mb-8" />
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className={`py-16 bg-gradient-to-br ${industry.color}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Ready to transform {industry.name}?
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how our solutions can create measurable impact for your organisation.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us Today <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
