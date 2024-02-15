import Image from "next/image";
import React, { useEffect, useState } from "react";
import image01 from "@/app/Assets/Product/Diploma/Civil/civil.webp";
import cetegoryImage from "@/app/Assets/Product/Diploma/book.webp";
import semester1 from "@/app/Assets/Product/Diploma/1st.png";
import "./Department.css";
import axios from "axios";
import Link from "next/link";

const allSemesterNumber = [
  {
    image: semester1,
    name: "All semester",
    cetagoryValue: "",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "1st Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "2nd Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "3rd Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "4th Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "5th Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "6th Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "7th Semester",
  },
  {
    image: semester1,
    name: "semester",
    cetagoryValue: "8th Semester",
  },
];

export const DepartmentBanner = ({ department }) => {
  const [activeborder, setActiveBorder] = useState(null);

  // --------------------- Featching Data ------------------
  const [ResultBooks, setResultBooks] = useState([]);

  const [searchingValue, setSearchingValue] = useState("");
  const [filterValue, setfilterValue] = useState();
  const [Loading, setLoading] = useState(false);

  const url = `https://resell-book-store-server.vercel.app/api/v1/books/?mejorSubject=${filterValue}&searchTerm=${searchingValue}`;

  const clickButton = (e) => {
    setfilterValue(e);
  };

  const handleClick = (semester) => {
    setActiveBorder(semester);
    setSearchingValue(semester);
    console.log(searchingValue);
    // setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        clickButton(department);
        const data = await response.json();
        console.log("==data", data);

        setLoading(false);
        setResultBooks(data?.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [department, url]);

  return (
    <>
      <div className=" w-[100%]  mx-auto flex justify-center items-center">
        <Image
          width={1000}
          height={1500}
          quality={100}
          // placeholder="blur"
          src={image01}
          alt=""
          className=" object-cover h-[50vh] w-[100%]  "
        />
        <h1 className="absolute text-[20px] z-50 text-white">
          Welcome Student
        </h1>
      </div>

      {/* ------ department semester ----- */}
      <div className="diploma-engineer pt-[40px]">
        <div className="flex justify-center md:justify-start border-2 items-center gap-1 md:ms-5">
          <Image
            width={50}
            height={30}
            className=" rounded-full "
            src={cetegoryImage}
            alt="diploma image"
          />
          <h1 className="text-cetegory-heading  ps-1">{department} বই সমূহ</h1>
        </div>
        {/* --- category body--- */}

        <div className="semester-table flex md:grid md:grid-flow-col md:grid-cols-8 flex-wrap gap-2  md:justify-start justify-center items-center mt-10 md:px-10">
          {/* ------- category-card ------ */}

          {allSemesterNumber?.map((item, index) => (
            <>
              <div
                key={index}
                onClick={() => handleClick(item?.cetagoryValue)}
                className="grid justify-center cursor-pointer"
              >
                <Image
                  width={100}
                  height={60}
                  className={`rounded-full border-2 object-cover ${
                    activeborder === item?.cetagoryValue
                      ? "activeBorder"
                      : "hello"
                  }`}
                  src={item?.image}
                  alt=""
                />
                <h1 className=" text-center pt-[5px] diploma-semester-text">
                  {item?.name}
                </h1>
              </div>
            </>
          ))}
        </div>

        {/* ------------display book ----- */}
        <div className="md:px-20 border-t-2 mt-5 pt-2">
          {Loading && (
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
              </div>
            </>
          )}
          {ResultBooks?.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-start lg:grid-cols-4 gap-3 gap-y-6 gap-x-5  mt-2">
                {ResultBooks?.map(
                  (singelbook) =>
                    singelbook?.status === "success" && (
                      <div
                        // onChange={() => getTimes(singelbook?.createdAt)}
                        key={singelbook?._id}
                        className="hover:border-[#573BA2] duration-150 overflow-hidden bg-[#fff] rounded-md p-2 border-b-4 border-t-4 bookCard"
                      >
                        <div className="image relative">
                          <div className="bg-[#00000029] bg-color w-[100%] h-[100%]  absolute rounded-t-md"></div>
                          <Image
                            width={1424}
                            height={450}
                            className="rounded-t-md d-image w-[100%] h-[230px] "
                            src={singelbook?.bookImage}
                            alt=""
                          />
                          <h1 className="flex bg-[#00000076]  w-[100%] justify-center absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] py-2  text-center">
                            {singelbook?.bookName}
                          </h1>
                        </div>
                        <div className="px-2 pb-1">
                          <div className="all-button-courses flex flex-wrap justify-start items-center mt-5 gap-2 ">
                            <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2] ">
                              {singelbook?.subjectCode}
                            </p>
                            <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                              {singelbook?.publication}
                            </p>
                            <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                              {singelbook?.createdAt?.slice(0, 10)}
                            </p>

                            <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                              {singelbook?.location}
                            </p>
                            <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                              {singelbook?.semester}
                            </p>
                          </div>
                          <div className="">
                            <div className="flex justify-between py-3 ">
                              <h1 className="font-[600] text-[16px] md:text-[18px] whitespace-nowrap pe-2 text-[#000000af]">
                                টাকা.{" "}
                                <span className="font-[800] text-[18px] md:text-[20px] lg:text-[23px] ps-1">
                                  {singelbook?.sellPrice}
                                </span>
                                <span className="text-[14px]">৳</span>
                              </h1>
                              <div className="review flex justify-center items-center gap-[2px] font-[600] text-[10px] md:text-[12px] whitespace-nowrap">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="#15803D"
                                    d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"
                                  />
                                </svg>

                                <span className="text-green-700 font-[700] text-[12px]  md:text-[14px]">
                                  (available)
                                </span>
                              </div>
                            </div>
                            <div className="bg-[#573ba2] hover:bg-[#492d95]">
                              <Link href={`/detailsBook/${singelbook?._id}`}>
                                <button className="flex w-[100%] rounded-lg px-2 py-[8px] text-[12px] md:text-[16px] text-center justify-center font-[600] text-[#ffffff]">
                                  Book Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </>
          )}
          {!Loading && ResultBooks?.length <= 0 && (
            <>
              <div class=" h-[80vh] w-[100%] flex justify-center items-center bg-[#fff]">
                <h1 className="text-[25px] font-[600] text-[#000000b3]">
                  <span>{` ${
                    searchingValue === ""
                      ? ""
                      : searchingValue + " Book Not available!"
                  } `}</span>
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
