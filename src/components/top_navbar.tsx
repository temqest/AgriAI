import React from 'react';

const FOREST_GREEN = '#228B22';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function TopNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-300" style={{fontFamily: 'inherit'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-extrabold" style={{color: FOREST_GREEN}}>AgriAI</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-green-700 font-medium transition-colors text-base focus:outline-none focus:text-green-700"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Sign Up / Log In Button */}
        <div className="flex items-center">
          <a
            href="#auth"
            className="bg-green-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            style={{backgroundColor: FOREST_GREEN}}
          >
            Log In
          </a>
        </div>
      </div>
      {/* Mobile nav (optional: hamburger menu for real app) */}
      <div className="md:hidden flex justify-center py-2 bg-white border-t border-gray-100">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="mx-3 text-gray-800 hover:text-green-700 font-medium text-base focus:outline-none focus:text-green-700"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
