"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PandingPost = () => {
  const [Loding, setLoding] = useState(true);
  const [searchingValue, setSearchingValue] = useState("");
  const [ResultBooks, setResultBooks] = useState([]);
  const [PendingBook, setPendingBook] = useState([]);
  const [reloades, setReload] = useState(false);
  const [buttonHidden, setHidden] = useState(false);

  const [cookiesInfo, setCookiesInfo] = useState();
  const accessToken = Cookies.get("accessToken");

  // --------------- reload all book ------------
  const reloadButton = (e) => {
    setReload(e);
  };

  // ----- cookies infor ----
  useEffect(() => {
    if (!accessToken) {
      return navigate.push("/login");
    }
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfos = JSON.parse(getCookiesData);
    setCookiesInfo(cookiesInfos);
  }, []);

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=${searchingValue}&page=1&limit=20&sort=createdAt&sortOrder=desc`
        );

        setResultBooks(result?.data?.data);

        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    if (ResultBooks) {
      const pendingBooks = ResultBooks.filter(
        (item) => item?.status === "panding"
      );
      const result = pendingBooks;
      setPendingBook(result);
    }
  }, [searchingValue, reloades, ResultBooks]);

  // ---------- Updatae Status book ---------
  const [updateStatus, setStatus] = useState();
  useEffect(() => {
    const data = {
      status: cookiesInfo?.email,
    };

    async function fetchData() {
      try {
        const result = await axios.patch(
          `https://resell-book-store-server.vercel.app/api/v1/books/status/${updateStatus}`,
          data
        );

        if (result?.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Permission Granted`,
            text: "Thank you",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        setHidden(false);
        reloadButton(true);
        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [updateStatus]);

  // ----------- delete panding book -------------

  async function DeleteItem(bookId, name) {
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
        setReload(true);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  const updateStatusValue = (e) => {
    setStatus(e);
    setReload(true);
    setHidden(true);
  };

  return (
    <>
      <div className="d">
        {/* -------------- all card --------------- */}
        <div class="text-gray-900 bg-gray-200">
          <div class="p-4 flex justify-between w-[100%] border-4">
            <h1 class="text-[16px] md:text-3xl">All Panding Post</h1>
            {/* <!-- component --> */}
            <div class="flex justify-end ">
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  onChange={(e) => setSearchingValue(e?.target?.value)}
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>

          <div class="px-3 py-4 flex justify-center overflow-y-auto overflow-x-auto  h-[70vh]">
            <div class="w-full text-md bg-white shadow-md rounded mb-4">
              {Loding && (
                <>
                  <div className="flex px-3 ">
                    <div class=" gap-3 py-4 rounded shadow-md w-[100%] grid grid-cols-1 md:grid-cols-1 animate-pulse bg-gray-50 mx-auto">
                      <div class="flex-shrink-0 w-[100%] h-52 rounded-mf bg-gray-300"></div>
                      <div class="flex-shrink-0 w-[100%] h-52 rounded-mf bg-gray-300"></div>
                      <div class="flex-shrink-0 w-[100%] h-52 rounded-mf bg-gray-300"></div>
                    </div>
                  </div>
                </>
              )}
              <span className="flex flex-col justify-center">
                {PendingBook?.map((singelbook, index) => (
                  <>
                    <span
                      key={index}
                      class="border-b hover:bg-orange-100 bg-gray-100 flex flex-col w-[100%] md:grid justify-center grid-cols-1 md:grid-cols-5 lg:grid-cols-5 border-2"
                    >
                      <td class="p-3 px-5 relative">
                        <p className="absolute bg-green-600 px-2 text-white rounded-full">
                          {index + 1}
                        </p>
                        <Image
                          width={120}
                          height={100}
                          src={singelbook?.bookImage}
                          className="h-[170px]"
                          alt=""
                        />
                      </td>
                      <td class="p-3 px-5">
                        <h1 className="text-[#000] font-bold underline">
                          Book Info
                        </h1>
                        <p className="text-[#03c92b99] text-[16px]">
                          {" "}
                          creat : {singelbook?.createdAt?.slice(0, 10)}
                        </p>
                        <p className="text-[#00000099] text-[16px]">
                          book : {singelbook?.bookName}
                        </p>
                        <p className="text-[#00000099] text-[16px]">
                          price : {singelbook?.sellPrice}৳
                        </p>
                      </td>
                      <td class="p-3 px-5">
                        <h1 className="text-[#000] font-bold underline">
                          Author info
                        </h1>
                        <p className="text-[#00000099] text-[16px]">
                          {" "}
                          user : {singelbook?.email}
                        </p>
                        <p className="text-[#00000099] text-[16px]">
                          phone : {singelbook?.phone}
                        </p>
                        <p className="text-[#00000099] text-[16px]">
                          location : {singelbook?.location}
                        </p>
                      </td>

                      <td class="p-3 py-5  px-[2%]">
                        <h1 className="text-[#000] font-bold underline">
                          Description
                        </h1>
                        <p className="text-start text-[14px]">
                          {singelbook?.discription}
                        </p>
                      </td>
                      <td class="p-3 px-5 flex justify-center md:justify-end items-center  h-[150px]">
                        <button
                          onClick={() => updateStatusValue(singelbook?._id)}
                          type="button"
                          class={`mr-3 flex text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline ${
                            buttonHidden ? "disabled-button" : ""
                          }`}
                        >
                          {buttonHidden && (
                            <>
                              <svg
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="mr-2 animate-spin"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                              </svg>
                            </>
                          )}
                          confirm
                        </button>
                        <button
                          onClick={() =>
                            DeleteItem(singelbook?._id, singelbook?.bookName)
                          }
                          type="button"
                          class={`text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline 
                          `}
                        >
                          Cancel
                        </button>
                      </td>
                    </span>
                  </>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PandingPost;
