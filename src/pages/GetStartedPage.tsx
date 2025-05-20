import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedPage: React.FC = () => {
  const steps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Initial Consultation',
      description: 'Schedule a free consultation with our experts to discuss your needs.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Solution Design',
      description: 'We create a tailored solution based on your requirements.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Implementation',
      description: 'Our team implements the solution with regular updates.',
    },
  ];

  const benefits = [
    'Dedicated project manager',
    'Regular progress updates',
    'Technical support',
    'Quality assurance',
    'Post-implementation support',
    'Performance monitoring',
  ];

  return (
    <div className="min-h-screen pt-20">
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
              Start Your Digital Transformation Journey
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to bring your vision to life with our cutting-edge IT solutions
            </p>
            <Link to="/consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium flex items-center justify-center mx-auto"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Our streamlined process ensures a smooth transition from concept to implementation
              </p>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                What You Get
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive service package includes everything you need for success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link to="/consultation">
                <button className="px-8 py-3 bg-primary-600 text-white rounded-full font-medium shadow-lg flex items-center justify-center mx-auto">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;