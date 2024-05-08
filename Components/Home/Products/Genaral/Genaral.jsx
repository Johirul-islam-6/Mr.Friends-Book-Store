"use client";
import "./Genaral.css";
import Image from "next/image";
import cetegoryImage from "../../../../app/Assets/Product/Diploma/book.webp";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import GenaralBookSlider from "./GenaralBookSlider";

export const Genaral = () => {
  const [Loding, setLoding] = useState(true);
  const [filteringValue, setfilterValue] = useState("জেনারেল");
  const [ResultBooks, setResultBooks] = useState("");

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=জেনারেল&page=1&limit=20&sort=createdAt&sortOrder=desc`
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
          <h1 className="text-cetegory-heading ps-1">Genaral Resell Book</h1>
        </div>

        <div className="mt-6">
          <Link className="cursor-pointer" href={"/allBooks"}>
            <h1 className=" md:ps-12 pb-2 ps-2 text-[20px] text-[#563a9f] IBM font-bold underline">
              New Book lists
            </h1>
          </Link>
          <GenaralBookSlider ResultBooks={ResultBooks} Loding={Loding} />
        </div>
      </div>
    </>
  );
};
