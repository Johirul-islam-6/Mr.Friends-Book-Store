import "./Products.css";
import ProductSlider from "./ProductSlider";

const CompnaySlier = () => {
  return (
    <div className=" mb-14 md:mb-28">
      <h1 className="text-cetegory-heading ps-1 md:text-[38px]  text-center">
        All Publication
      </h1>
      <p className="text-[16px] text-[#00000070] text-center pb-10">
        বিশ্বস্ত ছাত্র-ছাত্রী সেবায় নিয়োজিত ।
      </p>
      {/* <div className="w-[120px] mx-auto h-[5px] bg-[#573BA2] mb-5"></div> */}

      <ProductSlider />
    </div>
  );
};

export default CompnaySlier;
