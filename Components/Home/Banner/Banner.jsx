"use client";
import "./FounderStory.css";
import image01 from "@/app/Assets/Banner/Banner1.png";
import image02 from "@/app/Assets/Banner/Banner3.png";
import image03 from "@/app/Assets/Banner/Banner2.png";
import BannerSlider from "./BannerSlider";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Banner = () => {
  useEffect(() => {
    async function viewCount() {
      try {
        const response = await axios.patch(
          `https://resell-book-store-server.vercel.app/api/v1/siteView/view/65ed5c027abd2d8d377ddd83`
        );
        const result = response.data;

        // if get the data then save
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    viewCount();
  }, []);

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
      image: image03,
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
