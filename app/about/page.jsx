import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white page-animation">

      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className=" slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold">
            About Us
          </h1>

          <p className="slide-right mt-5 text-white text-[12px] md:text-[13px] leading-6">
            We are dedicated to developing the next generation of
            cybersecurity professionals through practical and modern training.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Who We Are
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            We are an international cybersecurity training institute focused
            on helping people develop the skills they need to succeed in the
            technology and cybersecurity industry.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Our programs are designed for both beginners and experienced
            professionals who want to improve their technical knowledge and
            build practical cybersecurity skills.
          </p>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  )
}

export default About