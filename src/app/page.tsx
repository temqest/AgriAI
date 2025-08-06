"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TopNavbar from '../components/top_navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const FOREST_GREEN = '#228B22';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <TopNavbar />
      <main className={`font-sans bg-white text-gray-900 pt-16 ${inter.className}`}>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          {/* Abstract farmland/leaf motif background (SVG or gradient) */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#fff" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl text-center mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4" style={{textShadow:'0 2px 8px rgba(34,139,34,0.3)'}}>
              Grow Smarter with AgriForecast: <span className="block">AI-Powered Crop Planning and Weather Insights</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 font-medium">
              Get barangay-level weather alerts, soil moisture tracking, and planting recommendations—all in one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow-md hover:bg-green-50 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                style={{color: FOREST_GREEN}}
                onClick={() => router.push('/auth/sign-up')}
              >
                Start Planning Now
              </button>
            </div>
          </div>
        </section>
        {/* Key Benefits Section */}
        <section className="py-14 px-4 bg-white" id="benefits">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-green-100">
                <Image src="/globe.svg" alt="Weather Alerts" width={32} height={32} />
              </div>
              <h3 className="font-semibold text-lg mb-1" style={{color: FOREST_GREEN}}>Barangay-level Weather Alerts</h3>
              <p className="text-gray-600 text-base">Stay ahead with hyper-local weather warnings.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-green-100">
                <Image src="/window.svg" alt="Soil Moisture" width={32} height={32} />
              </div>
              <h3 className="font-semibold text-lg mb-1" style={{color: FOREST_GREEN}}>Soil Moisture Analytics</h3>
              <p className="text-gray-600 text-base">Monitor soil health for better yields.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-green-100">
                <Image src="/file.svg" alt="AI Planting" width={32} height={32} />
              </div>
              <h3 className="font-semibold text-lg mb-1" style={{color: FOREST_GREEN}}>AI-driven Planting Suggestions</h3>
              <p className="text-gray-600 text-base">Get the best crop advice for your barangay.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-green-100">
                <Image src="/vercel.svg" alt="Offline Access" width={32} height={32} />
              </div>
              <h3 className="font-semibold text-lg mb-1" style={{color: FOREST_GREEN}}>Offline Access via PWA</h3>
              <p className="text-gray-600 text-base">Use AgriForecast even without internet.</p>
            </div>
          </div>
        </section>
        {/* Real-Time Stats / Live Data Preview */}
        <section className="py-12 px-4 bg-green-50" id="stats">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-1">Today’s Weather (Naga)</span>
              <span className="text-3xl font-bold" style={{color: FOREST_GREEN}}>28°C</span>
              <span className="text-base text-gray-600">Partly Cloudy</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-1">Soil Moisture Index</span>
              <span className="text-3xl font-bold" style={{color: FOREST_GREEN}}>67%</span>
              <span className="text-base text-gray-600">Healthy</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-1">Next Best Planting Date (Rice)</span>
              <span className="text-3xl font-bold" style={{color: FOREST_GREEN}}>June 15</span>
              <span className="text-base text-gray-600">Based on AI forecast</span>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white" id="how">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{color: FOREST_GREEN}}>How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl" role="img" aria-label="Sign up">📝</span>
                </div>
                <span className="font-semibold text-lg mb-1">Sign up</span>
                <span className="text-gray-600 text-base">Create your free account</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl" role="img" aria-label="Barangay">🏘️</span>
                </div>
                <span className="font-semibold text-lg mb-1">Select your barangay</span>
                <span className="text-gray-600 text-base">Get local data</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl" role="img" aria-label="Advice">🌱</span>
                </div>
                <span className="font-semibold text-lg mb-1">Get tailored advice</span>
                <span className="text-gray-600 text-base">Weather & crop tips</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl" role="img" aria-label="Offline">📱</span>
                </div>
                <span className="font-semibold text-lg mb-1">Sync offline</span>
                <span className="text-gray-600 text-base">Use in the field</span>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section (Optional) */}
        <section className="py-14 px-4 bg-green-50" id="testimonials">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{color: FOREST_GREEN}}>What Farmers Say</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Farmer">👨‍🌾</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-1">“Dakulang tabang ini sa samuyang mga paraoma. Dai na kami nababahala sa panahon!”</p>
                  <span className="text-sm text-gray-500">— Mang Tonyo, Rice Farmer, Bicol</span>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-3xl" role="img" aria-label="Extension Worker">🧑‍💼</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-1">“AgriForecast helps us give real-time advice to farmers, even in remote barangays.”</p>
                  <span className="text-sm text-gray-500">— Engr. Liza, Agricultural Extension Worker</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet the Team Section */}
        <section className="py-16 px-4 bg-white" id="team">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{color: FOREST_GREEN}}>Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Example team members, replace with real photos and bios */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-3 overflow-hidden">
                  <span className="text-4xl" role="img" aria-label="Dev">👩‍💻</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Ana Reyes</h3>
                <span className="text-gray-500 text-sm mb-2">Lead Developer</span>
                <p className="text-gray-600 text-base">Passionate about rural innovation and building tech for good.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-3 overflow-hidden">
                  <span className="text-4xl" role="img" aria-label="Researcher">🧑‍🔬</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Dr. Jose Cruz</h3>
                <span className="text-gray-500 text-sm mb-2">Agri Research Lead</span>
                <p className="text-gray-600 text-base">Expert in crop science and community-based technology.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-3 overflow-hidden">
                  <span className="text-4xl" role="img" aria-label="Community">🤝</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Maria Santos</h3>
                <span className="text-gray-500 text-sm mb-2">Community Coordinator</span>
                <p className="text-gray-600 text-base">Connecting farmers and extension workers across the region.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Banner */}
        <section className="py-12 px-4 bg-green-700 text-white text-center" id="cta">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to harvest smarter? Get your free agri forecast today.</h2>
            <button
              className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow-md hover:bg-green-50 transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{color: FOREST_GREEN}}
              onClick={() => router.push('/auth/log-in')}
            >
              Try the Dashboard
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-bold text-xl" style={{color: FOREST_GREEN}}>AgriForecast</span>
              <p className="text-gray-400 mt-2 text-sm">Empowering Filipino farmers with AI and real-time guidance.</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm justify-center">
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
              <a href="#docs" className="hover:underline">Docs</a>
            </nav>
          </div>
          <div className="text-center text-gray-500 text-xs mt-6">&copy; 2024 AgriForecast. All rights reserved.</div>
        </footer>
      </main>
    </>
  );
}