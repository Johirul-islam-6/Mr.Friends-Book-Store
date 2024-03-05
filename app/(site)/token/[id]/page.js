"use client";
const jwt = require("jsonwebtoken");
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const TokenPage = () => {
  const router = useRouter();
  const [buttonHidden, setHidden] = useState(false);
  const { id } = useParams();

  const decodedToken = jwt.decode(id);

  // Access the _id field from the decoded token payload
  const userId = decodedToken._id;

  const resetPassword = async (e) => {
    setHidden(true);
    e.preventDefault();

    const password = e.target.elements.password.value;
    if (password.length < 6) {
      setHidden(false);
      return alert("Minimum 6 characters password required!");
    }
    // Constructing request body

    try {
      const response = await axios.post(
        "https://resell-book-store-server.vercel.app/api/v1/users/resetpassword",
        {
          id: userId,
          password: password,
          token: id,
        }
      );
      const result = response?.data?.message;
      if (response?.data?.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result}`,
          text: "Thank you",
          showConfirmButton: true,
        });
      }
      setHidden(false);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log("Error:", error);
      Swal.fire({
        title: `${"jwt token doesn't match !"}`,
        icon: "error",
      });
      setHidden(false);
    }
  };

  return (
    <div className=" h-[100vh] flex justify-center  bg-[#fff]">
      <section class="w-full  md:w-[35%] h-[400px] mx-5 px-5  md:mx-auto rounded-md shadow-md bg-[#f6f5f7b3] mt-20">
        <form onSubmit={resetPassword}>
          <div class="text-center pt-8">
            <h2 class=" text-[30px] md:text-4xl font-bold text-[#BF1F49] GT ">
              Resel Book Store
            </h2>
            <div className="w-[80px] h-[3px] bg-[#563A9F] mx-auto mt-2"></div>
          </div>
          <div class="grid grid-cols-1 gap-x-6 gap-y-4 mt-8 sm:grid-cols-1 md:px-10 ">
            <div className="password_2 block  relative">
              <label class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN">
                New Password*
              </label>
              <div className="eye_div">
                <input
                  required
                  name="password"
                  placeholder="XXXXXXXX"
                  className="input block border  border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm placeholder:font-normal text-[15px]"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-2">
            <button
              type="submit"
              class={`my-5 px-12 flex justify-center bg-[#3B82F6] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#307fff] shadow-lg cursor-pointer transition ease-in duration-300 ${
                   buttonHidden ? "disabled-button" : ""
                 }`}
            >
              {buttonHidden && (
                <>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                </>
              )}{" "}
              Reset password
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default TokenPage;
