import React from 'react'

const Hero = () => {
  return (
    <section className="background h-[45vh] flex items-center">
      <div className="ml-6 max-w-[90vw] md:ml-16 md:max-w-[60vw] lg:ml-40 lg:max-w-[35vw]">
        
        <a
          href="#"
          className="slide block text-white text-[28px] md:text-[32px] lg:text-[35px] font-extrabold leading-tight transition-transform duration-300 hover:scale-[1.05] md:hover:scale-[1.1] lg:hover:scale-[1.2]"
        >
          We train
          cybersecurity experts of tomorrow
        </a>

        <a
          href="#"
          className="slide block mt-6 text-white text-[12px] md:text-[13px] font-light transition-transform duration-300 hover:scale-[1.05] md:hover:scale-[1.1] lg:hover:scale-[1.2]"
        >
          As an international training institute, we focus on building a
          network of highly skilled cybersecurity specialists. Thanks to our
          unique training programs, we are a leading organization in the
          international market. Our students include people just beginning
          their journey in IT as well as advanced learners. What connects them
          all is their passion for new technologies and cybersecurity.
        </a>

        <button
          type="button"
          className="slide bg-lime-500 mt-6 p-2 rounded-sm hover:bg-amber-50 hover:text-black transition-transform duration-300 hover:scale-[1.05] md:hover:scale-[1.1] lg:hover:scale-[1.2]"
        >
          CONTACT US
        </button>

      </div>
    </section>
  )
}

export default Hero