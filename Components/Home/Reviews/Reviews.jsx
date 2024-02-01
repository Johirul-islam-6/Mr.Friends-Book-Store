import React from "react";
import ReviewsSlider from "./ReviewsSlider";

export const Reviews = () => {
  return (
    <>
      <div className="review">
        <div className="mt-20 ">
          <h1 className="text-cetegory-heading ps-1 text-center">
            Student Reviews
          </h1>
          <div className="w-[120px] mx-auto h-[5px] bg-[#573BA2]"></div>
          <div className=" mt-8">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </>
  );
};
