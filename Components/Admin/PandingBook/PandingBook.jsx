"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pandingimage from "@/app/Assets/allBook/Math.jpg";
import axios from "axios";

export const PandingBook = () => {
  const [Loding, setLoding] = useState(true);
  const [searchingValue, setSearchingValue] = useState("");
  const [ResultBooks, setResultBooks] = useState("");

  useEffect(() => {
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

  console.log(ResultBooks);

  return (
    <>
      <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div class="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
          <span>All Created Book list</span>
          <button
            type="button"
            class="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            panding
            <svg
              class="-mr-1 ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="p-4 flex-grow">
          <div class="flex flex-col items-center justify-center h-full px-4 py-4 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            <div className="grid gap-2 justify-start items-center md:grid-cols-3 lg:grid-cols-3">
              {Array.isArray(ResultBooks) &&
                ResultBooks?.map(
                  (singelbook, index) =>
                    singelbook?.status === "panding" && (
                      <>
                        <div
                          key={index}
                          className="panding-image duration-700 w-[100%] h-[100%] border-4 hover:border-[#9333EA] cursor-pointer relative"
                        >
                          <div className="bg-[#0000007e] w-[100%] h-[100%] absolute">
                            <div className="duration-700 button-showing hidden  relative justify-between p-2">
                              <button className="text-[12px] px-5  bg-red-700 text-white">
                                Delete
                              </button>
                              <button className="text-[12px] px-5  bg-[#16A34A] text-white">
                                confirm
                              </button>
                            </div>

                            <p className="flex absolute bottom-2 text-center left-[60px] text-[25px] text-[#e5e5e58f]">
                              {singelbook?.createdAt?.slice(0, 10)}
                            </p>
                          </div>
                          <Image
                            width={350}
                            height={400}
                            src={pandingimage}
                            alt=""
                          />
                        </div>
                      </>
                    )
                )}
            </div>
            <div className="flex justify- mt-3">
              <button className="text-[12px] px-5  bg-[#7E22CE] text-white">
                all panding post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
