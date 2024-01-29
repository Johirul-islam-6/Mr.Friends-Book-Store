"use client";
import Image from "next/image";
import React, { useState } from "react";
import book1 from "@/app/Assets/Product/Diploma/1st/one.webp";
export const AllSellingBooks = () => {
  const [EditebookModel, setEditebookModel] = useState(false);

  const publication = ["হক প্রকাশনী", "এস আর প্রকাশনী", "অন্যান্য"];
  const departmental = ["কারিগরি", "জেনারেল", "মেডিকেল", "অন্যান্য"];

  return (
    <>
      <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
        <div className="image relative">
          <div className="bg-[#0000007b] w-[100%] h-[100%]  absolute rounded-t-md"></div>
          <Image
            width={1424}
            height={450}
            className="rounded-t-md d-image w-[100%] h-[350px]"
            src={book1}
            alt=""
          />
          <div className="flex bg-[#0000001e] justify-between w-[100%] px-2 absolute top-0 text-[#fff]   py-2  text-center">
            <button className="text-[12px] md:text-[12px] bg-red-800 hover:bg-red-500 text-white px-[10px] py-[3px] rounded-sm">
              Delete
            </button>
            <button
              onClick={() => setEditebookModel(true)}
              className="text-[12px] md:text-[14px] bg-green-700 hover:bg-green-600 text-white px-[10px] py-[3px] rounded-sm"
            >
              Edite
            </button>
          </div>
          <h1 className="flex bg-[#000000a2]  w-[100%] justify-center absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] py-2  text-center">
            ফিজিক্স-১
          </h1>
        </div>
      </div>

      {/* ------ Open Model ----- */}

      {EditebookModel && (
        <>
          <div className="flex items-center justify-center w-[100%] ">
            <form className=" absolute  md:left-[30%] md:top-[1%] bg-[#FFF1E6] z-[200] p-3 border-4 rounded-lg">
              <div className="flex justify-between">
                <h1 className="text-[11px] md:text-[20px] font-bold text-[#565656] md:ps-3">
                  1. Editing Book : ফিজিক্স-১
                </h1>
                <button
                  className="bg-[#bc1f1fb4] hover:bg-red-700 rounded-md p-2 px-3 text-white flex gap-[2px] items-center"
                  onClick={() => setEditebookModel(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    hanging="14"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>{" "}
                </button>
              </div>
              <div class="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 sm:grid-cols-2 md:px-5 border-t-2 pt-5">
                {/* ------ field number 01 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বই এর নাম
                  </label>
                  <input
                    id="username"
                    name="bookName"
                    type="text"
                    placeholder="ফিজিক্স-১"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 02 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বই এর ছবি
                  </label>
                  <input
                    id="username"
                    name="bookImage"
                    type="file"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 03 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বিষয় কোড
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="subjectCode"
                    placeholder="৬৬৬৬"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 04 ------- */}

                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    পাবলিকেশন
                  </label>

                  <select class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1">
                    <option className="bg-[#E8F0FE]">select</option>
                    {publication?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {index + 1} {item}
                        </option>{" "}
                      </>
                    ))}
                  </select>
                </div>
                {/* ------ field number 04 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    ডিপার্টমেন্ট বই
                  </label>

                  <select class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1">
                    <option className="bg-[#E8F0FE]">select</option>
                    {departmental?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {index + 1} {item}
                        </option>{" "}
                      </>
                    ))}
                  </select>
                </div>
                {/* ------ field number 06 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    সঠিক ফোন নাম্বার
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="01824842XXX"
                    type="phone"
                    class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 04 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    ক্রয় মূল্য
                  </label>
                  <input
                    id="username"
                    type="number"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>

                {/* ------ field number 05 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বিক্রয় মূল্য
                  </label>
                  <input
                    id="username"
                    type="number"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 06 ------- */}
                <div>
                  <label class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN">
                    বই নেওয়ার ঠিকানা
                  </label>
                  <input
                    id="location"
                    name="location"
                    placeholder="যেমন: মাসকান্দা, টেকনিক্যাল মোড়"
                    type="text"
                    class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 06 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বই বিবরণ
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
              </div>

              {/* ---- Book Details ----- */}
              <div className="md:px-5 mt-8">
                <label
                  class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                  for="username"
                >
                  বই বিবরণ সমূহ
                </label>
                <textarea
                  id="username"
                  type="text"
                  placeholder="কমপক্ষে ৪০ শব্দের হতে হবে,  যেটা দ্বারা ছাত্র-ছাত্রী বই এর ভালো দিকগুলো জানতে জানতে পারে । "
                  class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                />
              </div>

              <div class="flex justify-center mt-1">
                <button
                  type="submit"
                  class="my-5 px-12 justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#8555fe] shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};
