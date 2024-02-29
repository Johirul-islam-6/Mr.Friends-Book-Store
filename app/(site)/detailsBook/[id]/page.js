"use client";
import { SingelBookInf } from "@/Components/DetailEachBook/SingelBookInfo/SingelBookInf";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EachBookInfo = () => {
  const accessToken = Cookies.get("accessToken");

  const { id } = useParams();

  const [Loding, setLoding] = useState(true);
  const [ResultBooks, setResultBooks] = useState();

  useEffect(() => {
    if (accessToken) {
      async function viewCount() {
        try {
          const response = await axios.patch(
            `https://resell-book-store-server.vercel.app/api/v1/books/view/${id}`
          );
          const result = response.data;

          // if get the data then save
          if (result?.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${result?.message}`,
              text: "Thank you",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      viewCount();
    }

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/${id}`
        );

        setResultBooks(result?.data?.data);

        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (Loding) {
    return (
      <>
        <div className="w-[100%] flex h-[100vh] justify-center items-center">
          <div class="relative flex justify-center items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img
              src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
              class="rounded-full h-28 w-28"
            />
          </div>
        </div>
      </>
    );
  }

  console.log("get rusult=>", ResultBooks);

  return (
    <>
      <div className="mt-2 w-[100%] md:w-[80%] mx-auto ">
        <SingelBookInf ResultBooks={ResultBooks} />
      </div>
    </>
  );
};
export default EachBookInfo;
