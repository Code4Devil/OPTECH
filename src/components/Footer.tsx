import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, ArrowRight, Globe, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Custom Software Development', href: '/services/custom-software' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Data Analytics & AI', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
    { name: 'Mobile Development', href: '/services/mobile-development' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://facebook.com/optryatech', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/optryatech', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/company/optrya-technologies', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: 'https://instagram.com/optryatech', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="mr-2 text-primary-500">
                <Globe className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Optrya Technologies
                </h2>
                <p className="text-xs tracking-wider -mt-1 text-gray-400">IT SERVICES & SOLUTIONS</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Optrya Technologies - Empowering businesses through innovative IT solutions and cutting-edge technology services since 2023.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2 sm:mr-3" />
                <a href="mailto:info@optrya.in" className="text-sm sm:text-base text-gray-300 hover:text-white transition">
                  info@optrya.in
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 sm:mr-3 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-300">
                                     Emaar Enclave, 1st Floor, Badshahpur, <br></br> Sector 66, Gurugram, Haryana 122101

                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 lg:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Newsletter</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Subscribe to our newsletter to receive updates and insights on IT trends.
            </p>

            <form className="mb-6 sm:mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 py-2 px-3 sm:px-4 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <motion.button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 rounded-r-lg px-3 sm:px-4 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </form>

            
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Optrya Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;