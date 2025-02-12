"use client"
import React from "react";

export default function About() {
  return (
    <div className="w-full max-w-full bg-gradient-to-tr from-yellow via-gray-200 to-offwhite mix-blend-normal min-h-screen ">
      <section className="mt-0">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 space-y-12">
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#000000] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#050505] hover:bg-gray-200">
            ABOUT ME
          </button>

          <p className="max-w-2xl text-[20px] sm:text-[16px] lg:text-[20px] leading-[138.68%] text-[#050505]">
            Hello! I&apos;m Iffat Ul Fatima, a passionate and driven
            individual with a deep love for technology and creativity. With
            expertise in web development and graphic design, I bring together my
            skills to craft digital experiences that are not only functional but
            also visually compelling.
          </p>
        </div>
      </section>
      {/* Sections: Experience, Passion and Interests */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        {/* Experience Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Experience
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            I began my professional journey at Promotion Plexus, where I worked
            as a data entry specialist and graphic designer. This role gave me
            valuable experience in handling both technical and creative tasks.
            Now, I&apos;m fully immersed in the freelance world, offering my services
            as both a graphic designer and programmer, delivering customized
            solutions to clients across various industries.
          </p>
        </div>

        {/* Passion and Interests Section */}
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Passion and Interests
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            What really excites me is the ever-evolving world of cybersecurity.
            I&apos;m fascinated by the challenges and opportunities it presents and
            am constantly learning to stay ahead in this dynamic field. In
            addition, my interests also span across Web3, AI, and web
            development — technologies that are shaping the future of the
            digital world.
          </p>
        </div>
      </div>
      {/* Hobbies and Motivation Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-4 py-16 space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center text-center max-w-sm lg:w-1/3 space-y-4">
          <h1 className="font-bold text-[22px] tracking-[0.18538em] text-[#000000]">
            Hobbies and Motivation
          </h1>
          <p className="text-[14px] leading-[19px] text-justify text-[#000000]">
            When I&apos;m not coding or designing, you’ll find me exploring the great
            outdoors, whether it&apos;s through nature walks or keeping up with the
            latest in technology. I&apos;m also an avid football player and enjoy
            spending time improving my coding skills. My hobbies and passions
            keep me motivated, constantly pushing me to sharpen my expertise in
            the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}