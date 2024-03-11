import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <p className="lg:text-[160px] text-[100px] font-extrabold dark:text-resume">
        404
      </p>
      <p className="dark:text-resume text-[16px]">
        Awwn, it looks like you're lost 🥹
      </p>{" "}
      <Link to="/">
        <button className="dark:text-resume text-[16px] underline mt-3 hover:opacity-75 transistion-color duration-300">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
