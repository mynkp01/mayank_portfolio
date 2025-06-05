"use client"

import Logo from '@/assets/logo/Logo';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Works', 'Contact'];


  return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Logo  className='w-14 h-fit' />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={`#${link.toLowerCase()}`}
              className={`text-sm ${
                link === 'Home' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="bg-gray-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition">
            Let’s talk
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black text-white">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <button className="w-full bg-gray-800 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition">
            Let’s talk
          </button>
        </div>
      )}
      </header>
  )
}

export default Header