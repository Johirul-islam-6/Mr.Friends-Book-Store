import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "../../../app/Assets/Navbar/profile.svg";

export default function Card({ accessToken, setIsOpen }) {
  return (
    <div className="">
      <ul className=" w-[100%] block h-[auto] items-start justify-start">
        {/* -----------------  profile ---------------> */}
        <div className="  profile-container w-8/12 flex justify-start">
          <ul className=" block items-start md:pe-4">
            <li className=" mt-4 ms-4 ps-2 duration-200 cursor-pointer active ">
              <Link
                onClick={() => setIsOpen(false)}
                className="hover-menu color-a-tag"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className=" mt-4 ms-4 ps-2 duration-200 cursor-pointer active ">
              <Link
                onClick={() => setIsOpen(false)}
                className="hover-menu color-a-tag"
                href="/allBooks"
              >
                All Books
              </Link>
            </li>

            {/* -----------------diploma engineer-------------- */}
            <div class=" ms-4 ps-1 group relative p-4 duration-200 cursor-pointer  ">
              <button class="hover-menu color-a-tag flex items-center">
                <span class="mr-1">Diploma Engineering</span>
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
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start "
                        href={"/diploma/CT"}
                      >
                        Civil Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                        href={"/diploma/ET"}
                      >
                        Electrical Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                        href="/diploma/CST"
                      >
                        Computer Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                        href="/diploma/MT"
                      >
                        Mechanical Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 px-4 block whitespace-no-wrap  color-a-tag text-start"
                        href="/diploma/ETT"
                      >
                        Electronics Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
                        class="rounded-t  py-2 ps-3 block whitespace-no-wrap  color-a-tag text-start"
                        href="/diploma/EMT"
                      >
                        Electromedical Technology
                      </Link>
                    </li>
                    <hr className="" />
                    <li class="">
                      <Link
                        onClick={() => setIsOpen(false)}
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
            <li className=" ms-4 ps-2 duration-200 cursor-pointer active ">
              <Link
                onClick={() => setIsOpen(false)}
                className="hover-menu color-a-tag"
                href="/"
              >
                About Us
              </Link>
            </li>
            {accessToken && (
              <>
                <li className=" duration-200 cursor-pointer active   ms-4 ps-2">
                  <div class="  py-4 duration-200 cursor-pointer ">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={"/profile"}
                      class="hover-menu color-a-tag flex items-center px-1 rounded-md"
                    >
                      <Image
                        width={35}
                        height={9}
                        quality={100}
                        className="border-2 "
                        src={profile}
                        alt=""
                      />
                    </Link>
                  </div>
                </li>
              </>
            )}
            {!accessToken && (
              <>
                <li className="ms-4  mt-4 duration-200 cursor-pointer active flex items-center ">
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="  text-[#ffffff] bg-[#563A9F] rounded-sm dd px-5 py-3"
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </ul>
    </div>
  );
}
