import Image from "next/image";
import React from "react";
import img01 from "../../../app/Assets/Product/Diploma/1st/one.webp";
import "./SingelBookDetail.css";
import {
  FaRegCheckCircle,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { ReviewField } from "../Review/ReviewField";
import Link from "next/link";

export const SingelBookInf = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-center md:justify-start  gap-5 gap-x-10 p-3">
          <div className="  flex justify-center  md:w-[60%] py-5">
            <Image
              width={290}
              height={200}
              src={img01}
              className="md:w-[80%] w-[80%] h-[70vh] md:h-[65vh] border-2 p-5"
              alt=""
            />
          </div>

          <div className="content-details w-[100%]">
            <h1 className="DetailsBook-heading GT text-[30px] md:text-[40px] font-[400]  text-[#2c293b]">
              ফিজিক্স-১
            </h1>
            <p className="pt-3 text-[16px] md:text-[18px] text-[#433782] IBM font-[600]">
              বিষয় কোড :- <span className="text-[#000000a7]">৬৬৬৬</span>{" "}
            </p>
            <p className="pt-3 text-[18px] IBM font-[600]">
              <span className="font-[100] text-[#433782]">
                ( হক পাবলিকেশন )
              </span>{" "}
            </p>
            <p className="pt-3 text-[16px] font-extrabold flex items-center lign-hight-32 ">
              <FaRegCheckCircle className="text-[#1fa5a3] text-[20px] font-extrabold" />{" "}
              <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                Available
              </span>{" "}
            </p>
            <p className="pt-3 text-[25px] md:text-[28px] GT font-[600] text-[#000000bd]">
              টাকা. <span className="font-[600] text-[#433782]">60</span>{" "}
              <span className="text-[14px]">৳</span>
            </p>
            <div>
              <h1 className="text-[35px] text-start GT pt-5">Description</h1>
              <p className="discription-paragrap text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis autem reprehenderit obcaecati soluta voluptas error,
                nostrum similique sunt aut? Ab mollitia nesciunt unde deleniti
                dolores consequuntur ullam inventore odio beatae eligendi optio
                nobis cupiditate dicta aliquid suscipit more..
              </p>
            </div>
            {/* ----------- if you are show sellar profile ------ */}
            <button className="mt-10 py-5 px-10 bg-[#563A9F] text-white rounded-sm">
              বিক্রেতার প্রোফাইল দেখতে চাই
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
