import React from "react";
import { FaThumbsUp } from "react-icons/fa";

export const ReviewField = () => {
  return (
    <>
      <div class=" items-center gap-2 mx-auto bg-white p-2 border-2 mt-2">
        <div className="flex justify-between">
          <div className="flex">
            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ps-1">
              <h1 className="text-[12px] text-[#563a9f] font-bold">
                Rasel khan
              </h1>
              <p className="text-[12px]">CST/6</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <FaThumbsUp className="text-blue-600 hover:text-green-600" />
            <p className="text-[10px]">12</p>
          </div>
        </div>

        <p class="mt-2">
          This avatar component is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <a class="text-blue-600 hover:underline" href="#" target="_blank">
            more..
          </a>
          .
        </p>
      </div>
    </>
  );
};
