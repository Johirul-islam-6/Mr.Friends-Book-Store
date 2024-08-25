"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
// import Header from "./Header";
import Drawer from "./Drawer";
import Button from "./Button";
import "./Navbar.css";
import "./Responsive.css";
import Image from "next/image";
import logo from "../../../app/Assets/Navbar/logo3.png";
import profile from "../../../app/Assets/Navbar/profile.svg";

import bangladesh from "../../../app/Assets/Navbar/bangladesh.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [accessToken, setCookiesInfo] = useState();
  const [Loding, setLoding] = useState(true);
  const router = useRouter();
  const cookiesInfo = Cookies.get("accessToken");

  useEffect(() => {
    setCookiesInfo(cookiesInfo);

    setLoding(false);
  }, [accessToken, Loding]);

  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 1) {
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

  if (Loding) {
    return (
      <>
        <div className="bg-[#00000006] w-[100%]"></div>
      </>
    );
  }

  return (
    <>
      <div>
        {/* --------------- top Navbar ----------- */}
        <div className="bg-[#FFF1E6] py-[12px] top-nav">
          <nav className="flex flex-row justify-between items-center  max-w-screen-xl mx-auto">
            <div className="w-3/12 top-hidden-div"></div>

            <h1 className="top-discount-text ">
              আপনার পড়ার টেবিলে পড়ে থাকা বইটি হয়তো কারো ভবিষ্যৎ গড়ার
              হাতিয়ার।
            </h1>
            <h1 className="sm-top-discount-text  ">
              Mr.Friends book Store Get 15% off. Shop here!
            </h1>

            <div className="w-3/12 flex justify-end bangladesh-flag ">
              <Image
                width={35}
                height={20}
                quality={100}
                className="  "
                src={bangladesh}
                alt=""
              />
            </div>
          </nav>
        </div>
        {/* ----------------- min navbar ------------ */}
        <div
          className={`${
            isFixed ? "fixed py-3" : ""
          } navbar xs:w-[100%] mx-auto`}
        >
          <navbar className=" flex max-w-screen-xl mx-auto relative">
            <ul className=" w-[100%] flex h-[60px] items-center justify-between">
              {/* <!-- logo --> */}
              <div className="md:w-3/12">
                <Link href="/" className="flex items-center">
                  <div className="logo-bg   ">
                    <Image
                      src={logo}
                      width={200}
                      height={80}
                      className=""
                      alt="Mr.Friends"
                    />
                  </div>
                  {/* <Image src={logo} className="h-11  mr-1.5" alt="Flowbite Logo" /> */}
                </Link>
              </div>

              {/* -----------------  profile ---------------> */}
              <div className=" profile-container w-8/12 flex justify-end">
                <ul className=" flex items-center md:pe-4">
                  <li className="p-4 duration-200 cursor-pointer active sm-hidden-link">
                    <Link className="hover-menu color-a-tag" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="p-4 px-2 duration-200 cursor-pointer active sm-hidden-link">
                    <Link className="hover-menu color-a-tag" href="/allBooks">
                      All Books
                    </Link>
                  </li>

                  {/* -----------------diploma engineer-------------- */}
                  <div class=" group relative p-4 px-2 duration-200 cursor-pointer sm-hidden-link">
                    <button class="hover-menu color-a-tag flex items-center">
                      <span class="mr-0">Diploma Engineering</span>
                      <svg
                        class="fill-current h-4 w-4 -rotate-90 hover:rotate-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>

                    <ul class="absolute left-0 z-50 hidden py-5  group-hover:flex dropdown-box border-2">
                      <div className="flex gap-x-10 w-[250px] ">
                        <ul className=" px-5">
                          <h1 className="font-[700] ps-3 text-start text-[#563A9F]">
                            Polytechnic institute
                          </h1>
                          <li class="mt-2">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start "
                              href={"/diploma/CT"}
                            >
                              Civil Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                              href={"/diploma/ET"}
                            >
                              Electrical Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                              href="/diploma/CST"
                            >
                              Computer Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                              href="/diploma/MT"
                            >
                              Mechanical Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                              href="/diploma/ETT"
                            >
                              Electronics Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 ps-3 block whitespace-no-wrap  color-a-tag text-start"
                              href="/diploma/EMT"
                            >
                              Electromedical Technology
                            </Link>
                          </li>
                          <hr className="" />
                          <li class="">
                            <Link
                              class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                              href="/diploma/PT"
                            >
                              Power Technology
                            </Link>
                          </li>
                          <hr className="" />
                        </ul>
                      </div>
                    </ul>
                  </div>

                  {/* -----------------Medical M.B.B.S doctor-------------- */}
                  <li className="py-4 pe-4 duration-200 cursor-pointer active sm-hidden-link">
                    <Link className="hover-menu color-a-tag" href="/">
                      About Us
                    </Link>
                  </li>
                  {accessToken && (
                    <>
                      <li className="py-4   duration-200 cursor-pointer active sm-hidden-link">
                        <div class=" group relative py-4 duration-200 cursor-pointer  ">
                          <Link
                            href={"/profile"}
                            class="hover-menu color-a-tag flex items-center border-2 px-1 rounded-md"
                          >
                            <Image
                              width={25}
                              height={9}
                              quality={100}
                              className=""
                              src={profile}
                              alt=""
                            />
                          </Link>

                          {/* <ul class="absolute right-[-30px] z-50 hidden py-1 mt-2  group-hover:flex dropdown-box border-2">
                            <div className="flex gap-x-10  ">
                              <ul className="w-[120px] ">
                                <li class="">
                                  <Link
                                    class="text-[14px]  py-1  block text-center  color-a-tag IBM "
                                    href="/profile"
                                  >
                                    Account
                                  </Link>
                                </li>
                                <hr className="" />

                                <li class="">
                                  <Link
                                    class="text-[14px]  py-1  block text-center  color-a-tag IBM"
                                    href="wishlists"
                                  >
                                    Wishlists
                                  </Link>
                                </li>
                                <hr className="" />

                                <li class="">
                                  <Link
                                    class="text-[14px]  py-1  block text-center  color-a-tag IBM"
                                    href=""
                                  >
                                    Logout
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </ul> */}
                        </div>
                      </li>
                    </>
                  )}
                  {!accessToken && (
                    <>
                      <li className="py-4 duration-200 cursor-pointer active pe-2  ">
                        <Link
                          className="singIN text-[#ffffff] bg-[#563A9F] rounded-sm dd px-4 flex items-center pt-[4px] pb-[6px] font-[600] text-[16px] "
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                    </>
                  )}

                  {/* ---------------user Profile --------- */}

                  <li className="py-4  px-1 duration-200 cursor-pointer active">
                    {/* --- Only Small Size ---- */}
                    <div className="sm-last-navbar">
                      <div className="Menubar">
                        {/* ------- open & close button ---- */}
                        <Button setIsOpen={setIsOpen} isOpen={isOpen} />

                        {/* ----- drower container body ------- */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                          <Card
                            setIsOpen={setIsOpen}
                            accessToken={accessToken}
                          />
                        </Drawer>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </ul>
          </navbar>
        </div>
      </div>
    </>
  );
};
