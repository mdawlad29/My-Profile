"use client";
import React from "react";

const Services = () => {
  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
        id="service"
        className="lg:pt-20 md:pt-16 pt-10"
      >
        <h1 className="text-center md:text-4xl text-2xl italic font-semibold md:mb-12 mb-4">
          My Service
        </h1>
      </div>
    </>
  );
};

export default Services;
