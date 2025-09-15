"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { FAQ } from "./Faq";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-1 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
      >
        Get in
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="text-lg leading-relaxed text-gray-400 md:text-xl mb-20"
      >
        Have a project in mind or just want to say hello? I&apos;d love to hear
        from you.
      </motion.p>

      <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="order-2 lg:order-1 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1"
        >
          <div
            style={{
              background: "rgb(30, 41, 59)",
            }}
            className="h-full rounded-3xl p-6 md:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Send Me a Message
            </h2>

            <form action="">
              <div className="mb-6">
                <label htmlFor="" className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-700 bg-slate-800/50 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="" className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-700 bg-slate-800/50 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="" className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full rounded-xl border border-gray-700 bg-slate-800/50 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="" className="mb-2 block text-sm text-gray-300">
                  Budget Range (Optional)
                </label>

                <select className="w-full rounded-xl border border-gray-700 bg-slate-800/50 px-4 py-3 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option value="">Select an option</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-500">$200 - $500</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="1000+">$1000+</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="" className="mb-2 block text-sm text-gray-300">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full resize-none rounded-xl border border-gray-700 bg-slate-800/50 px-4 py-1.5 text-white transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-70 hover:scale-105 duration-300 ease-in-out"
              >
                Send Message <FiSend className="text-2xl -mt-1" />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            Let&apos;s Work Together
          </h2>

          <p className="mb-6 text-gray-400">
            I&apos;m always happy to connect! Whether you have a new project in
            mind, a creative idea to explore, or an opportunity you&apos;d like
            to collaborate on, feel free to reach out through any of the
            channels below.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[...Array(4)]?.map((_, idx: number) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-gray-700/50 p-4"
                style={{
                  background: "rgb(30, 41, 59)",
                }}
              >
                <div
                  className={`h-10 w-10 rounded-lg bg-gradient-to-br ${
                    idx === 0
                      ? "from-blue-500 to-cyan-400"
                      : idx === 1
                      ? "from-purple-500 to-indigo-500 "
                      : idx === 2
                      ? "from-pink-500 to-rose-400"
                      : "from-amber-500 to-yellow-400"
                  } mb-3 flex transform items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                >
                  <div className="text-white">
                    {idx === 0 ? (
                      <MdEmail className="text-2xl" />
                    ) : idx === 1 ? (
                      <FaPhone className="rotate-90 text-2xl" />
                    ) : idx === 2 ? (
                      <IoLocationSharp className="text-2xl" />
                    ) : (
                      <CiCalendar className="text-2xl" />
                    )}
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-medium text-white">
                  {idx === 0
                    ? "Email"
                    : idx === 1
                    ? "Phone"
                    : idx === 2
                    ? "Location"
                    : "Availability"}
                </h3>

                <Link
                  href="mailto:mdawladbdinfo@gmail.com"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  {idx === 0
                    ? "mdawladbdinfo@gmail.com"
                    : idx === 1
                    ? "+880 1518456520"
                    : idx === 2
                    ? "Dhaka, Bangladesh"
                    : "Mon-Fri, 9AM-5PM EST"}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 w-full overflow-hidden rounded-xl border border-gray-700/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.126620892851!2d90.39027851543726!3d23.750903394623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85d9aa74bbf%3A0x5c8b23456b6a8c1e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1694482376462!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-xl border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      <FAQ />
    </section>
  );
};

export default ContactSection;
