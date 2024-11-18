'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useScrollAnimation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToServices = () => {
    const serviceSection = document.getElementById('services');
    serviceSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-cream-50">
      <nav className="fixed w-full bg-white text-black p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img src="/logo.png" alt="Quantum Mines & Minerals" className="w-14 h-14" />
            </Link>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
          
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={scrollToAbout}
              className="bg-primary text-white hover:bg-primary-light transition-colors duration-300 px-6 py-2 rounded-md flex items-center gap-2 group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="p-4">
            <button
              onClick={scrollToAbout}
              className="w-full bg-primary text-white hover:bg-primary-light transition-colors duration-300 px-6 py-2 rounded-md text-center mb-2"
            >
              Learn more
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-navy-900 to-primary overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Where Innovation Meets Mineral Wealth
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
              Pioneering sustainable mining practices with cutting-edge technology
              for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <button
                onClick={scrollToAbout}
                className="bg-white text-navy-900 hover:bg-gray-100 transition-all duration-300 px-6 sm:px-8 py-3 rounded-md font-semibold flex items-center gap-2 group"
              >
                Discover More
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 p-4">
            <div className="grid gap-4">
              <div className="rounded-lg overflow-hidden h-48 bg-white/10">
                <img
                  src="/qminers-truck.webp"
                  alt="Mining operations 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 bg-white/10">
                <img
                  src="/lake.webp"
                  alt="Mining operations 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 pt-8">
              <div className="rounded-lg overflow-hidden h-64 bg-white/10">
                <img
                  src="/Many-trucks.webp"
                  alt="Mining operations 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 bg-white/10">
                <img
                  src="/Truck-loading.webp"
                  alt="Mining operations 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full animate-float-${i + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </section>

      <section id="services" className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-in-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive mining solutions powered by cutting-edge technology and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exploration",
                image: "/qminers-truck-1.webp",
                description: "We conduct thorough mineral exploration to identify valuable resources, ensuring you invest wisely in the mining sector."
              },
              {
                title: "Consultation",
                image: "/Qminers-loaded-truck.webp",
                description: "Have questions about mineral prospects? Our expert team provides tailored consultations to guide your mining decisions effectively."
              },
              {
                title: "Extraction",
                image: "/extraction.webp",
                description: "We utilize advanced techniques for efficient mineral extraction, maximizing your yield and minimizing waste."
              },
              {
                title: "Testing",
                image: "/testing.webp",
                description: "We guarantee accurate mineral testing results, assuring you of quality before processing and investment decisions."
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="group fade-in-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-in-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                About Quantum Mines & Minerals
              </h2>
              <p className="text-gray-600 mb-4">
                Quantum Mines and Minerals is dedicated to supplying premium,
                sustainably obtained minerals for a variety of sectors. We
                specialize in the extraction and processing of industrial minerals
                and precious metals, essential to meeting the growing global
                demand.
              </p>
              <p className="text-gray-600 mb-6">
                Our portfolio includes gold, silver, lithium, rare earth elements,
                and other vital minerals necessary to drive innovation in
                sustainable energy, infrastructure development, and technology
                worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-navy-900 mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-600">
                    Environmentally conscious mining practices
                  </p>
                </div>
                <div className="p-4 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-bold text-navy-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Cutting-edge extraction technology
                  </p>
                </div>
              </div>
            </div>
            <div className="relative fade-in-scroll delay-300 mt-8 md:mt-0">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-light p-1 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <img
                    src="/big-truck.webp"
                    alt="Mining operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Quantum Mines & Minerals" className="w-14 h-14" />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Leading the future of sustainable mineral extraction with innovative technologies and responsible practices.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={scrollToServices} className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">+254 796333669</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">supply@quantamines.africa</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">Langata House 4th Floor, Wilson Airport</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-400 hover:text-primary transition-colors">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Quantum Mines & Minerals. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
