import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Send } from 'lucide-react';

const Consultation: React.FC = () => {
  const consultationTypes = [
    {
      title: 'Technical Assessment',
      duration: '60 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your technical needs and challenges',
      features: [
        'System architecture review',
        'Technology stack evaluation',
        'Project scope discussion',
        'Preliminary recommendations',
      ],
    },
    {
      title: 'Strategic Planning',
      duration: '90 minutes',
      price: '$299',
      description: 'Comprehensive analysis and strategic technology planning session',
      features: [
        'Detailed technical roadmap',
        'Cost-benefit analysis',
        'Risk assessment',
        'Implementation timeline',
      ],
    },
    {
      title: 'Enterprise Solution',
      duration: '120 minutes',
      price: '$499',
      description: 'In-depth consultation for enterprise-level technology solutions',
      features: [
        'Enterprise architecture planning',
        'Scalability assessment',
        'Security audit overview',
        'Digital transformation strategy',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-primary-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can transform your business
            </p>
            <motion.a
              href="#booking-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium flex items-center justify-center mx-auto cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Choose Your Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Select the consultation package that best fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {type.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{type.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="space-y-3 mb-8">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium"
                >
                  Select Package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Book Your Session
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select a consultation type</option>
                  <option value="technical">Technical Assessment</option>
                  <option value="strategic">Strategic Planning</option>
                  <option value="enterprise">Enterprise Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
                <Send className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;