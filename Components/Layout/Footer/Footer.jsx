import "./Footer.css";
import logo from "@/app/Assets/Navbar/ssl.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleDoubleRight,
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="mt-[10px] footer border-t-2  ">
        <div className=" mx-auto mt-5  md:p-2  flex flex-col  md:gap-10  max-w-screen-xl ">
          <div>
            <div className="md:mt-8">
              <div className="mx-auto w-full  ">
                <div className="relative mt-5 block md:flex justify-end bg-red-400 items-center ">
                  <div className="block">
                    <div className="gradient-rounded-div-bottom  bottom-[-180px] left-[110px] rounded-blur"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4  md:grid-cols-4">
                  {/* -------- col-1 ---------- */}
                  <div
                    className="mx-auto"
                    style={{
                      zIndex: "10",
                    }}
                  >
                    <h2 className="mb-3 text-[16px]  font-[800]  text-[#dcdcdc] uppercase">
                      Our Book List
                    </h2>

                    <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Diploma Resel Book
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Genaral Resel Book
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Medical Resel Book
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Academic Resell Books
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Children Resell Books
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Fiction Resell Books
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        University Books Resell
                      </li>
                    </ul>
                  </div>
                  {/* -------- col-2 ---------- */}
                  <div className="mx-auto">
                    <a href="">
                      <h2 className="mb-2 text-[16px]  font-[800]  text-[#dcdcdc] uppercase">
                        Publication
                      </h2>
                    </a>
                    <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Haq Publication
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        RS Publication
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Panjeree Publication
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Jupiter Publication
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        National Book Foundation
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Macmillan Publication
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Online Retailers Publication
                      </li>
                    </ul>
                  </div>
                  {/* -------- col-3 ---------- */}
                  <div className="mx-auto">
                    <h2 className="mb-2 text-[16px]  font-[800]  text-[#dcdcdc] uppercase">
                      Policies
                    </h2>
                    <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Terms of Use
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Privacy Policy
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Refund Policy
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 hover:underline cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Happy Return Policy
                      </li>
                    </ul>
                  </div>
                  {/* -------- col-4 ---------- */}
                  <div
                    className="mx-auto"
                    style={{
                      zIndex: "10",
                    }}
                  >
                    <h2 className="mb-2 text-[16px]  font-[800]  text-[#dcdcdc] uppercase">
                      Contact
                    </h2>
                    <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2 cursor-pointer ">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />
                        Email: reselstore@gamil.com
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2  cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />{" "}
                        Phone : 01824842336{" "}
                        <span className="text-[10px]">(Whatsapp Message)</span>
                      </li>
                      <li className="py-1 text-[#fff] text-[16px] flex items-center gap-2  cursor-pointer">
                        <FaAngleDoubleRight className="text-[12px] font-[400]" />{" "}
                        Location: CST Department
                        <span className="text-[14px]"> (MPI)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ----------- logo --------- */}

                <div
                  className="flex justify-end  sm:justify-end relative bottom-5 right-0  md:bottom-5 sm:right-20  "
                  style={{
                    zIndex: "10",
                  }}
                >
                  <div className=" ">
                    <Link href="#">
                      <Image
                        width={330}
                        height={300}
                        src={logo}
                        className=" rounded-md border-2 border-white"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[100%] h-[40px] flex justify-between items-center px-5">
        <p className="IN ">Copyright © 2024 @mrfriends.com</p>
        <div className="socal-midiya flex justify-end items-center gap-3">
          {/* <div className="">
            <FaEye />
          </div> */}
          <Link href={"https://www.facebook.com/rasel2023boss"} className="">
            <FaFacebook className="text-[20px] cursor-pointer text-[#2055c9]" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/johirul-islam99"}
            className=""
          >
            <FaLinkedin className="text-[20px] cursor-pointer text-[#2055c9]" />
          </Link>
          <div className="">
            <FaYoutube className="text-[25px] cursor-pointer text-[#b72b2b]" />
          </div>
          <div className="">
            <FaDiscord className="text-[25px] cursor-pointer text-[#2e26a4]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
