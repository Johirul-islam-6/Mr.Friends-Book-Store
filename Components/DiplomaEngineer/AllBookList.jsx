"use client";
import React, { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";
import { GoodStudentPackage } from "./GoodStudentPackage";

export const AllBookList = ({ SemesterNumber }) => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 600) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`${
            isFixed ? "search-fixed  bg-white w-full py-4" : ""
          } flex justify-center md:justify-between items-center me-2 mt-12 mb-2 border-t-2 border-b-2 px-2 py-3`}
        >
          <div className=" justify-start items-center hidden md:flex">
            <h1 className="text-[18px] text-[#563A9F]">
              {" "}
              <span className="font-bold ">Searching : </span> Web Mastering
              book
            </h1>
          </div>

          <div class="flex justify-center space-x-4  md:me-9">
            <div class="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search anything.."
                class="w-full h-[45px] rounded-md rounded-r-none GT border-[#563A9F] border-2 text-start ps-3 focus:outline-4 outline-[#563A9F]"
              />
              <button class="bg-[#563A9F] hover:bg-[#482f8a] h-[45px] rounded-md  rounded-l-none text-white  md:px-6 px-3  font-semibold  rounded-r-md">
                <p className="text-[11px] md:text-[14px]"> Search</p>
              </button>
            </div>
          </div>
        </div>
        {SemesterNumber !== "all" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 p-3 md:px-10 mt-5 bg-[#F4F4F4] py-4">
              <GoodStudentPackage />
              <GoodStudentPackage />
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-y-6 gap-x-5 mt-2">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </>
  );
};
