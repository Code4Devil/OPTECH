import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Building2, Clock, MapPin, ChevronRight, Search } from 'lucide-react';

const Career: React.FC = () => {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are seeking an experienced Software Engineer to join our growing team...',
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Looking for a skilled Cloud Architect to design and implement scalable solutions...',
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our data science team to build innovative ML solutions...',
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and certification support',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Modern Workspace',
      description: 'State-of-the-art offices and remote work flexibility',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous time-off policy',
    },
  ];

  return (
    <div className="min-h-screen pt-4">
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
              Join Our Team of Innovators
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build your career at Optrya Technologies and help shape the future of technology
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 flex items-center max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search positions..."
                className="flex-1 bg-transparent border-none text-white placeholder-gray-400 px-4 focus:outline-none"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities to make an impact with us
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 md:mt-0 px-6 py-2 bg-primary-600 text-white rounded-full flex items-center justify-center"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Why Join Optrya?
            </h2>
            <p className="text-lg text-gray-600">
              We offer more than just a job - we offer a career with growth opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;