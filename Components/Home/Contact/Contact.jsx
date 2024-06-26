import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="contact ">
        <div className="flex flex-col">
          <h1 className="text-cetegory-heading ps-1 md:text-[40px]  text-center md:mt-10">
            Contack Us{" "}
          </h1>
          <p className="text-[16px] text-[#00000070] text-center pb-5">
            যে কোন সমস্যার হলে জানাতে পারেন ।
          </p>{" "}
          <div className="w-[120px] mx-auto h-[5px] bg-[#573BA2]"></div>
        </div>
        {/* ------- message ---- */}
        <div class="md:max-w-screen-xl  mx-auto md:p-5">
          <div class="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-12 border mt-5">
            <div class="bg-[#563A9F] md:h-[65vh] rounded-lg md:col-span-4 p-1 text-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9861.890915948505!2d90.39878777633939!3d24.74092141469946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f0b64eb63f3%3A0xb114002e267aea46!2z4KaV4Kau4KeN4Kaq4Ka_4KaJ4Kaf4Ka-4KawIOCmoeCmv-CmquCmvuCmsOCnjeCmn-CmruCnh-CmqOCnjeCmnw!5e0!3m2!1sbn!2sbd!4v1706865109672!5m2!1sbn!2sbd"
                className="w-[100%] h-[100%]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <form
              action="https://getform.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a"
              method="POST"
              class="md:col-span-8 px-10 pt-2"
            >
              <div class="flex flex-wrap -mx-3 ">
                <div class="w-full md:w-1/2 md:px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Rasel Khan"
                  />
                </div>
                <div class="w-full md:w-1/2 md:px-3 mt-3 md:mt-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Location
                  </label>
                  <input
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Dhaka,Bangladesh"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:px-3 mt-5">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="xxxx@gamil.com"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Write you problem..."
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div class="flex justify-center md:justify-between w-full px-3">
                  <div class="hidden md:flex md:items-center">
                    <label class="block text-gray-500 font-bold">
                      <input class="mr-2 leading-tight" type="checkbox" />
                      <span class="text-sm">
                        I agree with all rules and privacy.
                      </span>
                    </label>
                  </div>
                  <button
                    class="shadow bg-[#482e89] hover:bg-[#563A9F] focus:shadow-outline focus:outline-none text-white font-bold py-3 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
