import React from 'react'
import Image from 'next/image'
import rect from '../../image/Rectangle 2.png'
import MP from '../../image/MAP.png'

const Body = () => {
  return (
    <section className="h-auto bg-white py-10 md:py-16">

      {/* MISSION */}
      <div className="flex flex-col items-center">
        <div className="flex w-[90vw] md:w-[75vw] lg:w-[60vw] flex-col items-center space-y-6">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-black">
            Our mission is to solve the problem of talent shortages and the
            lack of cybersecurity specialists
          </h2>

          <p className="text-center text-[12px] md:text-[13px] text-black">
            There is a shortage of cybersecurity experts around the world.
            Our goal is to close the skills and talent gap in cybersecurity
            by upskilling and retraining specialists. We want qualified
            cybersecurity professionals to become a priority in every
            organization.
          </p>

        </div>

        {/* STATS */}
        <div className="mt-10 flex w-[90vw] flex-col md:flex-row md:w-[80vw] lg:w-[70vw] items-center justify-center gap-10 md:gap-12 lg:gap-20">

          <div className="flex w-full md:w-[30vw] flex-col items-center space-y-5">
            <p className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700">
              4 Million
            </p>

            <span className="w-[80vw] md:w-[25vw] text-center text-[12px] md:text-[14px] text-black">
              Unfilled cybersecurity jobs worldwide in 2022
              [Cybersecurity Ventures]
            </span>
          </div>

          <div className="hidden md:block h-[43vh] border-l border-black" />

          <div className="flex w-full md:w-[30vw] flex-col items-center space-y-5">
            <p className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700">
              $10
              <br />
              BILLION
            </p>

            <span className="w-[80vw] md:w-[29vw] text-center text-[12px] md:text-[14px] text-black">
              Estimated losses caused by cybercrime worldwide by 2025
              [Cybersecurity Ventures]
            </span>
          </div>

        </div>
      </div>


      {/* VALUES */}
      <div className="mt-16 md:mt-20 flex flex-col items-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black text-center">
          Our Values
        </h2>

        <div className="mt-10 flex w-[90vw] flex-col md:flex-row md:w-[80vw] lg:w-[70vw] items-center justify-center gap-8 md:gap-10">

          <Image
            src={rect}
            alt="Cybersecurity training"
            className="w-[85vw] md:w-[40vw] lg:w-[35vw] object-cover"
          />

          <div className="w-[85vw] md:w-[35vw] lg:w-[30vw] text-black">

            <p className="text-lg md:text-xl font-extrabold leading-relaxed">
              "
              Our instructors are practitioners and passionate professionals
              who share their knowledge and skills. Together, we spark our
              students' curiosity about the world of cybersecurity and help
              them enter the job market.
              "
            </p>

            <div className="mt-6 flex justify-end">
              <div className="flex flex-col text-right text-[8px]">

                <span className="text-[10px] font-semibold">
                  ~ Maciej Cieśla
                </span>

                <span>
                  Head of Cybersecurity Program
                  <br />
                  Poland
                </span>

              </div>
            </div>

          </div>

        </div>
      </div>


      {/* THREE VALUES */}
      <div className="mt-16 md:mt-20 flex justify-center">

        <div className="w-[90vw] md:w-[85vw] lg:w-[80vw] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-20">

          <div className="w-[80vw] md:w-[20vw] lg:w-[13vw] flex flex-col">

            <p className="text-black text-[18px] md:text-[20px] text-center font-bold">
              Learning through
              practice
            </p>

            <p className="text-black text-center text-[10px] md:text-[11px]">
              The knowledge we retain best is
              the knowledge we can apply
              in practice.
            </p>

          </div>

          <div className="hidden md:block h-[43vh] border-l border-black" />

          <div className="w-[80vw] md:w-[20vw] lg:w-[13vw] flex flex-col">

            <p className="text-black text-[18px] md:text-[20px] text-center font-bold">
              Continuous
              development
            </p>

            <p className="text-black text-center text-[10px] md:text-[11px]">
              We believe in the power of
              motivation and the opportunities
              that come with it.
            </p>

          </div>

          <div className="hidden md:block h-[43vh] border-l border-black" />

          <div className="w-[80vw] md:w-[20vw] lg:w-[13vw] flex flex-col">

            <p className="text-black text-[18px] md:text-[20px] text-center font-bold">
              Building a community
              of specialists
            </p>

            <p className="text-black text-center text-[10px] md:text-[11px]">
              We discover the potential in
              people beginning their journey
              in cybersecurity.
            </p>

          </div>

        </div>
      </div>


      {/* PARTNERS */}
      <div className="mt-16 md:mt-20 flex flex-col items-center">

        <h2 className="text-xl md:text-2xl font-extrabold text-black text-center w-[80vw] md:w-[50vw] lg:w-[30vw]">
          Our global
          educational partners
        </h2>

        <Image
          src={MP}
          alt="Map"
          className="mt-8 w-[90vw] md:w-[75vw] lg:w-auto"
        />

      </div>

    </section>
  )
}

export default Body