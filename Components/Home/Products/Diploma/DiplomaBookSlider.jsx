import React from "react";
import Slider from "react-slick";
import { ImageCard } from "./ImageCard";
import "./Image.css";
import Link from "next/link";
import Image from "next/image";

const DiplomaBookSlider = ({ ResultBooks, Loding }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1250, // define breakpoint for lg screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // define breakpoint for md screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // define breakpoint for sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520, // define breakpoint for sm screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(ResultBooks);
  return (
    <div className="md:px-10">
      {Loding && (
        <>
          <div className="grid  md:grid-cols-4 gap-5 justify-center items-center md:justify-start">
            <div class="py-4  rounded-lg shadow-md w-60 sm:w-96 animate-pulse bg-gray-50 mx-auto">
              <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

              <div class="p-4 space-y-4 sm:px-8">
                <div class="w-full h-4 rounded bg-gray-300"></div>
                <div class="w-full h-4 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
              <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

              <div class="p-4 space-y-4 sm:px-8">
                <div class="w-full h-4 rounded bg-gray-300"></div>
                <div class="w-full h-4 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
              <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

              <div class="p-4 space-y-4 sm:px-8">
                <div class="w-full h-4 rounded bg-gray-300"></div>
                <div class="w-full h-4 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
              <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

              <div class="p-4 space-y-4 sm:px-8">
                <div class="w-full h-4 rounded bg-gray-300"></div>
                <div class="w-full h-4 rounded bg-gray-300"></div>
              </div>
            </div>
          </div>
        </>
      )}
      <Slider {...settings}>
        {Array.isArray(ResultBooks) &&
          ResultBooks.map((item, index) => (
            <>
              <div key={item?._id} class="card">
                <Image
                  width={250}
                  height={20}
                  className="card-image absolute top-0 p-5"
                  src={item?.bookImage} // Use item.bookImage instead of ResultBooks?.bookImage
                  alt=""
                />
                <div class="content ">
                  <h2 class="title p-2 pt-0 ">{item?.bookName}</h2>
                  <p class="copy py-2 ">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <Link href={"/detailsBook/1"}>
                    <button class="btn">View Details</button>
                  </Link>
                </div>
              </div>
            </>
          ))}
      </Slider>
    </div>
  );
};

export default DiplomaBookSlider;
