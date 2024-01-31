import React from "react";
import ReviewsSlider from "./ReviewsSlider";

export const Reviews = () => {
  return (
    <>
      <div className="review">
        <div className="mt-20 ">
          <h1 className="text-center text-[1.7rem] md:text-[2rem] font-[600] pt-5 SILIGURI">
            দেখে নিন কি বলছেন ইউনিটেক এক্সপার্টরা
          </h1>
          {/* <h1 className="text-center achieveParagraph SILIGURI">
            দেখে নিন কি বলছেন ইউনিটেক এক্সপার্টরা
          </h1> */}
          <div className=" mt-8">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </>
  );
};
