"use client";
import "./Diploma.css";
import Image from "next/image";
import cetegoryImage from "../../../../app/Assets/Product/Diploma/book.webp";
import semester1 from "../../../../app/Assets/Product/Diploma/mechanical/mecanical.gif";
import civil from "@/app/Assets/Product/Diploma/Civil/civil-logo.jpg";
import Electical from "@/app/Assets/Product/Diploma/Electical/electical.png";
import electronic from "@/app/Assets/Product/Diploma/electronic/electronic.jpg";
import computer from "@/app/Assets/Product/Diploma/Computer/computer.png";

import power from "@/app/Assets/Product/Diploma/Power/power.png";
import Electromedical from "@/app/Assets/Product/Diploma/Electromedical/Electromedical.jpg";
import DiplomaBookSlider from "./DiplomaBookSlider";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export const Diploma = () => {
  const [Loding, setLoding] = useState(true);
  const [filteringValue, setfilterValue] = useState("কারিগরি");
  const [ResultBooks, setResultBooks] = useState("");

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=কারিগরি&page=1&limit=20&sort=createdAt&sortOrder=desc`
        );

        setResultBooks(result?.data?.data);

        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [filteringValue]);

  return (
    <>
      <div className="diploma-engineer pt-[40px]">
        <div className="flex justify-center md:justify-start border-2 items-center gap-1 md:ms-5">
          <Image
            width={50}
            height={30}
            className="rounded-full "
            src={cetegoryImage}
            alt="diploma image"
          />
          <h1 className="text-cetegory-heading ps-1">
            Polytechnic Category Resell Book
          </h1>
        </div>
        {/* --- category body--- */}

        <div className="semester-table flex md:grid md:grid-flow-col md:grid-cols-7 flex-wrap gap-3  md:justify-start justify-center items-center mt-10 md:px-10">
          {/* ------- category-card ------ */}
          <Link href={"/diploma/CT"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={200}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={civil}
                alt=""
              />
              <h1 className=" text-center pt-[5px] diploma-semester-text">
                Civil Technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/MT"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={semester1}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text">
                Mechanical technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/ET"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={Electical}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text">
                Electical technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/CST"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={computer}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text">
                Computer Technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/ETT"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={electronic}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text">
                Electronic technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/PT"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={power}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text">
                Power technology
              </h1>
            </div>
          </Link>
          <Link href={"/diploma/EMT"}>
            <div className="grid justify-center cursor-pointer">
              <Image
                width={300}
                height={30}
                className="rounded-full border-2 object-cover h-[160px] w-[160px] cetagory-image"
                src={Electromedical}
                alt=""
              />
              <h1 className="text-center pt-[5px] diploma-semester-text ">
                Electromedical technology
              </h1>
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <Link className="cursor-pointer" href={"/allBooks"}>
            <h1 className=" md:ps-12 pb-2 ps-2 text-[20px] text-[#563a9f] IBM font-bold underline">
              New Book lists
            </h1>
          </Link>
          <DiplomaBookSlider ResultBooks={ResultBooks} Loding={Loding} />
        </div>
      </div>
    </>
  );
};
