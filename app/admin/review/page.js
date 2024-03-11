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
  const [reloades, setReload] = useState(false);
  const [buttonHidden, setHidden] = useState(false);

  const [cookiesInfo, setCookiesInfo] = useState();
  const accessToken = Cookies.get("accessToken");

  // --------------- reload all book ------------
  const reloadButton = (e) => {
    setReload(e);
  };

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
          `https://resell-book-store-server.vercel.app/api/v1/review`
        );

        setResultBooks(result?.data?.data);

        setLoding(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [searchingValue, reloades, ResultBooks]);

  // ----------- delete panding book -------------
  async function fetchData(bookId, name) {
    try {
      const response = await axios.delete(
        `https://resell-book-store-server.vercel.app/api/v1/review/${bookId}`
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
            <h1 class="text-[16px] md:text-3xl">All Review</h1>
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
              <span className="grid md:grid-cols-3 gap-3 grid-cols-1 justify-center mt-5 mx-1 md:mx-3">
                {ResultBooks?.map((singelbook, index) => (
                  <>
                    <div
                      key={index}
                      class="relative group overflow-hidden p-8 rounded-xl  border-gray-800 bg-gray-900 "
                    >
                      <div
                        aria-hidden="true"
                        class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                      ></div>
                      <div class="relative ">
                        <p className="text-[#fff] text-[18px] font-[600]">
                          Name : {singelbook?.name}
                        </p>
                        <p className="text-[#fff] text-[14px] ">
                          {singelbook?.department}
                        </p>
                        <p className="text-[#fff] text-[14px] ">
                          Email : {singelbook?.email}
                        </p>

                        <p class="text-white wrap pt-3">
                          {singelbook?.message}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          fetchData(singelbook?._id, singelbook?.bookName)
                        }
                        type="button"
                        class={`text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-5
                          `}
                      >
                        Cancel
                      </button>
                    </div>
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
