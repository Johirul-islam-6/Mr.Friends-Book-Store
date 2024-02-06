"use client";
import Slider from "react-slick";
import "./ReviewCard.css";
import { ReviewCard } from "./ReviewCard";
import React, { Component } from "react";
import { FaQuoteRight } from "react-icons/fa";

export default class ReviewsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,

      beforeChange: function (currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        // console.log("after change", currentSlide);
      },
    };

    const reviewData = [
      {
        id: "01",
        name: "রাকিব হাসান",
        message:
          "রিসল বই স্টোর হলো আমার বই কিনার জন্য স্থান! বইগুলির বিশাল সংগ্রহ অসাধারণ, বিভিন্ন জনরের বইগুলি রয়েছে। অলঙ্কারযুক্ত পরিবেশ এবং সাহায্যকর্তাদের জন্য সাহসিক অভিজ্ঞতা প্রতিটি সময় একটি আনন্দময় অভিজ্ঞতা হয়।",
        batch: "7th semester",
      },
      {
        id: "02",
        name: "শরিফ ",
        message:
          "রিসল বই স্টোরের শান্ত পরিবেশটি আমার পছন্দ। রেখাগুলি একটি সাবধানভাবে বিন্যাসিত এবং কর্মীরা সব সময় সাহায্য করতে প্রস্তুত। এটি বইপ্রেমীদের জন্য একটি প্রিয় স্থান। পূর্বানুমান করা হয়।",
        batch: "5th semester",
      },
      {
        id: "03",
        name: "শরিফা",
        message:
          "রিসল বই স্টোরটি বই প্রেমীদের জন্য একটি সম্পুর্ণান্বেষী স্থান। শিরোনামের বইগুলির বৈচিত্র্য অবাককর এবং আমি সবসময় আমার সংগ্রহে কিছু নতুন এবং রোমাঞ্চকর কিছু পাই। কর্মীদের জ্ঞান আদর্শ।",
        batch: "2th Semester",
      },
      {
        id: "04",
        name: "রাসেল",
        message:
          "আমি প্রবৃদ্ধি পাঠক হিসেবে, আমি রিসল বই স্টোরের কিছু নতুন বই খোঁজায়। ভারসাম্যের সাথে বইগুলি সাজানো হয়েছে, এবং কর্মীরা সময় অতীত হয়ে যাচ্ছে।",
        batch: "7th semester",
      },
      {
        id: "05",
        name: "Mr. Khan",
        message:
          "রিসল বই স্টোর হলো একটি অত্যন্ত উপকারী বই দোকান। বইগুলির সবচেয়ে নতুন সংস্করণ এখানে পাওয়া যায় এবং সেগুলি শিক্ষার্থীদের জন্য অত্যন্ত সুলভ মূল্যে পাওয়া যায়।",
        batch: "5th semester",
      },
    ];

    return (
      <div className=" h-[90vh]  overflow-hidden ">
        <Slider {...settings}>
          {reviewData?.map((student) => (
            <>
              <div key={student?.id} class="mt-3">
                <div className=" border-2 flex flex-col justify-center items-center p-5 rounded-lg">
                  <span className="flex justify-between w-[100%]">
                    <div className="block ">
                      <p className="font-bold text-[14px] text-[#573BA3]">
                        {student?.name}
                      </p>
                      <p className="font-bold text-[11px] text-[#000000a9]">
                        {student?.batch}
                      </p>
                    </div>
                    <FaQuoteRight className="text-[30px] text-[#00000080]" />
                  </span>

                  <h2 class="text-[16px] text-start SILIGURI mt-3">
                    {student?.message?.slice(0, 110)}...
                  </h2>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    );
  }
}
