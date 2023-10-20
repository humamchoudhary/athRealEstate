import Image from "next/image";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { toast } from "react-toastify";
function Contact({ fileno }) {
  const [email, setEmail] = useState();
  async function SubmitEmail(e) {
    e.preventDefault();
    try {
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: email,
      //     fileno: fileno,
      //   }),
      // });
      const resp = await emailjs.send(
        "service_ab115xi",
        "template_oa9z9kc",
        {
          from_email: email,
          fileno: fileno && fileno,
        },
        "3m5zvAEoGBZRSR7sJ"
      );
      console.log(resp);
      toast("We have recived your request. We will contact you soon", {
        //   hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setEmail("");
    } catch (error) {
      console.log(error);
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
        className=" items-center flex  border w-min border-white rounded-md px-4 py-2"
        onSubmit={SubmitEmail}
      >
        <input
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          placeholder="Email"
          type="email"
          className=" bg-transparent ring-0 outline-none text-white font-medium text-lg lg:w-72 w-32"
          required
        />
        <button
          type="submit"
          className="text-black bg-white px-4 py-2 rounded-lg flex flex-row items-center gap-3 border border-black duration-300  hover:invert"
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
