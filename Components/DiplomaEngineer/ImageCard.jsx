import React, { useEffect, useState } from "react";
import "./Image.css";
import Image from "next/image";
import book1 from "@/app/Assets/allBook/Math.jpg";
import Link from "next/link";
import Cookies from "js-cookie";
import { FaPhabricator, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

export const ImageCard = ({ ResultBooks, reloadFunction }) => {
  const [Loading, setLoading] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfo = JSON.parse(getCookiesData);
      setUserInfo(cookiesInfo);
    }
    setLoading(false);
  }, [accessToken]);

  console.log("User info =>", userInfo?.ruler);

  const onlyAdminhandleDelete = async (book_id) => {
    if (!userInfo?.ruler === "superAdmin") {
      return;
    }
    try {
      // Send DELETE request to delete the book with its ID
      await axios.delete(
        `https://resell-book-store-server.vercel.app/api/v1/books/${book_id}`
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Deleted`,
        text: "Thank you",
        showConfirmButton: false,
        timer: 2500,
      });
      reloadFunction(true);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      {ResultBooks?.map(
        (singelbook) =>
          singelbook?.status !== "panding" && (
            <>
              <div
                // onChange={() => getTimes(singelbook?.createdAt)}
                key={singelbook?._id}
                className="hover:border-[#573BA2] duration-150 overflow-hidden bg-[#fff] rounded-md p-2 border-b-4 border-t-4 bookCard"
              >
                <div className="image relative">
                  <div className="bg-[#00000029] bg-color w-[100%] h-[100%] absolute rounded-t-md">
                    {userInfo?.ruler === "superAdmin" && (
                      <>
                        <button
                          onClick={() => onlyAdminhandleDelete(singelbook?._id)}
                          className="flex justify-end py-1 px-2 w-[100%]"
                        >
                          <FaTrashAlt className="text-[#a02020] hover:text-[#e53f3f]" />
                        </button>
                      </>
                    )}
                  </div>

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
                    <p className="bg-[#0000] flex gap-x-[3px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                      <FaPhabricator className="text-[#573BA2]" />{" "}
                      {singelbook?.view?.slice(0, 10)}
                    </p>

                    <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                      {singelbook?.department}
                    </p>

                    <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                      {singelbook?.createdAt?.slice(0, 10)}
                    </p>

                    <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2] ">
                      {singelbook?.location?.slice(0, 12)}
                    </p>
                    {/* <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                {singelbook?.location}
              </p> */}
                    <p className="bg-[#0000] flex gap-[2px] items-center px-2 py-[4px] border-2 border-[#573BA2] rounded-md text-[10px] lg:text-[12px] font-[700] text-[#573BA2]">
                      {singelbook?.semester}
                    </p>
                  </div>
                  <div className="">
                    <div className="flex justify-between py-3 ">
                      <h1 className="font-[600] text-[16px] md:text-[18px] whitespace-nowrap pe-2 text-[#000000af]">
                        টাকা-{" "}
                        <span className="font-[800] text-[18px] md:text-[20px] lg:text-[23px] px-[3px]">
                          {singelbook?.sellPrice}
                        </span>
                        <span className="text-[20px] font-bold text-[#000]">
                          ৳
                        </span>
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
            </>
          )
      )}
    </>
  );
};
