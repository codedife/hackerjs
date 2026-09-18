import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white page-animation">

      {/* HERO */}
      <section className="background min-h-[45vh] flex items-center">
        <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">

          <h1 className="slide-left text-white text-[30px] md:text-[38px] lg:text-[45px] font-extrabold leading-tight">
            Get in touch
            <br />
            with us
          </h1>

          <p className="mt-5 text-white text-[12px] md:text-[13px] font-light leading-6">
            Do you have questions about our courses, partnerships, or
            cybersecurity? Get in touch with us. We will be happy to answer
            your questions.
          </p>

        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="py-16 md:py-20">

        <div className="mx-auto w-[90vw] md:w-[80vw] lg:w-[70vw]">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                Let's talk
              </h2>

              <p className="mt-5 text-sm leading-6 text-gray-600">
                Would you like to learn more about our training programs?
                Do you need information about a partnership? Fill out the
                form and we will get back to you.
              </p>


              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">

                <div>
                  <p className="text-xs font-bold uppercase text-lime-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-black">
                    contact@example.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-lime-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-black">
                    +48 000 000 000
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-lime-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-black">
                    Poland
                  </p>
                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="slide-right bg-black p-6 md:p-8">

              <h2 className="text-2xl font-bold text-white">
                Send us a message
              </h2>

              <form className="mt-8 space-y-5">

                <div>
                  <label className="text-xs text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full border border-gray-700 bg-[#111] px-4 py-3 text-sm text-white outline-none transition focus:border-lime-500"
                  />
                </div>


                <div>
                  <label className="text-xs text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="mt-2 w-full border border-gray-700 bg-[#111] px-4 py-3 text-sm text-white outline-none transition focus:border-lime-500"
                  />
                </div>


                <div>
                  <label className="text-xs text-gray-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Message subject"
                    className="mt-2 w-full border border-gray-700 bg-[#111] px-4 py-3 text-sm text-white outline-none transition focus:border-lime-500"
                  />
                </div>


                <div>
                  <label className="text-xs text-gray-300">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="mt-2 w-full resize-none border border-gray-700 bg-[#111] px-4 py-3 text-sm text-white outline-none transition focus:border-lime-500"
                  />
                </div>


                <button
                  type="submit"
                  className="button-animation w-full bg-lime-500 px-5 py-3 text-sm font-bold text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-white"
                >
                  SEND MESSAGE
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="bg-black px-6 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Have questions?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
          We are ready to answer your questions and help you start your
          journey into cybersecurity.
        </p>

        <button className="mt-7 bg-lime-500 px-6 py-3 text-sm font-bold text-black transition-transform duration-300 hover:scale-105 hover:bg-white">
          CONTACT US
        </button>

      </section>

    </main>
    <Footer />
    </>
  )
}

export default page