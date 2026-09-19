"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import FadeIn from "../motion/FadeIn";
import "swiper/css";
import "swiper/css/pagination";
const slides = [{
  tag: "CORPORATE SOCIAL RESPONSIBILITY",
  title: "Committed to making a positive impact.",
  button: "Join Us",
  href: "/partners/alumni",
  img: "/images/banner/health1-12.webp"
}, {
  tag: "COMMUNITY DEVELOPMENT",
  title: "Working together to empower local communities.",
  button: "Learn More",
  href: "/focus-area/skill",
  img: "/images/focus-area/Focus-Area-Women-Empowerment.webp"
}, {
  tag: "ENVIRONMENTAL CARE",
  title: "Protecting nature for a greener tomorrow.",
  button: "Get Involved",
  href: "/partners/corporate",
  img: "/images/banner/BANNER2.webp"
}, {
  tag: "EDUCATION INITIATIVES",
  title: "Shaping bright futures through education.",
  button: "Join Us",
  href: "/partners/whyPartner",
  img: "/images/banner/BANNER3.webp"
}];
const textVariant = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: {
      duration: 0.4
    }
  }
};
const Banner = () => {
  return <div className="relative w-full overflow-hidden">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{
      delay: 4000,
      disableOnInteraction: false
    }} pagination={{
      clickable: true
    }} loop slidesPerView={1} className="w-full h-[70vh] md:h-[80vh]">
        {slides.map((slide, index) => <SwiperSlide key={index} className="relative w-full h-full">

            {/* Background image ALWAYS loads instantly */}
            <div className="absolute inset-0 -z-10">
              <Image src={slide.img} alt={slide.title} fill priority={index === 0} placeholder="empty" className="object-cover object-center w-full h-full brightness-75" />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* ONLY TEXT IS ANIMATED */}
            
              <div key={index} className="relative w-full h-full flex items-center px-6 sm:px-12">
                <div className="max-w-7xl mx-auto space-y-4">
                  <button className="text-blue bg-lightblue text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-3xl hover:scale-105 transition">
                    {slide.tag}
                  </button>

                  <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <Link href={slide.href} className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
                    {slide.button}
                  </Link>
                </div>
              </div>
            

          </SwiperSlide>)}
      </Swiper>
    </div>;
};
export default Banner;