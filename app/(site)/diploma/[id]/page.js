"use client";

import { AllBookList } from "@/Components/Department/AllBookList";
import { DepartmentBanner } from "@/Components/Department/Department";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const DiplomaSubjec = () => {
  const [SemesterNumber, setSemester] = useState();

  const { id } = useParams();
  let DepartmentName = "";

  if (id === "CT") {
    DepartmentName = "Civil ";
  }
  if (id === "ET") {
    DepartmentName = "Electrical ";
  }
  if (id === "MT") {
    DepartmentName = "Mechanical  ";
  }
  if (id === "CST") {
    DepartmentName = "Computer Science ";
  }
  if (id === "ETT") {
    DepartmentName = "Electronic ";
  }
  if (id === "PT") {
    DepartmentName = "Power ";
  }
  if (id === "EMT") {
    DepartmentName = "Electromedical";
  }

  // ---- get semester a function data provide onather components ----

  const getSemesterNumber = (number) => {
    setSemester(number);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <DepartmentBanner
        getSemesterNumber={getSemesterNumber}
        department={DepartmentName}
      />

      <AllBookList
        SemesterNumber={SemesterNumber}
        department={DepartmentName}
      />
    </div>
  );
};

export default DiplomaSubjec;
