import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Award, Calendar, MapPin, Globe, Zap, Target, Lightbulb, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const About: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '150+', label: 'Clients Worldwide' },
    { icon: <TrendingUp className="h-8 w-8" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Award className="h-8 w-8" />, value: '10+', label: 'Years Experience' },
  ];

  const keyPoints = [
    'Expert team of certified IT professionals',
    'Customized solutions tailored to your business needs',
    'Cutting-edge technologies and innovative approaches',
    'Dedicated support and ongoing maintenance',
    'Proactive problem-solving and strategic planning',
  ];

  const leadershipTeam = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'With over 20 years of experience in the tech industry, Sarah leads Optrya with a focus on innovation and strategic growth.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Michael oversees all technical aspects of the company, ensuring we remain at the cutting edge of technology.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operations Officer',
      bio: 'Priya ensures operational excellence across all our services and projects, maintaining our high standards of delivery.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Business Officer',
      bio: 'David leads our business development efforts, focusing on building strategic partnerships and expanding our market presence.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
              About Optrya Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              We Deliver Excellence in Every IT Solution
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Optrya Technologies, we're dedicated to helping businesses leverage the power of
              technology to drive growth, efficiency, and innovation. Our team of experts brings years
              of industry experience and technical expertise to every project.
            </p>

            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <motion.button
                className="px-6 py-3 rounded-full bg-primary-600 text-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute -top-10 -left-10 w-72 h-72 bg-primary-100 rounded-full opacity-70 filter blur-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.div>

            <motion.div
              className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Optrya Technologies?
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="rounded-full p-3 bg-primary-100 text-primary-600 mr-4">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 p-6 bg-gray-900 rounded-xl text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="text-lg font-bold mb-2">Ready to transform your business?</h4>
                  <p className="text-gray-300 mb-4">
                    Let's discuss how our IT solutions can help you achieve your goals.
                  </p>
                  <Link to="/consultation">
                    <button className="w-full py-2 rounded-lg bg-white text-gray-900 font-medium">
                      Schedule a Consultation
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Story Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-800 text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            The Journey of Optrya Technologies
          </h2>
          <p className="text-lg text-gray-600">
            From a small startup to a leading IT solutions provider, our journey has been defined by innovation,
            dedication, and a relentless pursuit of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our History</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Founded in 2013, Optrya Technologies began as a small team of passionate developers with a vision to transform
              how businesses leverage technology. Over the years, we've grown into a comprehensive IT solutions provider
              serving clients across multiple industries globally.
            </p>
            <p className="text-gray-600">
              Our growth has been organic, built on successful client relationships and a reputation for delivering
              high-quality solutions that drive real business results. Today, we're proud to be at the forefront of
              technological innovation, helping businesses navigate the complexities of digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Presence</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Headquartered in San Francisco with offices in London, Singapore, and Bangalore, Optrya Technologies
              maintains a global footprint that allows us to serve clients across different time zones and markets.
            </p>
            <p className="text-gray-600">
              Our diverse team of over 200 professionals brings together expertise from different cultures and
              backgrounds, enabling us to understand and address the unique challenges faced by businesses in
              various regions. This global perspective is one of our greatest strengths.
            </p>
          </motion.div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="bg-primary-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and
              competitive advantage in an increasingly digital world. We aim to be the catalyst that transforms
              challenges into opportunities through the strategic application of technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mb-6">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in delivering transformative IT solutions that shape the future of industries.
              We envision a world where technology seamlessly integrates with business processes, creating
              sustainable value and enabling organizations to achieve their fullest potential.
            </p>
          </motion.div>

          <motion.div
            className="bg-accent-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Excellence in everything we do</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Innovation that drives meaningful change</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Integrity and transparency in all relationships</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Client success as our ultimate goal</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        {!isHomePage && (
          <>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Meet the Team Behind Optrya
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in technology, business strategy, and industry expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-sm">{leader.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Partner with Optrya Technologies and leverage our expertise to drive your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;