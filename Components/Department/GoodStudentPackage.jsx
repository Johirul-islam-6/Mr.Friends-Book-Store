import Image from "next/image";
import React from "react";
import hokGoodStudentBundel from "@/app/Assets/Product/Diploma/good-student-book.png";
import "./GoodStudent.css";
export const GoodStudentPackage = () => {
  return (
    <>
      <div class="flex items-center justify-center ">
        <div class="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
          <div class="bg-[#0000008c] rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
            <div>
              <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                <h1 class="font-bold">A Good Student Package</h1>
                <h3 className="text-[#ffffff] font-[400] IBM">
                  1st Semester all book
                </h3>

                <p>
                  Regular Price :{" "}
                  <span className="text-[#FFF] font-bold crossed-text">
                    1560 <span className="text-[12px] ps-1">টাকা</span>
                  </span>
                </p>
                <p>
                  Total :{" "}
                  <span className="text-[#FFF] font-bold ">
                    1160 <span className="text-[12px] ps-1">টাকা</span>
                  </span>
                </p>

                <div class="opacity-60 text-sm hidden md:block">
                  এক জন নিয়মিত ভালো ছাত্রের জন্য তো একটু ডিসকাউন্ট থাকছি । যারা
                  যারা নিতে চাও তাদের জন্য রয়েছে ৩০০ টাকা ডিসকাউন্ট । এটা সীমিত
                  কিছুদিনের জন্য থাকছে তাই জলদি করো । আমরা বইগুলো খুব যত সহকারে
                  আপনাদের কাছে পৌঁছে দেওয়ার দায়িত্ব আমাদের । <br />
                  ধন্যবাদ
                </div>
              </div>
            </div>
          </div>
          <Image
            width={650}
            height={700}
            src={hokGoodStudentBundel}
            className="mx-auto flex justify-center border-2 "
            alt=""
          />
        </div>
      </div>
    </>
  );
};
