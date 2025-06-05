"use client";

import {
  Adobephotoshop,
  Bootstrap,
  CssLogo,
  Figma,
  HtmlLogo,
  JavascriptLogo,
  Mayank,
  Nextjs,
  ReactLogo,
  Signature,
  Tailwindcss,
  Wordpress,
} from "@/assets";
import ArrowIcon from "@/assets/logo/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function HeroSection() {
  const SwiperData = [
    { _id: 0, image: HtmlLogo },
    { _id: 1, image: CssLogo },
    { _id: 2, image: Tailwindcss },
    { _id: 3, image: Bootstrap },
    { _id: 4, image: JavascriptLogo },
    { _id: 5, image: Nextjs },
    { _id: 6, image: ReactLogo },
    { _id: 7, image: Wordpress },
    { _id: 8, image: Figma },
    { _id: 9, image: Adobephotoshop },
  ];
  return (
    <section className="grid lg:grid-cols-2 gap-5">
      <Link href={""} className="group bg-[#111111] rounded-3xl p-6 grid sm:grid-cols-2 gap-4 items-center w-full shadow-lg border border-gray-900">
        <div className="rounded-tl-4xl rounded-br-4xl overflow-hidden">
          <Image
            src={Mayank.src}
            alt="Mayank"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xs uppercase text-gray-400">A Web Designer</p>
              <h2 className="text-4xl font-semibold leading-tight">
                Mayank Parmar<span className="text-blue-400">.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 line-clamp-5">
              I am a highly skilled and creative web designer with 2+ Years Of
              expertise creating visually appealing, user-friendly websites. I
              have extensive experience creating e-commerce sites, dynamic,
              static, and custom designs. My skills include HTML, CSS, Tailwind
              CSS, JavaScript React.js, NextJs, and a variety of CMS platforms
              such as WordPress and Magento.
            </p>
          </div>
          <div className="flex justify-end w-full">
            <ArrowIcon className="group-hover:text-blue-400 transition-all" />
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-5">
          <Link href={""} className="group bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
            <div className="flex justify-center">
              <Image
                src={Signature.src}
                width={220}
                height={220}
                alt="Signature"
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">More About Me</p>
                <h3 className="text-xl font-semibold text-white">Credentials</h3>
              </div>
              <ArrowIcon className="group-hover:text-blue-400 transition-all" />
            </div>
          </Link>
          <Link href={""} className="group bg-[#111111] rounded-3xl min-h-10 p-4 shadow-lg border border-gray-900">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">My Work</p>
                <h3 className="text-xl font-semibold text-white">Project</h3>
              </div>
              <ArrowIcon className="group-hover:text-blue-400 transition-all" />
            </div>
          </Link>
        </div>
        {/* <div className="bg-[#111111] rounded-3xl px-4 shadow-lg border border-gray-900 w-full max-w-screen-xl mx-auto">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            centeredSlides={true}
            grabCursor={false}
            loop={true}
            speed={5000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            modules={[Autoplay, Mousewheel, FreeMode]}
            className="mySwiper"
            style={{ transitionTimingFunction: "linear" }}
          >
            {SwiperData.map((item) => (
              <SwiperSlide key={item._id} className="py-4">
                <Image
                  src={item.image.src}
                  width={60}
                  height={60}
                  alt="logo"
                  className="text-white text-sm sm:text-base text-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
