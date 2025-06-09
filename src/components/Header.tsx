"use client"

import { Logo } from '@/assets';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'

import React, { useState } from 'react'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [{link: "Home", path: "/"}, {link: "About", path: "/about-me"}, {link:"Works", path:"/projects"}, {link:"Contact", path: "/contact-us"}];


  return (
    <header className="text-white sticky top-0 z-50 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Logo  className='w-14 h-fit' />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((index, idx) => (
            <Link
              key={idx}
              href={index?.path}
              className={`text-sm ${
                index.link === "Home" ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {index?.link}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href={"/contact-us"} className="bg-gray-800 px-5 py-2 rounded-full text-sm font-semibold hover:text-black hover:bg-white transition">
            Let’s talk
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black text-white">
          {navLinks.map((index, idx) => (
            <Link
              key={idx}
              href={index.path}
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {index?.link}
            </Link>
          ))}
          <Link href={"/contact-us"} className="w-full bg-gray-800 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition">
            Let’s talk
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header