"use client";
import { AllBookList } from "@/Components/DiplomaEngineer/AllBookList";
import { DepartmentBanner } from "@/Components/DiplomaEngineer/Department";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DiplomaSubjec = () => {
  const [SemesterNumber, setSemester] = useState();

  const { id } = useParams();
  let DepartmentName = "";

  if (id === "CT") {
    DepartmentName = "সিভিল টেকনোলজি";
  }
  if (id === "ET") {
    DepartmentName = "ইলেকট্রিক্যাল টেকনোলজি";
  }
  if (id === "MT") {
    DepartmentName = "মেকানিক্যাল টেকনোলজি";
  }
  if (id === "CST") {
    DepartmentName = "কম্পিউটার সাইন্স এন্ড টেকনোলজি";
  }
  if (id === "ETT") {
    DepartmentName = "ইলেকট্রনিক্স টেকনোলজি";
  }
  if (id === "PT") {
    DepartmentName = "পাওয়ার টেকনোলজি";
  }
  if (id === "EMT") {
    DepartmentName = "ইলেকট্রোমেডিক্যাল টেকনোলজি";
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <DepartmentBanner id={id} department={DepartmentName} />
    </div>
  );
};

export default DiplomaSubjec;
