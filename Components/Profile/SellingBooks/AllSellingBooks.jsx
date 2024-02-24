"use client";
import Image from "next/image";
import React, { useState } from "react";
import book1 from "@/app/Assets/Product/Diploma/1st/one.webp";
import axios from "axios";
import Swal from "sweetalert2";
import { ConvertToBase64 } from "../CreateBook/CreateBook";

export const AllSellingBooks = ({ createdBookInfo, createdBooks }) => {
  const [EditebookModel, setEditebookModel] = useState(false);

  // --------------- delete a Book -----------------
  async function deleteBook(bookId, name) {
    try {
      const response = await axios.delete(
        `https://resell-book-store-server.vercel.app/api/v1/books/${bookId}`
      );
      console.log("Book deleted successfully:", response.data);
      if (response?.data?.success) {
        Swal.fire({
          title: ` বই : ${name}`,
          text: `Delete Complited`,
          icon: "success",
        });

        setTimeout(() => {
          createdBooks(true);
        }, 3000);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      // Optionally, handle the error in a meaningful way
    }
  }

  return (
    <>
      {createdBookInfo?.map((book) => (
        <>
          <div
            key={book?.id}
            className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2"
          >
            <div className="image relative">
              <div className="bg-[#0000007b] w-[100%] h-[100%]  absolute rounded-t-md"></div>
              <Image
                width={1424}
                height={450}
                className="rounded-t-md d-image w-[100%] h-[350px]"
                src={book?.bookImage}
                alt=""
              />
              <div className="flex bg-[#0000001e] justify-between w-[100%] px-2 absolute top-0 text-[#fff]   py-2  text-center">
                <button
                  onClick={() => deleteBook(book?._id, book?.bookName)}
                  className="text-[12px] md:text-[12px] bg-red-800 hover:bg-red-500 text-white px-[10px] py-[3px] rounded-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditebookModel(true);
                    setEditeAble(book);
                  }}
                  className="text-[12px] md:text-[14px] bg-green-700 hover:bg-green-600 text-white px-[10px] py-[3px] rounded-sm"
                >
                  Edite
                </button>
              </div>
              <h1 className="flex bg-[#000000a2]  w-[100%] justify-center absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] py-2  text-center">
                {book?.bookName}
              </h1>
            </div>
          </div>
        </>
      ))}

      {/* ------ Open Model ----- */}

      {EditebookModel && (
        <>
          <div className="flex items-center justify-center w-[100%] ">
            <form
              onSubmit={updateBook}
              className=" absolute  md:left-[40%] w-[40%] mx-auto  md:top-[20%] bg-[#FFF1E6] z-[200] px-3 py-16 border-4 rounded-lg"
            >
              <div className="flex justify-center">
                <p className="text-[#921c1c] font-bold text-[20px]">
                  Sorry dear friend
                </p>
              </div>

              <h1 className="text-[11px] md:text-[20px] font-bold text-[#565656] md:ps-3 md:w-[80%] mx-auto mt-5">
                {/* <h1 className="text-center text-[#000000bc] text-[25px]"> */}
                আপনার পোস্ট টি পুনরায় কাস্টমাইজ করার কোন অপশন রাখা হয়নি । আপনি
                চাইলে ডিলিট করে আবার নতুন করে পোস্ট করতে পারেন {/* </h1> */}
              </h1>

              <div class="flex justify-center mt-1">
                <button
                  onClick={() => setEditebookModel(false)}
                  className={`my-5 px-12 justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#8555fe] shadow-lg cursor-pointer transition ease-in duration-300 
                 `}
                >
                  ঠিক আছে ।
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};
