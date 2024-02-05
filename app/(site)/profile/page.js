"use client";
import { CreateBook } from "@/Components/Profile/CreateBook/CreateBook";
import { AllSellingBooks } from "@/Components/Profile/SellingBooks/AllSellingBooks";
import Cookies from "js-cookie";
import { Router } from "next/router";
import React, { useState } from "react";

const Profile = () => {
  const [openMadal1, setModal1] = useState(false);

  const storedData = Cookies.get("CookieYouserData");
  const cookiesData = JSON.parse(storedData);
  const {
    name,
    studentRoll,
    institute,
    department,
    address,
    phone,
    email,
    gender,
    ruler,
  } = cookiesData;

  console.log(cookiesData, "data");

  return (
    <>
      <div class="relative max-w-screen-xl bg-[#f3f3f3] mx-auto ">
        <div class=" mx-auto py-5">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-2 ">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <div className="bg-[#563A9F] p-10 rounded-full">
                    <p className="text-[22px] text-white font-bold">RA</p>
                  </div>
                  <h1 class="text-xl font-bold pt-5">{name}</h1>
                  <p class="text-gray-700">{ruler}</p>
                  <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Edite Profile
                    </a>
                  </div>
                </div>
                <hr class="my-6 border-t border-gray-300" />
                <div class="flex flex-col">
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    information
                  </span>
                  <ul>
                    <li class="mb-2">joining date : 02/02/2024</li>
                    <li class="mb-2">Roll : {studentRoll}</li>
                    <li class="mb-2">Institute : {institute}</li>
                    <li class="mb-2">Department : {department}</li>
                    <li class="mb-2">Gender : {gender}</li>
                    <li class="mb-2">Phone : {phone}</li>
                    <li class="mb-2">Email : {email}</li>
                  </ul>
                </div>
                <div
                  onClick={() => {
                    Cookies.remove("CookieYouserData");
                    Router.push("/");
                  }}
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
                    <h2 class="md:text-xl font-bold ">My Resale Books</h2>
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
                        <CreateBook />
                      </div>
                    </div>
                  </>
                )}
                {/* ------ Display My Selling Book list-------- */}
                <div className="all-Selling-book">
                  <div className="grid items-center gap-3 justify-center md:justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <AllSellingBooks />
                    <AllSellingBooks />
                    <AllSellingBooks />
                  </div>
                </div>

                <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div class="mb-6">
                  <div class="flex justify-between flex-wrap gap-2 w-full">
                    <span class="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-700 mr-2">at ABC Company</span>
                      <span class="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between flex-wrap gap-2 w-full">
                    <span class="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-700 mr-2">at ABC Company</span>
                      <span class="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between flex-wrap gap-2 w-full">
                    <span class="text-gray-700 font-bold">Web Developer</span>
                    <p>
                      <span class="text-gray-700 mr-2">at ABC Company</span>
                      <span class="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
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
