import React from "react";
import Slider from "react-slick";
import "./Image.css";
import Link from "next/link";
import Image from "next/image";
import { FaPhabricator } from "react-icons/fa";

const DiplomaBookSlider = ({ ResultBooks, Loding }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
            <div class="py-4    rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
              <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

              <div class="p-4 space-y-4 sm:px-8">
                <div class="w-full h-4 rounded bg-gray-300"></div>
                <div class="w-full h-4 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="py-4  hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
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
          ResultBooks.map(
            (item, index) =>
              item?.status !== "panding" && (
                <div key={item?._id} className="card ">
                  <div class="shadow-card-slider pe-20">
                    <div className="w-[100%] flex justify-start items-center mx-auto ">
                      <Image
                        width={0}
                        height={0}
                        className="w-[100%] h-[100%] absolute top-5 pe-10 "
                        src={item?.bookImage} // Use item.bookImage instead of ResultBooks?.bookImage
                        alt=""
                      />
                    </div>
                    <div class="contents ">
                      <h2 class="title p-2 py-3 w-[100%] ">
                        {item?.bookName?.slice(0, 20)}
                      </h2>
                      <div className="all-button-courses flex flex-wrap justify-center items-center mt-5 gap-2 ">
                        <p className="bg-[#0000] flex gap-1  items-center px-2 py-[4px] border-2 border-[#fff] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#fff] ">
                          <FaPhabricator className="text-[#ffffff]" />{" "}
                          {item?.view?.slice(0, 10)}
                        </p>
                        <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#fff] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#fff]">
                          {item?.publication}
                        </p>
                        <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#fff] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#fff]">
                          {item?.createdAt?.slice(0, 10)}
                        </p>

                        <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#fff] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#fff]">
                          {item?.semester}
                        </p>
                        <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#fff] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#fff]">
                          {item?.location}
                        </p>
                      </div>
                      <Link href={`/detailsBook/${item?._id}`}>
                        <button class="px-8 bg-white text-black py-2 mt-5 font-[600]">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
      </Slider>
    </div>
  );
};

export default DiplomaBookSlider;
