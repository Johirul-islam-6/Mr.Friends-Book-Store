"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserAdmin = () => {
  const [allUser, setUser] = useState([]);
  const [searchingValue, setSearchingValue] = useState("");
  const [Loading, setLoading] = useState(true);
  const [relader, setReload] = useState(false);

  const reloadButton = (e) => {
    setReload(e);
  };

  useEffect(() => {
    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/users/?searchTerm=${searchingValue}&page=1&limit=20&sort=createdAt&sortOrder=desc`
        );

        setUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    // if (ResultBooks) {
    //   const pendingBooks = ResultBooks.filter(
    //     (item) => item?.status !== "success"
    //   );
    //   const result = pendingBooks;
    //   setPendingBook(result);
    // }
  }, [searchingValue]);

  return (
    <div>
      <div class="text-gray-900 bg-gray-200">
        <div class="p-4 flex justify-between">
          <h1 class="md:text-[38px] text-[18px] font-[400]">
            All Users{" "}
            <span className="p-1 bg-[#88159f] text-white rounded-full text-[12px]">
              {allUser?.length}
            </span>
          </h1>
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
        <div class="px-3 py-4 flex justify-center relative overflow-y-auto overflow-x-auto  h-[80vh]">
          <table class="w-[100%] overflow-y-auto h-[20px] text-md bg-white  shadow-md rounded mb-4">
            <tbody className="overflow-y-auto h-[20px]">
              <tr class="border-b ">
                <th class="text-left p-3 px-3 sm-user-item-hide">Name</th>
                <th class="text-center md:text-left p-3 px-3 ">Email</th>
                <th class="text-left p-3 px-3 mid-user-item-hide sm-user-item-hide">
                  phone
                </th>
                <th class="text-left p-3 px-3 mid-user-item-hide sm-user-item-hide">
                  location
                </th>
                <th class="text-left p-3 px-3 sm-user-item-hide">Role</th>
                <th class="text-left p-3 px-3 mid-user-item-hide sm-user-item-hide">
                  Gender
                </th>
                <th></th>
              </tr>

              {allUser?.map((user, index) => (
                <>
                  <tr class="border-b hover:bg-orange-100 bg-gray-100">
                    <td key={index} class="p-3 px-5 sm-user-item-hide">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[14px]">
                        {user?.name}
                      </p>
                    </td>
                    <td class="p-3 px-5">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[14px] text-center md:text-left">
                        {user?.email}
                      </p>
                    </td>
                    <td class="p-3 px-5 mid-user-item-hide sm-user-item-hide">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[14px]">
                        {user?.phone}
                      </p>
                    </td>
                    <td class="p-3 px-5 mid-user-item-hide sm-user-item-hide">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[14px]">
                        {user?.address?.slice(0, 21)}..
                      </p>
                    </td>
                    <td class="p-3 px-5">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[14px] sm-user-item-hide">
                        {user?.ruler}
                      </p>
                    </td>
                    <td class="p-3 px-5 mid-user-item-hide sm-user-item-hide">
                      <p class="bg-transparent text-[#000000bd] font-[600] text-[12px] uppercase">
                        {user?.gender}
                      </p>
                    </td>
                    <td class="p-3 px-5 flex justify-end">
                      <Link href={`/admin/singel_user/${user?._id}`}>
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          view
                        </button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
