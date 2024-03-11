"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import "./Singel_user.css";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const SingelUsers = () => {
  const { id } = useParams();
  const [singelUser, setSingelUser] = useState();
  const [userInfo, setInfo] = useState();
  const [createdbookUser, setCreatedbookUser] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Loading2, setLoading2] = useState(true);
  const [reload, setReloade] = useState(false);

  useEffect(() => {
    const getCookiesData = Cookies.get("CookieYouserData");
    const cookiesInfo = JSON.parse(getCookiesData);
    setInfo(cookiesInfo);

    //  ------------------ searching field -----------
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/users/${id}`
        );

        setSingelUser(result?.data?.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    // ------------ get 3 book lisht -----------
    async function fetchData2() {
      try {
        const result = await axios.get(
          `https://resell-book-store-server.vercel.app/api/v1/books/?searchTerm=${singelUser?.email}&page=1&limit=5&sort=createdAt&sortOrder=desc`
        );

        setCreatedbookUser(result?.data?.data);
        setLoading2(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData2();
  }, [id, singelUser?.email, reload]);

  // --------------- delete a Book -----------------
  async function deleteBook(bookId, name) {
    try {
      const response = await axios.delete(
        `https://resell-book-store-server.vercel.app/api/v1/books/${bookId}`
      );

      if (response?.data?.success) {
        Swal.fire({
          title: `${name}`,
          text: `Deleted Successfully`,
          icon: "success",
        });
        setReloade(true);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      // Optionally, handle the error in a meaningful way
    }
  }

  // ============== Ruler update ===============
  async function RulerUpdate(id, text) {
    const rulerUpdateData = {
      ruler: text,
    };
    try {
      const response = await axios.patch(
        `https://resell-book-store-server.vercel.app/api/v1/users/${id}`,
        rulerUpdateData
      );

      if (response?.data?.success) {
        Swal.fire({
          title: "Success",
          text: "Updated Successfully",
          icon: "success",
        });
        setReloade(true);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      // Optionally, handle the error in a meaningful way
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-3 justify-center items-center">
        {/* user-info */}
        <div className="singel-user  mt-10 md:ms-5">
          <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-center">
            {" "}
            {singelUser?.name}{" "}
          </h1>
          <span className="text-white text-[12px] font-bold text-center flex justify-center">
            <p className=" bg-green-800 px-2 mt-2">{singelUser?.ruler}</p>
          </span>
          <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          {Loading && (
            <div class="h-screen w-[100%] bg-white flex justify-center mt-40">
              <img
                class="h-16 w-16 "
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt=""
              />
            </div>
          )}

          <div className="md:ps-8">
            {/* <div class="grid md:grid-cols-3 justify-center text-sm md:w-[80%] mx-auto">
              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-bold text-[#000]">
                  Name : <span className="font-[400]">{cookiesInfo?.name}</span>
                </div>
                <div class="px-4 py-2 font-semibold">
                  Roll :{" "}
                  <span className="font-[400]">{cookiesInfo?.studentRoll}</span>{" "}
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-semibold">
                  Gender :{" "}
                  <span className="font-[400]">{cookiesInfo?.gender}</span>{" "}
                </div>
                <div class="px-4 py-2 font-semibold">
                  Join Date:{" "}
                  <span className="font-[400]">{cookiesInfo?.joinginDate}</span>{" "}
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-semibold">
                  institute :{" "}
                  <span className="font-[400]">{cookiesInfo?.institute}</span>{" "}
                </div>
                <div class="px-4 py-2 font-semibold">
                  Contact No :{" "}
                  <span className="font-[400]">{cookiesInfo?.department}</span>{" "}
                </div>
              </div>
              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-semibold">
                  Address:{" "}
                  <span className="font-[400]">{cookiesInfo?.address}</span>{" "}
                </div>
              </div>
              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-semibold">
                  Email:{" "}
                  <span className="font-[400]">{cookiesInfo?.email}</span>{" "}
                </div>
              </div>
              <div class="grid grid-cols-1">
                <div class="px-4 py-2 font-semibold">
                  Phone:{" "}
                  <span className="font-[400]">{cookiesInfo?.phone}</span>{" "}
                </div>
              </div>
            </div> */}

            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Department : </span>{" "}
              {singelUser?.department}
            </p>

            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Inistitute : </span>{" "}
              {singelUser?.institute}
            </p>

            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Student Roll : </span>{" "}
              {singelUser?.studentRoll}
            </p>
            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Address : </span>{" "}
              {singelUser?.address}
            </p>
            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Phone : </span>{" "}
              {singelUser?.phone}
            </p>
            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Email : </span>{" "}
              {singelUser?.email}
            </p>
            <p class="pt-4 text-base  flex items-center justify-center lg:justify-start text-center">
              <FaRegDotCircle className="me-2 text-[#9333EA]" />
              <span className="font-bold pe-2">Gender : </span>{" "}
              {singelUser?.gender}
            </p>

            <div class="pt-12 pb-8 flex flex-wrap justify-center md:justify-start gap-2">
              <button
                onClick={() => RulerUpdate(singelUser?._id, "block")}
                class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
              >
                Block
              </button>
              {userInfo?.ruler === "superAdmin" && (
                <>
                  <button
                    onClick={() => RulerUpdate(singelUser?._id, "admin")}
                    class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Create Admin
                  </button>
                </>
              )}
              {userInfo?.ruler === "superAdmin" && (
                <>
                  <button
                    onClick={() => RulerUpdate(singelUser?._id, "student")}
                    class="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Student
                  </button>
                </>
              )}
              {userInfo?.ruler === "superAdmin" && (
                <>
                  <button
                    onClick={() => RulerUpdate(singelUser?._id, "superAdmin")}
                    class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Super Admin
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className=" py-8 mt-10 singel-user md:ms-5">
          <div className="d">
            <div className="pb-5">
              <h1 class="text-2xl font-bold lg:pt-0 text-center">
                {" "}
                Total Posted
              </h1>

              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            </div>
            {Loading2 && (
              <div class="h-screen w-[100%] bg-white flex justify-center mt-40">
                <img
                  class="h-16 w-16 "
                  src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                  alt=""
                />
              </div>
            )}

            <div className="md:px-3 grid items-center gap-3 justify-center md:justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(createdbookUser) &&
                createdbookUser.map((book) => (
                  <>
                    <div
                      key={book?.id}
                      className=" overflow-hidden bg-[#fff] rounded-md border-2"
                    >
                      <div className=" relative">
                        <div className="bg-[#0000007b] w-[100%] items-center flex justify-center h-[100%]  absolute rounded-t-md">
                          <div className="text-white text-center bg-[#000000b0] px-2 rounded-full">
                            {book?.view?.slice(0, 10)}
                          </div>
                        </div>
                        <Image
                          width={1424}
                          height={450}
                          className="rounded-t-md  w-[100%] h-[300px]"
                          src={book?.bookImage}
                          alt=""
                        />
                        <div className="flex bg-[#0000001e] justify-between w-[100%] px-2 absolute top-0 text-[#fff]   py-2  text-center">
                          <button
                            onClick={() =>
                              deleteBook(book?._id, book?.bookName)
                            }
                            className="text-[12px] md:text-[12px] bg-red-800 hover:bg-red-500 text-white px-[10px] py-[3px] rounded-sm"
                          >
                            Delete
                          </button>
                          <Link href={`/detailsBook/${book?._id}`}>
                            <button className="text-[12px] md:text-[14px] bg-green-700 hover:bg-green-600 text-white px-[10px] py-[3px] rounded-sm">
                              view
                            </button>
                          </Link>
                        </div>
                        <h1 className="flex bg-[#000000a2]  w-[100%] justify-center absolute bottom-0 text-[#fff] text-[18px] md:text-[25px] font-[700] py-2  text-center">
                          {book?.bookName}
                        </h1>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingelUsers;
