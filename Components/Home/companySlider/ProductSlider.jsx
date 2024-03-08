"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/app/Assets/allPublicaion/img-1.jpg";
import img2 from "@/app/Assets/allPublicaion/img-3.jpg";
import img3 from "@/app/Assets/allPublicaion/img-4.png";
import img4 from "@/app/Assets/allPublicaion/img-5.jpg";
import img5 from "@/app/Assets/allPublicaion/img-6.png";
import img6 from "@/app/Assets/allPublicaion/img-7.png";
import img7 from "@/app/Assets/allPublicaion/img-8.png";
import img8 from "@/app/Assets/allPublicaion/img-9.png";
import img9 from "@/app/Assets/allPublicaion/img-10.svg";
import img10 from "@/app/Assets/allPublicaion/img-11.jpg";
import img11 from "@/app/Assets/allPublicaion/img-12.jpg";
import img12 from "@/app/Assets/allPublicaion/img-13.jpg";

const ProductSlider = () => {
  const products = [
    {
      image: img1,
      title: "Explore",
      link: "https://explore.mocdt.com/",
    },
    {
      image: img2,
      title: "DNS Flow",
      link: "https://dns.mocdt.com/",
    },
    {
      image: img3,
      title: "Authenticator",
      link: "https://authenticator.mocdt.com/",
    },
    {
      image: img4,
      title: "Mail",
      link: "https://email.mocdt.com/",
    },
    {
      image: img5,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img6,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img7,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img8,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img9,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img10,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img11,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: img12,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1160: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1650: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fff] border-t-2 border-b-2 border-[#414548]  xl:w-[150px] 2xl:w-[200px] sm:h-[150px] h-[90px] rounded-[10px] flex gap-2 items-center justify-center mt-2">
              <Image
                src={item?.image}
                alt="Picture of product"
                // width={180}
                // height={106}
                objectFit="cover"
                className="product_image p-1 rounded-md w-[100%] h-[100%]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
