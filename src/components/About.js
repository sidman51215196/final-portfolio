import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Siddharth Manna.
            <br className="hidden lg:inline-block" />I am a CSE student at Sikkim Manipal Institute of Technology
          </h1>
          <p className="mb-8 leading-relaxed">
          Hello, I'm Sidman, hailing from the picturesque town of Gangtok. I'm an enthusiastic programmer with an insatiable appetite for learning. Challenges fuel my passion, and I thrive on pushing my limits to achieve new heights. Whether it's coding or exploring new horizons, I'm always eager to embrace the opportunities that come my way.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/sidman51215196"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See my github profile
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-manna-2350271b3/"
              className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See my linkedin profile
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}