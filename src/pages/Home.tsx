import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { ArrowRight, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const AnimatedSphere = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#4F46E5"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const AnimatedCube = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[-2, 1, -2]}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#06B6D4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[2, -1, -1]}>
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <MeshDistortMaterial
          color="#EC4899"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const stats = [
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Global Clients', value: '500+' },
  { label: 'Team Experts', value: '100+' },
  { label: 'Projects Delivered', value: '1000+' }
];

const features = [
  'Custom Software Development',
  'Cloud Infrastructure',
  'Cybersecurity Solutions',
  'Digital Transformation'
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Leading IT Solutions Provider
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Transforming Ideas into
                <span className="block mt-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Empowering businesses with cutting-edge IT solutions. We deliver innovation
                that drives success in the digital era.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/get-started">
                    <button
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg shadow-primary-500/30 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/services">
                    <button
                      className="px-8 py-4 rounded-full border border-gray-500 text-white font-medium hover:bg-white/10 transition flex items-center justify-center group"
                    >
                      Our Services
                      <ArrowUpRight className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <AnimatedSphere />
                <AnimatedCube />
                <AnimatedTorus />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Empowering Your Business with Advanced IT Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with industry knowledge to deliver
                solutions that drive your business forward.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                <div className="w-full h-full bg-white rounded-xl" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <AnimatedSphere />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;