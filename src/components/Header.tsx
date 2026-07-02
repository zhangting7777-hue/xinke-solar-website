'use client';
import Link from 'next/link';
import { Sun, Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-solar-50">
        <div className="container-custom flex justify-end items-center py-2 text-sm gap-4">
          <a href="mailto:zhangting7777@gmail.com" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <Mail className="w-4 h-4" />
            zhangting7777@gmail.com
          </a>
          <a href="https://wa.me/8618367911260" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-600 hover:text-green-700">
            <MessageCircle className="w-4 h-4" />
            WhatsApp: zhangting7777
          </a>
        </div>
      </div>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">Xinke Solar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="block mt-4 btn-primary text-center">
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">Xinke Solar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Solar Mounting System Manufacturer with 12GW annual production capacity.
            </p>
            <p className="text-sm text-gray-500">
              Exporting to 100+ countries worldwide
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/color-steel-roof-mount" className="hover:text-white transition-colors">Roof Mount</Link></li>
              <li><Link href="/products/ground-mount-system" className="hover:text-white transition-colors">Ground Mount</Link></li>
              <li><Link href="/products/solar-carport" className="hover:text-white transition-colors">Solar Carport</Link></li>
              <li><Link href="/products/solar-tracking-system" className="hover:text-white transition-colors">Tracking Systems</Link></li>
              <li><Link href="/products/solar-rail" className="hover:text-white transition-colors">Components</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/certificates" className="hover:text-white transition-colors">Certificates</Link></li>
              <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Xiamen, China<br />Zhangzhou, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+86 183-6791-1260</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>zhangting7777@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
                <a href="https://wa.me/8618367911260" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  WhatsApp: zhangting7777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Xinke Solar. All rights reserved. | Professional Solar Mounting Solutions</p>
        </div>
      </div>
    </footer>
  );
}
