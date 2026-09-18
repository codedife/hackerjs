import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white page-animation">

      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold">
            Our Courses
          </h1>

          <p className="mt-5 text-white text-[12px] md:text-[13px] leading-6">
            Develop practical cybersecurity skills through our professional
            training programs.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">

        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black">
          Explore Our Courses
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="card-animation bg-black p-8">
            <h3 className="text-xl font-bold text-lime-500">
              Cybersecurity Fundamentals
            </h3>

            <p className="mt-4 text-sm text-gray-300">
              Learn the fundamental concepts of cybersecurity, threats,
              vulnerabilities and security practices.
            </p>

            <button className="mt-6 bg-lime-500 px-5 py-2 text-sm font-bold">
              LEARN MORE
            </button>
          </div>

          <div className="card-animation bg-black p-8">
            <h3 className="text-xl font-bold text-lime-500">
              Ethical Hacking
            </h3>

            <p className="mt-4 text-sm text-gray-300">
              Learn practical techniques used to identify and understand
              security vulnerabilities.
            </p>

            <button className="mt-6 bg-lime-500 px-5 py-2 text-sm font-bold">
              LEARN MORE
            </button>
          </div>

          <div className="card-animation bg-black p-8">
            <h3 className="text-xl font-bold text-lime-500">
              Network Security
            </h3>

            <p className="mt-4 text-sm text-gray-300">
              Understand how networks are protected against attacks and
              unauthorized access.
            </p>

            <button className="button-animation mt-6 bg-lime-500 px-5 py-2 text-sm font-bold">
              LEARN MORE
            </button>
          </div>

        </div>

      </section>

    </main>
    <Footer/>
    </>
  )
}

export default Courses