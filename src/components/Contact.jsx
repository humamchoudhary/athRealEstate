import Image from "next/image";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { toast } from "react-toastify";
function Contact({ fileno }) {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  async function SubmitEmail(e) {
    e.preventDefault();
    try {
     
      const resp = await emailjs.send(
        "service_ab115xi",
        "template_oa9z9kc",
        {
          from_email: email,
          message: `Message ${message}`,
          fileno: `file No: ${fileno}`,
        },
        "3m5zvAEoGBZRSR7sJ"
      );
    
      toast("We have recived your request. We will contact you soon", {
        //   hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setEmail("");
      setMessage("");
    } catch (error) {
 
      toast("We couldnot process the request please try again!", {
        //   hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  }
  return (
    <div>
      <form
        className={`items-center grid justify-center  gap-5 grid-cols-1  } border  border-white rounded-md px-4 py-2  lg:min-w-[300px] min-w-full `}
        onSubmit={SubmitEmail}
      >
        <input
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          placeholder="Email"
          type="email"
          className=" bg-transparent ring-0 outline-none text-white font-medium text-lg col-span-2 "
          required
        />
        <input
          value={message}
          onChange={({ target }) => {
            setMessage(target.value);
          }}
          placeholder="Message"
          type="text"
          className=" bg-transparent ring-0 outline-none text-white font-medium text-lg col-span-2 "
          required
        />
        <button
          type="submit"
          className="text-black mx-auto bg-white px-4 py-2 rounded-lg flex w-min flex-row items-center gap-3 border border-black duration-300  hover:invert"
        >
          Submit
          <div className="w-8 h-8 relative">
            <Image
              src="/submit.png"
              alt="submit"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Contact;
