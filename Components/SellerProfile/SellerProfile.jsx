import React from "react";

export const SellerProfile = () => {
  return (
    <>
      <div className="px-5">
        <div class="flex flex-col">
          <span class="text-[#232323] uppercase font-bold tracking-wider mb-2">
            information
          </span>
          <ul>
            <li class="mb-2 text-[#343434] ">
              <span className="font-bold">বই সংগ্রহ করার লোকেশন :</span>{" "}
              মাসকান্ধা, টেকনিক্যাল মোর ।
            </li>
            <li class="mb-2 text-[#343434] ">
              <span className="font-bold">বই সংগ্রহ কন্টাক্ট নাম্বার : </span>{" "}
              01824842336
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
