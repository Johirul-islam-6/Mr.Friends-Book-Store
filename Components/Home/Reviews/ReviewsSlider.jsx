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
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,

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

    const reviewData = [
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
      {
        id: "04",
        image: person4,
        name: "Md. Johirul Islam",
        message:
          "একটি অত্যন্ত সুসজ্জিত ওয়েব ডেভেলপমেন্ট সার্ভিসের জন্য একটি স্বর্ণময় সফরের পর, আমি এখনো একটি অসাধারণ অভিজ্ঞানে অংশগ্রহণ করতে পারছি। এই ওয়েব ডেভেলপার বাংলাদেশে সেরা একটি হিসেবে প্রতিষ্ঠিত হয়েছে, এবং তাদের কাজের মান এবং পেশাদার পূর্ণতা একে অপরকে আলোচনা করতে অনুমোদন করেছে।",
        Personality: "Web Instractor",
      },
      {
        id: "05",
        image: person1,
        name: "Toma Ali",
        message:
          "MERN নিয়ে আমার এক্সপেক্টেশন ১০০% ফুলফিল হয়েছে। সব প্রয়োজনেই ওস্তাদ-এ পেয়েছি ইন্সট্যান্ট সাপোর্ট। এ কারণেই আমি ভুল করে করে শেখার সাহস করতে পেরেছি। ধন্যবাদ ওস্তাদকে। ওস্তাদের কোর্স আমি সবসময় রেকমেন্ড করবো।",
        Personality: "MERN Stac-1 batch",
      },
    ];

    return (
      <div className="md:px-10">
        <Slider {...settings}>
          {reviewData?.map((student) => (
            <>
              <div key={student?.id} class="card">
                <div className="reviewCard border-2 flex flex-col justify-center items-center p-5 ">
                  <span>
                    <FaQuoteRight className="text-[30px] text-[#00000080]" />
                  </span>
                  <h2 class="text-[16px] text-start SILIGURI mt-3">
                    {student?.message?.slice(0, 150)}...
                  </h2>

                  <div className="flex flex-col  justify-center  mt-2">
                    <Image
                      width={60}
                      height={400}
                      className="border-2 flex justify-center mx-auto rounded-full"
                      src={student?.image}
                      alt=""
                    />
                    <h1 className="text-center text-[11px] font-[600] text-[#3e54a3]">
                      {student?.name}
                    </h1>
                    <p className="text-[12px] text-[#00000090]">
                      {student?.Personality}
                    </p>
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
