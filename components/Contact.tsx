"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, LucideIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setSuccessMessage(data.message ?? "Your message has been sent. We'll be in touch within 24 hours.");
        setTimeout(() => {
          setIsSubmitted(false);
          setSuccessMessage(null);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 5000);
      } else {
        setErrorMessage(data.error ?? 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@gfrnd.com',
      link: 'mailto:contact@gfrnd.com',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91-9372348876',
      link: 'tel:+919372348876',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Innovation Hub, India',
      link: '#',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="accent-line" />
          <p className="section-subtitle">
            Ready to transform your business with AI and automation? Let&apos;s start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Let&apos;s Start a Conversation</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Whether you&apos;re looking to implement AI solutions, automate processes, or explore
              cutting-edge technology partnerships, we&apos;re here to help bring your vision to life.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info: ContactInfoItem, index: number) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mr-4`}>
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-sm text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-7 w-7 text-blue-600 mr-3" />
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h4>
                  <p className="text-gray-600">
                    {successMessage}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, challenges, or how we can help you..."
                    />
                  </div>

                  {errorMessage && (
                    <motion.div
                      className="flex items-start gap-3 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                      <p className="text-red-700">{errorMessage}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;