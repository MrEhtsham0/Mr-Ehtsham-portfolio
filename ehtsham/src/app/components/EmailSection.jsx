"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12">
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1f29] via-[#131418] to-[#0a0b0f] opacity-50 blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 grid md:grid-cols-2 gap-10"
      >
        {/* Left Section - Intro & Social Links */}
        <div>
          <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
            I&apos;m currently looking for new opportunities. My inbox is always open!
            Whether you have a question or just want to say hi, I&apos;ll try my best to respond!
          </p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="https://github.com/MrEhtsham0" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8 hover:scale-110 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/ehtsham-khaliq-3a5091309/" target="_blank">
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8 hover:scale-110 transition duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="bg-[#18191E] p-6 rounded-lg shadow-lg border border-[#33353F]" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#22232A] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="jacob@google.com"
                />
              </div>

              {/* Subject Input */}
              <div className="mb-6">
                <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#22232A] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Just saying hi"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#22232A] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-blue-500"
                  placeholder="Let's talk about..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 hover:to-pink-600 text-white font-medium py-3 px-5 rounded-lg w-full transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
