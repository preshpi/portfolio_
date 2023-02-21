import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import swal from "sweetalert";

const Contact = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const form = useRef();

   const handleSubmit = (e) => {
     e.preventDefault();
     if (name.length === 0 || email.length === 0 || message.length === 0) {
     swal("Please complete filling the form", "error");

     } else {
      swal("Successful!", "I'll get back to you!", "success");
       emailjs
         .sendForm(
           "service_aakyhrk",
           "template_scsfe35",
           form.current,
           "rBHPqsGP1vYUCEoP9"
         )
         .then(
           (result) => {
             console.log(result.text);
             console.log("sent");
           },
           (error) => {
             console.log(error.text);
           }
         );
     }
     setName("");
     setEmail("");
     setMessage("");
   };

    const container = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transistion: { delay: 1.5, duration: 1.5 },
      },
      exit: {
        opacity: 0,
        transistion: { ease: "easeInOut" },
      },
    };


  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
        <div className="items-center justify-center place-items-center grid gap-8">
          <input
            type="text"
            name="user_name"
            value={name}
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          />

          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Enter your mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          />
          <textarea
            name="message"
            id="message"
            value={message}
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-4 outline-none  w-[500px] h-[200px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          ></textarea>

          <button
            className="items-center justify-center place-items-center grid"
            type="submit"
          >
            <span className="relative w-[500px] h-[60px] group  px-6 py-3 font-bold">
              <span className="absolute inset-0 w-[500px] h-[60px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="absolute inset-0 w-[500px] h-[60px] bg-darkgrey dark:bg-white"></span>
              <span className="text-resume dark:text-darkgrey text-[16px] text-center font-[700] leading-[24px] relative group-hover:opacity-85">
                CONNECT
              </span>
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
