import React from 'react'
import Image from 'next/image'
import Logo  from '../../image/Group.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white slide">

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className="h-8 w-32 sm:h-10 sm:w-40"
        />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-400">
            
            <a
              href="/"
              className="transition duration-300 hover:text-lime-500"
            >
              Home
            </a>

            <a
              href="/about"
              className="transition duration-300 hover:text-lime-500"
            >
              About
            </a>

            <a
              href="/services"
              className="transition duration-300 hover:text-lime-500"
            >
              Services
            </a>

            <a
              href="/contact"
              className="transition duration-300 hover:text-lime-500"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:text-sm">
          © 2026 MyWebsite. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer