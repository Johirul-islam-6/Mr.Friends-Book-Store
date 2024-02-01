"use client";
import Slider from "react-slick";
import "./ReviewCard.css";
import { ReviewCard } from "./ReviewCard";
import React, { Component } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import person1 from "@/app/Assets/Review/student-1.jpg";
import person2 from "@/app/Assets/Review/student-2.jpg";
import person3 from "@/app/Assets/Review/student-3.jpg";
import person4 from "@/app/Assets/Review/student-4.png";

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
      autoplaySpeed: 2000,
      pauseOnHover: false,

      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    const reviewData = [
      revie1: {
        {
        id: "01",
        image: person1,
        name: "Safiya Katun",
        message:
          "ইউনিটেক-এর MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই MERN এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
        Personality: "MERN-1th batch",
      },
      {
        id: "02",
        image: person2,
        name: "Tammana Vath",
        message:
          "ইউনিটেক এর বিশেষত্ত্ব হচ্ছে ওনারা  ডিজাইনের চেয়েও ডিজাইন সাইকোলজিতে ফোকাস বেশি দেয়। যা একজন শিক্ষার্তীর চাকরির ক্ষেত্রে খুব কাজে দেয় ও অন্য দশজন থেকে নিজেকে আলাদা করা যায়। ইন্ডাস্ট্রি ফোকাসড এই প্র্যাক্টিস আমাকে প্রোফেশনালি অনেক হেল্প করেছে।",
        Personality: "UX/UI Batch 1",
      },
      {
        id: "03",
        image: person3,
        name: "Miss. Saifa Ali",
        message:
          "ক্লাস আলহামদুলিল্লাহ যেভাবে চেয়েছি পেয়েছি। ক্লাসের থেকে অনেক কিছুই পেয়েছি। ইন্সট্রাক্টর অনেক ভালো ছিল। ওভারঅল অনেক এঞ্জয় করেছি, ওভারঅল স্যাটিসফাইড।",
        Personality: "Web Design-1 batch",
      },
     
    ];

    return (
      <div className="md:px-10 h-[90vh]  overflow-hidden">
        <Slider {...settings}>
          {reviewData?.map((student) => (
            <>
              <div className=" gap-5 flex items-center mt-3  ">
                <div key={student?.id} class="rounded-lg">
                  <div className=" border-2 flex flex-col justify-center items-center p-5 rounded-lg">
                    <span>
                      <FaQuoteRight className="text-[30px] text-[#00000080]" />
                    </span>
                    <h2 class="text-[16px] text-start SILIGURI mt-3">
                      {student?.message?.slice(0, 150)}...
                    </h2>
                  </div>
                </div>
                <div key={student?.id} class="rounded-lg">
                  <div className=" border-2 flex flex-col justify-center items-center p-5 rounded-lg">
                    <span>
                      <FaQuoteRight className="text-[30px] text-[#00000080]" />
                    </span>
                    <h2 class="text-[16px] text-start SILIGURI mt-3">
                      {student?.message?.slice(0, 150)}...
                    </h2>
                  </div>
                </div>
                <div key={student?.id} class="rounded-lg">
                  <div className=" border-2 flex flex-col justify-center items-center p-5 rounded-lg">
                    <span>
                      <FaQuoteRight className="text-[30px] text-[#00000080]" />
                    </span>
                    <h2 class="text-[16px] text-start SILIGURI mt-3">
                      {student?.message?.slice(0, 150)}...
                    </h2>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    );
  }
}
