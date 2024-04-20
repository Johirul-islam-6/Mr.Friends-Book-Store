"use client";
import { CreateBook } from "@/Components/Profile/CreateBook/CreateBook";
import { AllSellingBooks } from "@/Components/Profile/SellingBooks/AllSellingBooks";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./profile.css";
import createImage from "@/app/Assets/prifile/create-image.webp";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Profile = () => {
  const navigate = useRouter();

  // ---scroll bar ------

  const [buttonHidden, setHidden] = useState(false);
  const [userEmail, setEmailFieldValu] = useState("");
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });
  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  };

  const [Loding, setLoding] = useState(false);
  const [loding2, setLoding2] = useState(true);
  const [loding3, setLoding3] = useState(true);
  const accessToken = Cookies.get("accessToken");
  const [openMadal1, setModal1] = useState(false);
  const [userId, setuserId] = useState();
  const [cookiesInfo, setCookiesInfo] = useState();

  const [createdBookInfo, setCreateBookInfo] = useState();
  const [refreshbook, setrefresh] = useState(false);

  const [UserInformation, setUserInformation] = useState([]);

  const createdBook = (e) => {
    if (e) {
      setrefresh(e);
    }
  };

  useEffect(() => {
    setLoding(true);
    if (!accessToken) {
      return navigate.push("/login");
    }
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfos = JSON.parse(getCookiesData);
    setuserId(cookiesInfos?.id);
    setCookiesInfo(cookiesInfos);

    // ------------ get 3 book lisht -----------
    if (cookiesInfo?.email) {
      async function fetchData() {
        try {
          const result = await axios.get(
            `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=${cookiesInfo?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
          );

          setCreateBookInfo(result?.data?.data);
          setLoding2(false);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }

    // ------- user admin checking-----
    if (cookiesInfo?.email) {
      async function fetchData2() {
        try {
          const result = await axios.get(
            `https://resell-book-store-server.vercel.app/api/v1/users/?searchTerm=${cookiesInfo?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
          );

          setUserInformation(result?.data?.data);
          setLoding3(false);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData2();
    }

    setTimeout(() => {
      setrefresh(false);
    }, 5000);
  }, [refreshbook, accessToken, cookiesInfo?.email, navigate]);

  const logout = () => {
    Cookies.remove("CookieYouserData");
    Cookies.remove("accessToken");
    window.location.reload();
  };

  const closeModal = (e) => {
    setModal1(e);
  };

  //  =============   Edite profile ===============

  const [editProfile, setEditProfile] = useState(false);

  const editeUserInfo = (userInfomation) => {
    setEditProfile(!editProfile);

    console.log(userInfomation);
  };

  // -----change password ----
  const [changepasswordfield, setchangepasswordfield] = useState(false);
  const [OldPassword, setOldPassword] = useState();
  const [NewPasswordvalue, setNewPassword] = useState();

  const NewPassword = () => {
    const passwordChange = {
      OldPassword,
      NewPasswordvalue,
    };
    console.log(passwordChange);
  };

  const changepasswordfieldbtn = () => {
    setchangepasswordfield(!changepasswordfield);
  };

  // ================ Edite Profile API ============

  const heldelEditProfile = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const studentRoll = e.target.elements.roll.value;
    const institute = e.target.elements.institute_name.value;
    const department = e.target.elements.department.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    // const password = e.target.elements.password.value;
    const gender = e.target.elements.gender.value;

    const userData = {
      name,
      studentRoll,
      institute,
      department,
      address,
      phone,
      email,
      gender,
    };

    setHidden(true);

    console.log(userData);
  };

  // ======== when User block ======
  if (UserInformation[0]?.ruler === "block") {
    return (
      <>
        <div className="flex justify-center items-center h-[100vh] ">
          <h1 className="text-center text-red-700 text-[25px] font-[600]">
            Sorry Your account is Suspended!
          </h1>
        </div>
      </>
    );
  }

  // ========== user admin access =====
  if (UserInformation[0]?.ruler) {
    if (UserInformation[0]?.ruler === cookiesInfo?.ruler) {
    } else {
      Cookies.remove("CookieYouserData");
      Cookies.remove("accessToken");
      window.location.reload();
    }
  }

  if (!Loding) {
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

  if (loding2) {
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

  return (
    <>
      <div class="relative max-w-screen-xl bg-[#f3f3f3] mx-auto ">
        <div class=" mx-auto py-5">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-2 ">
            <div class="col-span-5  sm:col-span-3 ">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <div className="bg-[#563A9F] p-10 rounded-full">
                    <p className="text-[22px] text-white font-bold">
                      {cookiesInfo?.name?.slice(0, 2)}
                    </p>
                  </div>

                  <h1 class="text-xl font-bold pt-5">{cookiesInfo?.name}</h1>

                  <div className="flex justify-center items-center gap-3 md:gap-x-8  mt-3  w-[100%]">
                    {cookiesInfo?.ruler === "superAdmin" ||
                    cookiesInfo?.ruler === "admin" ? (
                      <>
                        <div class="mt-2 flex flex-wrap gap-4 justify-center">
                          <a
                            href={"/admin"}
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 font-[600] text-[14px] rounded bttn IN"
                          >
                            Admin panel
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div class="mt-2 flex flex-wrap gap-4 justify-center">
                          <a
                            href={"#"}
                            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 font-[600] text-[14px] rounded bttn IN"
                          >
                            Student
                          </a>
                        </div>
                      </>
                    )}

                    <div class="mt-2 flex flex-wrap gap-4 justify-center">
                      <button
                        onClick={() => editeUserInfo(cookiesInfo)}
                        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 text-[14px] font-[600] rounded bttn IN"
                      >
                        Edite Profile
                      </button>
                    </div>
                  </div>
                </div>
                <hr class="my-4 border-t border-gray-300" />

                <div class="flex flex-col">
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    information
                  </span>
                  <ul>
                    <li class="mb-2 text-[#181717e9] font-[600] singIN">
                      joining date :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.joinginDate}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600] ">
                      Roll :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.studentRoll}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600]">
                      Gender :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.gender}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600]">
                      Phone :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.phone}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600]">
                      Email :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.email}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600]">
                      Institute :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.institute}
                      </span>{" "}
                    </li>
                    <li class="mb-2 singIN text-[#181717e9] font-[600]">
                      Department :{" "}
                      <span className="text-[#3f3f3fe9] font-[500]">
                        {cookiesInfo?.department}
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  onClick={logout}
                  class="mt-6 flex flex-wrap gap-4 justify-center cursor-pointer"
                >
                  <span class="bg-red-600 uppercase hover:bg-red-800 text-[14px] singIN text-white py-2 px-6 rounded">
                    log out
                  </span>
                </div>
              </div>
            </div>

            {/* ------------- Your store ------------- */}
            <div class="col-span-4 sm:col-span-9 relative ">
              <div class="bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="block">
                    <h2 class="md:text-xl font-bold ">
                      My Resale posted Books{" "}
                    </h2>
                    <p className="text-[8px] md:text-[11px]">
                      আপনি সর্বোচ্চ ৩ টি বই পাবলিশ করতে পারবে ।
                    </p>
                  </div>

                  <button
                    onClick={() => setModal1(true)}
                    class="text-[10px] md:text-[14px] flex items-center gap-[2px] md:gap-2 hover:text-[#563A9F] cursor-pointer hover:border-[#563A9F] border-2 p-2 rounded-md px-2 md:px-5 font-bold "
                  >
                    <svg
                      className="block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      hanging="10"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>{" "}
                    <svg
                      className="hidden md:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      hanging="16"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>{" "}
                    Create a Book
                  </button>
                </div>
                {openMadal1 && (
                  <>
                    <div className="CreateModal  relative z-[100] ">
                      <div className=" absolute top-[-650px] md:top-[-150px] bg-[#FFF1E6] border-[6px] rounded-lg p-2">
                        <div className="flex justify-center ">
                          <button
                            className="bg-[#bc1f1fb4] hover:bg-red-700 rounded-md p-2 text-white flex gap-[2px] items-center"
                            onClick={() => setModal1(false)}
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
                            Close
                          </button>
                        </div>
                        <CreateBook
                          createdBook={createdBook}
                          createdBookInfo={createdBookInfo}
                          closeModal={closeModal}
                          userInfo={cookiesInfo}
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* ------ Display My Selling Book list-------- */}
                <div className="all-Selling-book">
                  <div className="profile-container grid items-center gap-3 justify-center md:justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {createdBookInfo?.length !== 0 ? (
                      <>
                        <AllSellingBooks
                          createdBooks={createdBook}
                          createdBookInfo={createdBookInfo}
                          userInfo={cookiesInfo}
                          createdBook={createdBook}
                        />
                      </>
                    ) : (
                      <>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                        {/* ------ optonal ------ */}
                        <div className="course-Card-shadow  overflow-hidden bg-[#fff] rounded-md p-5 border-2">
                          <Image
                            onClick={() => setModal1(true)}
                            className="border-2 h-[352px] cursor-pointer flex justify-center items-center w-[100%] object-cover rounded-lg"
                            width={500}
                            height={400}
                            src={createImage}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div class="mb-6 mt-5">
                  <div class="flex justify-between flex-wrap gap-2 w-full">
                    <span class="text-gray-700 font-bold">কিছু কথা..</span>
                    <p>
                      <span class="text-gray-700 mr-2">**মানুষের ব্যবহার</span>
                      <span class="text-gray-700">তার পরিচয়**</span>
                    </p>
                  </div>
                  <p class="mt-5">
                    তিনি সত্যিকার অর্থে একজন ‘পর্যটক রিপোর্টার’। তিনি এক জায়গায়
                    বসে খবর সংগ্রহ করেন না, খবর সংগ্রহের জন্য ছুটে যান প্রত্যন্ত
                    অঞ্চলে; তাঁর কর্ম এলাকা রাজশাহী হলেও নাটোর, নওগাঁ, টাঙ্গাইল
                    কিংবা ঢাকায়ও ছুটে যান খবরের খোঁজে। আমাদের চারপাশে কত বিচিত্র
                    ঘটনা ঘটে; সেটি হতে পারে পারিবারিক ।
                  </p>
                </div>
              </div>
              {/* ===================== Edit Profile Modal ================== */}
              {editProfile && (
                <>
                  <div class=" mx-auto bg-white md:h-[92vh] shadow-md rounded-2xl w-[100%]  absolute top-0 left-0 ">
                    <div class="relative flex h-32 max-w-[100%] justify-center bg-cover ">
                      <img
                        class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                        src="https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=3216&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <div class="mx-auto flex justify-center mt-[1px] z-[50] w-[141px] h-[141px] rounded-full bg-[url('https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                        <div class="bg-white rounded-full w-6 h-6 text-center ml-28 mt-4">
                          <input
                            type="file"
                            name="profile"
                            id="upload_profile"
                            hidden
                            required
                          />

                          <label
                            for="upload_profile"
                            class="inline-flex items-center"
                          >
                            <svg
                              data-slot="icon"
                              class="w-5 h-5 text-blue-700"
                              fill="none"
                              stroke-width="1.5"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                              ></path>
                            </svg>
                          </label>
                        </div>
                      </div>
                    </div>

                    <form
                      onSubmit={heldelEditProfile}
                      className="md:px-20 bg-white"
                    >
                      {/* <h1 className="text-black text-[30px] font-[600] text-center pt-12">
                        Hi Rasel
                      </h1> */}

                      <div className="flex pb-5 justify-center items-center mt-7">
                        <div
                          onClick={changepasswordfieldbtn}
                          className="px-3 cursor-pointer text-white py-1 bg-[#2563EB] text-[12px] font-[600]"
                        >
                          Change Password
                        </div>
                      </div>

                      {/* -------- password change --------- */}

                      {changepasswordfield && (
                        <div className="md:px-20 mt-5 box-shadow-field pt-2">
                          <div class="grid gap-6 mb-6 lg:grid-cols-3 w-[100%] px-5  items-center">
                            <div className="password_2 block  relative">
                              <label class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN">
                                New Password*
                              </label>
                              <div className="eye_div">
                                <input
                                  required
                                  name="password"
                                  className="input block border  border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm placeholder:font-normal text-[15px]"
                                  type={
                                    passValue.showPassword ? "text" : "password"
                                  }
                                  onChange={handlePasswordChange("password")}
                                  value={passValue.password}
                                  placeholder="minimum 6 characters"
                                />

                                <div
                                  className="icon_button absolute right-4 top-11 cursor-pointer"
                                  onClick={handleClickShowPassword}
                                >
                                  {passValue.showPassword ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="16"
                                      width="18"
                                      viewBox="0 0 576 512"
                                    >
                                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="16"
                                      width="20"
                                      viewBox="0 0 640 512"
                                    >
                                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* ------setp----- */}
                            <div>
                              <label
                                for="nombre"
                                class="block mb-2 text-sm text-gray-600 font-[600]"
                              >
                                Old Password*
                              </label>
                              <input
                                onChange={(e) =>
                                  setOldPassword(e?.target?.value)
                                }
                                placeholder="*********"
                                type="text"
                                id="oldpassword"
                                name="nombre"
                                class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                              />
                            </div>

                            {/* ------setp----- */}
                            <div className="flex pb-5 justify-start items-center md:mt-10">
                              <button
                                onClick={NewPassword}
                                className="px-5 text-white py-[6px]   bg-[#2563EB] text-[14px] font-[600]"
                              >
                                Confirm Password
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="px-5 box-shadow-field2 pt-5 md:py-16 pb-8 md:pb-4 ">
                        <div class="grid gap-6  lg:grid-cols-3 w-[100%] ">
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Full Name*
                            </label>
                            <input
                              onChange={() => setchangepasswordfield(false)}
                              defaultValue={cookiesInfo?.name}
                              type="text"
                              id="nombre"
                              name="name"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Student Roll*
                            </label>
                            <input
                              defaultValue={cookiesInfo?.studentRoll}
                              type="text"
                              id="nombre"
                              name="roll"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Joing Date*
                            </label>
                            <input
                              defaultValue={cookiesInfo?.joinginDate}
                              disabled
                              type="text"
                              id="nombre"
                              name="nombre"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Phone*
                            </label>
                            <input
                              defaultValue={cookiesInfo?.phone}
                              type="text"
                              id="nombre"
                              name="phone"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Email*
                            </label>
                            <input
                              defaultValue={cookiesInfo?.email}
                              type="text"
                              id="nombre"
                              name="email"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Address*
                            </label>
                            <input
                              defaultValue={cookiesInfo?.address}
                              type="text"
                              id="nombre"
                              name="address"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Institute *
                            </label>
                            <input
                              defaultValue={cookiesInfo?.institute}
                              type="text"
                              id="nombre"
                              name="institute_name"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Department *
                            </label>
                            <input
                              defaultValue={cookiesInfo?.department}
                              type="text"
                              id="nombre"
                              name="department"
                              class="w-full px-4 py-2 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              required
                            />
                          </div>
                          {/* ------setp----- */}
                          <div>
                            <label
                              for="nombre"
                              class="block mb-2 text-sm text-gray-600 font-[600]"
                            >
                              Gender *
                            </label>
                            <select
                              // onChange={(e) => setSubject(e?.target?.value)}
                              required
                              name="gender"
                              class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                            >
                              <option className="bg-[#E8F0FE]">
                                {cookiesInfo?.gender}
                              </option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                          </div>
                          {/* ------setp----- */}
                        </div>
                        <div className="flex justify-center items-center mt-8">
                          <button
                            type="submit"
                            className="px-8 text-white py-2 bg-[#2563EB] text-[16px] font-[600]"
                          >
                            update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
