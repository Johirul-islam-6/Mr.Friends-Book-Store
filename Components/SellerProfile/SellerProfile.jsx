import React, { useState } from "react";

export const SellerProfile = ({ ResultBooks }) => {
  return (
    <>
      <div className="px-5">
        <div class="flex flex-col">
          <span class="text-[#232323] uppercase font-bold tracking-wider mb-2">
            যোগাযোগ করার ঠিকানা
          </span>
          <ul>
            <li class="mb-2 text-[#343434] ">
              <span className="font-bold">বই সংগ্রহ করার লোকেশন :</span>{" "}
              {ResultBooks?.location}
            </li>
            <li class="mb-2 text-[#343434] ">
              <span className="font-bold">
                বই সংগ্রহ করার কন্টাক্ট নাম্বার :{" "}
              </span>{" "}
              {ResultBooks?.phone}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
