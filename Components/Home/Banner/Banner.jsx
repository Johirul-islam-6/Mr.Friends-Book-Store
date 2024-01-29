"use client";
import "./FounderStory.css";
import image01 from "../../../app/Assets/Banner/background-2.webp";
import image02 from "../../../app/Assets/Banner/background.jpg";
import BannerSlider from "./BannerSlider";

export const Banner = () => {
  const datas = [
    {
      image: image01,
      datetitle: "2.5 year fardin sheikh image",
      link: "mrfriends.com",
    },
    {
      image: image02,
      datetitle: "Adarsha academy school",
      link: "mrfriends.com",
    },
    {
      image: image01,
      datetitle: "2.5 year fardin sheikh image",
      link: "mrfriends.com",
    },
  ];
  return (
    <div className=" bg-[#FFFFFF] flex justify-center items-center  mx-auto w-[100%]">
      <BannerSlider
        slides={datas}
        datas={datas}
        size="large"
        slideInterval={6}
      />
    </div>
  );
};
