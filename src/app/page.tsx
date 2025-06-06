"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield, Truck, Clock, Star, Award, Heart, Stethoscope, Activity, Pill, Mail, Phone, MapPin, Play, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    text: "Excellent service and high-quality products. They've been our trusted supplier for years.",
    name: "Dr. Sarah Johnson",
    role: "Hospital Director"
  },
  {
    text: "The best medical supplies provider we've worked with. Fast delivery and great support.",
    name: "Michael Chen",
    role: "Pharmacy Owner"
  },
  {
    text: "Reliable products and exceptional customer service. Highly recommended!",
    name: "Dr. Robert Williams",
    role: "Medical Practitioner"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "FDA Approved", description: "All products meet strict regulatory standards" },
    { icon: <Truck className="w-8 h-8" />, title: "Fast Delivery", description: "24-48 hour shipping to your doorstep" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Support", description: "Round-the-clock customer assistance" },
    { icon: <Award className="w-8 h-8" />, title: "Quality Assured", description: "Premium medical-grade supplies only" }
  ];

  const products = [
    { icon: <Stethoscope className="w-12 h-12" />, title: "Diagnostic Equipment", description: "Professional-grade tools", items: ["Stethoscopes", "Blood Pressure Monitors", "Thermometers"] },
    { icon: <Activity className="w-12 h-12" />, title: "Surgical Supplies", description: "Sterile instruments", items: ["Surgical Instruments", "Gloves & Masks", "Sutures"] },
    { icon: <Pill className="w-12 h-12" />, title: "Pharmaceuticals", description: "Medications and treatments", items: ["Prescription Drugs", "OTC Medications", "Vaccines"] },
    { icon: <Heart className="w-12 h-12" />, title: "Patient Care", description: "Comfort and care items", items: ["Wheelchairs", "Hospital Beds", "Mobility Aids"] }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">MedSupply Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
              <Link href="/portal" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Portal Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Medical Supplies</span> Partner
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Premium medical and surgical supplies for healthcare professionals, pharmacies, and distributors worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portal" className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Visit Portal
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex gap-3">
                  <button className="flex items-center gap-3 bg-white border-2 border-gray-200 px-6 py-4 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <Image src="/android.svg" alt="Android" width={24} height={24} />
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">Android App</span>
                  </button>
                  <button className="flex items-center gap-3 bg-white border-2 border-gray-200 px-6 py-4 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <Image src="/apple.svg" alt="iOS" width={24} height={24} />
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">iOS App</span>
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Live Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of medical and surgical supplies for healthcare professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare professionals worldwide
            </p>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-xl max-w-3xl mx-auto"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 italic">"{testimonials[activeTestimonial].text}"</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest updates and offers
            </p>
            <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                {isSubmitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}