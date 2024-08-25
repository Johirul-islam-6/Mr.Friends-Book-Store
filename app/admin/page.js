"use client";
import React, { useEffect, useState } from "react";

import "./admin.css";

import { PandingBook } from "@/Components/Admin/PandingBook/PandingBook";
import { AdminUser } from "@/Components/Admin/AdminUser/AdminUser";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import Chat3d from "./chat/Chat3D";
import { PiChat } from "./piChat/PiChat";
import { ColumPicat } from "./piChat/ColumPicat";

const Admin = () => {
  const [allUser, setUser] = useState("");
  const [adminUser, setadminUser] = useState("");
  const [avaragePostget, setAvaragePostget] = useState("");
  const [avaragePost, setAvaragePost] = useState("");
  const [pandingBook, setpandingPost] = useState("");
  const [totalSiteView, settotalSiteView] = useState("");
  const [avarage, setAvarage] = useState("");
  const [Loading, setLoading] = useState(true);
  const [cookiesInfo, setCookiesInfo] = useState();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      return navigate.push("/login");
    }
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfos = JSON.parse(getCookiesData);
    setCookiesInfo(cookiesInfos);
  }, []);

  const Url = `https://resell-book-store-server.vercel.app/api/v1/users/?searchTerm=&page=1&limit=100000&sort=createdAt&sortOrder=desc`;
  const Url2 = `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=&page=1&limit=100000&sort=createdAt&sortOrder=desc`;
  // ------- get users----
  const [reloaseStart, setReload] = useState(false);
  const reloase = (e) => {
    setReload(e);
  };

  // ------------ total site visitor ---------

  useEffect(() => {
    // ---- view show----
    async function viewCount() {
      try {
        const response = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/siteView`
        );
        const result = response?.data?.data[0];

        settotalSiteView(result);
        // if get the data then save
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    viewCount();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersResponse = await axios.get(Url);
        const booksResponse = await axios.get(Url2);

        const usersData = usersResponse?.data?.data;
        const booksData = booksResponse?.data?.data;

        setUser(usersData);
        setAvaragePostget(booksData);

        // Perform calculation after both data fetches are completed
        if (usersData && booksData) {
          // Check if user count is a valid number
          const userCount = parseFloat(usersData.length);
          // Check if book count is a valid number
          const bookCount = parseFloat(booksData.length);

          if (!isNaN(userCount) && !isNaN(bookCount) && userCount !== 0) {
            const totalPost = bookCount / userCount;
            setAvaragePost(totalPost);
          } else {
            console.log("Invalid user count or book count");
          }
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [Url, Url2, reloaseStart]);

  useEffect(() => {
    if (avaragePostget) {
      const pendingBooks = avaragePostget.filter(
        (item) => item?.status === "panding"
      );
      const result = pendingBooks;
      setpandingPost(result);
    }

    const tatalpost = parseFloat(avaragePostget?.length);
    const pandingPost = parseFloat(pandingBook?.length);
    const AvaragePost = (tatalpost / pandingPost).toFixed(2);
    setAvarage(AvaragePost);

    // admin user
    if (allUser) {
      const pendingBooks = allUser.filter((item) => item?.ruler !== "student");
      const result = pendingBooks;
      setadminUser(result);
    }
  }, [avaragePostget, allUser, reloaseStart]);

  // ---- get avarage post---------

  return (
    <>
      <div class="flex bg-gray-100  overflow-y-auto">
        <div class="flex-grow text-gray-800">
          <main class="p-6 sm:p-10 space-y-6 ">
            <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div class="mr-6">
                <h1 class="text-4xl font-semibold mb-2 text-center md:text-start">
                  Admin Panel
                </h1>
                <h2 class="text-gray-600 ml-0. text-center md:text-start">
                  Student Post supervision
                </h2>
              </div>
              <div class="flex flex-wrap items-start justify-center md:justify-end -mb-3">
                <button class="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Manage dashboard
                </button>

                <Link href={`/admin/userAdmin`}>
                  <button class="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md md:ml-6 mb-3">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Create new admin
                  </button>
                </Link>
              </div>
            </div>

            <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div class="flex items-center p-8 bg-white shadow rounded-lg">
                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="block text-2xl font-bold">
                    {Loading ? (
                      <>
                        <div class="flex gap-2 pb-2">
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                        </div>
                      </>
                    ) : (
                      <>{allUser?.length}</>
                    )}{" "}
                  </span>
                  <span class="block text-gray-500">Total Account</span>
                </div>
              </div>

              <div class="flex items-center p-8 bg-white shadow rounded-lg">
                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <span class="block text-2xl font-bold">
                    {Loading ? (
                      <>
                        <div class="flex gap-2 pb-2">
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                        </div>
                      </>
                    ) : (
                      <> {avaragePostget?.length}</>
                    )}{" "}
                  </span>
                  <span class="block text-gray-500">Tatal Post</span>
                </div>
              </div>
              <div class="flex items-center p-8 bg-white shadow rounded-lg">
                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </div>
                <div>
                  <span class="inline-block text-2xl font-bold">
                    {Loading ? (
                      <>
                        <div class="flex gap-2 pb-2">
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                        </div>
                      </>
                    ) : (
                      <> {pandingBook?.length}</>
                    )}{" "}
                  </span>
                  <span class="inline-block text-xl text-gray-500 font-semibold">
                    {Loading ? (
                      <>
                        <div class="flex gap-2 pb-2 ms-2">
                          <div class="rounded-full h-[5px] w-[5px] bg-violet-800 animate-ping"></div>
                        </div>
                      </>
                    ) : (
                      <> </>
                    )}{" "}
                  </span>
                  <span class="block text-gray-500">Pending Post</span>
                </div>
              </div>
              <div class="flex items-center p-8 bg-white shadow rounded-lg">
                <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <span class="block text-2xl font-bold">
                    {totalSiteView?.totalView}
                  </span>
                  <span class="block text-gray-500">Total Visite Site</span>
                </div>
              </div>
            </section>

            {/* ===================== showin user Panding Book list start ====================== */}
            <section class="border-4 grid md:grid-cols-1 xl:grid-cols-1 xl:grid-rows-2 xl:grid-flow-col gap-6">
              {/* ------------------ panding book list------------- */}
              <PandingBook cookiesInfo={cookiesInfo} reloase={reloase} />

              {/* ------------------- all users------------- */}
              <AdminUser adminUser={adminUser} />
            </section>
            <div className="grid gap-5 md:grid-cols-2">
              <PiChat />
              <ColumPicat />
            </div>
            {/* ===================== showin user Panding Book list end ====================== */}
          </main>
        </div>
      </div>
    </>
  );
};
export default Admin;
