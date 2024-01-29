import React from "react";
import "./Image.css";
import Image from "next/image";
import book1 from "../../../../app/Assets/Product/Diploma/1st/one.webp";
import Link from "next/link";

export const ImageCard = () => {
  return (
    <>
      <div class="card">
        <Image
          width={250}
          height={20}
          className="card-image absolute top-0 p-5"
          src={book1}
          alt=""
        />

        <div class="content ">
          <h2 class="title p-2 pt-0 ">Programming C+</h2>
          <p class="copy py-2 ">
            Check out all of these gorgeous mountain trips with beautiful views
            of, you guessed it, the mountains
          </p>
          <Link href={"/detailsBook/1"}>
            <button class="btn">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};
