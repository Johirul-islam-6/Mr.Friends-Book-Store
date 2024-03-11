"use client";
import Image from "next/image";
import React, { useState } from "react";
import img01 from "../../../app/Assets/Product/Diploma/1st/one.webp";
import "./SingelBookDetail.css";
import { FaPhabricator, FaRegCheckCircle } from "react-icons/fa";

import { SellerProfile } from "@/Components/SellerProfile/SellerProfile";
import closeIcon from "@/app/Assets/Icons/close.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const SingelBookInf = ({ ResultBooks }) => {
  const navigate = useRouter();
  const accessToken = Cookies.get("accessToken");

  const [showUserProfile, setOpenProfile] = useState(false);

  // -----------------Messanger Box --------------

  const [chatbox, setChatBox] = useState(false);

  const MessangerBox = (userinfo) => {
    console.log(userinfo);
    setChatBox(true);
  };

  const showUserProfileButton = () => {
    if (!accessToken) {
      return navigate.push("/login");
    }

    setOpenProfile(true);
  };

  return (
    <>
      <div>
        <div
          // onClick={() => setChatBox(false)}
          className="flex  flex-col md:flex-row justify-center md:justify-start  gap-5 gap-x-10 p-3"
        >
          <div className="  flex justify-center  md:w-[60%] py-5">
            <Image
              width={290}
              height={200}
              src={ResultBooks?.bookImage}
              className="md:w-[80%] w-[80%] h-[60vh] md:h-[55vh] border-2 p-5"
              alt=""
            />
          </div>

          <div className="content-details w-[100%] relative">
            <h1 className="md:text-start text-center DetailsBook-heading GT text-[30px] md:text-[40px] font-[400]  text-[#2c293b]">
              {ResultBooks?.bookName}
            </h1>

            <p className="pt-3 md:text-start flex items-center gap-2 text-center text-[16px] md:text-[16px] text-[#433782] IBM font-[600]">
              Viewers :{" "}
              {/* <FaPhabricator className="text-[#0b0b0b] text-[20px]" />{" "} */}
              {ResultBooks?.view?.slice(0, 10)}
            </p>
            <p className="pt-3 md:text-start text-center text-[16px] md:text-[18px] text-[#433782] IBM font-[600]">
              বিষয় কোড :-{" "}
              <span className="text-[#000000a7]">
                {ResultBooks?.subjectCode}
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[18px] IBM font-[600]">
              <span className="font-[100] text-[#433782]">
                ( {ResultBooks?.publication} )
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[18px] IBM font-[600]">
              <span className="font-[100] text-[#433782]">
                ক্যাটাগরি বই : {ResultBooks?.department}
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[18px] IBM font-[600]">
              <span className="font-[100] text-[#433782]">
                বিভাগ : {ResultBooks?.mejorSubject}
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[18px] IBM font-[600]">
              <span className="font-[100] text-[#433782]">
                সেমিস্টার : {ResultBooks?.semester}
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[16px] font-extrabold flex items-center md:justify-start justify-center lign-hight-32 ">
              <FaRegCheckCircle className="text-[#1fa5a3] text-[20px] md:text-start text-center font-extrabold" />{" "}
              <span className="uppercase IBM text-[#1fa5a3] ps-1 lign-hight-32">
                Available
              </span>{" "}
            </p>
            <p className="pt-3 md:text-start text-center text-[16px] md:text-[16px] GT font-[600] underline text-[#000000bd] ">
              পোস্টের তারিখ :{" "}
              <span className="text-[18px] text-[#433782] font-[800] ps-1">
                {ResultBooks?.createdAt?.slice(0, 10)}
              </span>
            </p>
            <div className="md:border-2 md:w-[40%]  mt-5 py-2 px-2">
              <p className=" text-[18px] md:text-[18px] text-center md:text-start GT font-[600] text-[#000000bd] ">
                ক্রয় মূল্য :{" "}
                <span className="font-[600] text-[#af3125] text-[20px] md:text-[30px] line-through">
                  {" "}
                  {ResultBooks?.buyPrice}{" "}
                </span>{" "}
                <span className="text-[14px]">টাকা</span>
              </p>
              <p className="pt-1 text-[20px] text-center md:text-start md:text-[22px] GT font-[600] text-[#000000bd] ">
                বিক্রয় মূল্য :{" "}
                <span className="font-[600] text-[#433782] text-[28px] ">
                  {" "}
                  {ResultBooks?.sellPrice}{" "}
                </span>{" "}
                <span className="text-[14px]">টাকা</span>
              </p>
            </div>

            <div>
              <h1 className="text-[28px] font-[900] md:text-start text-center text-[#563A9F]  GT pt-5">
                বই বিবরণ
              </h1>
              {/* <p className=" text-[20px]">{ResultBooks?.discription}</p> */}
            </div>

            {/* ----------- if you are show sellar profile ------ */}
            <div className="flex md:justify-start justify-center">
              <button
                onClick={showUserProfileButton}
                className="mt-10 py-5 px-10 bg-[#563A9F] text-white rounded-sm"
              >
                বিক্রেতার প্রোফাইল দেখতে চাই
              </button>
            </div>
            {showUserProfile && (
              <>
                <div className="w-[100%] py-10 bg-[#ffffffe4]  top-0 rounded-lg">
                  <SellerProfile ResultBooks={ResultBooks} />
                  <div className="flex  md:justify-start justify-center gap-5 items-center mt-5 md:ps-5">
                    <button
                      className="bg-[#bc1f1fb4] hover:bg-red-700 rounded-md p-3 px-5 text-black flex gap-[2px] items-center"
                      onClick={() => setOpenProfile(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-[#138c59ec] hover:bg-[#138c5ace] rounded-md p-3 px-5 text-white flex gap-[2px] items-center"
                      onClick={() => MessangerBox(ResultBooks)}
                    >
                      Chat Now
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {chatbox && (
          <>
            <div className=" fixed z-[99] justify-end items-center mt-[100px] md:h-[78vh] md:w-[26%] bg-[#fff0] flex mx-auto top-[0px] right-[20px] ">
              <div class="flex flex-col h-[100%] max-w-sm  md:w-[800px] border-[3px] border-[#563A9F] bg-[#ffffff]  rounded-md">
                <div className="bg-[#563A9F] h-[50px] px-2  text-white flex justify-between items-center">
                  <p className="font-[400] GT">Mr.Friends Chat</p>
                  <Image
                    onClick={() => setChatBox(false)}
                    width={20}
                    height={10}
                    src={closeIcon}
                    className="cursor-pointer"
                    alt=""
                  />
                </div>
                <div class="flex-grow overflow-y-auto p-2">
                  {/* <!-- Chat messages --> */}
                  <div class="flex flex-col mb-4 gap-4 py-4">
                    <div class="flex justify-start">
                      <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-gray-900 text-sm">Hey, how are you?</p>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-white text-sm">
                          I m good, thanks! How about you?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-start">
                      <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-gray-900 text-sm">
                          I m doing great, thanks for asking!
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-white text-sm">
                          I m good, thanks! How about you?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-start">
                      <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-gray-900 text-sm">
                          I m doing great, thanks for asking!
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-white text-sm">
                          I m good, thanks! How about you?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-start">
                      <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-gray-900 text-sm">
                          I m doing great, thanks for asking!
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-end">
                      <div class="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-white text-sm">
                          I m good, thanks! How about you?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-start">
                      <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                        <p class="text-gray-900 text-sm">
                          I m doing great, thanks for asking!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center items-center h-16 p-2">
                  {/* <!-- Chat input --> */}
                  <input
                    type="text"
                    class="border border-gray-300 bg-slate-200 rounded-lg py-2 px-4 w-full max-w-lg mr-2"
                    placeholder="Type a message..."
                  />
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
