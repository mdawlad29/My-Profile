"use client";
import React from "react";

const Contact = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="contact"
        className="lg:py-20 md:py-16 py-10"
      >
        <div className="lg:mb-10 md:mb-7 mb-4">
          <h1 className="text-accent text-center md:text-4xl text-2xl italic font-semibold">
            Contact Me
          </h1>
          <div className="md:w-24 w-16 h-1 mx-auto bg-accent md:mt-2 mt-1" />
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-6 gap-3">
          {/*----- Left -----*/}
          <div className="lg:col-span-3 p-4 shadow-lg rounded-lg border border-primary my-4">
            <form className="space-y-2">
              <h2 className="md:text-2xl text-xl text-primary font-bold">
                Send Message
              </h2>
              <p>I am answer your all request</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Please type your name"
                  className="border border-accent px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  className="border border-accent px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="phone"
                  name=""
                  id=""
                  placeholder="+880 1725385909"
                  className="border border-accent px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="please type your subject"
                  className="border border-accent px-3 py-2 rounded-md focus:outline-none focus:border-primary"
                />
              </div>
              <textarea
                rows={5}
                name=""
                id=""
                placeholder="Write your message here..."
                className="border border-accent my-2 px-3 py-2 rounded-md focus:outline-none focus:border-primary w-full"
              />
              <button
                onClick={onSubmit}
                style={{ letterSpacing: ".2em" }}
                type="submit"
                className="w-full py-1 rounded-full text-lg bg-primary text-neutral hover:bg-accent shadow-xl hover:shadow-2xl duration-500 ease-in-out uppercase"
              >
                submit
              </button>
            </form>
          </div>
          {/*----- Right -----*/}
          <div className="lg:col-span-2 p-4 shadow-lg rounded-lg border border-primary"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
