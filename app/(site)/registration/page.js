"use client";
import React, { useState } from "react";
import "./registration.css";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Registration = () => {
  const router = useRouter();
  const [institutes, setSubject] = useState();
  const [buttonHidden, setHidden] = useState(false);
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

  const allAcademic = [
    { name: "Mymensingh Polytechnic Institute", valueI: "polytechnic" },
    { name: "Rumdo institute of modern technology", valueI: "polytechnic" },
    { name: "Mymensingh Medical college", valueI: "medical" },
    { name: "SSC In", valueI: "SSC" },
    { name: "HSC In", valueI: "HSC" },
    { name: "Honors", valueI: "Honors" },
    { name: "Others...", valueI: "others" },
  ];

  const polytechnic = [
    "Computer Science and Technology",
    "Electronics Technology",
    "Civil Technology",
    "Mechanical Technology",
    "Power Technology",
    "Electro-Medical Technology",
    "Electrical Technology",
  ];
  const Romdo = [
    "Computer Science and Technology",
    "Electronics Technology",
    "Civil Technology",
    "Mechanical Technology",
    "Electrical Technology",
    "Automobile Technology",
    "Food Technology",
    "Power Technology",
    "Architecture and Interior Design Technology",
    "Tourism and Hospitality Management",
    "Electro-Medical Technology",
    "Nursing",
  ];
  const genaralSSC = ["vocational", "Science", "Commerce", "Arts", "Others"];
  const genaralHSC = ["Science", "Commerce", "Arts", "Others"];
  const others = ["Others"];

  const genaralHight = [
    "Physics",
    "Mathematics",
    "Chemistry",
    "Computer Science",
    "Biology",
    "Economics",
    "Accounting",
    "Management",
    "English Literature",
    "History",
    "Political Science",
    "Sociology",
    "Others..",
  ];
  const doctor = [
    "Anatomy",
    "Physiology",
    "Biochemistry",
    "Pharmacology",
    "Pathology",
    "Microbiology",
    "Community Medicine",
    "Medicine",
    "Surgery",
    "Dermatology",
    "Psychiatry",
    "Radiology",
    "Others..",
  ];

  const [ss, sets] = useState();
  // -------------------- Back end intregrate ------------------

  const HandleSubmite = async (e) => {
    e.preventDefault();
    // Extract form data directly without FormData
    const name = e.target.elements.name.value;
    const studentRoll = e.target.elements.roll.value;
    const institute = e.target.elements.institute_name.value;
    const department = e.target.elements.department.value;
    const address = e.target.elements.address.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const gender = e.target.elements.gender.value;
    const agree = e.target.elements.agree.value;
    const ruler = "student";

    if (institute === "select") {
      return alert("please select institute name");
    }
    if (department === "select") {
      return alert("please select department Cetagory");
    }
    if (agree === null) {
      return (
        sets("text-red-500 font-extrabold"),
        alert("please Agree all privacy policy")
      );
    }

    // Now you have all the values, and you can use them as needed
    const userData = {
      name,
      studentRoll,
      institute,
      department,
      address,
      phone,
      email,
      password,
      gender,
      ruler,
    };

    setHidden(true);
    try {
      const response = await axios.post(
        "https://resell-book-store-server.vercel.app/api/v1/users/create-user",
        userData
      );
      const result = response.data;

      const cookiesData = result?.data;

      // if get the data then save
      if (result?.success && cookiesData) {
        const expirationTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
        Cookies.set("accessToken", JSON.stringify(cookiesData?.accessToken), {
          expires: expirationTime,
        });
        Cookies.set("CookieYouserData", JSON.stringify(cookiesData));
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });
        router.push("/profile");
      }

      setTimeout(() => {
        window.location.reload();
      }, 700);
    } catch (error) {
      console.error("Error fetching data:", error);

      Swal.fire({
        title: `${error?.response?.data?.errorMessages[0]?.message}`,
        text: ` Field : ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="bg-[#F6F5F7] border-2">
        <section class="max-w-4xl px-5 pt-6 mx-auto rounded-md shadow-md bg-[#FFFFFF] mt-3">
          <div class="text-center pb-3">
            <h2 class="text-4xl font-[500] text-[#2c293b]  GT">Registration</h2>
          </div>

          <form onSubmit={HandleSubmite}>
            <div class="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 sm:grid-cols-2 md:px-5">
              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="username"
                >
                  Full name*
                </label>
                <input
                  id="username"
                  type="text"
                  name="name"
                  placeholder="Johirul Islam"
                  class="input block border border-gray-300 focus:border-pitch-black placeholder:font-normal text-[15px] py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                  required
                />
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="phone"
                >
                  Student roll*
                </label>
                <input
                  required
                  id="roll"
                  name="roll"
                  placeholder="maximus 6 number"
                  type="number"
                  class="input block border border-gray-300 placeholder:font-normal text-[15px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                />
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="institute"
                >
                  Institute name*
                </label>

                <select
                  onChange={(e) => setSubject(e?.target?.value)}
                  required
                  name="institute_name"
                  class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                >
                  <option className="bg-[#E8F0FE]" value="select">
                    select
                  </option>
                  {allAcademic.map((item, index) => (
                    <option key={index} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="phone"
                >
                  Department name*
                </label>

                <select
                  name="department"
                  class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                >
                  <option className="bg-[#E8F0FE]">select</option>
                  {institutes === "Mymensingh Polytechnic Institute" && (
                    <>
                      {polytechnic?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "Rumdo institute of modern technology" && (
                    <>
                      {Romdo?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "SSC In" && (
                    <>
                      {genaralSSC?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "HSC In" && (
                    <>
                      {genaralHSC?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "Honors" && (
                    <>
                      {genaralHight?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "Mymensingh Medical college" && (
                    <>
                      {doctor?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                  {institutes === "others" && (
                    <>
                      {others?.map((item, index) => (
                        <>
                          <option key={index} className="">
                            {item}
                          </option>{" "}
                        </>
                      ))}
                    </>
                  )}
                </select>
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="emailAddress"
                >
                  Current address*
                </label>
                <input
                  required
                  id="address"
                  name="address"
                  type="text"
                  class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm placeholder:font-normal text-[15px]"
                  placeholder="technical More, Mymensingh"
                />
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="phone"
                >
                  Phone number*
                </label>
                <input
                  required
                  id="phone"
                  name="phone"
                  placeholder="017822XXXXX"
                  type="phone"
                  class="input block border border-gray-300 placeholder:font-normal text-[15px] focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm"
                />
              </div>

              <div>
                <label
                  class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN"
                  for="emailAddress"
                >
                  Email address*
                </label>
                <input
                  required
                  id="emailAddress"
                  type="email"
                  name="email"
                  class="input block border border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm placeholder:font-normal text-[15px]"
                  placeholder="Enter Your valid Email"
                />
              </div>

              <div className="password_2 block  relative">
                <label class="text-[#2C293B] md:text-[14px] text-[14px] ps-[2px] font-[550]  md:ps-1 IN">
                  Password*
                </label>
                <div className="eye_div">
                  <input
                    required
                    name="password"
                    className="input block border  border-gray-300 focus:border-pitch-black  py-2 px-3 w-full focus:outline-none mt-1 IN rounded-sm placeholder:font-normal text-[15px]"
                    type={passValue.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={passValue.password}
                    placeholder="minimum 6 characters"
                  />

                  <div
                    className="icon_button absolute right-4 top-10 cursor-pointer"
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
            </div>

            <div className="flex justify-between md:px-2">
              <div className="all-gender flex items-center gap-5 ps-5 py-3">
                <div class="align-items-center d-flex form-check form-check-inline gap-2 items-center">
                  <input
                    required
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    class="form-check-input is-valid dirty touched"
                    // aria-required="true"
                    // aria-invalid="false"
                  />
                  <label
                    data-v-7a640f0b=""
                    for="male"
                    class="form-check-label ps-[2px]"
                  >
                    Male
                  </label>
                </div>
                <div class="align-items-center d-flex form-check form-check-inline gap-2 items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                    class="form-check-input is-valid dirty touched"
                    // aria-required="true"
                    // aria-invalid="false"
                  />
                  <label
                    data-v-7a640f0b=""
                    for="Female"
                    class="form-check-label ps-[2px]"
                  >
                    Female
                  </label>
                </div>
                <div class="align-items-center d-flex form-check form-check-inline gap-2 items-center">
                  <input
                    type="radio"
                    name="gender"
                    id="Others"
                    value="Others"
                    class="form-check-input is-valid dirty touched"
                    // aria-required="true"
                    // aria-invalid="false"
                  />
                  <label
                    data-v-7a640f0b=""
                    for="Others"
                    class="form-check-label ps-[2px]"
                  >
                    Others
                  </label>
                </div>
              </div>
              {/* <p className="pt-3 text-end text-[14px] hover:text-[#982121] cursor-pointer underline">
                Forgot your password?
              </p> */}
            </div>

            <div class="md:ps-6">
              <h2
                class={`mt-4 text-[15px] text-[#000]  flex items-center gap-2 ${
                  ss ? ss : ""
                } `}
              >
                <input className="" type="checkbox" name="agree" id="" /> I
                agree all{" "}
                <span className="text-[#267bbc]  underline cursor-pointer">
                  privacy policy
                </span>
                /{/* <br /> */}
                <Link href={"/login"}>
                  <span className="text-[#481D65] cursor-pointer underline  font-[500]">
                    Login
                  </span>
                </Link>
              </h2>
            </div>
            <div class="flex justify-center mt-1">
              <button
                type="submit"
                class={`my-5 px-12 justify-center bg-[#563A9F] text-gray-100 py-3  rounded-md tracking-wide
                 font-semibold  focus:outline-none focus:shadow-outline hover:bg-[#431ea0] shadow-lg cursor-pointer transition ease-in duration-300 ${
                   buttonHidden ? "disabled-button" : ""
                 } `}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Registration;
