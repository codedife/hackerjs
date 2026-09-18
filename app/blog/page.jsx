import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <Navbar/>
    <main className="min-h-screen bg-white page-animation">

      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold">
            Blog
          </h1>

          <p className="mt-5 text-white text-[12px] md:text-[13px] leading-6">
            Discover cybersecurity insights, technology news and useful
            resources.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">

        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black">
          Latest Articles
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <article className="card-animation bg-black p-8">
            <p className="text-lime-500 text-xs font-bold">
              CYBERSECURITY
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              Understanding Cybersecurity
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              Learn the basic principles every beginner should know about
              cybersecurity.
            </p>

            <button className="mt-6 text-lime-500 text-sm font-bold">
              READ MORE →
            </button>
          </article>

          <article className="card-animation bg-black p-8">
            <p className="text-lime-500 text-xs font-bold">
              TECHNOLOGY
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              The Future of Cybersecurity
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              Explore how technology is changing the cybersecurity industry.
            </p>

            <button className="mt-6 text-lime-500 text-sm font-bold">
              READ MORE →
            </button>
          </article>

          <article className="card-animation bg-black p-8">
            <p className="text-lime-500 text-xs font-bold">
              CAREER
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              Starting a Career in Cybersecurity
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              A guide for people interested in starting their cybersecurity
              journey.
            </p>

            <button className="button-animation mt-6 text-lime-500 text-sm font-bold">
              READ MORE →
            </button>
          </article>

        </div>

      </section>

    </main>
    <Footer/>
    </>
  )
}

export default Blog