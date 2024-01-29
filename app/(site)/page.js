import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from "@/Components/Home/Banner/Banner";
import { Diploma } from "@/Components/Home/Products/Diploma/Diploma";

export default function Home() {
  return (
    <div className="bg-[#ffffff] overflow-hidden xl:overflow-visible ">
      <Banner />
      <div className="max-w-screen-xl mx-auto ">
        <Diploma />
      </div>
    </div>
  );
}
