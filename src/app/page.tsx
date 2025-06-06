// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-0" />
//         <div className="container relative z-10 text-white">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Your Trusted Partner in Medical Supplies
//             </h1>
//             <p className="text-xl mb-8">
//               Premium medical and surgical supplies for healthcare professionals, pharmacies, and distributors.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link href="/portal" className="btn-primary">
//                 Visit Portal
//               </Link>
//               <div className="flex gap-4">
//                 <button className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg hover:bg-black/30 transition-colors">
//                   <Image src="/android.svg" alt="Android" width={24} height={24} />
//                   Android App
//                 </button>
//                 <button className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg hover:bg-black/30 transition-colors">
//                   <Image src="/apple.svg" alt="iOS" width={24} height={24} />
//                   iOS App
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container">
//           <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <p className="text-gray-600 mb-4">{testimonial.text}</p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gray-200 rounded-full" />
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="section-padding bg-primary text-white">
//         <div className="container">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//             <p className="mb-8">Subscribe to our newsletter for the latest updates and offers.</p>
//             <form className="flex gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-2 rounded-lg text-gray-900"
//               />
//               <button type="submit" className="btn-secondary">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

// const testimonials = [
//   {
//     text: "Excellent service and high-quality products. They've been our trusted supplier for years.",
//     name: "Dr. Sarah Johnson",
//     role: "Hospital Director"
//   },
//   {
//     text: "The best medical supplies provider we've worked with. Fast delivery and great support.",
//     name: "Michael Chen",
//     role: "Pharmacy Owner"
//   },
//   {
//     text: "Reliable products and exceptional customer service. Highly recommended!",
//     name: "Dr. Robert Williams",
//     role: "Medical Practitioner"
//   }
// ] 
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Truck, Clock, Star, Users, Award, Heart, Stethoscope, Activity, Pill, Mail, Phone, MapPin, Play, CheckCircle, ArrowRight } from 'lucide-react';

export default function MedicalSuppliesLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FDA Approved",
      description: "All products meet strict regulatory standards"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "24-48 hour shipping to your doorstep"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Premium medical-grade supplies only"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Healthcare Partners" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Customer Support" }
  ];

  const testimonials = [
    {
      text: "MedSupply has revolutionized our procurement process. Their digital platform makes ordering seamless, and the quality is consistently exceptional.",
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      hospital: "Metropolitan General Hospital",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      text: "Outstanding service and reliability. Their emergency delivery saved us during a critical shortage. Truly a partner we can depend on.",
      name: "Michael Chen",
      role: "Pharmacy Director",
      hospital: "City Medical Center",
      rating: 5,
      image: "👨‍💼"
    },
    {
      text: "The mobile app is incredibly user-friendly, and their inventory management system has streamlined our entire supply chain.",
      name: "Dr. Emily Rodriguez",
      role: "Surgery Department Head",
      hospital: "Advanced Care Institute",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  const products = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Diagnostic Equipment",
      description: "Professional-grade diagnostic tools and instruments",
      items: ["Stethoscopes", "Blood Pressure Monitors", "Thermometers", "Pulse Oximeters"]
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Surgical Supplies",
      description: "Sterile surgical instruments and disposables",
      items: ["Surgical Instruments", "Gloves & Masks", "Sutures", "Drapes & Gowns"]
    },
    {
      icon: <Pill className="w-12 h-12" />,
      title: "Pharmaceuticals",
      description: "Wide range of medications and treatments",
      items: ["Prescription Drugs", "OTC Medications", "Vaccines", "IV Solutions"]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Patient Care",
      description: "Essential items for patient comfort and care",
      items: ["Wheelchairs", "Hospital Beds", "Mobility Aids", "Comfort Products"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                MedSupply Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Portal Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Healthcare Professionals
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your Premier
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent block">
                  Medical Supply
                </span>
                Partner
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Delivering premium medical and surgical supplies to healthcare professionals worldwide. 
                Experience seamless procurement with our cutting-edge digital platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Access Portal
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-3 bg-white border-2 border-gray-200 px-6 py-4 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">Android App</span>
                  </button>
                  
                  <button className="flex items-center gap-3 bg-white border-2 border-gray-200 px-6 py-4 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600">iOS App</span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Live Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-800">Order #12847</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">Delivered</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <Truck className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Order #12848</span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">In Transit</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="font-medium text-orange-800">Order #12849</span>
                      </div>
                      <span className="text-sm font-medium text-orange-600">Processing</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">This Month</span>
                      <span className="font-bold text-gray-900">2,847 Orders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MedSupply Pro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with unmatched reliability to deliver exceptional medical supply solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical supplies across all specialties, sourced from leading manufacturers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Healthcare Leaders</h2>
            <p className="text-xl text-gray-600">
              See what our partners have to say about their experience with MedSupply Pro.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-100">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[activeTestimonial].image}</div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-blue-600 font-medium">{testimonials[activeTestimonial].role}</div>
                  <div className="text-gray-600 text-sm">{testimonials[activeTestimonial].hospital}</div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest updates on new products, industry insights, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubmitted}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitted ? (
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Subscribed!
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">MedSupply Pro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your trusted partner in medical supplies, delivering excellence to healthcare professionals worldwide since 2010.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>support@medsupplypro.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-MED-SUPP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Available Worldwide</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MedSupply Pro. All rights reserved. | Premium Medical Supplies & Equipment</p>
          </div>
        </div>
      </footer>
    </div>
  );
}