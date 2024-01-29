"use client";
import "./Card.css";
import Image from "next/image";

import React, { useState } from "react";
import { FaRegCheckCircle, FaShoppingBag } from "react-icons/fa";
import img01 from "@/app/Assets/Product/Diploma/1st/one.webp";
import Delete from "@/app/Assets/Icons/delete.svg";

export const CardItem = () => {
  const [value, setValue] = useState(1);

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  return (
    <>
      <div className=" main-card md:px-5 lg:px-10 xl:px-40">
        <div className="flex justify-center md:justify-end mx-5">
          <button className="bg-[#BF1F49] text-white px-8 py-2 my-5 rounded-md uppercase text-[14px] font-bold ">
            checkout ( total : ৳ 550 টাকা )
          </button>
        </div>
        <div className="md:flex hidden gap-2 border-t-2 border-b-2 justify-center mx-5">
          <div className="w-[65%] text-center">Item</div>
          <div className="w-[15%]  text-center">Qty</div>
          <div className="w-[15%] text-center">Price</div>
          <div className="w-[5%]  text-center"></div>
        </div>
        {/* ----- card ---- */}
        <div className="md:flex block justify-center border-2 p-2 py-3 mx-5">
          <div className="relative card-item-list md:w-[65%] flex flex-col md:flex-row justify-center items-center md:justify-start">
            <div className=" smDelete-Item  hover:border-red-600 border-2 px-1 rounded-md cursor-pointer absolute top-0 right-[10px]">
              <Image
                className=" hover:bg-red-300 flex ms-2 mt-2 "
                src={Delete}
                alt=""
              />
              <h1 className="text-center text-black hover:text-red-600 text-[11px] font-[600] GT">
                Delete
              </h1>
            </div>

            <div className="md:bg-[#BF1F49] border-2 px-2 rounded-md cursor-pointer absolute top-0 left-[5px]">
              <h1 className="text-center  text-blue-600 md:text-white text-[15px] font-[600] GT">
                1
              </h1>
            </div>
            <div className="">
              <Image
                width={100}
                height={50}
                src={img01}
                // className=" md:w-[25%] md:h-[20vh] w-[60%] h-[42vh]"
                alt=""
              />
            </div>

            <div className="content-details w-[100%] ps-5">
              <h1 className="pt-2 md:pt-0 GT text-[18px] md:text-start text-center md:text-[20px] font-[400]  text-[#2c293b]">
                End Times: Elites, Counter-Elites, and the Path of Political
                {/* <br className="hidden md:block" /> Disintegration */}
              </h1>

              <p className="pt-1 text-[11px] md:text-[13px] md:text-start text-center text-[#433782] IBM font-[600]">
                Subject Code : <span className="text-[#000000a7]">(6661)</span>{" "}
              </p>
              <p className="pt-1 text-[13px] md:text-start text-center IBM font-[600]">
                Company :{" "}
                <span className="font-[100] text-[#433782]">
                  ( হক পাবলিকেশন )
                </span>{" "}
              </p>

              <p className="  text-[12px] font-extrabold flex justify-center md:justify-start items-center lign-hight-32 ">
                <FaRegCheckCircle className="text-[#1fa5a3] text-[12px] font-extrabold" />{" "}
                <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                  Available
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" total-book-calculation w-[15%] border-l-2">
            <div className="flex mt-2 justify-center items-center">
              <button
                class="cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onclick="decreaseValue()"
                onClick={decreaseValue}
              >
                -
              </button>
              <input className="" type="number" id="number" value={value} />
              <button
                class=" cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onClick={increaseValue}
              >
                +
              </button>
            </div>
          </div>
          <div className=" Item-price w-[15%]  border-l-2 ">
            <h1 className="text-[#BF1F49] crossed-text font-[600] text-[18px] text-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 100
            </h1>
            <h1 className="text-[#1c1c1c]  font-[600] text-[18px] text-center flex justify-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 120
            </h1>
          </div>
          <div className="card-item-delete w-[5%] border-l-2 md:ps-3 cursor-pointer">
            <Image
              className=" hover:bg-red-300 ms-2 mt-2 "
              src={Delete}
              alt=""
            />
            <h1 className=" hover:text-red-600 text-[11px] font-[600] GT">
              Delete
            </h1>
          </div>
        </div>
        <div className="md:flex block justify-center border-2 p-2 py-3 mx-5 mt-[6px]">
          <div className="relative card-item-list md:w-[65%] flex flex-col md:flex-row justify-center items-center md:justify-start">
            <div className=" smDelete-Item  hover:border-red-600 border-2 px-1 rounded-md cursor-pointer absolute top-0 right-[10px]">
              <Image
                className=" hover:bg-red-300 flex ms-2 mt-2 "
                src={Delete}
                alt=""
              />
              <h1 className="text-center text-black hover:text-red-600 text-[11px] font-[600] GT">
                Delete
              </h1>
            </div>

            <div className="md:bg-[#BF1F49] border-2 px-2 rounded-md cursor-pointer absolute top-0 left-[5px]">
              <h1 className="text-center  text-blue-600 md:text-white text-[15px] font-[600] GT">
                1
              </h1>
            </div>
            <div className="">
              <Image
                width={100}
                height={50}
                src={img01}
                // className=" md:w-[25%] md:h-[20vh] w-[60%] h-[42vh]"
                alt=""
              />
            </div>

            <div className="content-details w-[100%] ps-5">
              <h1 className="pt-2 md:pt-0 GT text-[18px] md:text-start text-center md:text-[20px] font-[400]  text-[#2c293b]">
                End Times: Elites, Counter-Elites, and the Path of Political
                {/* <br className="hidden md:block" /> Disintegration */}
              </h1>

              <p className="pt-1 text-[11px] md:text-[13px] md:text-start text-center text-[#433782] IBM font-[600]">
                Subject Code : <span className="text-[#000000a7]">(6661)</span>{" "}
              </p>
              <p className="pt-1 text-[13px] md:text-start text-center IBM font-[600]">
                Company :{" "}
                <span className="font-[100] text-[#433782]">
                  ( হক পাবলিকেশন )
                </span>{" "}
              </p>

              <p className="  text-[12px] font-extrabold flex justify-center md:justify-start items-center lign-hight-32 ">
                <FaRegCheckCircle className="text-[#1fa5a3] text-[12px] font-extrabold" />{" "}
                <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                  Available
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" total-book-calculation w-[15%] border-l-2">
            <div className="flex mt-2 justify-center items-center">
              <button
                class="cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onclick="decreaseValue()"
                onClick={decreaseValue}
              >
                -
              </button>
              <input className="" type="number" id="number" value={value} />
              <button
                class=" cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onClick={increaseValue}
              >
                +
              </button>
            </div>
          </div>
          <div className=" Item-price w-[15%]  border-l-2 ">
            <h1 className="text-[#BF1F49] crossed-text font-[600] text-[18px] text-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 100
            </h1>
            <h1 className="text-[#1c1c1c]  font-[600] text-[18px] text-center flex justify-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 120
            </h1>
          </div>
          <div className="card-item-delete w-[5%] border-l-2 md:ps-3 cursor-pointer">
            <Image
              className=" hover:bg-red-300 ms-2 mt-2 "
              src={Delete}
              alt=""
            />
            <h1 className=" hover:text-red-600 text-[11px] font-[600] GT">
              Delete
            </h1>
          </div>
        </div>
        <div className="md:flex block justify-center border-2 p-2 py-3 mx-5 mt-[6px]">
          <div className="relative card-item-list md:w-[65%] flex flex-col md:flex-row justify-center items-center md:justify-start">
            <div className=" smDelete-Item  hover:border-red-600 border-2 px-1 rounded-md cursor-pointer absolute top-0 right-[10px]">
              <Image
                className=" hover:bg-red-300 flex ms-2 mt-2 "
                src={Delete}
                alt=""
              />
              <h1 className="text-center text-black hover:text-red-600 text-[11px] font-[600] GT">
                Delete
              </h1>
            </div>

            <div className="md:bg-[#BF1F49] border-2 px-2 rounded-md cursor-pointer absolute top-0 left-[5px]">
              <h1 className="text-center  text-blue-600 md:text-white text-[15px] font-[600] GT">
                1
              </h1>
            </div>
            <div className="">
              <Image
                width={100}
                height={50}
                src={img01}
                // className=" md:w-[25%] md:h-[20vh] w-[60%] h-[42vh]"
                alt=""
              />
            </div>

            <div className="content-details w-[100%] ps-5">
              <h1 className="pt-2 md:pt-0 GT text-[18px] md:text-start text-center md:text-[20px] font-[400]  text-[#2c293b]">
                End Times: Elites, Counter-Elites, and the Path of Political
                {/* <br className="hidden md:block" /> Disintegration */}
              </h1>

              <p className="pt-1 text-[11px] md:text-[13px] md:text-start text-center text-[#433782] IBM font-[600]">
                Subject Code : <span className="text-[#000000a7]">(6661)</span>{" "}
              </p>
              <p className="pt-1 text-[13px] md:text-start text-center IBM font-[600]">
                Company :{" "}
                <span className="font-[100] text-[#433782]">
                  ( হক পাবলিকেশন )
                </span>{" "}
              </p>

              <p className="  text-[12px] font-extrabold flex justify-center md:justify-start items-center lign-hight-32 ">
                <FaRegCheckCircle className="text-[#1fa5a3] text-[12px] font-extrabold" />{" "}
                <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                  Available
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" total-book-calculation w-[15%] border-l-2">
            <div className="flex mt-2 justify-center items-center">
              <button
                class="cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onclick="decreaseValue()"
                onClick={decreaseValue}
              >
                -
              </button>
              <input className="" type="number" id="number" value={value} />
              <button
                class=" cursor-pointer bg-blue-600 px-2 h-[25px] text-white"
                onClick={increaseValue}
              >
                +
              </button>
            </div>
          </div>
          <div className=" Item-price w-[15%]  border-l-2 ">
            <h1 className="text-[#BF1F49] crossed-text font-[600] text-[18px] text-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 100
            </h1>
            <h1 className="text-[#1c1c1c]  font-[600] text-[18px] text-center flex justify-center">
              <span className="text-[14px] mt-1 pe-[2px]">৳</span> 120
            </h1>
          </div>
          <div className="card-item-delete w-[5%] border-l-2 md:ps-3 cursor-pointer">
            <Image
              className=" hover:bg-red-300 ms-2 mt-2 "
              src={Delete}
              alt=""
            />
            <h1 className=" hover:text-red-600 text-[11px] font-[600] GT">
              Delete
            </h1>
          </div>
        </div>

        {/* ---- total amount and checkout--- */}
        <div className="flex justify-center md:justify-end mt-2 mx-5 gap-2 border-t-2 pt-3">
          <button className="text-black pe-1  rounded-md uppercase text-[16px] font-bold ">
            total : ৳ 550 টাকা
          </button>
          <button className="bg-[#BF1F49] text-white px-2 py-[6px]  rounded-md uppercase text-[12px] font-bold ">
            checkout
          </button>
        </div>
      </div>
    </>
  );
};
