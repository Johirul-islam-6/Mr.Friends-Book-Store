"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

const SingelUsers = () => {
  const { id } = useParams();
  const [singelUser, setSingelUser] = useState();
  const [userInfo, setInfo] = useState();

  useEffect(() => {
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfo = JSON.parse(getCookiesData);
    setInfo(cookiesInfo);

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/v1/users/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <>
      <div className="singel-user md:w-[40%] mx-auto mt-10">
        <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-center">
          {" "}
          {singelUser?.name}{" "}
        </h1>
        <span className="text-white text-[12px] font-bold text-center flex justify-center">
          <p className=" bg-green-800 px-2 mt-2">{singelUser?.ruler}</p>
        </span>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.department}
        </p>

        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.institute}
        </p>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.studentRoll}
        </p>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.address}
        </p>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.phone}
        </p>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.email}
        </p>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-center">
          <FaRegDotCircle className="me-2 text-[#9333EA]" />
          {singelUser?.gender}
        </p>

        <div class="pt-12 pb-8 flex justify-center md:justify-start gap-2">
          <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
            Block
          </button>
          {userInfo?.ruler === "superAdmin" && (
            <>
              <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                Create Admin
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingelUsers;
