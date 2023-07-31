import React from 'react'
import image_1 from "../assets/Carousel-1.jpg"
import image_2 from "../assets/Carousel-2.jpg"
import image_3 from "../assets/Carousel-3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, initTE, } from "tw-elements";

initTE({ Carousel });

const Hero = () => {
  return (
    <div data-aos-duration="1000" data-aos="fade-up">
      <div
        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <img
          src={image_1}
          style={{ filter: "brightness(0.5)" }}
          className="relative block w-full"
          alt="..." />
        <div
        data-aos="zoom-in"
          className="absolute inset-x-[15%] top-[10%] md:top-[35%] block py-5 text-center text-white">
          <h1 className="text-3xl md:text-7xl text-orange-500 font-bold">Insta FOOD </h1>
          <h1 className="text-xl md:text-6xl font-bold">Delicious Food Items </h1>
          <h3 className="text-lg md:text-4xl text-orange-300 font-bold">On one touch </h3>
        </div>
      </div>
    </div>
  )
}

export default Hero