import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Shield, Globe, Cpu, Server, Network, Smartphone, LineChart, Users, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements, from enterprise applications to specialized tools.',
    features: ['Agile Development', 'Quality Assurance', 'Continuous Integration', 'API Development'],
    color: 'from-blue-500 to-blue-600',
    slug: 'custom-software'
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services including migration, optimization, and management across major cloud platforms.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'Cost Optimization', 'Auto-scaling'],
    color: 'from-cyan-500 to-cyan-600',
    slug: 'cloud-solutions'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Analytics & AI',
    description: 'Transform your data into actionable insights with our advanced analytics and AI-powered solutions.',
    features: ['Machine Learning', 'Predictive Analytics', 'Data Visualization', 'Big Data'],
    color: 'from-purple-500 to-purple-600',
    slug: 'data-analytics'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions and continuous monitoring.',
    features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
    color: 'from-red-500 to-red-600',
    slug: 'cybersecurity'
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'IT Infrastructure',
    description: 'Build and maintain robust IT infrastructure that scales with your business needs.',
    features: ['Network Design', 'Server Management', 'Virtualization', 'Backup Solutions'],
    color: 'from-green-500 to-green-600',
    slug: 'it-infrastructure'
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Network Solutions',
    description: 'Design and implement secure, high-performance networks for your organization.',
    features: ['Network Security', 'VPN Setup', 'WiFi Solutions', 'Load Balancing'],
    color: 'from-yellow-500 to-yellow-600',
    slug: 'network-solutions'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Create engaging mobile experiences with our native and cross-platform development services.',
    features: ['iOS/Android Apps', 'React Native', 'Flutter', 'Mobile UI/UX'],
    color: 'from-orange-500 to-orange-600',
    slug: 'mobile-development'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with our BI tools and analytics solutions.',
    features: ['Data Warehousing', 'Reporting', 'KPI Tracking', 'Analytics'],
    color: 'from-indigo-500 to-indigo-600',
    slug: 'business-intelligence'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you navigate digital transformation.',
    features: ['Digital Strategy', 'Process Optimization', 'Tech Assessment', 'Roadmapping'],
    color: 'from-pink-500 to-pink-600',
    slug: 'it-consulting'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 IT Support',
    description: 'Round-the-clock technical support and maintenance for your IT systems.',
    features: ['Help Desk', 'Remote Support', 'System Monitoring', 'Issue Resolution'],
    color: 'from-teal-500 to-teal-600',
    slug: 'it-support'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our Comprehensive IT Services
          </h1>
          <p className="text-xl text-gray-600">
            Discover our full range of IT services designed to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to={`/services/${service.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-8 w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-medium`}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;