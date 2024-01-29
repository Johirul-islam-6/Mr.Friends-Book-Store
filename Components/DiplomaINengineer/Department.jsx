"use-client";
import Image from "next/image";
import React, { useState } from "react";
import image01 from "@/app/Assets/Product/Diploma/Civil/civil.webp";
import cetegoryImage from "@/app/Assets/Product/Diploma/book.webp";
import semester1 from "@/app/Assets/Product/Diploma/1st.png";
import "./Department.css";

export const DepartmentBanner = ({ department, getSemesterNumber }) => {
  const [semesterBook, setSemesterBook] = useState("all");
  const [activeborder, setActiveBorder] = useState(null);

  getSemesterNumber(semesterBook);

  const handleClick = (semester) => {
    setActiveBorder(semester);
    setSemesterBook(semester);
  };

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
          <h1 className="text-cetegory-heading ps-1">
            {department} Technology Book
          </h1>
        </div>
        {/* --- category body--- */}

        <div className="semester-table flex md:grid md:grid-flow-col md:grid-cols-8 flex-wrap gap-2  md:justify-start justify-center items-center mt-10 md:px-10">
          {/* ------- category-card ------ */}
          <div
            onClick={() => handleClick("all")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={60}
              className={`rounded-full border-2 object-cover ${
                activeborder === "all" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className=" text-center pt-[5px] diploma-semester-text">
              All Semester
            </h1>
          </div>

          <div
            onClick={() => handleClick("1st")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "1st" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("2nd")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "2nd" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("3rd")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "3rd" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("4th")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "4th" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("5th")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "5th" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("6th")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "6th" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
          <div
            onClick={() => handleClick("7th")}
            className="grid justify-center cursor-pointer"
          >
            <Image
              width={100}
              height={30}
              className={`rounded-full border-2 object-cover ${
                activeborder === "7th" ? "activeBorder" : "hello"
              }`}
              src={semester1}
              alt=""
            />
            <h1 className="text-center pt-[5px] diploma-semester-text">
              Semester
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
