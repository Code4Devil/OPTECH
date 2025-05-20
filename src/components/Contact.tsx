import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-tl-full opacity-70"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary-100 rounded-full opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-600">
            Ready to transform your business with innovative IT solutions? Reach out to our team
            today for a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form or contact us directly using the information below.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="rounded-full p-3 bg-primary-100 text-primary-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Email Us</h4>
                  <a href="mailto:info@optrya.com" className="text-gray-900 font-medium hover:text-primary-600">
                    info@optrya.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
              
               
              </motion.div>

              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="rounded-full p-3 bg-primary-100 text-primary-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Visit Us</h4>
                  <p className="text-gray-900 font-medium">
                   Emaar Enclave, 1st Floor, Badshahpur, <br></br> Sector 66, Gurugram, Haryana 122101
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <table className="text-gray-600 w-full">
                <tbody>
                  <tr>
                    <td className="py-2 pr-6 font-medium">Monday - Friday:</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6 font-medium">Saturday:</td>
                    <td>10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6 font-medium">Sunday:</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service You're Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="software">Custom Software Development</option>
                  <option value="cloud">Cloud Infrastructure</option>
                  <option value="data">Data Analytics</option>
                  <option value="security">Cybersecurity</option>
                  <option value="web">Web Development</option>
                  <option value="ai">AI & Machine Learning</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
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
                Send Message
                <Send size={16} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;