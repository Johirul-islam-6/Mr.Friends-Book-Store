"use client";

import React, { useState, useEffect } from "react";
import "./FounderStory.css";
import Image from "next/image";
import Link from "next/link";
import smbanner from "@/app/Assets/Banner/institute.png";

const BannerSlider = ({ datas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [datas]);

  return (
    <div>
      {datas.map((item, index) => (
        <>
          <Link href={""}>
            {/* // --------- only lg size ------- */}
            <div
              key={index}
              className={` md:mt-[10px]  left-0 w-full h-full transition-opacity ${
                index === currentIndex ? "flex " : "hidden"
              }  `}
            >
              {/* --------------- body slider ------ */}
              <div className=" w-[100%] h-[78vh]  mx-auto flex justify-center items-center">
                <Image
                  width={1500}
                  height={1450}
                  quality={100}
                  // placeholder="blur"
                  src={item?.image}
                  alt={`Slide ${index + 1}`}
                  className="md:flex object-fill hidden justify-center items-center h-[80vh] md:h-[78vh]"
                />
                <Image
                  width={1500}
                  height={1450}
                  quality={100}
                  // placeholder="blur"
                  src={smbanner}
                  alt={`Slide ${index + 1}`}
                  className="flex md:hidden object-cover  justify-center items-center h-[80vh] md:h-[78vh]"
                />
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default BannerSlider;
