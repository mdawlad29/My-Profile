"use client";
import React from "react";

const Contact = () => {
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
      </div>
    </>
  );
};

export default Contact;
