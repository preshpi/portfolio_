import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const error = () => toast.error("Error occured!");
  const success = () => toast.success("Successfully sent!");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      error();
    } else {
      success();
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-[69px]">
      <span className="text-primary dark:text-gray text-[24px] leading-[30px] font-[700] w-[350px]">
        Want to work with <span>me? let’s </span>{" "}
        <span className="text-secondary dark:text-white">Connect</span>
      </span>

      <p className="text-[14px] leading-[24px] text-primary dark:text-white w-[350px] mt-[16px]">
        I am open to{" "}
        <span className="text-secondary dark:text-gray font-bold">remote</span>{" "}
        and{" "}
        <span className="text-secondary dark:text-gray font-bold">
          onsite full-time,
        </span>{" "}
        part-time, and contract frontend web development{" "}
        <span className="text-secondary dark:text-gray font-bold">jobs.</span>
      </p>

      <form className="space-y-6 mt-[34px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
        />
        <input
          type="email"
          placeholder="Enter your mail"
          onChange={(e) => setEmail(e.target.value)}
          className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="border-[#2D2929] dark:border-white border-[3px] p-4 outline-none  w-[320px]  text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
        ></textarea>

        <button className="mt-[52px]" type="submit">
          <span className="relative w-[320px] h-[80px] group  px-6 py-3 font-bold">
            <span className="absolute inset-0 w-[320px] h-[80px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-[320px] h-[80px] bg-darkgrey dark:bg-white"></span>
            <span className="text-resume dark:text-darkgrey text-[16px] text-center font-[700] leading-[24px] relative group-hover:opacity-85">
              CONNECT
            </span>
          </span>
        </button>
        <Toaster />
      </form>
    </div>
  );
}

export default MobileContact;
