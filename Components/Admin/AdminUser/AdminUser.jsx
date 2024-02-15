import React from "react";

export const AdminUser = () => {
  return (
    <>
      <div class=" row-span-2 bg-white shadow rounded-lg">
        <div class="w-[100%] bg-[#16A34A] text-white flex items-center justify-between px-32 py-5 font-semibold border-b border-gray-100">
          <div className="flex justify-between ">
            <span>New Created Account</span>
          </div>
        </div>
        <div class="overflow-y-auto">
          <ul class="p-6 space-y-6">
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/82.jpg"
                  alt="Annette Watson profile picture"
                />
              </div>
              <span class="text-gray-600">Annette Watson</span>
              <span class="ml-auto font-semibold">9.3</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                  alt="Calvin Steward profile picture"
                />
              </div>
              <span class="text-gray-600">Calvin Steward</span>
              <span class="ml-auto font-semibold">8.9</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/80.jpg"
                  alt="Ralph Richards profile picture"
                />
              </div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/79.jpg"
                  alt="Bernard Murphy profile picture"
                />
              </div>
              <span class="text-gray-600">Bernard Murphy</span>
              <span class="ml-auto font-semibold">8.2</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/78.jpg"
                  alt="Arlene Robertson profile picture"
                />
              </div>
              <span class="text-gray-600">Arlene Robertson</span>
              <span class="ml-auto font-semibold">8.2</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/77.jpg"
                  alt="Jane Lane profile picture"
                />
              </div>
              <span class="text-gray-600">Jane Lane</span>
              <span class="ml-auto font-semibold">8.1</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="Pat Mckinney profile picture"
                />
              </div>
              <span class="text-gray-600">Pat Mckinney</span>
              <span class="ml-auto font-semibold">7.9</span>
            </li>
            <li class="flex items-center">
              <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Norman Walters profile picture"
                />
              </div>
              <span class="text-gray-600">Norman Walters</span>
              <span class="ml-auto font-semibold">7.7</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
