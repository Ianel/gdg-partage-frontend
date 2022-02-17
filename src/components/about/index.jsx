import React from "react";
import homedoctor from "../../assets/images/home-doctor.jpg";

const About = () => {
  return (
    <div className="lg:mx-20 lg:my-20">
      <div className="md:my-10 mt-10">
        <h1 className="text-center text-2xl md:text-4xl font-bold">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
        <div className="lg:w-1/2">
          <figure className="flex flex-col justify-center items-center my-6 lg:my-12">
            <img
              className="shadow-xl w-56 h-56 md:w-2/3 md:h-2/3 lg:w-64 lg:h-64 rounded-full object-cover"
              src={homedoctor}
              alt="Avatar"
            />
            <figcaption className="my-4 md:mt-8 font-semibold md:text-3xl">
              Ianel Tombozafy
            </figcaption>
          </figure>
          <figure className="flex flex-col md:flex-row lg:justify-evenly items-center">
            <img
              className="outline-2 shadow-md w-2/3 md:w-1/3 lg:w-40 lg:h-40"
              src={homedoctor}
              alt=""
            />
            <img
              className="outline-2 shadow-md w-2/3 md:w-1/3 lg:w-40 lg:h-40"
              src={homedoctor}
              alt=""
            />
            <img
              className="outline-2 shadow-md w-2/3 md:w-1/3 lg:w-40 lg:h-40"
              src={homedoctor}
              alt=""
            />
          </figure>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-center lg:text-3xl text-xl my-4 font-semibold lg:my-6">
            My path to coding
          </h2>
          <p className="mx-12 lg:leading-8 text-justify lg:text-lg text-gray-700">
            I am a young developer whose passion is to code and whose goal is to
            create something useful for people. Born in the city of Mahajanga in
            the North West of Madagascar, I entered the world of development
            when my borther did it first. At first I was not very interested in
            computer science till I found the joy of building websites with html
            5 and css 3. It was so easy to build a website and I started
            creating my own demo websites with a 2 GB RAM Acer computer hoping
            that one day I will be able to create sites like those we see when
            we browse the web. Then I followed a computer science degree a year
            after my graduation at high school because I spent a partially
            failed preparatory year at Antananarivo the capital of Madagascar. I
            learned C as a first programming language and then I extended to
            other languages such as C++, Python and PHP. But the more I
            progressed, the more advices I get so I specialized to backend
            development at first. Then I wanted to build something people could
            "see" so I finally switched to the front-end and stick to it till
            today. That's my history so this is a resume of what I have been
            through and some telling about me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
