"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const CreateBook = () => {
  const [cetagorybook, setCetagory] = useState();

  const publication = ["হক প্রকাশনী", "এস আর প্রকাশনী", "অন্যান্য"];
  const departmental = ["কারিগরি", "জেনারেল", "মেডিকেল", "অন্যান্য"];
  const technical = [
    {
      naem: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
      shorcut: "CST",
    },
    {
      naem: "সিভিল টেকনোলজি",
      shorcut: "CT",
    },
    {
      naem: "ইলেকট্রিক্যাল টেকনোলজি",
      shorcut: "ET",
    },
    {
      naem: "মেকানিক্যাল টেকনোলজি",
      shorcut: "MT",
    },
    {
      naem: "ইলেকট্রনিক্স টেকনোলজি",
      shorcut: "ETT",
    },
    {
      naem: "ইলেকট্রোমেডিক্যাল টেকনোলজি",
      shorcut: "EMT",
    },
    {
      naem: "পাওয়ার টেকনোলজি",
      shorcut: "PT",
    },
    ,
  ];
  const genaral = [
    {
      naem: " সাইন্স",
      shorcut: "science",
    },
    {
      naem: "কমার্স",
      shorcut: "commerce",
    },
    {
      naem: "আর্টস",
      shorcut: "arts",
    },
    {
      naem: "অন্যান্য",
      shorcut: "other",
    },

    ,
  ];
  const Medical = [
    {
      naem: "Psychology",
      shorcut: "psychology",
    },
    {
      naem: "Sociology",
      shorcut: "sociology",
    },
    {
      naem: "Microbiology",
      shorcut: "microbiology",
    },
    {
      naem: "Epidemiology",
      shorcut: "epidemiology",
    },
    {
      naem: "Pharmacology",
      shorcut: "pharmacology",
    },
    {
      naem: "Genetics",
      shorcut: "genetics",
    },
    {
      naem: "Human anatomy",
      shorcut: "human-anatomy",
    },
    {
      naem: "Psychophysiology",
      shorcut: "psychophysiology",
    },
    {
      naem: "Others",
      shorcut: "other",
    },

    ,
  ];

  // const BookObject = [bookName,bookImage,subjectCode,department,mejor-subject, buy-price , sell-price];

  return (
    <>
      <div className="mt-5">
        <form>
          <div class="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 sm:grid-cols-2 md:px-5">
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

              <select
                name="department"
                onChange={(e) => setCetagory(e.target.value)}
                className="input block border border-gray-300 focus:border-pitch-black py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option value="selectss" className="bg-[#E8F0FE]">
                  select
                </option>
                {departmental?.map((item, index) => (
                  <option
                    className="bg-[#e9e9e9de] text-black "
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* ------ field number 04 ------- */}
            <div>
              <label
                class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                for="phone"
              >
                মেজর বিষয়
              </label>

              <select
                name="mejor-subject"
                class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
              >
                <option className="bg-[#E8F0FE]">select</option>
                {cetagorybook === "কারিগরি" && (
                  <>
                    {technical?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {index + 1} {item?.naem}
                        </option>{" "}
                      </>
                    ))}
                  </>
                )}
                {cetagorybook === "জেনারেল" && (
                  <>
                    {genaral?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {index + 1} {item?.naem}
                        </option>{" "}
                      </>
                    ))}
                  </>
                )}
                {cetagorybook === "মেডিকেল" && (
                  <>
                    {Medical?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {index + 1} {item?.naem}
                        </option>{" "}
                      </>
                    ))}
                  </>
                )}
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
                name="buy-price"
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
                name="sell-price"
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
  );
};
