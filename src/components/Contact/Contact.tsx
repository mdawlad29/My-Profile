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
        <h1 className="text-center md:text-4xl text-2xl italic font-semibold md:mb-12 mb-4">
          Contact Me
        </h1>
      </div>
    </>
  );
};

export default Contact;
