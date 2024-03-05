import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from "@/Components/Home/Banner/Banner";
import { Diploma } from "@/Components/Home/Products/Diploma/Diploma";
import { Reviews } from "@/Components/Home/Reviews/Reviews";
import { Contact } from "@/Components/Home/Contact/Contact";
import { Genaral } from "@/Components/Home/Products/Genaral/Genaral";
import { Medical } from "@/Components/Home/Products/Medical/Medical";
import { WriteReview } from "@/Components/Home/WriteReview/WriteReview";

export default function Home() {
  return (
    <div className="bg-[#ffffff] overflow-hidden xl:overflow-visible ">
      <Banner />
      <div className="max-w-screen-xl mx-auto ">
        <Diploma />
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 md:px-5">
        <Genaral />
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 md:px-5">
        <Medical />
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 md:px-5">
        <Reviews />
      </div>
      <div className="max-w-screen-xl mx-auto mt-0 md:px-5">
        <WriteReview />
      </div>
      <div className="max-w-screen-xl mx-auto mt-20  md:px-5">
        <Contact />
      </div>
    </div>
  );
}
