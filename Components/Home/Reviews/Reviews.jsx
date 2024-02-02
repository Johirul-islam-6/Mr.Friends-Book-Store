import React from "react";
import ReviewsSlider from "./ReviewsSlider";
import ReviewsSlider2 from "./ReviewsSlider2";
import ReviewsSlider3 from "./ReviewsSlider3";
import ReviewsSlider4 from "./ReviewsSlider4";

export const Reviews = () => {
  return (
    <>
      <div className="review">
        <div className="mt-20 ">
          <h1 className="text-cetegory-heading ps-1 text-center">
            Student Reviews
          </h1>
          <div className="w-[120px] mx-auto h-[5px] bg-[#573BA2]"></div>
          <div className="Reviews gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8">
            <div className="hidden md:flex">
              <ReviewsSlider2 />
            </div>
            <div className="hidden md:flex">
              <ReviewsSlider3 />
            </div>
            <div className="hidden lg:flex">
              <ReviewsSlider4 />
            </div>

            <ReviewsSlider />
          </div>
        </div>
      </div>
    </>
  );
};
