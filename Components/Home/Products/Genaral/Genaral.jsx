import Image from "next/image";
import React from "react";
import cetegoryImage from "../../../../app/Assets/Product/Diploma/book.webp";
import MedicalBookSlider from "./GenaralBookSlider";
import Link from "next/link";
export const Genaral = () => {
  return (
    <>
      <div className="Medical-store ">
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

        <div className="div mt-5">
          <Link className="cursor-pointer" href={"/allBooks"}>
            <h1 className=" md:ps-12 pb-2 ps-2 text-[20px] text-[#563a9f] IBM font-bold underline">
              New Book lists
            </h1>
          </Link>
          <MedicalBookSlider />
        </div>
      </div>
    </>
  );
};
