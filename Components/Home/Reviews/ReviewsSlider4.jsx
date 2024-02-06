"use client";
import Slider from "react-slick";
import "./ReviewCard.css";
import { ReviewCard } from "./ReviewCard";
import React, { Component } from "react";
import { FaQuoteRight } from "react-icons/fa";

export default class ReviewsSlider4 extends Component {
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
        name: "মোল্লা মাহাবুব",
        message:
          "রিসল বই স্টোরে বই কিনতে গিয়ে আমি অনেক খুশি হয়েছি কারণ এখানে পাওয়া যায় সব প্রকারের শিক্ষামূলক বই, যা আমার অধ্যয়নে অত্যন্ত সাহায্য করে",
        batch: "1th semester",
      },
      {
        id: "02",
        name: "রিদয় হাসান ",
        message:
          "এই দোকানে যাওয়ার পর আমি হীরক রাত্রি এবং অন্যান্য বই পেয়েছি, যা অনেকটা সাধারণ দোকানে পাওয়া যায় না।",
        batch: "5th semester",
      },
      {
        id: "03",
        name: "শাহিন ",
        message:
          "রিসল বই স্টোর একটি আদর্শ স্থান যেখানে বিভিন্ন বিষয়ে বই পাওয়া যায়, এবং এটা আমার অধ্যয়নে অত্যন্ত সাহায্য করে।",
        batch: "3th Semester",
      },
      {
        id: "04",
        name: "বাপ্পি হাসান",
        message:
          "রিসল বই স্টোর আমার জন্য একটি প্রিয় স্থান, কারণ এখানে সব ধরনের বই পাওয়া যায় এবং তা অত্যন্ত সুলভ মূল্যে",
        batch: "2th semester",
      },
      {
        id: "05",
        name: "হাসান কুলী",
        message:
          "রিসল বই স্টোরে অত্যন্ত ভালো মূল্যে অত্যন্ত ভালো বইগুলি পাওয়া যায়, যা একটি ছাত্রের জন্য খুব গুরুত্বপূর্ণ।",
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
