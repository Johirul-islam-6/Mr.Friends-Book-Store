"use client";
import { ImageCard } from "@/Components/DiplomaINengineer/ImageCard";
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
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/v1/books/?searchTerm=${searchingValue}&page=1&limit=20&sort=createdAt&sortOrder=desc`
        );

        setResultBooks(result?.data?.data);
        console.log("result", result);
        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [searchingValue]);

  if (Loding) {
    return (
      <>
        <div className="w-[100%] flex h-[100vh] justify-center items-center">
          <div class="relative flex justify-center items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              class="rounded-full h-28 w-28"
            />
          </div>
        </div>
      </>
    );
  }

  console.log("All book 01 =>", ResultBooks);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`${
            isFixed ? "search-fixed  bg-white w-full py-4" : ""
          } flex mx-auto justify-center md:justify-between items-center  mt-12 mb-2 border-t-2 border-b-2  py-3`}
        >
          {searchingValue ? (
            <>
              <div className=" justify-start items-center  md:flex">
                <h1 className="text-[12px] md:text-[16px] text-[#563A9F]">
                  {" "}
                  <span className="font-bold ">Searching : </span>{" "}
                  {searchingValue}
                </h1>
              </div>
            </>
          ) : (
            <>
              <select
                id="pricingType"
                name="pricingType"
                class="py-[5px] px-[5px] border-2 border-[#563A9F] focus:outline-none focus:border-[#563A9F] text-[#563A9F] rounded "
              >
                <option value="All" selected="">
                  সকল বই
                </option>
                <option value="Freemium">কারিগরি</option>
                <option value="Free">জেনারেল</option>
                <option value="Paid">মেডিকেল</option>
                <option value="Paid">অন্যান্য</option>
              </select>
            </>
          )}

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

        {ResultBooks?.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-6 gap-x-5  mt-2">
              <ImageCard ResultBooks={ResultBooks} />
            </div>
          </>
        )}
        {ResultBooks?.length === 0 && (
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
