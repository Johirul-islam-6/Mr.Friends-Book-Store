"use client";
import { ImageCard } from "@/Components/DiplomaEngineer/ImageCard";
import "./AllBooks.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllBooks = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [Loding, setLoding] = useState(true);
  const [searchingValue, setSearchingValue] = useState("");
  const [ResultBooks, setResultBooks] = useState("");

  useEffect(() => {
    if (searchingValue === "সকল বই") {
      setSearchingValue("");
    }

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=${searchingValue}&page=1&limit=20&sort=createdAt&sortOrder=desc`
        );

        setResultBooks(result?.data?.data);

        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [searchingValue]);

  const options = [
    { value: "All", name: "সকল বই" },
    { value: "Freemium", name: "কারিগরি" },
    { value: "Free", name: "জেনারেল" },
    { value: "Paid", name: "মেডিকেল" },
    { value: "Paid", name: "অন্যান্য" },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`${
            isFixed ? "search-fixed  bg-white w-full py-4 px-2" : ""
          } flex mx-auto  justify-between items-center  mt-12 mb-2 border-t-2 border-b-2  py-3`}
        >
          <div className="flex gap-2 md:ms-2">
            <select
              onChange={(e) => setSearchingValue(e?.target?.value)}
              id="pricingType"
              name="pricingType"
              class="py-[8px] md:py-[5px] md:px-[5px] border-2 border-[#563A9F] focus:outline-none focus:border-[#563A9F] text-[#563A9F] md:text-[16px] text-[10px] rounded "
            >
              {options?.map((item, index) => (
                <>
                  <option key={index} value={item?.name}>
                    {item?.name}
                  </option>
                </>
              ))}
            </select>

            {searchingValue && (
              <>
                <div className=" justify-start items-center hidden  md:flex">
                  <h1 className="text-[12px] md:text-[16px] text-[#563A9F]">
                    {" "}
                    <span className="font-bold "> {searchingValue} </span> বই
                    সমূহ
                  </h1>
                </div>
              </>
            )}
          </div>

          <div class="flex space-x-4 md:me-5">
            <div class="relative flex ">
              <input
                onChange={(e) => setSearchingValue(e?.target?.value)}
                type="text"
                name="q"
                class="w-full border outline-[#563A9F] placeholder-[#573a9f92] border-[#0000003a] h-12 shadow p-4 rounded-full"
                placeholder="searching anything..."
              />
              <button className="absolute right-4 top-[15px]">
                <svg
                  width="18"
                  hanging="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#949494"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ------ Display all Category Book ---- */}

        {Loding && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start lg:grid-cols-4 gap-3 gap-y-6 gap-x-5  mt-2">
              <div class="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300"></div>
                <div class="flex p-4 space-x-4 sm:px-8">
                  <div class="flex-1 py-2 space-y-4">
                    <div class="w-full h-3 rounded bg-gray-300"></div>
                    <div class="w-5/6 h-3 rounded bg-gray-300"></div>
                  </div>
                </div>
                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
                <div class="w-full h-10 rounded bg-gray-300"></div>
              </div>
              <div class="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300"></div>
                <div class="flex p-4 space-x-4 sm:px-8">
                  <div class="flex-1 py-2 space-y-4">
                    <div class="w-full h-3 rounded bg-gray-300"></div>
                    <div class="w-5/6 h-3 rounded bg-gray-300"></div>
                  </div>
                </div>
                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
                <div class="w-full h-10 rounded bg-gray-300"></div>
              </div>
              <div class="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300"></div>
                <div class="flex p-4 space-x-4 sm:px-8">
                  <div class="flex-1 py-2 space-y-4">
                    <div class="w-full h-3 rounded bg-gray-300"></div>
                    <div class="w-5/6 h-3 rounded bg-gray-300"></div>
                  </div>
                </div>
                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
                <div class="w-full h-10 rounded bg-gray-300"></div>
              </div>
              <div class="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300"></div>
                <div class="flex p-4 space-x-4 sm:px-8">
                  <div class="flex-1 py-2 space-y-4">
                    <div class="w-full h-3 rounded bg-gray-300"></div>
                    <div class="w-5/6 h-3 rounded bg-gray-300"></div>
                  </div>
                </div>
                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
                <div class="w-full h-10 rounded bg-gray-300"></div>
              </div>

              <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
              </div>
              <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
              </div>
              <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
              </div>
              <div class="py-4 hidden md:block  rounded-lg shadow-md w-60 sm:w-80 animate-pulse bg-gray-50 mx-auto">
                <div class="flex-shrink-0 w-full h-52 rounded-mf bg-gray-300 rounded-lg"></div>

                <div class="p-4 space-y-4 sm:px-8">
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                  <div class="w-full h-4 rounded bg-gray-300"></div>
                </div>
              </div>
            </div>
          </>
        )}

        {ResultBooks?.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-6 gap-x-5  mt-2">
              <ImageCard ResultBooks={ResultBooks} />
            </div>
          </>
        )}
        {ResultBooks?.length === 0 && !Loding && (
          <>
            <div class=" h-[80vh] w-[100%] flex justify-center items-center bg-[#fff]">
              <h1 className="text-[25px] font-[600] text-[#000000b3]">
                No data available!
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default AllBooks;
