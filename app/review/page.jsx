import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Reviews = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white page-animation">

      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold">
            Course Reviews
          </h1>

          <p className="mt-5 text-white text-[12px] md:text-[13px] leading-6">
            See what our students have to say about their learning experience.
          </p>

        </div>
      </section>

      <section className="py-16 px-6">

        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black">
          What Our Students Say
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="card-animation border border-gray-200 p-8">
            <p className="text-sm leading-6 text-gray-600">
              "The practical approach helped me understand cybersecurity
              concepts much faster."
            </p>

            <h3 className="mt-6 font-bold text-black">
              Student
            </h3>
          </div>

          <div className="card-animation border border-gray-200 p-8">
            <p className="text-sm leading-6 text-gray-600">
              "The instructors were knowledgeable and made the learning
              experience engaging."
            </p>

            <h3 className="mt-6 font-bold text-black">
              Student
            </h3>
          </div>

          <div className="card-animation border border-gray-200 p-8">
            <p className="text-sm leading-6 text-gray-600">
              "I gained practical skills that I can apply in real-world
              cybersecurity environments."
            </p>

            <h3 className="mt-6 font-bold text-black">
              Student
            </h3>
          </div>

        </div>

      </section>

    </main>
    <Footer/>
    </>
  )
}

export default Reviews