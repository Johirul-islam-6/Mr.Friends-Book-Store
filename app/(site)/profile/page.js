"use client";
import { CreateBook } from "@/Components/Profile/CreateBook/CreateBook";
import { AllSellingBooks } from "@/Components/Profile/SellingBooks/AllSellingBooks";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./profile.css";
import createImage from "@/app/Assets/prifile/create-image.webp";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Profile = () => {
  const navigate = useRouter();
  const [Loding, setLoding] = useState(false);
  const [loding2, setLoding2] = useState(true);
  const [loding3, setLoding3] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [openMadal1, setModal1] = useState(false);
  const [userId, setuserId] = useState();
  const [cookiesInfo, setCookiesInfo] = useState();

  const [createdBookInfo, setCreateBookInfo] = useState();
  const [refreshbook, setrefresh] = useState(false);

  const [UserInformation, setUserInformation] = useState([]);

  const createdBook = (e) => {
    if (e) {
      setrefresh(e);
    }
  };

  useEffect(() => {
    setLoding(true);
    if (!accessToken) {
      return navigate.push("/login");
    }
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfos = JSON.parse(getCookiesData);
    setuserId(cookiesInfos?.id);
    setCookiesInfo(cookiesInfos);

    // ------------ get 3 book lisht -----------
    if (cookiesInfo?.email) {
      async function fetchData() {
        try {
          const result = await axios.get(
            `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=${cookiesInfo?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
          );

          setCreateBookInfo(result?.data?.data);
          setLoding2(false);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }

    // ------- user admin checking-----
    if (cookiesInfo?.email) {
      async function fetchData2() {
        try {
          const result = await axios.get(
            `https://resell-book-store-server.vercel.app/api/v1/users/?searchTerm=${cookiesInfo?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
          );

          setUserInformation(result?.data?.data);
          setLoding3(false);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData2();
    }

    setTimeout(() => {
      setrefresh(false);
    }, 5000);
  }, [refreshbook, accessToken, cookiesInfo?.email, navigate]);

  const logout = () => {
    Cookies.remove("CookieYouserData");
    Cookies.remove("accessToken");
    window.location.reload();
  };

  const closeModal = (e) => {
    setModal1(e);
  };
  // ======== when User block ======
  if (UserInformation[0]?.ruler === "block") {
    return (
      <>
        <div className="flex justify-center items-center h-[100vh] ">
          <h1 className="text-center text-red-700 text-[25px] font-[600]">
            Sorry Your account is Suspended!
          </h1>
        </div>
      </>
    );
  }

  // ========== user admin access =====
  if (UserInformation[0]?.ruler) {
    if (UserInformation[0]?.ruler === cookiesInfo?.ruler) {
    } else {
      Cookies.remove("CookieYouserData");
      Cookies.remove("accessToken");
      window.location.reload();
    }
  }

  if (!Loding) {
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

  if (loding2) {
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

  return (
    <>
      <div class="relative max-w-screen-xl bg-[#f3f3f3] mx-auto ">
        <div class=" mx-auto py-5">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-2 ">
            <div class="col-span-5  sm:col-span-3 ">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <div className="bg-[#563A9F] p-10 rounded-full">
                    <p className="text-[22px] text-white font-bold">RA</p>
                  </div>

                  <h1 class="text-xl font-bold pt-5">{cookiesInfo?.name}</h1>

                  <div className="flex justify-center items-center gap-3 md:gap-x-8  mt-3  w-[100%]">
                    {cookiesInfo?.ruler === "superAdmin" ||
                    cookiesInfo?.ruler === "admin" ? (
                      <>
                        <div class="mt-2 flex flex-wrap gap-4 justify-center">
                          <a
                            href={"/admin"}
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 font-[600] text-[14px] rounded bttn"
                          >
                            Admin panel
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div class="mt-2 flex flex-wrap gap-4 justify-center">
                          <a
                            href={"#"}
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 font-[600] text-[14px] rounded bttn"
                          >
                            Student
                          </a>
                        </div>
                      </>
                    )}

                    <div class="mt-2 flex flex-wrap gap-4 justify-center">
                      <a
                        href="#"
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 text-[14px] font-[600] rounded bttn"
                      >
                        Edite Profile
                      </a>
                    </div>
                  </div>
                </div>
                <hr class="my-4 border-t border-gray-300" />

                <div class="flex flex-col">
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    information
                  </span>
                  <ul>
                    <li class="mb-2">
                      joining date :{" "}
                      {UserInformation[0]?.createdAt?.slice(0, 10)}
                    </li>
                    <li class="mb-2">Roll : {cookiesInfo?.studentRoll}</li>
                    <li class="mb-2">Institute : {cookiesInfo?.institute}</li>
                    <li class="mb-2">Department : {cookiesInfo?.department}</li>
                    <li class="mb-2">Gender : {cookiesInfo?.gender}</li>
                    <li class="mb-2">Phone : {cookiesInfo?.phone}</li>
                    <li class="mb-2">Email : {cookiesInfo?.email}</li>
                  </ul>
                </div>
                <div
                  onClick={logout}
                  class="mt-6 flex flex-wrap gap-4 justify-center cursor-pointer"
                >
                  <span class="bg-red-600 hover:bg-red-800 text-white py-2 px-6 rounded">
                    log out
                  </span>
                </div>
              </div>
            </div>

            {/* ------------- Your store ------------- */}
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="block">
                    <h2 class="md:text-xl font-bold ">
                      My Resale posted Books{" "}
                    </h2>
                    <p className="text-[8px] md:text-[11px]">
                      আপনি সর্বোচ্চ ৩ টি বই পাবলিশ করতে পারবে ।
                    </p>
                  </div>

                  <button
                    onClick={() => setModal1(true)}
                    class="text-[10px] md:text-[14px] flex items-center gap-[2px] md:gap-2 hover:text-[#563A9F] cursor-pointer hover:border-[#563A9F] border-2 p-2 rounded-md px-2 md:px-5 font-bold "
                  >
                    <svg
                      className="block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      hanging="10"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>{" "}
                    <svg
                      className="hidden md:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      hanging="16"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>{" "}
                    Create a Book
                  </button>
                </div>
                {openMadal1 && (
                  <>
                    <div className="CreateModal  relative z-[100] ">
                      <div className=" absolute top-[-650px] md:top-[-150px] bg-[#FFF1E6] border-[6px] rounded-lg p-2">
                        <div className="flex justify-center ">
                          <button
                            className="bg-[#bc1f1fb4] hover:bg-red-700 rounded-md p-2 text-white flex gap-[2px] items-center"
                            onClick={() => setModal1(false)}
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
                            Close
                          </button>
                        </div>
                        <CreateBook
                          createdBook={createdBook}
                          createdBookInfo={createdBookInfo}
                          closeModal={closeModal}
                          userInfo={cookiesInfo}
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* ------ Display My Selling Book list-------- */}
                <div className="all-Selling-book">
                  <div className="profile-container grid items-center gap-3 justify-center md:justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {createdBookInfo?.length !== 0 ? (
                      <>
                        <AllSellingBooks
                          createdBooks={createdBook}
                          createdBookInfo={createdBookInfo}
                          userInfo={cookiesInfo}
                          createdBook={createdBook}
                        />
                      </>
                    ) : (
                      <>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div class="mb-6 mt-5">
                  <div class="flex justify-between flex-wrap gap-2 w-full">
                    <span class="text-gray-700 font-bold">কিছু কথা..</span>
                    <p>
                      <span class="text-gray-700 mr-2">**মানুষের ব্যবহার</span>
                      <span class="text-gray-700">তার পরিচয়**</span>
                    </p>
                  </div>
                  <p class="mt-5">
                    তিনি সত্যিকার অর্থে একজন ‘পর্যটক রিপোর্টার’। তিনি এক জায়গায়
                    বসে খবর সংগ্রহ করেন না, খবর সংগ্রহের জন্য ছুটে যান প্রত্যন্ত
                    অঞ্চলে; তাঁর কর্ম এলাকা রাজশাহী হলেও নাটোর, নওগাঁ, টাঙ্গাইল
                    কিংবা ঢাকায়ও ছুটে যান খবরের খোঁজে। আমাদের চারপাশে কত বিচিত্র
                    ঘটনা ঘটে; সেটি হতে পারে পারিবারিক ।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
