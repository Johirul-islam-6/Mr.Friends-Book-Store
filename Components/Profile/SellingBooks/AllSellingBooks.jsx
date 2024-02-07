"use client";
import Image from "next/image";
import React, { useState } from "react";
import book1 from "@/app/Assets/Product/Diploma/1st/one.webp";
import axios from "axios";
import Swal from "sweetalert2";

export const AllSellingBooks = ({
  createdBookInfo,
  createdBooks,
  createdBook,
  userInfo,
}) => {
  const [EditebookModel, setEditebookModel] = useState(false);

  const [cetagorybook, setCetagory] = useState();
  const [EditeAble, setEditeAble] = useState();

  const semester = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester",
    "Others",
  ];
  const publication = ["হক প্রকাশনী", "এস আর প্রকাশনী", "অন্যান্য"];
  const departmental = ["কারিগরি", "জেনারেল", "মেডিকেল", "অন্যান্য"];
  const technical = [
    {
      naem: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
      shorcut: "CST",
    },
    {
      naem: "সিভিল টেকনোলজি",
      shorcut: "CT",
    },
    {
      naem: "ইলেকট্রিক্যাল টেকনোলজি",
      shorcut: "ET",
    },
    {
      naem: "মেকানিক্যাল টেকনোলজি",
      shorcut: "MT",
    },
    {
      naem: "ইলেকট্রনিক্স টেকনোলজি",
      shorcut: "ETT",
    },
    {
      naem: "ইলেকট্রোমেডিক্যাল টেকনোলজি",
      shorcut: "EMT",
    },
    {
      naem: "পাওয়ার টেকনোলজি",
      shorcut: "PT",
    },
    ,
  ];
  const genaral = [
    {
      naem: " সাইন্স",
      shorcut: "science",
    },
    {
      naem: "কমার্স",
      shorcut: "commerce",
    },
    {
      naem: "আর্টস",
      shorcut: "arts",
    },
    {
      naem: "অন্যান্য",
      shorcut: "other",
    },

    ,
  ];
  const Medical = [
    {
      naem: "Psychology",
      shorcut: "psychology",
    },
    {
      naem: "Sociology",
      shorcut: "sociology",
    },
    {
      naem: "Microbiology",
      shorcut: "microbiology",
    },
    {
      naem: "Epidemiology",
      shorcut: "epidemiology",
    },
    {
      naem: "Pharmacology",
      shorcut: "pharmacology",
    },
    {
      naem: "Genetics",
      shorcut: "genetics",
    },
    {
      naem: "Human anatomy",
      shorcut: "human-anatomy",
    },
    {
      naem: "Psychophysiology",
      shorcut: "psychophysiology",
    },
    {
      naem: "Others",
      shorcut: "other",
    },

    ,
  ];

  const [bookId, setBookId] = useState();
  const [Cetagory2, setCetagory2] = useState();
  const [Cetagory, setCetagory1] = useState();

  const updateBook = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookName = formData.get("bookName");
    // const bookImage = formData.get("bookImage") ;
    const bookImage = "image.png";
    const subjectCode = formData.get("subjectCode"); // Assuming you set the "name" attribute for the select as "institute"
    const publication = formData.get("publication");
    const department = Cetagory;
    const mejorSubject = formData.get("mejor-subject");
    const semester = Cetagory2;
    const phone = formData.get("phone");
    const buyPrice = formData.get("buy-price");
    const sellPrice = formData.get("sell-price");
    const email = userInfo?.email;
    const location = formData.get("location");
    const discription = formData.get("discription");
    const userId = userInfo?.id;

    const updateData = {
      bookName,
      bookImage,
      subjectCode,
      publication,
      department,
      mejorSubject,
      semester,
      phone,
      buyPrice,
      sellPrice,
      email,
      location,
      discription,
      userId,
    };

    try {
      const response = await axios.patch(
        `http://localhost:8080/api/v1/books/${bookId}`,
        updateData
      );
      const result = response?.data;

      if (result?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });
        createdBook(true);
        setEditebookModel(false);
      }
    } catch (error) {
      console.error("Error updating book:", error);
      // Optionally, handle the error in a meaningful way
    }
  };

  // --------------- delete a Book -----------------
  async function deleteBook(bookId, name) {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/books/${bookId}`
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
                src={book1}
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
              className=" absolute  md:left-[30%] md:top-[1%] bg-[#FFF1E6] z-[200] p-3 border-4 rounded-lg"
            >
              <div className="flex justify-between">
                <h1 className="text-[11px] md:text-[20px] font-bold text-[#565656] md:ps-3">
                  1. Editing Book : {EditeAble?.bookName}
                </h1>
                <button
                  className="bg-[#bc1f1fb4] hover:bg-red-700 rounded-md p-2 px-3 text-white flex gap-[2px] items-center"
                  onClick={() => setEditebookModel(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    hanging="14"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>{" "}
                </button>
              </div>
              <div class="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 sm:grid-cols-2 md:px-5">
                {/* ------ field number 01 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বই এর নাম
                  </label>
                  <input
                    id="username"
                    name="bookName"
                    defaultValue={EditeAble?.bookName}
                    type="text"
                    placeholder="ফিজিক্স-১"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 02 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বই এর ছবি
                  </label>
                  <input
                    id="username"
                    name="bookImage"
                    defaultValue={EditeAble?.Image}
                    type="file"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 03 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বিষয় কোড
                  </label>
                  <input
                    defaultValue={EditeAble?.subjectCode}
                    id="username"
                    type="text"
                    name="subjectCode"
                    placeholder="৬৬৬৬"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 04 ------- */}

                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    পাবলিকেশন
                  </label>

                  <select
                    name="publication"
                    class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  >
                    <option className="bg-[#E8F0FE]">
                      {EditeAble?.publication}
                    </option>
                    {publication?.map((item, index) => (
                      <>
                        <option key={index} className="">
                          {item}
                        </option>{" "}
                      </>
                    ))}
                  </select>
                </div>

                {/* ------ field number 05 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    ডিপার্টমেন্ট বই
                  </label>

                  <select
                    name="department"
                    onChange={(e) => setCetagory1(e.target.value)}
                    className="input block border border-gray-300 focus:border-pitch-black py-2 px-3 w-full focus:outline-none mt-1"
                  >
                    <option value="select" className="bg-[#E8F0FE]">
                      {EditeAble?.department}
                    </option>
                    {departmental?.map((item, index) => (
                      <option
                        className="bg-[#e9e9e9de] text-black "
                        key={index}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {/* ------ field number 06 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    মেজর বিষয়
                  </label>

                  <select
                    name="mejor-subject"
                    class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  >
                    <option className="bg-[#E8F0FE]">
                      {EditeAble?.mejorSubject}
                    </option>
                    {cetagorybook === "কারিগরি" && (
                      <>
                        {technical?.map((item, index) => (
                          <>
                            <option key={index} className="">
                              {item?.naem}
                            </option>{" "}
                          </>
                        ))}
                      </>
                    )}
                    {cetagorybook === "জেনারেল" && (
                      <>
                        {genaral?.map((item, index) => (
                          <>
                            <option key={index} className="">
                              {item?.naem}
                            </option>{" "}
                          </>
                        ))}
                      </>
                    )}
                    {cetagorybook === "মেডিকেল" && (
                      <>
                        {Medical?.map((item, index) => (
                          <>
                            <option key={index} className="">
                              {item?.naem}
                            </option>{" "}
                          </>
                        ))}
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    সেমিষ্টার বই
                  </label>

                  <select
                    required
                    name="semester"
                    onChange={(e) => setCetagory2(e.target.value)}
                    className="input block border border-gray-300 focus:border-pitch-black py-2 px-3 w-full focus:outline-none mt-1"
                  >
                    <option value="select" className="bg-[#E8F0FE]">
                      {EditeAble?.semester}
                    </option>
                    {semester?.map((item, index) => (
                      <option
                        className="bg-[#e9e9e9de] text-black "
                        key={index}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                {/* ------ field number 08 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="phone"
                  >
                    সঠিক ফোন নাম্বার
                  </label>
                  <input
                    defaultValue={EditeAble?.phone}
                    id="phone"
                    name="phone"
                    placeholder="01824842XXX"
                    type="phone"
                    class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 09 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    ক্রয় মূল্য
                  </label>
                  <input
                    defaultValue={EditeAble?.buyPrice}
                    name="buy-price"
                    id="username"
                    type="number"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>

                {/* ------ field number 10 ------- */}
                <div>
                  <label
                    class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN"
                    for="username"
                  >
                    বিক্রয় মূল্য
                  </label>
                  <input
                    defaultValue={EditeAble?.sellPrice}
                    id="username"
                    name="sell-price"
                    type="number"
                    placeholder="Enter Your Full Name"
                    class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
                {/* ------ field number 11 ------- */}
                <div>
                  <label class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN">
                    বই নেওয়ার ঠিকানা
                  </label>
                  <input
                    defaultValue={EditeAble?.location}
                    id="location"
                    name="location"
                    placeholder="যেমন: মাসকান্দা, টেকনিক্যাল মোড়"
                    type="text"
                    class="input block border border-gray-300 placeholder:font-normal text-[16px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1"
                  />
                </div>
              </div>

              {/* ---- Book Details ----- */}
              <div className="md:px-5 mt-8">
                <label
                  class="text-[#000b] md:text-[14px] text-[14px] ps-[2px] font-bold  md:ps-1 IN text-center flex justify-center"
                  for="username"
                >
                  বই বিবরণ সমূহ
                </label>
                <textarea
                  defaultValue={EditeAble?.discription}
                  id="username"
                  name="discription"
                  type="text"
                  placeholder="কমপক্ষে ৪০ শব্দের হতে হবে,  যেটা দ্বারা ছাত্র-ছাত্রী বই এর ভালো দিকগুলো জানতে জানতে পারে । "
                  class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[16px] py-2 px-3 w-full focus:outline-none mt-1"
                />
              </div>

              <div class="flex justify-center mt-1">
                <button
                  onClick={() => setBookId(EditeAble?._id)}
                  type="submit"
                  class="my-5 px-12 justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#8555fe] shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};
