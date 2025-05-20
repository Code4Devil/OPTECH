import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Shield, Globe, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Custom Software Development',
      description:
        'Tailored solutions designed to meet your specific business needs and challenges.',
      color: 'from-primary-500 to-primary-700',
      slug: 'custom-software',
    },
    {
      icon: <Server size={40} />,
      title: 'Cloud Infrastructure',
      description:
        'Secure, scalable, and reliable cloud solutions to power your digital transformation.',
      color: 'from-secondary-500 to-secondary-700',
      slug: 'cloud-solutions',
    },
    {
      icon: <Database size={40} />,
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights that drive business growth and innovation.',
      color: 'from-accent-500 to-accent-700',
      slug: 'data-analytics',
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity',
      description:
        'Protect your business with advanced security solutions and threat prevention strategies.',
      color: 'from-primary-700 to-primary-900',
      slug: 'cybersecurity',
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description:
        'Create engaging, responsive websites and applications that elevate your brand online.',
      color: 'from-secondary-700 to-secondary-900',
      slug: 'web-development',
    },
    {
      icon: <Cpu size={40} />,
      title: 'AI & Machine Learning',
      description:
        'Harness the power of intelligent automation to unlock new opportunities and efficiencies.',
      color: 'from-accent-700 to-accent-900',
      slug: 'ai-machine-learning',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We offer a wide range of services designed to help your business thrive
            in today's technology-driven world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-4 sm:mb-6 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/services">
            <motion.button
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gray-900 text-white text-sm sm:text-base font-medium shadow-md sm:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;