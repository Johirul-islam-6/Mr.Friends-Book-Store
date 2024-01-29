"use client";

import { useEffect, useState } from "react";

export default function Button({ setIsOpen, isOpen }) {
  const genericHamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-[#000]   transition ease transform duration-300`;

  return (
    <div onClick={() => setIsOpen(true)} className="drawer-content">
      <label
        onClick={() => setIsOpen(!isOpen)}
        htmlFor="my-drawer"
        className="z-[1000]"
      >
        <div
          className="flex flex-col h-9 w-12 py-[3px] rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </div>
      </label>
    </div>
  );
}
