"use client";
import Slider from "react-slick";
import "./ReviewCard.css";
import { ReviewCard } from "./ReviewCard";
import React, { Component } from "react";
import { FaQuoteRight } from "react-icons/fa";

export default class ReviewsSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      reverse: true,

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
        name: "নকিব হাসান",
        message:
          "রিসল বই স্টোর হলো একটি অত্যন্ত উপকারী বই দোকান। বইগুলির সবচেয়ে নতুন সংস্করণ এখানে পাওয়া যায় এবং সেগুলি শিক্ষার্থীদের জন্য অত্যন্ত সুলভ মূল্যে পাওয়া যায়।",
        batch: "4th semester",
      },
      {
        id: "02",
        name: "শরিফ ",
        message:
          "রিসল বই স্টোরে পড়াশোনা নিয়ে সম্মিলিত বইগুলির ভারপূর্বক সংগ্রহ করতে সহজ এবং অত্যন্ত সুবিধাজনক একটি স্থান।",
        batch: "2th semester",
      },
      {
        id: "03",
        name: "রফিক হাসান",
        message:
          "রিসল বই স্টোরটি বই প্রেমীদের জন্য একটি সম্পুর্ণান্বেষী স্থান। শিরোনামের বইগুলির বৈচিত্র্য অবাককর এবং আমি সবসময় আমার সংগ্রহে কিছু নতুন এবং রোমাঞ্চকর কিছু পাই। কর্মীদের জ্ঞান আদর্শ।",
        batch: "2th Semester",
      },
      {
        id: "04",
        name: "জহিরুল ইসলাম",
        message:
          "রিসল বই স্টোর আমার জন্য একটি প্রিয় স্থান, কারণ এখানে সব ধরনের বই পাওয়া যায় এবং তা অত্যন্ত সুলভ মূল্যে।",
        batch: "6th semester",
      },
      {
        id: "05",
        name: "হাসনা",
        message:
          "এই দোকানে যাওয়ার পর আমি হীরক রাত্রি এবং অন্যান্য বই পেয়েছি, যা অনেকটা সাধারণ দোকানে পাওয়া যায় না।",
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
