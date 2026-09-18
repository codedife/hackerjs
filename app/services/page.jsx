import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white page-animation">

      {/* HERO */}
      <section className="background min-h-[45vh] flex items-center">

        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold leading-tight">
            Our
            <br />
            Services
          </h1>

          <p className="slide-right mt-5 text-white text-[12px] md:text-[13px] leading-6">
            We provide practical cybersecurity training and professional
            development services designed to help individuals and organizations
            build stronger cybersecurity skills.
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 py-16 md:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
              What We Offer
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-600">
              Our services are designed to develop cybersecurity talent,
              improve technical knowledge and help organizations strengthen
              their security capabilities.
            </p>

          </div>


          {/* SERVICE CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                01
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Cybersecurity Training
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Learn essential cybersecurity concepts through practical
                training designed for beginners and experienced professionals.
              </p>

              <a
                href="/courses"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
              >
                VIEW COURSES
              </a>

            </div>


            {/* CARD 2 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                02
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Corporate Training
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Help your employees develop the cybersecurity knowledge and
                skills required to protect modern organizations.
              </p>

              <a
                href="/companies"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
              >
                FOR COMPANIES
              </a>

            </div>


            {/* CARD 3 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                03
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Professional Development
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Improve your technical capabilities and stay up to date with
                the latest developments in cybersecurity.
              </p>

              <a
                href="/contact"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
              >
                GET STARTED
              </a>

            </div>


            {/* CARD 4 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                04
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Security Awareness
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Build stronger security awareness and help teams understand
                common cyber threats and safe digital practices.
              </p>

              <a
                href="/contact"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
              >
                CONTACT US
              </a>

            </div>


            {/* CARD 5 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                05
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Cybersecurity Consulting
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Get professional guidance on cybersecurity training, skills
                development and organizational security needs.
              </p>

              <a
                href="/contact"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
              >
                TALK TO US
              </a>

            </div>


            {/* CARD 6 */}
            <div className="card-animation bg-black p-7">

              <span className="text-4xl text-lime-500">
                06
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                Career Development
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Build practical skills and develop the knowledge needed to
                start or advance your career in cybersecurity.
              </p>

              <a
                href="/contact"
                className="button-animation mt-6 inline-block bg-lime-500 px-5 py-2 text-sm font-bold text-black"
                >
                START YOUR JOURNEY
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* WHY US */}
      <section className="bg-black px-6 py-16 md:py-20">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Choose Our Services?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400">
            We focus on practical knowledge, continuous development and
            building cybersecurity professionals who are ready to solve
            real-world problems.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-lg font-bold text-lime-500">
                Practical Learning
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Learn skills that can be applied to real cybersecurity
                situations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-lime-500">
                Expert Knowledge
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Learn from professionals with practical industry experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-lime-500">
                Career Focused
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Develop skills that can help you grow professionally.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 py-16 text-center md:py-20">

        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Ready to build your cybersecurity skills?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600">
          Get in touch with us and discover how our training and professional
          services can help you achieve your goals.
        </p>

        <a
          href="/contact"
          className="button-animation mt-8 inline-block bg-lime-500 px-7 py-3 text-sm font-bold text-black"
        >
          CONTACT US
        </a>

      </section>

    </main>
    <Footer/>
   </>
  )
}

export default Services