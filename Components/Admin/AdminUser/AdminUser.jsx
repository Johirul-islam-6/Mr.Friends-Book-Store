import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";

export const AdminUser = ({ adminUser }) => {
  const [selectedValue, setSelectedValue] = useState("");

  // Define options for the select dropdown
  const options = [
    { value: "superAdmin", label: "superAdmin" },
    { value: "admin", label: "admin" },
    { value: "student", label: "student" },
  ];

  // Event handler for when a value is selected
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div class=" row-span-2 bg-white shadow rounded-lg">
        <div class="w-[100%] bg-[#16A34A] text-white flex items-center justify-center md:px-32 py-5 font-semibold border-b border-gray-100">
          <div className="flex justify-between ">
            <p className="text-[16px] text-center">All Admin List store</p>
          </div>
        </div>
        <div class="overflow-y-auto">
          <ul class="p-6 space-y-6">
            {Array.isArray(adminUser) &&
              adminUser?.map((user, index) => (
                <>
                  <li key={index} class="flex items-center">
                    <div class="h-10 flex justify-center items-center w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <FaUserTie className="text-[22px] text-[#030e10d3]" />
                    </div>
                    <span class="text-gray-600">{user?.name}</span>

                    <select
                      disabled={user?.ruler !== "superAdmin"}
                      className="ml-auto font-semibold text-[16px] text-[#0b78e5c8] border-2 px-[3px]"
                      value={selectedValue}
                      onChange={handleSelectChange}
                    >
                      {/* Map over the options and create an option for each */}
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {user?.ruler === "admin" ? "admin" : "superAdmin"}
                        </option>
                      ))}
                    </select>
                  </li>
                </>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
