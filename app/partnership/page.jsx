import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Partnership = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white page-animation">

      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold">
            Partnership
          </h1>

          <p className="slide-right mt-5 text-white text-[12px] md:text-[13px] leading-6">
            Join our network and help us build the future of cybersecurity
            education.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Become Our Partner
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            We collaborate with organizations, educational institutions and
            technology companies to create opportunities for cybersecurity
            professionals.
          </p>

          <button className="button-animation mt-8 bg-lime-500 px-6 py-3 text-sm font-bold">
            BECOME A PARTNER
          </button>

        </div>

      </section>

    </main>
    <Footer/>
    </>
  )
}

export default Partnership