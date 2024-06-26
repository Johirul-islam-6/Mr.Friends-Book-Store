"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const WriteReview = () => {
  const navigate = useRouter();
  const [openFromdiv, setOpenFrom] = useState(false);
  const [buttonHidden, setHidden] = useState(false);
  const accessToken = Cookies.get("accessToken");
  const [cookiesInfo, setCookiesInfo] = useState();
  const [Loading, setLoading] = useState(false);
  const [Loding, setLoding] = useState(true);
  const [ResultBooks, setResultBooks] = useState([]);
  useEffect(() => {
    if (accessToken) {
      const getCookiesData = Cookies.get("CookieYouserData");
      const cookiesInfos = JSON.parse(getCookiesData);

      setCookiesInfo(cookiesInfos);
    }
  }, [setCookiesInfo, accessToken]);

  const openFrom = () => {
    if (!accessToken) {
      return navigate.push("/login");
    }
    setOpenFrom(!openFromdiv);
  };

  const HandleSubmite = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");
    const email = cookiesInfo?.email;

    const reviewData = {
      name: cookiesInfo?.name,
      department: cookiesInfo?.institute,
      message,
      email,
    };

    console.log(reviewData);

    setHidden(true);

    try {
      const response = await axios.post(
        "https://resell-book-store-server.vercel.app/api/v1/review/create",
        reviewData,
        {
          maxContentLength: 1000000000,
        }
      );
      const result = response.data;

      // if get the data then save
      if (result?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });

        setHidden(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `${
          error?.response?.data?.errorMessages[0]?.message.slice(0, 6) ===
          "E11000"
            ? "Already Review Send"
            : "Max 350 word message"
        }`,
        text: ` Field : ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });
      setHidden(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={openFrom}
          className="text-[18px] rounded-md font-[600] text-white px-5 py-[10px] bg-[#573BA2] mt-8 md:mt-0"
        >
          Write review
        </button>

        {/* ---- from ---- */}
        {openFromdiv && (
          <form
            onSubmit={HandleSubmite}
            class=" md:w-[600px] mt-5 border-blue-400 rounded-lg shadow_box md:p-10 w-[100%] mx-auto p-5"
          >
            {accessToken && (
              <>
                <div class="mt-3 ps-1 text-center text-[#5e5e5e] text-[18px] md:text-[22px] font-[600] pt-2 singIN">
                  Write Student Review
                </div>
                <span className="w-[80px] mx-auto h-[3px] flex bg-[#3090EB] mb-5"></span>
              </>
            )}
            {!accessToken && (
              <div class="mt-3 text-center text-[14px] md:text-2xl font-[500] pt-2">
                Student First login after write a review
              </div>
            )}
            {!accessToken && (
              <div class="p-8 ">
                <div class="text-center">
                  <Link
                    href={"/login"}
                    className="text-[18px] rounded-md font-[600] text-blue-600 px-5 py-[10px] underline"
                  >
                    login
                  </Link>
                </div>
              </div>
            )}
            {accessToken && (
              <div class=" ">
                <div class="mt-1">
                  <textarea
                    placeholder="আপনার মূলবান মন্তব্য টি লিখুন.."
                    name="message"
                    id="text"
                    cols="30"
                    rows="10"
                    class=" h-40 w-full text-[16px] text-[#000000b1] placeholder:text-[#c4c4c4] resize-none rounded-md border border-slate-300 p-5 font-semibold "
                  ></textarea>
                </div>
                <div class="text-center flex justify-end">
                  <button
                    type="submit"
                    className={`text-[16px] flex gap-1 justify-center  rounded-md font-[600] text-white px-5 py-[10px] singIN bg-[#3090EB] ${
                      buttonHidden ? "disabled-button" : ""
                    }`}
                  >
                    Submit Now
                    {buttonHidden && (
                      <>
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="mr-2 animate-spin"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
};
