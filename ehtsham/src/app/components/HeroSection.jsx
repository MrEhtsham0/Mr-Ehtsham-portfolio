"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1000,
                "Python Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-400"
            />
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mt-4">
            Passionate AI Engineer with expertise in ML, Deep Learning, and Backend Development.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold transition duration-300 hover:opacity-90"
            >
              Hire Me
            </Link>
            <a
              href="/cv/Ehtsham.pdf"
              download="Ehtsham.pdf"
              className="px-1 py-1 text-lg rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold transition duration-300 hover:opacity-90"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-center mt-6 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#181818]">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
