"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../../image/Group.png"

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-black px-5 py-4 slide">

      <div className="mx-auto flex max-w-6xl items-center justify-between">

        <Image
          src={Logo}
          alt="Logo"
          className="h-8 w-32 sm:h-10 sm:w-40"
        />

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-5 lg:flex">

          <a href="/about" className="text-[10px] text-white">
            About Us
          </a>

          <a href="/courses" className="text-[10px] text-white">
            COURSES
          </a>

          <a href="/companies" className="text-[10px] text-white">
            FOR COMPANIES
          </a>

          <a href="/partnership" className="text-[10px] text-white">
            PARTNERSHIP
          </a>

          <a href="/review" className="text-[10px] text-white">
            COURSE REVIEWS
          </a>

          <a href="/blog" className="text-[10px] text-white">
            BLOG
          </a>

        </div>

        {/* DESKTOP BUTTON */}
        <a
          className="hidden rounded-lg bg-lime-500 px-5 py-2 text-sm text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black lg:block" href="/contact"
        >
          CONTACT
        </a>

        {/* MOBILE BUTTON */}
        <button
          className="btn text-2xl text-white lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!menuopen)}
        >
          {menuopen ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuopen && (
        <div className="mt-4 flex flex-col items-center gap-5 border-t border-gray-700 py-5 lg:hidden">

          <a href="/about" className="text-[10px] text-white">
            About Us
          </a>

          <a href="/courses" className="text-[10px] text-white">
            COURSES
          </a>

          <a href="/companies" className="text-[10px] text-white">
            FOR COMPANIES
          </a>

          <a href="/partnership" className="text-[10px] text-white">
            PARTNERSHIP
          </a>

          <a href="/review" className="text-[10px] text-white">
            COURSE REVIEWS
          </a>

          <a href="/contact" className="text-[10px] text-white">
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar